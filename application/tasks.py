from  jinja2 import Template
from application.workers import celery
from .config import myTimeZone
import datetime
import smtplib
from celery.schedules import crontab
from flask_sse import sse
import requests

@celery.on_after_finalize.connect
def setup_periodic_tasks(sender, **kwargs):
    sender.add_periodic_task(crontab(hour=5, minute=00 , day_of_month=1), just_say_hello.s(), name = '1st of every month at 5:00AM')
    sender.add_periodic_task(crontab(hour=17, minute=000), check_revised_reminder.s(), name = 'Daily reminder/check job at 5:00PM')

@celery.task()
def just_say_hello():
    print("inside my first task")
    tbd = datetime.datetime.now(myTimeZone) + datetime.timedelta(seconds=2)
    while(not (datetime.datetime.now(myTimeZone) > tbd)):
        pass
    print('time up')
    return('hello ')

from dateutil import parser
@celery.task()
def check_revised_reminder():
    users=requests.get('http://localhost:8080/api/user')
    users=users.json()
    toMail=[]
    if users['status']=='success':
        users=users['data']
        for user in users:
            currentUserDecks=requests.get('http://localhost:8080/api/user/decks/'+str(user['user_id']), headers={"APItoken":user['api_key']})
            currentUserDecks=currentUserDecks.json()['data']
            unrevised_decks=[]
            for cudeck in currentUserDecks:
                if cudeck['last_reviewed'] != 'None':
                    if ((datetime.datetime.now())-parser.parse(cudeck['last_reviewed'])) > datetime.timedelta(minutes=5):
                        unrevised_decks.append(cudeck['deck_name'])
                else:
                    unrevised_decks.append(cudeck['deck_name'])
            toMail.append({'username':user['username'], 'email':user['email'], 'decks':unrevised_decks})
    with open("./templates/reminder_mail.html") as fil:
        template=Template(fil.read())
    for tom in toMail:
        mail_body=template.render(data=tom)
        # template='Sample body for {} with {}'.format(tom['username'], tom['decks'])
        job = send_mail.delay(to_addr=tom['email'], subject='Daily reminder jobs Flash Card App', body=mail_body)
    return('hello ')

from email import encoders
from email.mime.base import MIMEBase
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

@celery.task()
def send_mail(to_addr, subject=None, body='Default mail body', attachments="test2.jpg"):
    message = MIMEMultipart("alternative")
    message['Subject']=subject
    filen = attachments
    message['From']="pilabs.test@yahoo.com"
    message['To']=to_addr  
    part=MIMEText(body, "html")
    message.attach(part)
    with open("./attachments/"+filen, 'rb') as attachment:
        part = MIMEBase("application", "octet-stream")
        part.set_payload(attachment.read())
    encoders.encode_base64(part)
    part.add_header(
        "Content-Disposition",
        "attachment", filename=filen
    )
    message.attach(part)

    try:
        smtpObj = smtplib.SMTP('smtp.mail.yahoo.com', 587)
        smtpObj.starttls()
        smtpObj.login('pilabs.test@yahoo.com', 'eutirmysfwbkpkix')
        smtpObj.send_message(message)  
        smtpObj.quit()       
        print("Successfully sent email")
    except:
        print("Error: unable to send email")
    return('Done sending mail ')

@celery.task()
def export_deck(deck_id):
    print("inside export task")
    print(deck_id)

    # export here


    sse.publish({"status":"success","message":"done export"}, type='export-tasks')
    return('done exporting')
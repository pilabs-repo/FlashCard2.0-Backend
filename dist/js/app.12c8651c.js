(function(){var t={480:function(t,e,s){"use strict";var a=s(144),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("Main")],1)},i=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"mainpage"}},[s("router-view")],1)},r=[],d=s(604),l=s.n(d),c=l(),u=s(963),m=(0,u.Z)(c,o,r,!1,null,null,null),p=m.exports,h={name:"App",components:{Main:p}},b=h,v=(0,u.Z)(b,n,i,!1,null,null,null),f=v.exports,g=s(345),_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home-page"},[t._m(0),s("Signup",{attrs:{id:"signupModal"}}),s("Login",{attrs:{id:"loginModal"}}),s("About")],1)},C=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"nav nav-pills justify-content-end"},[s("li",{staticClass:"nav-item"},[s("button",{staticClass:"btn btn-primary",attrs:{id:"loginbtn",type:"button","data-bs-toggle":"modal","data-bs-target":"#loginModal"}},[t._v("Login")])]),s("li",{staticClass:"nav-item"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-bs-toggle":"modal","data-bs-target":"#signupModal"}},[t._v("Signup")])])])}],k=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},y=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("h1",[t._v(" Flash Card Application ")])])}],w={},S=(0,u.Z)(w,k,y,!1,null,null,null),E=S.exports,$=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"modal fade",attrs:{id:t.id,tabindex:"-1","aria-labelledby":"signupModal","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog"},[s("div",{staticClass:"modal-content"},[t._m(0),s("div",{staticClass:"modal-body"},[s("div",{staticClass:"signup"},[s("h1",[t._v("Sign Up")]),s("form",{class:{"was-validated":t.error},on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[s("div",{staticClass:"form-floating mb-3 mt-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Username",name:"username",required:""},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),s("label",{attrs:{for:"username"}},[t._v("Username")])]),s("div",{staticClass:"form-floating mb-3 mt-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Email ID",name:"email",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),s("label",{attrs:{for:"email"}},[t._v("Email ID")])]),s("div",{staticClass:"form-floating mb-3 mt-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{id:"pwd1",type:"password",placeholder:"Password",name:"password",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),s("label",{attrs:{for:"password"}},[t._v("Password")])]),s("div",{staticClass:"form-floating mb-3 mt-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.ndpassword,expression:"ndpassword"}],staticClass:"form-control",attrs:{id:"pwd2",type:"password",placeholder:"Reenter Password",name:"password2",required:""},domProps:{value:t.ndpassword},on:{input:function(e){e.target.composing||(t.ndpassword=e.target.value)}}}),s("label",{attrs:{for:"password2"}},[t._v("Re-enter password")])]),s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Sign Up")])])])]),t._m(1)])])])])},x=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-header mh"},[s("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}}),s("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary",attrs:{id:"close-signup-modal",type:"button","data-bs-dismiss":"modal"}},[t._v(" Close ")])])}],I={name:"Signup",props:["id"],data(){return{username:"",email:"",password:"",ndpassword:"",error:!1}},methods:{validateForm(){return!0},async submitForm(){if(this.validateForm){const t=fetch("http://10.1.1.42:8080/api/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:this.username,password:this.password,email:this.email})});t.then((t=>t.json())).then((t=>{"success"==t["status"]?(this.error=!1,console.log("created account"),document.getElementById("close-signup-modal").click(),sessionStorage.setItem("access token",t["access token"]),sessionStorage.setItem("uid",t["user_id"]),sessionStorage.setItem("un",t["username"]),this.$router.push({path:"/dashboard"})):"error"==t["status"]&&(this.username="",this.password="",this.ndpassword="",this.email="",this.error=!0,console.log(t["message"]))}))}else console.log("error")}}},P=I,D=(0,u.Z)(P,$,x,!1,null,"4bf31224",null),j=D.exports,T=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"modal fade",attrs:{id:t.id,tabindex:"-1","aria-labelledby":"loginModal","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog"},[s("div",{staticClass:"modal-content"},[t._m(0),s("div",{staticClass:"modal-body"},[s("div",{staticClass:"login"},[s("h1",[t._v("Log In")]),s("form",{class:{"was-validated":t.error},on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[s("div",{staticClass:"form-floating mb-3 mt-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Username",name:"username",required:""},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),s("label",{attrs:{for:"username"}},[t._v("Username")])]),s("div",{staticClass:"form-floating mb-3 mt-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{id:"pwd",type:"password",placeholder:"Password",name:"password",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),s("label",{attrs:{for:"password"}},[t._v("Password")])]),t.error?s("div",{staticClass:"alert alert-warning"},[t._v(" Incorrect Username or Password entered ")]):t._e(),s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Submit")])])])]),t._m(1)])])])])},O=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-header mh"},[s("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}}),s("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary",attrs:{id:"close-login-modal",type:"button","data-bs-dismiss":"modal"}},[t._v(" Close ")])])}],N={name:"Login",props:["id"],data(){return{username:"",password:"",error:!1}},methods:{async submitForm(){const t=fetch("http://10.1.1.42:8080/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:this.username,password:this.password})});t.then((t=>t.json())).then((t=>{"success"==t["status"]?(this.error=!1,document.getElementById("close-login-modal").click(),sessionStorage.setItem("access token",t["access token"]),sessionStorage.setItem("un",t["username"]),sessionStorage.setItem("uid",t["user_id"]),this.$router.push({path:"/dashboard"})):"error"==t["status"]&&(this.username="",this.password="",this.error=!0)}))}}},A=N,M=(0,u.Z)(A,T,O,!1,null,"0ebe342e",null),L=M.exports,Z={name:"Home",components:{Signup:j,Login:L,About:E}},F=Z,q=(0,u.Z)(F,_,C,!1,null,null,null),H=q.exports,U=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"dashboard"},[s("ul",{staticClass:"nav nav-pills"},[s("li",{staticClass:"nav-item"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:t.goHome}},[t._v(" Home ")]),s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.logout}},[t._v(" Logout ")])])]),s("div",{staticClass:"grid-container"},[s("div",{staticClass:"grid-child zero"}),t._m(0),s("div",{staticClass:"grid-child two"},[s("h2",[t._v("User : "+t._s(t.username))])])]),s("table",{staticClass:"table table-bordered table-hover",attrs:{id:"dashboardtable"}},[t._m(1),s("tbody",t._l(t.decks,(function(e,a){return s("tr",{key:e.deck_id},[s("td",{on:{click:function(s){return t.openDeck(e["deck_id"])}}},[t._v(t._s(a+1))]),s("td",{on:{click:function(s){return t.openDeck(e["deck_id"])}}},[t._v(t._s(e["deck_name"]))]),s("td",{on:{click:function(s){return t.openDeck(e["deck_id"])}}},[t._v(t._s(e["total_score"]))]),s("td",{on:{click:function(s){return t.openDeck(e["deck_id"])}}},[t._v(t._s(e["cards"].length))]),s("td",{on:{click:function(s){return t.openDeck(e["deck_id"])}}},[t._v(" "+t._s(e["last_reviewed"])+" ")]),s("td",[s("button",{staticClass:"btn btn-labeled btn-default",attrs:{type:"button"},on:{click:function(s){return s.stopPropagation(),t.reviewdeck(e["deck_id"])}}},[t._m(2,!0)])]),s("td",[s("button",{staticClass:"btn btn-labeled btn-default",attrs:{type:"button","data-bs-toggle":"modal","data-bs-target":"#confirmdelete"},on:{click:function(s){return s.stopPropagation(),t.deletedeckadd(e["deck_id"])}}},[t._m(3,!0)])]),s("td",[s("button",{staticClass:"btn btn-labeled btn-default",attrs:{type:"button"},on:{click:function(s){return s.stopPropagation(),t.exportdeck(e["deck_id"])}}},[t._m(4,!0)])])])})),0)]),s("confirm-delete",{attrs:{id:"confirmdelete"}}),t._m(5),s("add-deck",{attrs:{id:"adddeckmodal"}}),s("import-deck",{attrs:{id:"importdeckmodal"}})],1)},J=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"grid-child one"},[s("h1",[t._v("Dashboard")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",{attrs:{id:"headerrow"}},[s("th",[t._v("Sno")]),s("th",[t._v("Deck name")]),s("th",[t._v("Score")]),s("th",[t._v("No. of Cards")]),s("th",[t._v("Last Reviewed")]),s("th",[t._v("Review")]),s("th",[t._v("Delete")]),s("th",[t._v("Export")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"btn-label"},[s("i",{staticClass:"bi bi-eye"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"btn-label"},[s("i",{staticClass:"bi bi-trash"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"btn-label"},[s("i",{staticClass:"bi bi-download"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"grid-container bottom-ctnr"},[s("div",{staticClass:"grid-child"}),s("div",{staticClass:"grid-child"},[s("div",[s("button",{staticClass:"btn btn-labeled btn-primary plusbtn",attrs:{type:"button","data-bs-toggle":"modal","data-bs-target":"#adddeckmodal"}},[s("span",{staticClass:"btn-label"},[s("i",{staticClass:"bi bi-plus"})])])])]),s("div",{staticClass:"grid-child two"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-bs-toggle":"modal","data-bs-target":"#importdeckmodal"}},[t._v(" Import ")])])])}],B=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"modal fade",attrs:{id:t.id,tabindex:"-1","aria-labelledby":"loginModal","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog"},[s("div",{staticClass:"modal-content"},[t._m(0),s("div",{staticClass:"modal-body"},[s("h1",[t._v("Confirm Delete?")]),s("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-bs-dismiss":"modal"},on:{click:t.deleted}},[t._v(" Confirm ")])]),t._m(1)])])])])},G=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-header mh"},[s("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}}),s("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary",attrs:{id:"close-login-modal",type:"button","data-bs-dismiss":"modal"}},[t._v(" Close ")])])}],R={name:"Login",props:["id"],methods:{deleted(){this.$parent.deletedeck(sessionStorage.getItem("did"))}}},Y=R,V=(0,u.Z)(Y,B,G,!1,null,"aac2a380",null),z=V.exports,K=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"modal fade",attrs:{id:t.id,tabindex:"-1","aria-labelledby":"adddeckmodal","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog"},[s("div",{staticClass:"modal-content"},[t._m(0),s("div",{staticClass:"modal-body"},[s("div",{staticClass:"login"},[s("h1",[t._v("Add deck")]),s("form",{on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[s("div",{staticClass:"form-floating mb-3 mt-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.dn,expression:"dn"}],staticClass:"form-control",attrs:{type:"text",placeholder:"New deck name",name:"deckname",required:""},domProps:{value:t.dn},on:{input:function(e){e.target.composing||(t.dn=e.target.value)}}}),s("label",{attrs:{for:"deckname"}},[t._v("Deck Name")])]),s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Submit")])])])]),t._m(1)])])])])},Q=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-header mh"},[s("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}}),s("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary",attrs:{id:"close-adddeck-modal",type:"button","data-bs-dismiss":"modal"}},[t._v(" Close ")])])}],W={name:"addDeck",props:["id"],data(){return{deckname:"",dn:""}},methods:{async submitForm(){this.deckname=this.dn,this.dn="";const t=fetch("http://10.1.1.42:8080/api/decks?user_id="+sessionStorage.getItem("uid").toString(),{method:"POST",headers:{"Content-Type":"application/json",APItoken:sessionStorage.getItem("access token")},body:JSON.stringify({deck_name:this.deckname})});t.then((t=>t.json())).then((t=>{"success"==t["status"]?(document.getElementById("close-adddeck-modal").click(),this.$parent.updatedeck()):"error"==t["status"]&&(this.username="",this.password="",this.error=!0)}))}}},X=W,tt=(0,u.Z)(X,K,Q,!1,null,"dbd64f20",null),et=tt.exports,st=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"modal fade",attrs:{id:t.id,tabindex:"-1","aria-labelledby":"importdeckmodal","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog"},[s("div",{staticClass:"modal-content"},[t._m(0),s("div",{staticClass:"modal-body"},[s("div",{staticClass:"deckimport"},[s("h1",[t._v("Import deck")]),s("form",{on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[t._m(1),s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Submit")])]),t._m(2)])]),t._m(3)])])])])},at=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-header mh"},[s("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}}),s("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mb-3 mt-3"},[s("label",{staticClass:"form-label",attrs:{for:"deckcsv"}},[t._v("Select CSV file in specified format")]),s("input",{staticClass:"form-control",attrs:{type:"file",placeholder:"deck csv file",name:"deckcsv",id:"deckcsv",accept:".csv, .xlsx, .xls, .pptx, .txt",required:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{"margin-top":"25px"}},[t._v(" Click "),s("span",[s("button",{staticClass:"btn btn-light"},[t._v(" HERE ")])]),t._v(" for downloading format of CSV ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary",attrs:{id:"close-importdeck-modal",type:"button","data-bs-dismiss":"modal"}},[t._v(" Close ")])])}],nt={name:"importDeck",props:["id"],data(){return{}},methods:{async submitForm(){var t=document.querySelector('input[type="file"]');console.log("submitting csv"),document.getElementById("close-importdeck-modal").click();fetch("http://10.1.1.42:8080/api/decks/import?user_id="+sessionStorage.getItem("uid").toString(),{method:"POST",headers:{APItoken:sessionStorage.getItem("access token")},body:JSON.stringify({csv_file:t.files[0]})})}}},it=nt,ot=(0,u.Z)(it,st,at,!1,null,"1b06a49f",null),rt=ot.exports,dt={name:"Dashboard",components:{confirmDelete:z,addDeck:et,importDeck:rt},data(){return{decks:[],uid:null,username:null,source:null}},methods:{goHome(){this.$router.push({path:"/"})},deletedeckadd(t){sessionStorage.setItem("did",t)},logout(){sessionStorage.removeItem("access token"),sessionStorage.removeItem("uid"),this.$router.push({path:"/"})},openDeck(t){sessionStorage.setItem("did",t),this.$router.push({path:"/deckview"})},deletedeck(t){const e=fetch("http://10.1.1.42:8080/api/decks/"+t.toString()+"?user_id="+this.uid.toString(),{method:"DELETE",headers:{"Content-Type":"application/json",APItoken:sessionStorage.getItem("access token")}});e.then((t=>t.json())).then((t=>{this.updatedeck()}))},updatedeck(){const t=fetch("http://10.1.1.42:8080/api/user/decks/"+this.uid.toString(),{method:"GET",headers:{"Content-Type":"application/json",APItoken:sessionStorage.getItem("access token")}});this.decks=[],t.then((t=>t.json())).then((t=>{if("success"==t["status"])for(const e of t["data"])this.decks.push(e);else"error"==t["status"]&&this.$router.push({path:"/"})}))},exportdeck(t){const e=fetch("http://10.1.1.42:8080/api/decks/export/"+t.toString()+"?user_id="+this.uid.toString(),{method:"GET",headers:{"Content-Type":"application/json",APItoken:sessionStorage.getItem("access token")}});e.then((t=>t.json())).then((t=>{}))},reviewdeck(t){sessionStorage.setItem("did",t),this.$router.push({path:"/review"})}},mounted:function(){if(this.source=new EventSource("http://10.1.1.42:8080/stream"),this.source.addEventListener("export-tasks",(function(t){var e=JSON.parse(t.data);alert("Export "+e.status+"\nMessage : "+e.message)}),!1),this.source.addEventListener("error",(function(t){alert(JSON.parse(t.data))}),!1),this.uid=sessionStorage.getItem("uid"),this.username=sessionStorage.getItem("un"),this.uid){const t=fetch("http://10.1.1.42:8080/api/user/decks/"+this.uid.toString(),{method:"GET",headers:{"Content-Type":"application/json",APItoken:sessionStorage.getItem("access token")}});t.then((t=>t.json())).then((t=>{if("success"==t["status"])for(const e of t["data"])this.decks.push(e);else"error"==t["status"]&&this.$router.push({path:"/"})}))}else this.$router.push({path:"/"})}},lt=dt,ct=(0,u.Z)(lt,U,J,!1,null,"b05f8974",null),ut=ct.exports,mt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"deckview"},[s("ul",{staticClass:"nav nav-pills"},[s("li",{staticClass:"nav-item"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:t.goHome}},[t._v(" Home ")]),s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.logout}},[t._v(" Logout ")])])]),s("div",{staticClass:"grid-container"},[s("div",{staticClass:"grid-child one"},[s("h1",[s("button",{staticClass:"btn btn-labeled btn-default",attrs:{type:"button"},on:{click:t.goDashboard}},[t._m(0)])])]),s("div",{staticClass:"grid-child two"},[s("h1",[t._v("Deck : "+t._s(t.cardData["deck_name"]))])]),s("div",{staticClass:"grid-child zero"})]),s("table",{staticClass:"table table-bordered table-hover",attrs:{id:"deckviewtable"}},[t._m(1),s("tbody",t._l(t.cardData["cards"],(function(e,a){return s("tr",{key:e.card_id},[s("td",[t._v(t._s(a+1))]),s("td",[t._v(t._s(e["front"]))]),s("td",[t._v(t._s(e["back"]))]),s("td",[t._v(t._s(e["card_score"]))]),s("td",[s("button",{staticClass:"btn btn-labeled btn-default",attrs:{type:"button"},on:{click:function(s){return s.stopPropagation(),t.editcard(e["card_id"])}}},[t._m(2,!0)])]),s("td",[s("button",{staticClass:"btn btn-labeled btn-default",attrs:{type:"button"},on:{click:function(s){return s.stopPropagation(),t.deletecard(e["card_id"])}}},[t._m(3,!0)])])])})),0)]),t._m(4),s("add-card",{attrs:{id:"addcardmodal"}})],1)},pt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"btn-label bln"},[s("i",{staticClass:"bi bi-caret-left-square-fill"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",{attrs:{id:"headerrow"}},[s("th",[t._v("Sno")]),s("th",[t._v("Front")]),s("th",[t._v("Back")]),s("th",[t._v("Score")]),s("th",[t._v("Edit")]),s("th",[t._v("Delete")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"btn-label"},[s("i",{staticClass:"bi bi-pencil-square"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"btn-label"},[s("i",{staticClass:"bi bi-trash"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("button",{staticClass:"btn btn-labeled btn-primary plusbtn",attrs:{type:"button","data-bs-toggle":"modal","data-bs-target":"#addcardmodal"}},[s("span",{staticClass:"btn-label"},[s("i",{staticClass:"bi bi-plus"})])])])}],ht=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"modal fade",attrs:{id:t.id,tabindex:"-1","aria-labelledby":"addcardmodal","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog"},[s("div",{staticClass:"modal-content"},[t._m(0),s("div",{staticClass:"modal-body"},[s("div",{staticClass:"login"},[s("h1",[t._v("Add deck")]),s("form",{on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[s("div",{staticClass:"form-floating mb-3 mt-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.fn,expression:"fn"}],staticClass:"form-control",attrs:{type:"text",placeholder:"New card front value",name:"cardfront",required:""},domProps:{value:t.fn},on:{input:function(e){e.target.composing||(t.fn=e.target.value)}}}),s("label",{attrs:{for:"cardfront"}},[t._v("Front")])]),s("div",{staticClass:"form-floating mb-3 mt-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.bn,expression:"bn"}],staticClass:"form-control",attrs:{type:"text",placeholder:"New card front value",name:"cardback",required:""},domProps:{value:t.bn},on:{input:function(e){e.target.composing||(t.bn=e.target.value)}}}),s("label",{attrs:{for:"cardback"}},[t._v("Back")])]),s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Submit")])])])]),t._m(1)])])])])},bt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-header mh"},[s("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}}),s("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary",attrs:{id:"close-addcard-modal",type:"button","data-bs-dismiss":"modal"}},[t._v(" Close ")])])}],vt={name:"addCard",props:["id"],data(){return{front:"",back:"",fn:"",bn:""}},methods:{async submitForm(){this.front=this.fn,this.back=this.bn,this.fn="",this.bn="",console.log("submitting card");const t=fetch("http://10.1.1.42:8080/api/cards?user_id="+sessionStorage.getItem("uid").toString(),{method:"POST",headers:{"Content-Type":"application/json",APItoken:sessionStorage.getItem("access token")},body:JSON.stringify({front:this.front,back:this.back,deck_id:this.$parent.did})});t.then((t=>t.json())).then((t=>{"success"==t["status"]?(document.getElementById("close-addcard-modal").click(),this.$parent.updatedeck()):"error"==t["status"]&&(this.front="error",this.back=t["message"])}))}}},ft=vt,gt=(0,u.Z)(ft,ht,bt,!1,null,"7262bef3",null),_t=gt.exports,Ct={name:"DeckView",data(){return{did:null,uid:null,cardData:[]}},components:{addCard:_t},methods:{goHome(){this.$router.push({path:"/"})},logout(){sessionStorage.removeItem("access token"),sessionStorage.removeItem("uid"),this.$router.push({path:"/"})},goDashboard(){this.$router.push({path:"/dashboard"}),this.$forceUpdate()},editcard(t){console.log(t),console.log("editing")},deletecard(t){const e=fetch("http://10.1.1.42:8080/api/cards/"+t.toString()+"?user_id="+this.uid.toString(),{method:"DELETE",headers:{"Content-Type":"application/json",APItoken:sessionStorage.getItem("access token")}});e.then((t=>t.json())).then((t=>{this.updatedeck()}))},updatedeck(){const t=fetch("http://10.1.1.42:8080/api/decks/"+this.did.toString()+"?user_id="+this.uid.toString(),{method:"GET",headers:{"Content-Type":"application/json",APItoken:sessionStorage.getItem("access token")}});t.then((t=>t.json())).then((t=>{"success"==t["status"]?this.cardData=t["data"]:"error"==t["status"]&&this.$router.push({path:"/"})}))}},mounted:function(){this.uid=sessionStorage.getItem("uid"),this.did=sessionStorage.getItem("did");const t=fetch("http://10.1.1.42:8080/api/decks/"+this.did.toString()+"?user_id="+this.uid.toString(),{method:"GET",headers:{"Content-Type":"application/json",APItoken:sessionStorage.getItem("access token")}});t.then((t=>t.json())).then((t=>{"success"==t["status"]?this.cardData=t["data"]:"error"==t["status"]&&this.$router.push({path:"/"})}))}},kt=Ct,yt=(0,u.Z)(kt,mt,pt,!1,null,"4e43180e",null),wt=yt.exports,St=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"review"},[s("ul",{staticClass:"nav nav-pills"},[s("li",{staticClass:"nav-item"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:t.goHome}},[t._v(" Home ")]),s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.logout}},[t._v(" Logout ")])])]),t._m(0),s("div"),s("div"),s("card-view",{attrs:{card:t.currentCard},on:{answered:t.cardAnswer}})],1)},Et=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h1",[t._v("Review")])])}],$t=function(){var t=this,e=this,s=e.$createElement,a=e._self._c||s;return a("div",[a("div",{staticClass:"grid-container"},[a("div",{staticClass:"grid-child"}),a("div",{staticClass:"flip-card grid-child one",on:{click:e.flip}},[a("div",{staticClass:"flip-card-inner",style:{transform:e.ca}},[a("div",{staticClass:"flip-card-front"},[a("div",{attrs:{id:"cardtextdiv"}},[a("p",{attrs:{id:"cardtext"}},[e._v(e._s(e.card["front"]))])])]),a("div",{staticClass:"flip-card-back"},[a("div",{attrs:{id:"cardtextdiv"}},[a("p",{attrs:{id:"cardtext"}},[e._v(e._s(e.card["back"]))])])])])]),a("div",{staticClass:"grid-child"})]),a("button",{staticClass:"difficulty-btn btn btn-info",attrs:{type:"button"},on:{click:function(){t.$emit("answered","0")}}},[e._v(" Easy ")]),a("button",{staticClass:"difficulty-btn btn btn-warning",attrs:{type:"button"},on:{click:function(){t.$emit("answered","1")}}},[e._v(" Medium ")]),a("button",{staticClass:"difficulty-btn btn btn-danger",attrs:{type:"button"},on:{click:function(){t.$emit("answered","2")}}},[e._v(" Hard ")])])},xt=[],It={name:"cardview",props:["card"],data(){return{showback:!1,angle:"rotateY(0deg)"}},computed:{ca:function(){return this.angle}},watch:{card:function(){this.showback=!1,this.angle="rotateY(0deg)"}},methods:{flip(){"rotateY(0deg)"==this.angle?this.angle="rotateY(180deg)":this.angle="rotateY(0deg)"}}},Pt=It,Dt=(0,u.Z)(Pt,$t,xt,!1,null,"419468c0",null),jt=Dt.exports,Tt={name:"review",components:{cardView:jt},data(){return{deck:[{front:"",back:"",card_id:0}],did:null,cci:0}},methods:{goHome(){this.$router.push({path:"/"})},logout(){sessionStorage.removeItem("access token"),sessionStorage.removeItem("uid"),this.$router.push({path:"/"})},cardAnswer(t){const e=["10","5","1"],s=fetch("http://10.1.1.42:8080/api/cards/"+this.ccid.toString()+"?user_id="+sessionStorage.getItem("uid").toString(),{method:"PUT",headers:{"Content-Type":"application/json",APItoken:sessionStorage.getItem("access token")},body:JSON.stringify({card_score:e[t],deck_id:this.did})});s.then((t=>t.json())).then((t=>{this.cci<this.deck.length-1?this.cci+=1:this.$router.push({path:"/dashboard"})}))}},computed:{currentCard:function(){return this.deck[this.cci]},ccid:function(){return this.currentCard["card_id"]}},mounted:function(){if(this.did=sessionStorage.getItem("did"),this.did){const t=fetch("http://10.1.1.42:8080/api/decks/cards/"+this.did.toString()+"?user_id="+sessionStorage.getItem("uid").toString(),{method:"GET",headers:{"Content-Type":"application/json",APItoken:sessionStorage.getItem("access token")}});t.then((t=>t.json())).then((t=>{"success"==t["status"]?(this.deck=t["data"],this.deck.sort((()=>Math.random()-.5)),0==this.deck.length&&(alert("No Cards in deck. Add cards before review"),this.$router.push({path:"/dashboard"}))):"error"==t["status"]&&this.$router.push({path:"/"})}))}else this.$router.push({path:"/"})}},Ot=Tt,Nt=(0,u.Z)(Ot,St,Et,!1,null,null,null),At=Nt.exports;a.Z.use(g.Z);const Mt=[{path:"/",name:"home",component:H},{path:"/dashboard",name:"dashboard",component:ut},{path:"/deckview",name:"deckview",component:wt},{path:"/review",name:"review",component:At}],Lt=new g.Z({mode:"history",base:"/",routes:Mt});var Zt=Lt;s(244);a.Z.config.productionTip=!1,new a.Z({router:Zt,render:t=>t(f)}).$mount("#app")},604:function(){}},e={};function s(a){var n=e[a];if(void 0!==n)return n.exports;var i=e[a]={exports:{}};return t[a](i,i.exports,s),i.exports}s.m=t,function(){var t=[];s.O=function(e,a,n,i){if(!a){var o=1/0;for(c=0;c<t.length;c++){a=t[c][0],n=t[c][1],i=t[c][2];for(var r=!0,d=0;d<a.length;d++)(!1&i||o>=i)&&Object.keys(s.O).every((function(t){return s.O[t](a[d])}))?a.splice(d--,1):(r=!1,i<o&&(o=i));if(r){t.splice(c--,1);var l=n();void 0!==l&&(e=l)}}return e}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[a,n,i]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var a in e)s.o(e,a)&&!s.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,a){var n,i,o=a[0],r=a[1],d=a[2],l=0;if(o.some((function(e){return 0!==t[e]}))){for(n in r)s.o(r,n)&&(s.m[n]=r[n]);if(d)var c=d(s)}for(e&&e(a);l<o.length;l++)i=o[l],s.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return s.O(c)},a=self["webpackChunkfrontend_vue"]=self["webpackChunkfrontend_vue"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=s.O(void 0,[998],(function(){return s(480)}));a=s.O(a)})();
//# sourceMappingURL=app.12c8651c.js.map
(this["webpackJsonpfirebase-react-auth"]=this["webpackJsonpfirebase-react-auth"]||[]).push([[0],{177:function(e,t,a){e.exports=a(195)},192:function(e,t,a){},194:function(e,t,a){},195:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(40),c=a.n(l),u=a(1),o=a.n(u),s=a(3),i=a(12),m=a(198),p=a(91),d=a(208),f=a(205),b=a(199),E=a(35),v=a(56),g=a(153),h=a(71),y=a(61),j=Object(g.a)({apiKey:"AIzaSyC_LRyR4l2MOk_hyhKCMe3lILBy3yp1fLc",authDomain:"task-manager-dev1.firebaseapp.com",projectId:"task-manager-dev1",storageBucket:"task-manager-dev1.appspot.com",messagingSenderId:"87486177086",appId:"1:87486177086:web:1dd6d9f34daecd4d87166f"}),O=Object(h.b)(j),w=Object(y.f)(j);function x(e){var t=Object(y.b)(w,e);return Object(y.e)(t)}function k(e){var t=Object(y.b)(w,e);return Object(y.a)(t,{taskName:"demo task",discription:"remove it "})}function S(e,t,a){var n=Object(y.d)(w,a,e);return Object(y.g)(n,t)}function C(e,t){var a=Object(y.d)(w,t.email,e);return Object(y.c)(a)}function N(e,t){var a=Object(y.b)(w,e);return Object(y.a)(a,t)}function L(){var e=Object(n.useRef)(),t=Object(n.useRef)(),a=Object(n.useRef)(),l=Object(n.useState)(""),c=Object(i.a)(l,2),u=c[0],g=c[1],h=Object(n.useState)(!1),y=Object(i.a)(h,2),j=y[0],O=y[1],w=Object(E.useHistory)();function x(){return(x=Object(s.a)(o.a.mark((function n(r){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r.preventDefault(),t.current.value===a.current.value){n.next=3;break}return n.abrupt("return",g("Passwords do not match"));case 3:try{g(""),O(!0),k(e.current.value),w.push("/")}catch(l){g("Failed to create an account")}O(!1);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh"}},r.a.createElement("div",{className:"w-100",style:{maxWidth:"400px"}},r.a.createElement(p.a,null,r.a.createElement(p.a.Body,null,r.a.createElement("h2",{className:"text-center mb-4"},"Sign Up"),u&&r.a.createElement(d.a,{variant:"danger"},u),r.a.createElement(f.a,{onSubmit:function(e){return x.apply(this,arguments)}},r.a.createElement(f.a.Group,{id:"email"},r.a.createElement(f.a.Label,null,"Email"),r.a.createElement(f.a.Control,{type:"email",ref:e,required:!0})),r.a.createElement(f.a.Group,{id:"password"},r.a.createElement(f.a.Label,null,"Password"),r.a.createElement(f.a.Control,{type:"password",ref:t,required:!0})),r.a.createElement(f.a.Group,{id:"password-confirm"},r.a.createElement(f.a.Label,null,"Password Confirmation"),r.a.createElement(f.a.Control,{type:"password",ref:a,required:!0})),r.a.createElement(b.a,{disabled:j,className:"w-100",type:"submit"},"Sign Up")))),r.a.createElement("div",{className:"w-100 text-center mt-2"},"Already have an account? ",r.a.createElement(v.b,{to:"/login"},"Log In")))))}var P=r.a.createContext();function U(){return Object(n.useContext)(P)}function D(e){var t=e.children,a=Object(n.useState)(),l=Object(i.a)(a,2),c=l[0],u=l[1],o=Object(n.useState)(!0),s=Object(i.a)(o,2),m=s[0],p=s[1];Object(n.useEffect)((function(){return O.onAuthStateChanged((function(e){u(e),p(!1)}))}),[]);var d={currentUser:c,login:function(e,t){return Object(h.d)(O,e,t)},signup:function(e,t){return Object(h.a)(O,e,t)},logout:function(){return Object(h.e)(O)},resetPassword:function(e){return Object(h.c)(O,e)},updateEmail_1:function(e){return Object(h.f)(O.currentUser,e)},updatePassword_1:function(e){return Object(h.g)(O.currentUser,e)}};return r.a.createElement(P.Provider,{value:d},!m&&t)}var R=a(161),F=a(159),T=Object(F.a)("colorScheme");function G(){var e=Object(R.useMediaQuery)({query:"(prefers-color-scheme: dark)"},void 0),t=T(),a=Object(i.a)(t,2),r=a[0],l=a[1],c=Object(n.useMemo)((function(){return void 0===r?!!e:r}),[r,e]);return Object(n.useEffect)((function(){c?document.body.classList.add("dark"):document.body.classList.remove("dark")}),[c]),{isDark:c,setIsDark:l}}function I(){var e=Object(n.useRef)(),t=Object(n.useRef)(),a=U().login,l=Object(n.useState)(""),c=Object(i.a)(l,2),u=c[0],g=c[1],h=Object(n.useState)(!1),y=Object(i.a)(h,2),j=y[0],O=y[1],w=Object(E.useHistory)();function x(){return(x=Object(s.a)(o.a.mark((function n(r){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),n.prev=1,g(""),O(!0),n.next=6,a(e.current.value,t.current.value);case 6:w.push("/"),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(1),g("Failed to log in"),console.log(n.t0);case 13:O(!1);case 14:case"end":return n.stop()}}),n,null,[[1,9]])})))).apply(this,arguments)}var k="",S="";return G().isDark?(k="white",S="grey"):(S="white",k="black"),r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh",color:k}},r.a.createElement("div",{className:"w-100",style:{maxWidth:"400px"}},r.a.createElement(p.a,{style:{backgroundColor:S,color:k}},r.a.createElement(p.a.Body,null,r.a.createElement("h2",{className:"text-center mb-4"},"Log In"),u&&r.a.createElement(d.a,{variant:"danger"},u),r.a.createElement(f.a,{onSubmit:function(e){return x.apply(this,arguments)}},r.a.createElement(f.a.Group,{id:"email"},r.a.createElement(f.a.Label,null,"Email"),r.a.createElement(f.a.Control,{type:"email",ref:e,required:!0})),r.a.createElement(f.a.Group,{id:"password"},r.a.createElement(f.a.Label,null,"Password"),r.a.createElement(f.a.Control,{type:"password",ref:t,required:!0})),r.a.createElement(b.a,{disabled:j,className:"w-100",type:"submit"},"Log In")),r.a.createElement("div",{className:"w-100 text-center mt-3"},r.a.createElement(v.b,{to:"/forgot-password"},"Forgot Password?")))),r.a.createElement("div",{className:"w-100 text-center mt-2"},"Need an account? ",r.a.createElement(v.b,{to:"/signup"},"Sign Up")))))}var B=a(173);function q(e){var t=e.component,a=Object(B.a)(e,["component"]),n=U().currentUser;return r.a.createElement(E.Route,Object.assign({},a,{render:function(e){return n?r.a.createElement(t,e):r.a.createElement(E.Redirect,{to:"/login"})}}))}function H(){var e=Object(n.useRef)(),t=U().resetPassword,a=Object(n.useState)(""),l=Object(i.a)(a,2),c=l[0],u=l[1],E=Object(n.useState)(""),g=Object(i.a)(E,2),h=g[0],y=g[1],j=Object(n.useState)(!1),O=Object(i.a)(j,2),w=O[0],x=O[1];function k(){return(k=Object(s.a)(o.a.mark((function a(n){return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),a.prev=1,y(""),u(""),x(!0),a.next=7,t(e.current.value);case 7:y("Check your inbox for further instructions"),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(1),u("Failed to reset password");case 13:x(!1);case 14:case"end":return a.stop()}}),a,null,[[1,10]])})))).apply(this,arguments)}return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh"}},r.a.createElement("div",{className:"w-100",style:{maxWidth:"400px"}},r.a.createElement(p.a,null,r.a.createElement(p.a.Body,null,r.a.createElement("h2",{className:"text-center mb-4"},"Password Reset"),c&&r.a.createElement(d.a,{variant:"danger"},c),h&&r.a.createElement(d.a,{variant:"success"},h),r.a.createElement(f.a,{onSubmit:function(e){return k.apply(this,arguments)}},r.a.createElement(f.a.Group,{id:"email"},r.a.createElement(f.a.Label,null,"Email"),r.a.createElement(f.a.Control,{type:"email",ref:e,required:!0})),r.a.createElement(b.a,{disabled:w,className:"w-100",type:"submit"},"Reset Password")),r.a.createElement("div",{className:"w-100 text-center mt-3"},r.a.createElement(v.b,{to:"/login"},"Login")))),r.a.createElement("div",{className:"w-100 text-center mt-2"},"Need an account? ",r.a.createElement(v.b,{to:"/signup"},"Sign Up")))))}function V(){var e=Object(n.useRef)(),t=Object(n.useRef)(),a=Object(n.useRef)(),l=U(),c=l.currentUser,u=l.updatePassword_1,o=l.updateEmail_1,s=Object(n.useState)(""),g=Object(i.a)(s,2),h=g[0],y=g[1],j=Object(n.useState)(!1),O=Object(i.a)(j,2),w=O[0],x=O[1],k=Object(E.useHistory)();var S="",C="";return G().isDark?(S="white",C="grey"):(C="white",S="black"),r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh"}},r.a.createElement("div",{className:"w-100",style:{maxWidth:"400px"}},r.a.createElement(p.a,{style:{backgroundColor:C,color:S}},r.a.createElement(p.a.Body,null,r.a.createElement("h2",{className:"text-center mb-4"},"Update Profile"),h&&r.a.createElement(d.a,{variant:"danger"},h),r.a.createElement(f.a,{onSubmit:function(n){if(n.preventDefault(),t.current.value!==a.current.value)return y("Passwords do not match");var r=[];x(!0),y(""),e.current.value!==c.email&&r.push(o(e.current.value)),t.current.value&&r.push(u(t.current.value)),Promise.all(r).then((function(){k.push("/")})).catch((function(){y("Failed to update account")})).finally((function(){x(!1)}))}},r.a.createElement(f.a.Group,{id:"email"},r.a.createElement(f.a.Label,null,"Email"),r.a.createElement(f.a.Control,{type:"email",ref:e,required:!0,defaultValue:c.email})),r.a.createElement(f.a.Group,{id:"password"},r.a.createElement(f.a.Label,null,"Password"),r.a.createElement(f.a.Control,{type:"password",ref:t,placeholder:"Leave blank to keep the same"})),r.a.createElement(f.a.Group,{id:"password-confirm"},r.a.createElement(f.a.Label,null,"Password Confirmation"),r.a.createElement(f.a.Control,{type:"password",ref:a,placeholder:"Leave blank to keep the same"})),r.a.createElement(b.a,{disabled:w,className:"w-100",type:"submit"},"Update")))),r.a.createElement("div",{className:"w-100 text-center mt-2"},r.a.createElement(v.b,{to:"/"},"Cancel")))))}var M=a(41),_=a(206),W=a(162);function A(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],l=t[1],c=U(),u=c.currentUser,p=c.logout,f=Object(W.useHistory)(),E="blue";function v(){return(v=Object(s.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(""),e.prev=1,e.next=4,p();case 4:f.push("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),l("Failed to log out");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return E=G().isDark?"grey":"lightblue",r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",null,r.a.createElement(_.a,{className:"bg-body-tertiary",style:{backgroundColor:E}},r.a.createElement(m.a,null,r.a.createElement(_.a.Brand,{href:"#home"},"Task manager"),r.a.createElement(_.a.Toggle,null),r.a.createElement(_.a.Collapse,{className:"justify-content-end"},r.a.createElement(_.a.Text,null,"Signed in as: ",r.a.createElement("a",{href:"#login"},u.email)),r.a.createElement(b.a,{className:"mx-2",variant:"danger",onClick:function(){return v.apply(this,arguments)}},"LogOut"),r.a.createElement(b.a,{variant:"primary",onClick:function(){return f.push("/update-profile")}},"Update"),a&&r.a.createElement(d.a,{variant:"danger"},a))))))}var z=a(200),J=a(158),K=a(203),Q=a(207),X=a(204);function Y(e){var t=e.data,a=e.currentUser,l=e.updater,c="",u="";G().isDark?(c="white",u="grey"):(u="white",c="black");var m=Object(n.useState)(!1),d=Object(i.a)(m,2),b=d[0],E=d[1];function v(){return(v=Object(s.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S(t.id,j,a.email);case 3:E(!1),l(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function g(){return(g=Object(s.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C(t.id,a);case 3:l(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}var h=Object(n.useState)({taskName:t.taskName,description:t.description,priority:t.priority,status:t.status}),y=Object(i.a)(h,2),j=y[0],O=y[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{style:{marginBottom:"20px",backgroundColor:u,color:c}},r.a.createElement(p.a.Body,null,r.a.createElement(z.a,null,r.a.createElement(J.a,{xs:"10",lg:"10"},r.a.createElement(p.a.Title,null,t.taskName)),r.a.createElement(J.a,{xs:"2",lg:"2"},"high"===t.priority&&r.a.createElement("i",{className:"fas fa-dot-circle",style:{color:"#ff0000"}}))),r.a.createElement(p.a.Text,null,t.description),r.a.createElement(p.a.Link,{onClick:function(){return function(){return g.apply(this,arguments)}()},href:"#"},"Delete"),r.a.createElement(p.a.Link,{onClick:function(){return E(!0)},href:"#"},"Modify"))),b&&r.a.createElement(K.a,{title:"Update Task",open:"true",onOk:function(){return v.apply(this,arguments)},onCancel:function(){return E(!1)},okText:"Update Task",cancelText:"cencel",style:{padding:"10px"}},r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,null,r.a.createElement(z.a,null,r.a.createElement(J.a,{xs:"12",lg:"6"},r.a.createElement(f.a.Group,{className:"mb-3"},r.a.createElement(f.a.Label,null,"Task"),r.a.createElement(f.a.Control,{type:"text",value:j.taskName,placeholder:"Enter Task ",onChange:function(e){return function(e){e.persist(),O((function(t){var a=Object(M.a)({},t);return a.taskName=e.target.value,a}))}(e)}}))),r.a.createElement(J.a,{xs:"12",lg:"3"},r.a.createElement(f.a.Label,null,"Priority"),r.a.createElement(Q.a,{wrap:!0},r.a.createElement(X.a,{defaultValue:"low",placeholder:"Select priority",style:{width:120},value:j.priority,onChange:function(e){O((function(t){var a=Object(M.a)({},t);return a.priority=e,a}))},options:[{value:"low",label:"low"},{value:"medium",label:"medium"},{value:"high",label:"high"}]}))),r.a.createElement(J.a,{xs:"12",lg:"3"},r.a.createElement(f.a.Label,null,"Status"),r.a.createElement(Q.a,{wrap:!0},r.a.createElement(X.a,{defaultValue:"pending",placeholder:"Select Status",value:j.status,style:{width:120},onChange:function(e){console.log(e),O((function(t){var a=Object(M.a)({},t);return a.status=e,a}))},options:[{value:"pending",label:"pending"},{value:"completed",label:"completed"}]})))),r.a.createElement(f.a.Group,{className:"mb-3"},r.a.createElement(f.a.Label,null,"Description"),r.a.createElement(f.a.Control,{as:"textarea",value:j.description,rows:3,onChange:function(e){return function(e){e.persist(),O((function(t){var a=Object(M.a)({},t);return a.description=e.target.value,a}))}(e)}}))))))}function Z(e){var t=e.currentUser,a=e.updater,l=Object(n.useState)({taskName:"",description:"",priority:"low",status:"pending"}),c=Object(i.a)(l,2),u=c[0],m=c[1];function p(){return(p=Object(s.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),console.log(u),e.prev=2,e.next=5,N(t.email,u);case 5:m((function(e){var t=e;return t.status="pending",t.priority="low",t.taskName="",t.description="",t})),a(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{onSubmit:function(e){return p.apply(this,arguments)}},r.a.createElement(z.a,null,r.a.createElement(J.a,{xs:"12",lg:"6"},r.a.createElement(f.a.Group,{className:"mb-3"},r.a.createElement(f.a.Label,null,"Task"),r.a.createElement(f.a.Control,{type:"text",value:u.taskName,placeholder:"Enter Task ",onChange:function(e){return function(e){e.persist(),m((function(t){var a=Object(M.a)({},t);return a.taskName=e.target.value,a}))}(e)}}))),r.a.createElement(J.a,{xs:"12",lg:"3"},r.a.createElement(f.a.Label,null,"Priority"),r.a.createElement(Q.a,{wrap:!0},r.a.createElement(X.a,{defaultValue:"low",placeholder:"Select priority",style:{width:120},value:u.priority,onChange:function(e){m((function(t){var a=Object(M.a)({},t);return a.priority=e,a}))},options:[{value:"low",label:"low"},{value:"medium",label:"medium"},{value:"high",label:"high"}]}))),r.a.createElement(J.a,{xs:"12",lg:"3"},r.a.createElement(f.a.Label,null,"Status"),r.a.createElement(Q.a,{wrap:!0},r.a.createElement(X.a,{defaultValue:"pending",placeholder:"Select Status",value:u.status,style:{width:120},onChange:function(e){m((function(t){var a=Object(M.a)({},t);return a.status=e,a}))},options:[{value:"pending",label:"pending"},{value:"completed",label:"completed"}]})))),r.a.createElement(f.a.Group,{className:"mb-3"},r.a.createElement(f.a.Label,null,"Description"),r.a.createElement(f.a.Control,{as:"textarea",value:u.description,rows:3,onChange:function(e){return function(e){e.persist(),m((function(t){var a=Object(M.a)({},t);return a.description=e.target.value,a}))}(e)}})),r.a.createElement(b.a,{type:"submit"},"Submit form")))}function $(e){var t=e.setSorting,a=e.sorting;function n(e,a){"priority"===a&&t((function(t){var a=Object(M.a)({},t);return a.priority=e,a})),"status"===a&&t((function(t){var a=Object(M.a)({},t);return a.status=e,a})),console.log(e,a)}return r.a.createElement(r.a.Fragment,null,r.a.createElement(J.a,{lg:"3"},r.a.createElement("span",null,"select Priority"),r.a.createElement(Q.a,{wrap:!0},r.a.createElement(X.a,{defaultValue:"defult",placeholder:"Select Priority",value:a.priority,style:{width:120},onChange:function(e){return n(e,"priority")},options:[{value:"default",label:"default"},{value:"low",label:"low"},{value:"medium",label:"medium"},{value:"high",label:"high"}]}))),r.a.createElement(J.a,{lg:"3"},r.a.createElement("span",null,"select Status"),r.a.createElement(Q.a,{wrap:!0},r.a.createElement(X.a,{defaultValue:"default",placeholder:"Select Status",value:a.status,style:{width:120},onChange:function(e){return n(e,"status")},options:[{value:"default",label:"default"},{value:"pending",label:"pending"},{value:"completed",label:"completed"}]}))))}function ee(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(1),u=Object(i.a)(c,2),p=u[0],d=u[1],f=U().currentUser,b=Object(n.useState)({priority:"default",status:"default"}),E=Object(i.a)(b,2),v=E[0],g=E[1],h="",y="";G().isDark?(h="white",y="grey"):(h="black",y="white"),Object(n.useEffect)((function(){function e(){return(e=Object(s.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x(f.email);case 3:t=e.sent,a=t.docs.map((function(e){return Object(M.a)(Object(M.a)({},e.data()),{},{id:e.id})})),console.log(a),l(a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("some error in data");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}console.log("innn"),function(){e.apply(this,arguments)}()}),[p]);var j=function(){d((function(e){return e+1}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(A,null),r.a.createElement(m.a,null,r.a.createElement(z.a,null,r.a.createElement(J.a,{xs:"12",lg:"8",style:{margin:"auto",boxShadow:"rgba(0, 0, 0, 0.1) 0px 4px 12px",marginBottom:"20px",marginTop:"10px",padding:"20px",backgroundColor:y}},r.a.createElement(Z,{currentUser:f,updater:j}))),r.a.createElement(z.a,{style:{color:h}},r.a.createElement($,{setSorting:g,sorting:v})),r.a.createElement(z.a,{mx:2},"default"===v.priority&&a.map((function(e){return r.a.createElement(J.a,{key:e.id,xs:"12",lg:"4"},r.a.createElement(Y,{data:e,currentUser:f,updater:j}))})),"default"!==v.priority&&a.filter((function(e){return e.priority===v.priority})).map((function(e){return r.a.createElement(J.a,{key:e.id,xs:"12",lg:"4"},r.a.createElement(Y,{data:e,currentUser:f,updater:j}))})))))}var te=a(169),ae=a.n(te),ne=(a(192),function(){var e=G(),t=e.isDark,a=e.setIsDark;return r.a.createElement(ae.a,{checked:t,onChange:function(e){var t=e.target;return a(t.checked)},icons:{checked:"\ud83c\udf19",unchecked:"\ud83d\udd06"},"aria-label":"Dark mode toggle"})});var re=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{position:"fixed",top:"15px",right:"40px",zIndex:"10"}},r.a.createElement(ne,null)),r.a.createElement(v.a,null,r.a.createElement(D,null,r.a.createElement(E.Switch,null,r.a.createElement(q,{exact:!0,path:"/",component:ee}),r.a.createElement(q,{path:"/update-profile",component:V}),r.a.createElement(E.Route,{path:"/signup",component:L}),r.a.createElement(E.Route,{path:"/login",component:I}),r.a.createElement(E.Route,{path:"/forgot-password",component:H})))))};a(193),a(194);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(re,null)),document.getElementById("root"))}},[[177,1,2]]]);
//# sourceMappingURL=main.fa188a73.chunk.js.map
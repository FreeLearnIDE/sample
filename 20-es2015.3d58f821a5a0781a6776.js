(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"/yGZ":function(l,n,u){"use strict";u.r(n);var o=u("8Y7J");class e{}var i=u("pMnS"),t=u("MKJQ"),b=u("sZkV"),a=u("s7LF"),r=u("X+KH");class s{constructor(l,n){this.userData=l,this.router=n,this.login={username:"",password:""},this.submitted=!1}onLogin(l){this.submitted=!0,l.valid&&(this.userData.login(this.login.username),this.router.navigateByUrl("/app/tabs/schedule"))}onSignup(){this.router.navigateByUrl("/signup")}}var d=u("iInd"),g=o.nb({encapsulation:0,styles:[[".login-logo[_ngcontent-%COMP%]{padding:20px 0;min-height:200px;text-align:center}.login-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:150px}.list[_ngcontent-%COMP%]{margin-bottom:0}"]],data:{}});function p(l){return o.Kb(0,[(l()(),o.pb(0,0,null,null,10,"ion-header",[],null,null,null,t.qb,t.s)),o.ob(1,49152,null,0,b.C,[o.h,o.k,o.x],null,null),(l()(),o.pb(2,0,null,0,8,"ion-toolbar",[],null,null,null,t.Vb,t.X)),o.ob(3,49152,null,0,b.Ab,[o.h,o.k,o.x],null,null),(l()(),o.pb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,t.cb,t.e)),o.ob(5,49152,null,0,b.m,[o.h,o.k,o.x],null,null),(l()(),o.pb(6,0,null,0,1,"ion-menu-button",[],null,null,null,t.Cb,t.F)),o.ob(7,49152,null,0,b.S,[o.h,o.k,o.x],null,null),(l()(),o.pb(8,0,null,0,2,"ion-title",[],null,null,null,t.Tb,t.V)),o.ob(9,49152,null,0,b.yb,[o.h,o.k,o.x],null,null),(l()(),o.Ib(-1,0,["Login"])),(l()(),o.pb(11,0,null,null,58,"ion-content",[],null,null,null,t.jb,t.l)),o.ob(12,49152,null,0,b.v,[o.h,o.k,o.x],null,null),(l()(),o.pb(13,0,null,0,1,"div",[["class","login-logo"]],null,null,null,null,null)),(l()(),o.pb(14,0,null,null,0,"img",[["alt","Ionic logo"],["src","assets/img/appicon.svg"]],null,null,null,null,null)),(l()(),o.pb(15,0,null,0,54,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,u){var e=!0;return"submit"===n&&(e=!1!==o.Bb(l,17).onSubmit(u)&&e),"reset"===n&&(e=!1!==o.Bb(l,17).onReset()&&e),e}),null,null)),o.ob(16,16384,null,0,a.m,[],null,null),o.ob(17,4210688,[["loginForm",4]],0,a.h,[[8,null],[8,null]],null,null),o.Fb(2048,null,a.a,null,[a.h]),o.ob(19,16384,null,0,a.g,[[4,a.a]],null,null),(l()(),o.pb(20,0,null,null,37,"ion-list",[],null,null,null,t.Bb,t.C)),o.ob(21,49152,null,0,b.P,[o.h,o.k,o.x],null,null),(l()(),o.pb(22,0,null,0,13,"ion-item",[],null,null,null,t.yb,t.v)),o.ob(23,49152,null,0,b.I,[o.h,o.k,o.x],null,null),(l()(),o.pb(24,0,null,0,2,"ion-label",[["color","primary"],["position","stacked"]],null,null,null,t.zb,t.B)),o.ob(25,49152,null,0,b.O,[o.h,o.k,o.x],{color:[0,"color"],position:[1,"position"]},null),(l()(),o.Ib(-1,0,["Username"])),(l()(),o.pb(27,0,null,0,8,"ion-input",[["autocapitalize","off"],["name","username"],["required",""],["spellcheck","false"],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0,i=l.component;return"ionBlur"===n&&(e=!1!==o.Bb(l,30)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==o.Bb(l,30)._handleInputEvent(u.target)&&e),"ngModelChange"===n&&(e=!1!==(i.login.username=u)&&e),e}),t.sb,t.u)),o.ob(28,16384,null,0,a.j,[],{required:[0,"required"]},null),o.Fb(1024,null,a.c,(function(l){return[l]}),[a.j]),o.ob(30,16384,null,0,b.Mb,[o.k],null,null),o.Fb(1024,null,a.d,(function(l){return[l]}),[b.Mb]),o.ob(32,671744,[["username",4]],0,a.i,[[2,a.a],[6,a.c],[8,null],[6,a.d]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),o.Fb(2048,null,a.e,null,[a.i]),o.ob(34,16384,null,0,a.f,[[4,a.e]],null,null),o.ob(35,49152,null,0,b.H,[o.h,o.k,o.x],{autocapitalize:[0,"autocapitalize"],name:[1,"name"],required:[2,"required"],spellcheck:[3,"spellcheck"],type:[4,"type"]},null),(l()(),o.pb(36,0,null,0,3,"ion-text",[["color","danger"]],null,null,null,t.Rb,t.T)),o.ob(37,49152,null,0,b.vb,[o.h,o.k,o.x],{color:[0,"color"]},null),(l()(),o.pb(38,0,null,0,1,"p",[["class","ion-padding-start"]],[[8,"hidden",0]],null,null,null,null)),(l()(),o.Ib(-1,null,[" Username is required "])),(l()(),o.pb(40,0,null,0,13,"ion-item",[],null,null,null,t.yb,t.v)),o.ob(41,49152,null,0,b.I,[o.h,o.k,o.x],null,null),(l()(),o.pb(42,0,null,0,2,"ion-label",[["color","primary"],["position","stacked"]],null,null,null,t.zb,t.B)),o.ob(43,49152,null,0,b.O,[o.h,o.k,o.x],{color:[0,"color"],position:[1,"position"]},null),(l()(),o.Ib(-1,0,["Password"])),(l()(),o.pb(45,0,null,0,8,"ion-input",[["name","password"],["required",""],["type","password"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0,i=l.component;return"ionBlur"===n&&(e=!1!==o.Bb(l,48)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==o.Bb(l,48)._handleInputEvent(u.target)&&e),"ngModelChange"===n&&(e=!1!==(i.login.password=u)&&e),e}),t.sb,t.u)),o.ob(46,16384,null,0,a.j,[],{required:[0,"required"]},null),o.Fb(1024,null,a.c,(function(l){return[l]}),[a.j]),o.ob(48,16384,null,0,b.Mb,[o.k],null,null),o.Fb(1024,null,a.d,(function(l){return[l]}),[b.Mb]),o.ob(50,671744,[["password",4]],0,a.i,[[2,a.a],[6,a.c],[8,null],[6,a.d]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),o.Fb(2048,null,a.e,null,[a.i]),o.ob(52,16384,null,0,a.f,[[4,a.e]],null,null),o.ob(53,49152,null,0,b.H,[o.h,o.k,o.x],{name:[0,"name"],required:[1,"required"],type:[2,"type"]},null),(l()(),o.pb(54,0,null,0,3,"ion-text",[["color","danger"]],null,null,null,t.Rb,t.T)),o.ob(55,49152,null,0,b.vb,[o.h,o.k,o.x],{color:[0,"color"]},null),(l()(),o.pb(56,0,null,0,1,"p",[["class","ion-padding-start"]],[[8,"hidden",0]],null,null,null,null)),(l()(),o.Ib(-1,null,[" Password is required "])),(l()(),o.pb(58,0,null,null,11,"ion-row",[],null,null,null,t.Fb,t.H)),o.ob(59,49152,null,0,b.hb,[o.h,o.k,o.x],null,null),(l()(),o.pb(60,0,null,0,4,"ion-col",[],null,null,null,t.ib,t.k)),o.ob(61,49152,null,0,b.u,[o.h,o.k,o.x],null,null),(l()(),o.pb(62,0,null,0,2,"ion-button",[["expand","block"],["type","submit"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.onLogin(o.Bb(l,17))&&e),e}),t.bb,t.d)),o.ob(63,49152,null,0,b.l,[o.h,o.k,o.x],{expand:[0,"expand"],type:[1,"type"]},null),(l()(),o.Ib(-1,0,["Login"])),(l()(),o.pb(65,0,null,0,4,"ion-col",[],null,null,null,t.ib,t.k)),o.ob(66,49152,null,0,b.u,[o.h,o.k,o.x],null,null),(l()(),o.pb(67,0,null,0,2,"ion-button",[["color","light"],["expand","block"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.onSignup()&&o),o}),t.bb,t.d)),o.ob(68,49152,null,0,b.l,[o.h,o.k,o.x],{color:[0,"color"],expand:[1,"expand"]},null),(l()(),o.Ib(-1,0,["Signup"]))],(function(l,n){var u=n.component;l(n,25,0,"primary","stacked"),l(n,28,0,""),l(n,32,0,"username",u.login.username),l(n,35,0,"off","username","","false","text"),l(n,37,0,"danger"),l(n,43,0,"primary","stacked"),l(n,46,0,""),l(n,50,0,"password",u.login.password),l(n,53,0,"password","","password"),l(n,55,0,"danger"),l(n,63,0,"block","submit"),l(n,68,0,"light","block")}),(function(l,n){var u=n.component;l(n,15,0,o.Bb(n,19).ngClassUntouched,o.Bb(n,19).ngClassTouched,o.Bb(n,19).ngClassPristine,o.Bb(n,19).ngClassDirty,o.Bb(n,19).ngClassValid,o.Bb(n,19).ngClassInvalid,o.Bb(n,19).ngClassPending),l(n,27,0,o.Bb(n,28).required?"":null,o.Bb(n,34).ngClassUntouched,o.Bb(n,34).ngClassTouched,o.Bb(n,34).ngClassPristine,o.Bb(n,34).ngClassDirty,o.Bb(n,34).ngClassValid,o.Bb(n,34).ngClassInvalid,o.Bb(n,34).ngClassPending),l(n,38,0,o.Bb(n,32).valid||0==u.submitted),l(n,45,0,o.Bb(n,46).required?"":null,o.Bb(n,52).ngClassUntouched,o.Bb(n,52).ngClassTouched,o.Bb(n,52).ngClassPristine,o.Bb(n,52).ngClassDirty,o.Bb(n,52).ngClassValid,o.Bb(n,52).ngClassInvalid,o.Bb(n,52).ngClassPending),l(n,56,0,o.Bb(n,50).valid||0==u.submitted)}))}function c(l){return o.Kb(0,[(l()(),o.pb(0,0,null,null,1,"page-login",[],null,null,null,p,g)),o.ob(1,49152,null,0,s,[r.a,d.m],null,null)],null,null)}var h=o.lb("page-login",s,c,{},{},[]),m=u("SVse");class k{}u.d(n,"LoginModuleNgFactory",(function(){return B}));var B=o.mb(e,[],(function(l){return o.yb([o.zb(512,o.j,o.X,[[8,[i.a,h]],[3,o.j],o.v]),o.zb(4608,m.m,m.l,[o.s,[2,m.w]]),o.zb(4608,a.l,a.l,[]),o.zb(4608,b.c,b.c,[o.x,o.g]),o.zb(4608,b.Fb,b.Fb,[b.c,o.j,o.p]),o.zb(4608,b.Jb,b.Jb,[b.c,o.j,o.p]),o.zb(1073742336,m.b,m.b,[]),o.zb(1073742336,a.k,a.k,[]),o.zb(1073742336,a.b,a.b,[]),o.zb(1073742336,b.Cb,b.Cb,[]),o.zb(1073742336,d.q,d.q,[[2,d.v],[2,d.m]]),o.zb(1073742336,k,k,[]),o.zb(1073742336,e,e,[]),o.zb(1024,d.k,(function(){return[[{path:"",component:s}]]}),[])])}))}}]);
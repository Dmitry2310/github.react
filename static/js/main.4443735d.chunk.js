(this.webpackJsonpnetwork=this.webpackJsonpnetwork||[]).push([[0],{107:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n(44),a=n(3),c="SEND_MESSAGE",s={dialogs:[{id:1,name:"Bob"},{id:2,name:"Mary"},{id:3,name:"Viktor"},{id:4,name:"Sveta"}],messages:[{id:1,message:"hi"},{id:2,message:"how ar u?"},{id:3,message:"gav gav"}]},i=function(e){return{type:c,newMessageText:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:var n=t.newMessageText;return Object(a.a)(Object(a.a)({},e),{},{messages:[{id:4,message:n}].concat(Object(r.a)(e.messages))});default:return e}}},12:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return i}));var r=n(133),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"2c764cb3-4b05-4ea7-9034-a0dec41567b0"}}),c={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},followAPI:function(e){return a.post("follow/".concat(e)).then((function(e){return e.data}))},unFollowAPI:function(e){return a.delete("follow/".concat(e)).then((function(e){return e.data}))}},s={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return a.put("profile",e)}},i={getMe:function(){return a.get("/auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("/auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("/auth/login")}};t.b=c},120:function(e,t,n){"use strict";t.a=n.p+"static/media/user.1f1285f0.png"},244:function(e,t,n){},25:function(e,t,n){e.exports={nav:"Navbar_nav__2imOE",item:"Navbar_item__zmMk4",active:"Navbar_active__3mbhk"}},26:function(e,t,n){e.exports={human:"Users_human__2F_ZC",avatar:"Users_avatar__gHOlh",users:"Users_users__2Iv27",item:"Users_item__2_u8d",but:"Users_but__1pH-Q",selectedPage:"Users_selectedPage__J63sh"}},289:function(e,t,n){"use strict";n.r(t);n(98);var r=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,295)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))},a=n(11),c=n(96),s=n(107),i={},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i;return e},u=n(8),l=n.n(u),d=n(14),f=n(44),j=n(3),b=n(12),p="FOLLOW",h="UNFOLLOW",g="SET_USERS",O="SET_CURRENT_PAGE",m="SET_TOTAL_USERS_COUNT",v="TOGGLE_IS_FETCHING",x="TOGGLE_IS_FOLLOWING_PROGRESS",w={users:[],pageSize:20,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},_=function(e){return{type:p,userId:e}},P=function(e){return{type:h,userId:e}},C=function(e){return{type:g,users:e}},S=function(e){return{type:O,currentPage:e}},y=function(e){return{type:v,isFetching:e}},I=function(e,t){return{type:x,isFetching:e,userId:t}},N=function(){var e=Object(d.a)(l.a.mark((function e(t,n,r,a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(I(!0,n)),e.next=3,r(n);case 3:0===e.sent.resultCode&&t(a(n)),t(I(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(j.a)(Object(j.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(j.a)(Object(j.a)({},e),{},{followed:!0}):e}))});case h:return Object(j.a)(Object(j.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(j.a)(Object(j.a)({},e),{},{followed:!1}):e}))});case g:return Object(j.a)(Object(j.a)({},e),{},{users:t.users});case O:return Object(j.a)(Object(j.a)({},e),{},{currentPage:t.currentPage});case m:return Object(j.a)(Object(j.a)({},e),{},{totalUsersCount:t.count});case v:return Object(j.a)(Object(j.a)({},e),{},{isFetching:t.isFetching});case x:return Object(j.a)(Object(j.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(f.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},E=n(31),F="auth/SET_USER_DATA",U={userId:null,email:null,login:null,isAuth:!1},T=function(e,t,n,r){return{type:F,payload:{userId:e,email:t,login:n,isAuth:r}}},A=function(){return function(){var e=Object(d.a)(l.a.mark((function e(t){var n,r,a,c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.getMe();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,c=r.email,s=r.login,t(T(a,c,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},z=function(){return function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.logout();case 2:0===e.sent.data.resultCode&&t(T(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:return Object(j.a)(Object(j.a)({},e),t.payload);default:return e}},M="SET_INICIALIZATION",R={inicialization:!1},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:return Object(j.a)(Object(j.a)({},e),{},{inicialization:!0});default:return e}},G=n(135),B=n(132),H=Object(a.c)({profilePage:c.b,messagesPage:s.a,sideBar:o,usersPage:k,auth:L,form:B.a,app:D}),V=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||a.d,W=Object(a.e)(H,V(Object(a.a)(G.a)));window.store=W;var X=W,J=n(0),q=n.n(J),K=n(68),Y=n.n(K),Z=n(36),Q=n(37),$=n(39),ee=n(38),te=(n(244),n(91)),ne=n.n(te),re=n.p+"static/media/logo.d2e09d95.png",ae=n(21),ce=n(1),se=function(e){return Object(ce.jsxs)("header",{className:ne.a.header,children:[Object(ce.jsx)("img",{src:re,alt:""}),Object(ce.jsx)("span",{children:"FRIENDS FINDER"}),Object(ce.jsx)("div",{className:ne.a.loginBlock,children:e.isAuth?Object(ce.jsx)("button",{onClick:e.logout,children:"Log out"}):Object(ce.jsx)(ae.b,{to:"/login",children:"Login"})})]})},ie=n(15),oe=function(e){Object($.a)(n,e);var t=Object(ee.a)(n);function n(){return Object(Z.a)(this,n),t.apply(this,arguments)}return Object(Q.a)(n,[{key:"render",value:function(){return Object(ce.jsx)(se,Object(j.a)({},this.props))}}]),n}(q.a.Component),ue=Object(ie.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:z})(oe),le=n(25),de=n.n(le),fe=function(){return Object(ce.jsxs)("nav",{className:de.a.nav,children:[Object(ce.jsx)("div",{className:de.a.item,children:Object(ce.jsx)(ae.b,{to:"/profile",activeClassName:de.a.active,children:"Profile"})}),Object(ce.jsx)("div",{className:de.a.item,children:Object(ce.jsx)(ae.b,{to:"/dialogs",activeClassName:de.a.active,children:"Messages"})}),Object(ce.jsx)("div",{className:de.a.item,children:Object(ce.jsx)(ae.b,{to:"/users",activeClassName:de.a.active,children:"Friends"})}),Object(ce.jsx)("div",{className:de.a.item,children:Object(ce.jsx)("a",{children:"Music"})}),Object(ce.jsx)("div",{className:de.a.item,children:Object(ce.jsx)("a",{children:"Settings"})})]})},je=n(45),be=n(97),pe=n(57),he=n.n(pe),ge=function(e){for(var t=e.totalItemsCount,n=e.pageSize,r=e.currentPage,a=e.onPageChanget,c=e.portionSize,s=void 0===c?10:c,i=Math.ceil(t/n),o=[],u=1;u<=i;u++)o.push(u);var l=Math.ceil(i/s),d=Object(J.useState)(1),f=Object(be.a)(d,2),j=f[0],b=f[1],p=(j-1)*s+1,h=j*s;return Object(ce.jsxs)("div",{className:he.a.paginator,children:[j>1&&Object(ce.jsx)("button",{className:he.a.button,onClick:function(){b(j-1)},children:"PREV"}),o.filter((function(e){return e>=p&&e<=h})).map((function(e){return Object(ce.jsx)("span",{className:r===e&&he.a.selectedPage,onClick:function(t){a(e)},children:e},e)})),l>j&&Object(ce.jsx)("button",{className:he.a.button,onClick:function(){b(j+1)},children:"NEXT"})]})},Oe=n(26),me=n.n(Oe),ve=n(120),xe=function(e){var t=e.user,n=e.followingInProgress,r=e.unFollow,a=e.follow;return Object(ce.jsxs)("div",{className:me.a.human,children:[Object(ce.jsx)(ae.b,{to:"/profile/"+t.id,children:Object(ce.jsx)("div",{className:me.a.avatar,children:Object(ce.jsx)("img",{src:null!=t.photos.small?t.photos.small:ve.a,alt:""})})}),Object(ce.jsxs)("div",{className:me.a.users,children:[Object(ce.jsx)("div",{className:me.a.item,children:t.name}),Object(ce.jsx)("div",{className:me.a.item,children:t.status}),Object(ce.jsx)("div",{className:me.a.item,children:t.age}),Object(ce.jsx)("div",{className:me.a.item,children:"user.location.city"}),Object(ce.jsx)("div",{className:me.a.item,children:"user.location.country"})]}),Object(ce.jsx)("div",{className:me.a.but,children:t.followed?Object(ce.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"Unsubscribe"}):Object(ce.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"Sibscribe"})})]})},we=["currentPage","onPageChanget","totalUsersCount","pageSize"],_e=function(e){var t=e.currentPage,n=e.onPageChanget,r=e.totalUsersCount,a=e.pageSize,c=Object(je.a)(e,we);return Object(ce.jsxs)("div",{children:[Object(ce.jsx)(ge,{currentPage:t,onPageChanget:n,pageSize:a,totalItemsCount:r}),c.users.map((function(e){return Object(ce.jsx)(xe,{user:e,followingInProgress:c.followingInProgress,follow:c.follow,unFollow:c.unFollow},e.id)}))]})},Pe=n(70),Ce=function(e){return e.usersPage.users},Se=function(e){return e.usersPage.pageSize},ye=function(e){return e.usersPage.totalUsersCount},Ie=function(e){return e.usersPage.currentPage},Ne=function(e){return e.usersPage.isFetching},ke=function(e){return e.usersPage.followingInProgress},Ee=function(e){Object($.a)(n,e);var t=Object(ee.a)(n);function n(){var e;Object(Z.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).onPageChanget=function(t){var n=e.props.pageSize;e.props.changePage(t,n)},e}return Object(Q.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return Object(ce.jsxs)(ce.Fragment,{children:[this.props.isFetching?Object(ce.jsx)(Pe.a,{}):null,Object(ce.jsx)(_e,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanget:this.onPageChanget,unFollow:this.props.unFollow,follow:this.props.follow,users:this.props.users,followingInProgress:this.props.followingInProgress})]})}}]),n}(q.a.Component),Fe=Object(a.d)(Object(ie.b)((function(e){return{users:Ce(e),pageSize:Se(e),totalUsersCount:ye(e),currentPage:Ie(e),isFetching:Ne(e),followingInProgress:ke(e)}}),{follow:function(e){return function(){var t=Object(d.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:N(n,e,b.b.followAPI.bind(b.b),_);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unFollow:function(e){return function(){var t=Object(d.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:N(n,e,b.b.unFollowAPI.bind(b.b),P);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:S,setFollowingProgress:I,getUsers:function(e,t){return function(){var n=Object(d.a)(l.a.mark((function n(r){var a;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(y(!0)),n.next=3,b.b.getUsers(e,t);case 3:a=n.sent,r(y(!1)),r(C(a.items)),r((c=a.totalCount,{type:m,count:c}));case 7:case"end":return n.stop()}var c}),n)})));return function(e){return n.apply(this,arguments)}}()},changePage:function(e,t){return function(){var n=Object(d.a)(l.a.mark((function n(r){var a;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(S(e)),r(y(!0)),n.next=4,b.b.getUsers(e,t);case 4:a=n.sent,r(y(!1)),r(C(a.items));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(Ee),Ue=n(10),Te=n(90),Ae=n(131),ze=n(49),Le=n(74),Me=n(55),Re=n.n(Me),De=Object(Ae.a)({form:"loginForm"})((function(e){return Object(ce.jsxs)("form",{action:"#",onSubmit:e.handleSubmit,children:[Object(ce.jsx)("div",{children:Object(ze.c)("Email","email",[Le.b],ze.a)}),Object(ce.jsx)("div",{children:Object(ce.jsx)(Te.a,{type:"password",placeholder:"Password",name:"password",component:ze.a,validate:[Le.b]})}),Object(ce.jsxs)("div",{children:[Object(ce.jsx)(Te.a,{type:"checkbox",name:"rememberMe",component:ze.a})," remember me"]}),e.error&&Object(ce.jsx)("div",{className:Re.a.formSummaryError,children:e.error}),Object(ce.jsx)("div",{children:Object(ce.jsx)("button",{children:"Login"})})]})})),Ge=Object(ie.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(d.a)(l.a.mark((function r(a){var c,s;return l.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,b.a.login(e,t,n);case 2:0===(c=r.sent).data.resultCode?a(A()):(s=c.data.messages.length>0?c.data.messages[0]:"Some error",a(Object(E.a)("loginForm",{_error:s})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},logout:z})((function(e){return e.isAuth?Object(ce.jsx)(Ue.a,{to:"/profile"}):Object(ce.jsxs)("div",{children:[Object(ce.jsx)("h1",{children:"Login"}),Object(ce.jsx)(De,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),Be=function(e){return function(t){return Object(ce.jsx)(J.Suspense,{fallback:Object(ce.jsx)("div",{children:"Loading..."}),children:Object(ce.jsx)(e,Object(j.a)({},t))})}},He=q.a.lazy((function(){return n.e(4).then(n.bind(null,297))})),Ve=q.a.lazy((function(){return n.e(3).then(n.bind(null,296))})),We=function(e){Object($.a)(n,e);var t=Object(ee.a)(n);function n(){return Object(Z.a)(this,n),t.apply(this,arguments)}return Object(Q.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.inicialization?Object(ce.jsxs)("div",{className:"app-wrapper",children:[Object(ce.jsx)(ue,{}),Object(ce.jsx)(fe,{}),Object(ce.jsxs)("div",{className:"content",children:[Object(ce.jsx)(Ue.b,{path:"/profile/:userId?",render:Be(Ve)}),Object(ce.jsx)(Ue.b,{path:"/dialogs",render:Be(He)}),Object(ce.jsx)(Ue.b,{path:"/users",render:function(){return Object(ce.jsx)(Fe,{})}}),Object(ce.jsx)(Ue.b,{path:"/login",render:function(){return Object(ce.jsx)(Ge,{})}})]})]}):Object(ce.jsx)(Pe.a,{})}}]),n}(q.a.Component),Xe=Object(a.d)(Ue.f,Object(ie.b)((function(e){return{inicialization:e.app.inicialization}}),{initializeApp:function(){return function(e){var t=e(A());Promise.all([t]).then((function(){e({type:M})}))}}}))(We);Y.a.render(Object(ce.jsx)(ae.a,{basename:"/github.react",children:Object(ce.jsx)(ie.a,{store:X,children:Object(ce.jsx)(Xe,{})})}),document.getElementById("root")),r()},49:function(e,t,n){"use strict";n.d(t,"b",(function(){return j})),n.d(t,"a",(function(){return b})),n.d(t,"c",(function(){return p}));var r=n(3),a=n(45),c=n(55),s=n.n(c),i=n(90),o=n(1),u=["input","meta","child"],l=["input","meta","children"],d=["input","meta","children"],f=function(e){e.input;var t=e.meta,n=(e.child,Object(a.a)(e,u)),r=t.touched&&t.error;return Object(o.jsxs)("div",{className:s.a.formControl+" "+(r?s.a.error:" "),children:[n.children,r&&Object(o.jsx)("span",{children:t.error})]})},j=function(e){var t=e.input,n=(e.meta,e.children,Object(a.a)(e,l));return Object(o.jsx)(f,Object(r.a)(Object(r.a)({},e),{},{children:Object(o.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},b=function(e){var t=e.input,n=(e.meta,e.children,Object(a.a)(e,d));return Object(o.jsx)(f,Object(r.a)(Object(r.a)({},e),{},{children:Object(o.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))},p=function(e,t,n,a){var c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(o.jsxs)("div",{children:[Object(o.jsx)(i.a,Object(r.a)({placeholder:e,name:t,validate:n,component:a},c))," ",s]})}},55:function(e,t,n){e.exports={formControl:"FormsControl_formControl__WE9ql",error:"FormsControl_error__eY5EU",formSummaryError:"FormsControl_formSummaryError__3Uy6X"}},57:function(e,t,n){e.exports={selectedPage:"Pagination_selectedPage__sPSVP",paginator:"Pagination_paginator__3EzHz",button:"Pagination_button__U0lwD"}},70:function(e,t,n){"use strict";var r=n.p+"static/media/Internet.cfc3fbe7.gif",a=n(1);t.a=function(e){return Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:r,alt:""})})}},74:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},91:function(e,t,n){e.exports={header:"Header_header__1VCKf",loginBlock:"Header_loginBlock__6mma5"}},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"d",(function(){return g})),n.d(t,"c",(function(){return O})),n.d(t,"g",(function(){return m})),n.d(t,"e",(function(){return v})),n.d(t,"f",(function(){return x}));var r=n(8),a=n.n(r),c=n(14),s=n(44),i=n(3),o=n(12),u=n(31),l="ADD-POST",d="SET_USER_PROFILE",f="SET_STATUS",j="SAVE_PHOTO_SUCCESS",b={posts:[{id:1,post:"hi",likesCount:12},{id:2,post:"hi, how are u?",likesCount:9},{id:3,post:"It's my first progect!",likesCount:16}],profile:null,status:""},p=function(e){return{type:l,newPostText:e}},h=function(e){return{type:f,status:e}},g=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:d,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.getStatus(e);case 2:r=t.sent,n(h(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(h(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n((a=r.data.data.photos,{type:j,photos:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n,r){var c,s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=r().auth.userId,t.next=3,o.c.saveProfile(e);case 3:if(0!==(s=t.sent).data.resultCode){t.next=8;break}n(g(c)),t.next=10;break;case 8:return n(Object(u.a)("edit-profile",{_error:s.data.messages[0]})),t.abrupt("return",Promise.reject(s.data.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:var n={id:4,post:t.newPostText,likesCount:0};return Object(i.a)(Object(i.a)({},e),{},{posts:[n].concat(Object(s.a)(e.posts)),newPostText:""});case f:return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case d:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case j:return Object(i.a)(Object(i.a)({},e),{},{profile:Object(i.a)(Object(i.a)({},e.profile),{},{photos:t.photos})});default:return e}}},98:function(e,t,n){}},[[289,1,2]]]);
//# sourceMappingURL=main.4443735d.chunk.js.map
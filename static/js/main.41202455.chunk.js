(this.webpackJsonpnetwork=this.webpackJsonpnetwork||[]).push([[0],{106:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c}));var r=function(e){if(!e)return"Field is required"},c=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},109:function(e,t,n){"use strict";var r=n.p+"static/media/Internet.cfc3fbe7.gif",c=n(145),a=n.n(c),i=(n(0),n(1));t.a=function(e){return Object(i.jsx)("div",{className:a.a.preloaderWrapper,children:Object(i.jsx)("img",{src:r,alt:"",className:a.a.preloader})})}},145:function(e,t,n){e.exports={preloaderWrapper:"Preloader_preloaderWrapper__3Fx-G",preloader:"Preloader_preloader__2G3Hk"}},146:function(e,t,n){e.exports={formControl:"FormsControl_formControl__WE9ql",error:"FormsControl_error__eY5EU",formSummaryError:"FormsControl_formSummaryError__3Uy6X"}},151:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"d",(function(){return j})),n.d(t,"c",(function(){return b})),n.d(t,"g",(function(){return p})),n.d(t,"e",(function(){return h})),n.d(t,"f",(function(){return O}));var r=n(13),c=n.n(r),a=n(24),i=n(55),s=n(7),u=n(25),o={getProfile:function(e){return u.c.get("profile/"+e).then((function(e){return e.data}))},getStatus:function(e){return u.c.get("profile/status/"+e).then((function(e){return e.data}))},updateStatus:function(e){return u.c.put("profile/status",{status:e}).then((function(e){return e.data}))},savePhoto:function(e){var t=new FormData;return t.append("image",e),u.c.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},saveProfile:function(e){return u.c.put("profile",e).then((function(e){return e.data}))}},l=n(64),d={posts:[{id:1,post:"hi",likesCount:12},{id:2,post:"hi, how are u?",likesCount:9},{id:3,post:"It's my first progect!",likesCount:16}],profile:null,status:"",photos:null},f={addPostActionCreator:function(e){return{type:"PROFILE/ADD-POST",newPostText:e}},setUserProfile:function(e){return{type:"PROFILE/SET_USER_PROFILE",profile:e}},setStatus:function(e){return{type:"PROFILE/SET_STATUS",status:e}},setPhotoSuccess:function(e){return{type:"PROFILE/SAVE_PHOTO_SUCCESS",photos:e}}},j=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.getProfile(e);case 2:r=t.sent,n(f.setUserProfile(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.getStatus(e);case 2:r=t.sent,n(f.setStatus(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.updateStatus(e);case 2:0===t.sent.resultCode&&n(f.setStatus(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.savePhoto(e);case 2:0===(r=t.sent).resultCode&&n(f.setPhotoSuccess(r.data.photos));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n,r){var a,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r().auth.userId,t.next=3,o.saveProfile(e);case 3:if(0!==(i=t.sent).resultCode){t.next=12;break}if(null==a){t.next=9;break}n(j(a)),t.next=10;break;case 9:throw Error("UserId can`t be a null");case 10:t.next=14;break;case 12:return n(Object(l.a)("edit-profile",{_error:i.messages[0]})),t.abrupt("return",Promise.reject(i.messages[0]));case 14:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PROFILE/ADD-POST":var n={id:4,post:t.newPostText,likesCount:0};return Object(s.a)(Object(s.a)({},e),{},{posts:[n].concat(Object(i.a)(e.posts))});case"PROFILE/SET_STATUS":return Object(s.a)(Object(s.a)({},e),{},{status:t.status});case"PROFILE/SET_USER_PROFILE":return Object(s.a)(Object(s.a)({},e),{},{profile:t.profile});case"PROFILE/SAVE_PHOTO_SUCCESS":return Object(s.a)(Object(s.a)({},e),{},{profile:Object(s.a)(Object(s.a)({},e.profile),{},{photos:t.photos})});default:return e}}},152:function(e,t,n){},162:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(55),c=n(7),a={dialogs:[{id:1,name:"Bob"},{id:2,name:"Mary"},{id:3,name:"Viktor"},{id:4,name:"Sveta"}],messages:[{id:1,message:"hi"},{id:2,message:"how ar u?"},{id:3,message:"gav gav"}]},i={sendMessageCreator:function(e){return{type:"DIALOGS/SEND_MESSAGE",newMessageText:e}}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DIALOGS/SEND_MESSAGE":var n=t.newMessageText;return Object(c.a)(Object(c.a)({},e),{},{messages:[{id:4,message:n}].concat(Object(r.a)(e.messages))});default:return e}}},177:function(e,t,n){"use strict";t.a=n.p+"static/media/user.1f1285f0.png"},192:function(e,t,n){"use strict";n.d(t,"c",(function(){return U})),n.d(t,"d",(function(){return R})),n.d(t,"b",(function(){return k}));var r=n(13),c=n.n(r),a=n(24),i=n(55),s=n(7),u={"messages-received":[],"status-changed":[]},o=null,l=function(){p("pending"),setTimeout(h,3e3)},d=function(e){var t=JSON.parse(e.data);u["messages-received"].forEach((function(e){return e(t)}))},f=function(){p("ready"),console.log("gjg")},j=function(){p("error"),console.log("RESTART PAGE")},b=function(){var e,t,n,r;null===(e=o)||void 0===e||e.removeEventListener("close",l),null===(t=o)||void 0===t||t.removeEventListener("message",d),null===(n=o)||void 0===n||n.removeEventListener("open",f),null===(r=o)||void 0===r||r.removeEventListener("error",j)},p=function(e){u["status-changed"].forEach((function(t){return t(e)}))};function h(){var e;b(),null===(e=o)||void 0===e||e.close(),o=new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"),p("pending"),o.addEventListener("close",l),o.addEventListener("message",d),o.addEventListener("open",f),o.addEventListener("error",j)}var O=function(){h()},m=function(){var e;b(),u["messages-received"]=[],u["status-changed"]=[],null===(e=o)||void 0===e||e.close()},g=function(e,t){return u[e].push(t),function(){u[e]=u[e].filter((function(e){return e!==t}))}},v=function(e,t){u[e]=u[e].filter((function(e){return e!==t}))},x=function(e){var t;null===(t=o)||void 0===t||t.send(e)},S=n(376),_={messages:[],status:"pending"},E=function(e){return{type:"chat/MESSAGES_RECEIVED",payload:{messages:e}}},P=function(e){return{type:"chat/STATUS_CHANGED",payload:{status:e}}},w=function(){return{type:"chat/STRIPPING"}},y=null,I=function(e){return null===y&&(y=function(t){e(E(t))}),y},C=null,T=function(e){return null===C&&(C=function(t){e(P(t))}),C},U=function(){return function(){var e=Object(a.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:O(),g("messages-received",I(t)),g("status-changed",T(t));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},R=function(){return function(){var e=Object(a.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:m(),v("messages-received",I(t)),v("status-changed",T(t)),t(w());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},k=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:x(e);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"chat/MESSAGES_RECEIVED":return Object(s.a)(Object(s.a)({},e),{},{messages:[].concat(Object(i.a)(e.messages),Object(i.a)(t.payload.messages.map((function(e){return Object(s.a)(Object(s.a)({},e),{},{id:Object(S.a)()})})))).filter((function(e,t,n){return t>=n.length-100}))});case"chat/STATUS_CHANGED":return Object(s.a)(Object(s.a)({},e),{},{status:t.payload.status});case"chat/STRIPPING":return Object(s.a)(Object(s.a)({},e),{},{messages:[]});default:return e}}},197:function(e,t,n){e.exports={header:"Header_header__1VCKf",networkTitle:"Header_networkTitle__2K0OL",loginBlock:"Header_loginBlock__6mma5"}},208:function(e,t,n){e.exports={formControl:"Login_formControl__1v_Mx",error:"Login_error__17Wu6",formSummaryError:"Login_formSummaryError__3cy0x"}},25:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c}));var r,c,a=n(194),i=n.n(a).a.create({withCredentials:!0,responseType:"json",baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"2c764cb3-4b05-4ea7-9034-a0dec41567b0"}});!function(e){e[e.Success=0]="Success",e[e.Error=1]="Error",e[e.CaptchaIsRequired=10]="CaptchaIsRequired"}(r||(r={})),function(e){e[e.CaptchaIsRequired=10]="CaptchaIsRequired"}(c||(c={}))},322:function(e,t,n){},369:function(e,t,n){"use strict";n.r(t);n(152);var r=function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,389)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))},c=n(19),a=n(151),i=n(162),s={},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s;return e},o=n(13),l=n.n(o),d=n(24),f=n(55),j=n(7),b=n(25),p={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return b.c.get("users?page=".concat(e,"&count=").concat(t,"&term=").concat(n)+(null===r?"":"&friend=".concat(r))).then((function(e){return e.data}))},followAPI:function(e){return b.c.post("follow/".concat(e)).then((function(e){return e.data}))},unFollowAPI:function(e){return b.c.delete("follow/".concat(e)).then((function(e){return e.data}))}},h={users:[],pageSize:20,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[],filter:{term:"",friend:null}},O=function(e){return{type:"USER/FOLLOW",userId:e}},m=function(e){return{type:"USER/UNFOLLOW",userId:e}},g=function(e){return{type:"USER/SET_USERS",users:e}},v=function(e){return{type:"USER/SET_CURRENT_PAGE",currentPage:e}},x=function(e){return{type:"USER/SET_FILTER",payload:e}},S=function(e){return{type:"USER/SET_TOTAL_USERS_COUNT",count:e}},_=function(e){return{type:"USER/TOGGLE_IS_FETCHING",isFetching:e}},E=function(e,t){return{type:"USER/TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},P=function(e,t,n){return function(){var r=Object(d.a)(l.a.mark((function r(c){var a;return l.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c(v(e)),c(_(!0)),c(x(n)),r.next=5,p.getUsers(e,t,n.term,n.friend);case 5:a=r.sent,c(_(!1)),c(g(a.items)),c(S(a.totalCount));case 9:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},w=function(){var e=Object(d.a)(l.a.mark((function e(t,n,r,c){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(E(!0,n)),e.next=3,r(n);case 3:0===e.sent.resultCode&&t(c(n)),t(E(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,c){return e.apply(this,arguments)}}(),y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER/FOLLOW":return Object(j.a)(Object(j.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(j.a)(Object(j.a)({},e),{},{followed:!0}):e}))});case"USER/UNFOLLOW":return Object(j.a)(Object(j.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(j.a)(Object(j.a)({},e),{},{followed:!1}):e}))});case"USER/SET_USERS":return Object(j.a)(Object(j.a)({},e),{},{users:t.users});case"USER/SET_CURRENT_PAGE":return Object(j.a)(Object(j.a)({},e),{},{currentPage:t.currentPage});case"USER/SET_TOTAL_USERS_COUNT":return Object(j.a)(Object(j.a)({},e),{},{totalUsersCount:t.count});case"USER/TOGGLE_IS_FETCHING":return Object(j.a)(Object(j.a)({},e),{},{isFetching:t.isFetching});case"USER/SET_FILTER":return Object(j.a)(Object(j.a)({},e),{},{filter:t.payload});case"USER/TOGGLE_IS_FOLLOWING_PROGRESS":return Object(j.a)(Object(j.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(f.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},I={getMe:function(){return b.c.get("/auth/me").then((function(e){return e.data}))},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,c={email:e,password:t,rememberMe:n,captcha:r};return b.c.post("/auth/login",c).then((function(e){return e.data}))},logout:function(){return b.c.delete("/auth/login").then((function(e){return e.data}))},getCaptcha:function(){return b.c.get("security/get-captcha-url").then((function(e){return e.data}))}},C=n(64),T={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},U=function(e,t,n,r){return{type:"auth/SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:r}}},R=function(e){return{type:"auth/SET_CAPTCHA",payload:{captchaUrl:e}}},k=function(){return function(){var e=Object(d.a)(l.a.mark((function e(t){var n,r,c,a,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.getMe();case 2:(n=e.sent).resultCode===b.b.Success&&(r=n.data,c=r.id,a=r.email,i=r.login,t(U(c,a,i,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},N=function(){return function(){var e=Object(d.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.getCaptcha();case 2:n=e.sent,r=n.url,t(R(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET_USER_DATA":case"auth/SET_CAPTCHA":return Object(j.a)(Object(j.a)({},e),t.payload);default:return e}},F={inicialization:!1},A=function(){return{type:"APP/SET_INICIALIZATION"}},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/SET_INICIALIZATION":return Object(j.a)(Object(j.a)({},e),{},{inicialization:!0});default:return e}},D=n(196),M=n(191),z=n(192),H=Object(c.c)({profilePage:a.b,messagesPage:i.b,sideBar:u,usersPage:y,auth:L,form:M.a,app:G,chat:z.a}),W=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||c.d,V=Object(c.e)(H,W(Object(c.a)(D.a)));window.store=V;var q=V,B=n(0),J=n.n(B),K=n(36),X=n.n(K),Z=n(174),Q=n(175),Y=n(193),$=n(190),ee=(n(322),n(323),n.p+"static/media/logo.d2e09d95.png"),te=n(81),ne=n.n(te),re=n(37),ce=n(372),ae=n(375),ie=n(379),se=n(380),ue=n(381),oe=n(382),le=n(211),de=n(197),fe=n.n(de),je=n(377),be=n(378),pe=n(374),he=n(373),Oe=n(15),me=function(e){return e.auth.isAuth},ge=function(e){return e.auth.login},ve=n(1),xe=function(e){var t=Object(Oe.d)(me),n=(Object(Oe.d)(ge),Object(Oe.c)()),r=ce.a.Header;return Object(ve.jsx)(r,{className:"site-layout-sub-header-background",style:{padding:0},children:Object(ve.jsxs)(je.a,{children:[Object(ve.jsx)(be.a,{span:20,className:fe.a.networkTitle,children:Object(ve.jsx)("span",{children:"FRIENDS FINDER"})}),t?Object(ve.jsxs)(ve.Fragment,{children:[Object(ve.jsx)(be.a,{span:1,children:Object(ve.jsx)(pe.a,{style:{backgroundColor:"#87d068"},icon:Object(ve.jsx)(ie.a,{})})}),Object(ve.jsx)(be.a,{span:3,children:Object(ve.jsx)(he.a,{onClick:function(){n(function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.logout();case 2:e.sent.resultCode===b.b.Success&&t(U(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Log out"})})]}):Object(ve.jsx)(be.a,{span:4,children:Object(ve.jsx)(he.a,{children:Object(ve.jsx)(re.b,{to:"/login",children:"Login"})})})]})})},Se=n(111),_e=n(149),Ee=n(8),Pe=n.n(Ee),we=n(82),ye=n.n(we),Ie=function(e){for(var t=e.totalItemsCount,n=e.pageSize,r=e.currentPage,c=void 0===r?1:r,a=e.onPageChanget,i=void 0===a?function(e){return e}:a,s=e.portionSize,u=void 0===s?10:s,o=Math.ceil(t/n),l=[],d=1;d<=o;d++)l.push(d);var f=Math.ceil(o/u),j=Object(B.useState)(1),b=Object(_e.a)(j,2),p=b[0],h=b[1],O=(p-1)*u+1,m=p*u;return Object(ve.jsxs)("div",{className:ye.a.paginator,children:[p>1&&Object(ve.jsx)("button",{className:ye.a.button,onClick:function(){h(p-1)},children:"PREV"}),l.filter((function(e){return e>=O&&e<=m})).map((function(e){return Object(ve.jsx)("div",{className:Pe()(Object(Se.a)({},ye.a.selectedPage,c===e),ye.a.pageNumber),children:Object(ve.jsx)("span",{onClick:function(t){i(e)},children:e},e)})})),f>p&&Object(ve.jsx)("button",{className:ye.a.button,onClick:function(){h(p+1)},children:"NEXT"})]})},Ce=n(54),Te=n.n(Ce),Ue=n(177),Re=function(e){var t=e.user,n=e.followingInProgress,r=e.unFollow,c=e.follow;return Object(ve.jsxs)("div",{className:Te.a.human,children:[Object(ve.jsx)(re.c,{to:"/profile/"+t.id,children:Object(ve.jsx)("div",{className:Te.a.avatar,children:Object(ve.jsx)("img",{src:null!=t.photos.small?t.photos.small:Ue.a,alt:""})})}),Object(ve.jsxs)("div",{className:Te.a.users,children:[Object(ve.jsx)("div",{className:Te.a.item,children:t.name}),Object(ve.jsx)("div",{className:Te.a.item,children:t.status}),Object(ve.jsx)("div",{className:Te.a.item,children:"user.age"}),Object(ve.jsx)("div",{className:Te.a.item,children:"user.location.city"}),Object(ve.jsx)("div",{className:Te.a.item,children:"user.location.country"})]}),Object(ve.jsx)("div",{className:Te.a.but,children:t.followed?Object(ve.jsx)(he.a,{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"Unsubscribe"}):Object(ve.jsx)(he.a,{disabled:n.some((function(e){return e===t.id})),onClick:function(){c(t.id)},children:"Subscribe"})})]})},ke=n(93),Ne=function(e){return e.usersPage.users},Le=function(e){return e.usersPage.pageSize},Fe=function(e){return e.usersPage.totalUsersCount},Ae=function(e){return e.usersPage.currentPage},Ge=function(e){return e.usersPage.isFetching},De=function(e){return e.usersPage.followingInProgress},Me=function(e){return e.usersPage.filter},ze=function(e){return{}},He=function(e){var t=e.onFilterChanged,n=Object(Oe.d)(Me);return Object(ve.jsx)("div",{children:Object(ve.jsx)("div",{children:Object(ve.jsx)(ke.c,{enableReinitialize:!0,initialValues:{term:n.term,friend:String(n.friend)},validate:ze,onSubmit:function(e,n){var r=n.setSubmitting,c={term:e.term,friend:"null"===e.friend?null:"true"===e.friend};t(c),r(!1)},children:function(e){var t=e.isSubmitting;return Object(ve.jsxs)(ke.b,{children:[Object(ve.jsx)(ke.a,{type:"text",name:"term"}),Object(ve.jsxs)(ke.a,{name:"friend",as:"select",children:[Object(ve.jsx)("option",{value:"null",children:"All"}),Object(ve.jsx)("option",{value:"true",children:"Only followed"}),Object(ve.jsx)("option",{value:"false",children:"Only unfollowed"})]}),Object(ve.jsx)("button",{type:"submit",disabled:t,children:"Find"})]})}})})})},We=n(17),Ve=function(e){var t=Object(Oe.d)(Fe),r=Object(Oe.d)(Ne),c=Object(Oe.d)(Ae),a=Object(Oe.d)(Le),i=Object(Oe.d)(Me),s=Object(Oe.d)(De),u=Object(Oe.c)(),o=Object(We.g)();Object(B.useEffect)((function(){var e=n(178).parse(o.location.search.substring(1)),t=c,r=i;switch(e.page&&(t=Number(e.page)),e.term&&(r=Object(j.a)(Object(j.a)({},r),{},{term:e.term})),e.friend){case"null":r=Object(j.a)(Object(j.a)({},r),{},{friend:null});break;case"true":r=Object(j.a)(Object(j.a)({},r),{},{friend:!0});break;case"false":r=Object(j.a)(Object(j.a)({},r),{},{friend:!1})}u(P(t,a,r))}),[]),Object(B.useEffect)((function(){var e={},t=n(178);i.term&&(e.term=i.term),null!==i.friend&&(e.friend=String(i.friend)),1!==c&&(e.page=String(c)),o.push({pathname:"/users",search:t.stringify(e)})}),[i,c]);var f=function(e){u(function(e){return function(){var t=Object(d.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w(n,e,p.unFollowAPI.bind(p),m);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))},b=function(e){u(function(e){return function(){var t=Object(d.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w(n,e,p.followAPI.bind(p),O);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))};return Object(ve.jsxs)("div",{children:[Object(ve.jsx)(He,{onFilterChanged:function(e){u(P(1,a,e))}}),Object(ve.jsx)(Ie,{currentPage:c,onPageChanget:function(e){u(P(e,a,i))},pageSize:a,totalItemsCount:t}),r.map((function(e){return Object(ve.jsx)(Re,{user:e,followingInProgress:s,follow:b,unFollow:f},e.id)}))]})},qe=n(109),Be=function(e){var t=Object(Oe.d)(Ge);return Object(ve.jsxs)(ve.Fragment,{children:[t?Object(ve.jsx)(qe.a,{}):null,Object(ve.jsx)(Ve,{})]})},Je=n(140),Ke=n(189),Xe=n(67),Ze=n(106),Qe=n(208),Ye=n.n(Qe),$e=Object(Ke.a)({form:"loginForm"})((function(e){var t=e.error,n=e.captchaUrl,r=e.handleSubmit;return Object(ve.jsxs)("form",{action:"#",onSubmit:r,children:[Object(ve.jsx)("div",{children:Object(Xe.c)("Email","email",[Ze.b],Xe.a)}),Object(ve.jsx)("div",{children:Object(ve.jsx)(Je.a,{type:"password",placeholder:"Password",name:"password",component:Xe.a,validate:[Ze.b]})}),Object(ve.jsxs)("div",{children:[Object(ve.jsx)(Je.a,{type:"checkbox",name:"rememberMe",component:Xe.a})," remember me"]}),n&&Object(ve.jsx)("div",{children:Object(ve.jsx)("img",{alt:"captchaUrl",src:n})}),n&&Object(ve.jsx)("div",{children:Object(Xe.c)("Symbols from image","captcha",[Ze.b],Xe.a)}),t&&Object(ve.jsx)("div",{className:Ye.a.formSummaryError,children:t}),Object(ve.jsx)("div",{children:Object(ve.jsx)("button",{children:"Login"})})]})})),et=function(){var e=Object(Oe.d)((function(e){return e.auth.captchaUrl})),t=Object(Oe.d)((function(e){return e.auth.isAuth})),n=Object(Oe.c)();return t?Object(ve.jsx)(We.a,{to:"/profile"}):Object(ve.jsxs)("div",{children:[Object(ve.jsx)("h1",{children:"Login"}),Object(ve.jsx)($e,{onSubmit:function(e){var t,r,c,a;n((t=e.email,r=e.password,c=e.rememberMe,a=e.captcha,function(){var e=Object(d.a)(l.a.mark((function e(n){var i,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.login(t,r,c,a);case 2:(i=e.sent).resultCode===b.b.Success?n(k()):(i.resultCode===b.a.CaptchaIsRequired&&n(N()),s=i.messages.length>0?i.messages[0]:"Some error",n(Object(C.a)("loginForm",{_error:s})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},captchaUrl:e})]})};function tt(e){return function(t){return Object(ve.jsx)(B.Suspense,{fallback:Object(ve.jsx)("div",{children:"Loading..."}),children:Object(ve.jsx)(e,Object(j.a)({},t))})}}var nt=J.a.lazy((function(){return n.e(4).then(n.bind(null,391))})),rt=J.a.lazy((function(){return n.e(3).then(n.bind(null,390))})),ct=J.a.lazy((function(){return n.e(5).then(n.bind(null,392))})),at=tt(nt),it=tt(rt),st=tt(ct),ut=ce.a.Content,ot=ce.a.Footer,lt=ce.a.Sider,dt=function(e){Object(Y.a)(n,e);var t=Object($.a)(n);function n(){return Object(Z.a)(this,n),t.apply(this,arguments)}return Object(Q.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.inicialization?Object(ve.jsxs)(ce.a,{children:[Object(ve.jsxs)(lt,{breakpoint:"lg",collapsedWidth:"0",onBreakpoint:function(e){console.log(e)},onCollapse:function(e,t){console.log(e,t)},children:[Object(ve.jsx)("div",{className:"logo",children:Object(ve.jsx)("img",{src:ee,alt:"",style:{width:60,marginLeft:60}})}),Object(ve.jsxs)(ae.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["1"],style:{marginTop:0,position:"sticky",top:"0"},children:[Object(ve.jsx)(ae.a.Item,{icon:Object(ve.jsx)(ie.a,{}),children:Object(ve.jsx)("div",{className:ne.a.item,children:Object(ve.jsx)(re.b,{to:"/profile",children:"Profile"})})},"1"),Object(ve.jsx)(ae.a.Item,{icon:Object(ve.jsx)(se.a,{}),children:Object(ve.jsx)("div",{className:ne.a.item,children:Object(ve.jsx)(re.b,{to:"/dialogs",children:"Messages"})})},"2"),Object(ve.jsx)(ae.a.Item,{icon:Object(ve.jsx)(ue.a,{}),children:Object(ve.jsx)("div",{className:ne.a.item,children:Object(ve.jsx)(re.b,{to:"/users",children:"Friends"})})},"3"),Object(ve.jsx)(ae.a.Item,{icon:Object(ve.jsx)(oe.a,{}),children:Object(ve.jsx)("div",{className:ne.a.item,children:Object(ve.jsx)("a",{children:"Music"})})},"4"),Object(ve.jsx)(ae.a.Item,{icon:Object(ve.jsx)(le.a,{}),children:Object(ve.jsx)("div",{className:ne.a.item,children:Object(ve.jsx)(re.b,{to:"/chat",children:"Chat"})})},"5")]})]}),Object(ve.jsxs)(ce.a,{children:[Object(ve.jsx)(xe,{}),Object(ve.jsx)(ut,{style:{margin:"24px 16px 0"},children:Object(ve.jsx)("div",{className:"site-layout-background",style:{padding:24,minHeight:360},children:Object(ve.jsx)("div",{className:"content",children:Object(ve.jsxs)(We.d,{children:[Object(ve.jsx)(We.b,{exact:!0,path:"/",render:function(){return tt(rt)}}),Object(ve.jsx)(We.b,{path:"/profile/:userId?",render:function(){return Object(ve.jsx)(it,{})}}),Object(ve.jsx)(We.b,{path:"/dialogs",render:function(){return Object(ve.jsx)(at,{})}}),Object(ve.jsx)(We.b,{path:"/users",render:function(){return Object(ve.jsx)(Be,{})}}),Object(ve.jsx)(We.b,{path:"/chat",render:function(){return Object(ve.jsx)(st,{})}}),Object(ve.jsx)(We.b,{path:"/login",render:function(){return Object(ve.jsx)(et,{})}})]})})})}),Object(ve.jsx)(ot,{style:{textAlign:"center"},children:"Network Design \xa92022 Created by Person"})]})]}):Object(ve.jsx)(qe.a,{})}}]),n}(J.a.Component),ft=Object(c.d)(We.h,Object(Oe.b)((function(e){return{inicialization:e.app.inicialization}}),{initializeApp:function(){return function(e){var t=e(k());Promise.all([t]).then((function(){e(A())}))}}}))(dt);X.a.render(Object(ve.jsx)(re.a,{basename:"/github.react",children:Object(ve.jsx)(Oe.a,{store:q,children:Object(ve.jsx)(ft,{})})}),document.getElementById("root")),r()},54:function(e,t,n){e.exports={human:"Users_human__2F_ZC",avatar:"Users_avatar__gHOlh",users:"Users_users__2Iv27",item:"Users_item__2_u8d",but:"Users_but__1pH-Q",selectedPage:"Users_selectedPage__J63sh"}},67:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return j})),n.d(t,"c",(function(){return b}));var r=n(7),c=n(139),a=n(146),i=n.n(a),s=n(140),u=n(1),o=["input","meta","children"],l=["input","meta","children"],d=function(e){var t=e.meta,n=t.touched,r=t.error,c=e.children,a=n&&r;return Object(u.jsxs)("div",{className:i.a.formControl+" "+(a?i.a.error:" "),children:[c,a&&Object(u.jsx)("span",{children:r})]})},f=function(e){var t=e.input,n=(e.meta,e.children,Object(c.a)(e,o));return Object(u.jsx)(d,Object(r.a)(Object(r.a)({},e),{},{children:Object(u.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},j=function(e){var t=e.input,n=(e.meta,e.children,Object(c.a)(e,l));return Object(u.jsx)(d,Object(r.a)(Object(r.a)({},e),{},{children:Object(u.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))};function b(e,t,n,c){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(u.jsxs)("div",{children:[Object(u.jsx)(s.a,Object(r.a)({placeholder:e,name:t,validate:n,component:c},a))," ",i]})}},81:function(e,t,n){e.exports={item:"Navbar_item__zmMk4"}},82:function(e,t,n){e.exports={pageNumber:"Pagination_pageNumber__3OfQM",selectedPage:"Pagination_selectedPage__sPSVP",paginator:"Pagination_paginator__3EzHz",button:"Pagination_button__U0lwD"}}},[[369,1,2]]]);
//# sourceMappingURL=main.41202455.chunk.js.map
(this.webpackJsonpmovie_project=this.webpackJsonpmovie_project||[]).push([[0],{124:function(e,n,t){e.exports=t.p+"static/media/logo.ed0f1a6a.svg"},138:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),c=t(32),o=t.n(c),l=(t(98),t(17)),i=t(27),u=(t(55),t(88)),s=t(13),m=t(8);function p(){var e=Object(s.a)(["\n    background:#000;\n    color:#fff;\n    text-align:center;\n    padding:20px;\n    a{\n        text-decoration:none;\n        margin-left:5px;\n        color:#FBB124;\n    }\n    a:hover{\n        opacity:0.9;\n    }\n"]);return p=function(){return e},e}var f=m.default.div(p()),d=function(e){return r.a.createElement("div",null,r.a.createElement(f,null,"Made by",r.a.createElement(l.b,{to:"https://github.com/saraswatiti"},"Saraswati Timsina")))},g=t(89),b=t(7),h=t(139),E=t(140),v=t(56),x=t(62),w=t(87),j=t(77),y=t(12),O=t.n(y);function k(){var e=Object(s.a)(['\n    button{\n        background:#000;\n        color:#fff;\n        display:inline-block;\n        padding:5px 15px;\n        color:#fff;\n        font-family: "Lora", serif; \n        font-size: 1rem;\n        border:0;\n        margin-right:5px;\n    }\n    button:hover{\n        background:#FBB124;\n        transition:all 0.67s ease-in-out;\n    }\n']);return k=function(){return e},e}var S=m.default.div(k()),N=t(9),C=function(e){for(var n,t=e.totalPages,a=e.pageItem,c=e.currentPage,o=c-2,l=c+2+1,i=[],u=[],s=1;s<=t;s++)(1==s||s==t||s>=o&&s<l)&&i.push(s);console.log(i);for(var m=0,p=i;m<p.length;m++){var f=p[m];n&&(f-n===2?u.push(n+1):f-n!==1&&u.push("...")),u.push(f),n=f}return console.log(u),r.a.createElement("ul",{className:"pagination"},u.map((function(e){return r.a.createElement("li",{key:e,className:"page-item"},r.a.createElement("button",{onClick:function(){return a(e)},className:"page-link"},e))})))},_=function(e){e.Props;var n=Object(a.useState)([]),t=Object(b.a)(n,2),c=t[0],o=t[1],i=Object(a.useState)(1),u=Object(b.a)(i,2),s=u[0],m=u[1],p=Object(a.useState)(1),f=Object(b.a)(p,2),d=f[0],g=f[1];Object(a.useEffect)((function(){O.a.get("".concat(N.b,"/movie/now_playing?api_key=").concat(N.a,"&language=en-US&page=").concat(s)).then((function(e){console.log(e.data),g(e.data.total_pages),o(e.data.results)})).catch((function(e){return console.error(e)}))}),[s]);return r.a.createElement(j.a,null,r.a.createElement(h.a,{className:"mt-5"},r.a.createElement("div",{className:"clearfix mt-5 mb-2"},r.a.createElement("h3",{className:"float-left"},"Now playing")),r.a.createElement(E.a,null,c.map((function(e){return r.a.createElement(v.a,{key:e.id,md:"3",className:"mb-3"},r.a.createElement(l.b,{to:"/movies/".concat(e.id)},r.a.createElement(x.a,null,r.a.createElement(x.a.Img,{variant:"top",src:"https://image.tmdb.org/t/p/w500/".concat(e.poster_path)}),r.a.createElement(x.a.Body,null,r.a.createElement("h3",null,e.title)))))}))),r.a.createElement(S,{className:"clearfix mt-5 mb-2"},r.a.createElement(w.a,{onClick:function(){s>1?m(s-1):alert("this is first page Please click the Next button")}},"Prev"),r.a.createElement(w.a,{onClick:function(){s<d&&m(s+1)}},"Next")),c.length>0&&r.a.createElement(C,{totalPages:d,currentPage:s,pageItem:function(e){m(e)}})))},B=t(31),P=t(23),I=function(e){return r.a.createElement("div",null,"Result Notfound!")},F=t(75),z=function(e){var n=Object(a.useState)([]),t=Object(b.a)(n,2),c=t[0],o=t[1];return Object(a.useEffect)((function(){var n=F.parse(e.location.search,{ignoreQueryPrefix:!0});n.q?O.a.get("".concat(N.b,"/search/movie?api_key=").concat(N.a,"&query=").concat(n.q)).then((function(e){return o(e.data.results)})).catch((function(e){return console.error(e)})):e.history.push("/")}),[e.location.search]),console.log(e),r.a.createElement(P.a,e,r.a.createElement("div",{className:"mb-5 mt-5"},c.length>0?r.a.createElement(B.a,{moviesItems:c}):r.a.createElement(I,null)))},G=function(e){var n=Object(a.useState)([]),t=Object(b.a)(n,2),c=t[0],o=t[1],l=Object(a.useState)(1),i=Object(b.a)(l,2),u=i[0],s=(i[1],Object(a.useState)(1)),m=Object(b.a)(s,2),p=(m[0],m[1]);Object(a.useEffect)((function(){O.a.get("".concat(N.b,"/movie/now_playing?api_key=").concat(N.a,"&language=en-US&page=").concat(u)).then((function(e){p(e.data.total_pages),o(e.data.results)})).catch((function(e){return console.error(e)}))}),[u]);return r.a.createElement(P.a,e,r.a.createElement("div",{className:"mb-5 mt-5"},c.length>0?r.a.createElement(B.a,{moviesItems:c}):r.a.createElement(I,null)))},q=t(147);function T(){var e=Object(s.a)(["\n    width:75%;\n    margin:50px auto;\n    padding:30px;\n    font-family: \"Lora\", serif;\n    box-shadow:0 0 10px rgba(0,0,0,0.2);\n    h1{\n        margin:0 auto 15px;\n        text-align:center;\n    }\n    input{\n        display:block;\n        width:100%;\n        margin-bottom:15px;\n        height:41px;\n        padding:15px;\n    }\n    input[type='submit']{\n        width:auto;\n        height: auto;\n        padding: 5px 15px;\n        border-radius: 50px;\n        display: inline-block;\n        margin-right: 15px;\n    }\n    input:focus{\n        outline:0;\n        box-shadow:none;\n    }\n"]);return T=function(){return e},e}var U=m.default.div(T()),A=function(e){return r.a.createElement(P.a,e,r.a.createElement(h.a,null,r.a.createElement(U,null,r.a.createElement("h1",null,"Password Change"),r.a.createElement(q.a,null,r.a.createElement(q.a.Group,null,r.a.createElement(q.a.Control,{type:"password",placeholder:"New Password"})),r.a.createElement(q.a.Group,null,r.a.createElement(q.a.Control,{type:"password",placeholder:"Confirm Password"})),r.a.createElement("input",{type:"submit",value:"Change Password"})))))},D=function(e){var n=Object(a.useState)(),t=Object(b.a)(n,2),c=t[0],o=t[1],l=Object(a.useState)(),i=Object(b.a)(l,2),u=i[0],s=i[1],m=Object(a.useState)(),p=Object(b.a)(m,2),f=p[0],d=p[1],g=Object(a.useState)(!1),E=Object(b.a)(g,2),v=(E[0],E[1]),x=Object(a.useState)(""),w=Object(b.a)(x,2),j=(w[0],w[1]);return r.a.createElement(P.a,e,r.a.createElement(h.a,null,r.a.createElement(U,null,r.a.createElement(q.a,{onSubmit:function(e){e.preventDefault(),j(""),v(!1),O.a.post("".concat(N.b,"/authentication/token/new?api_key=").concat(N.a),{userName:c,password:f,email:u}).then((function(e){console.log(e.data),v(!0)})).catch((function(e){e.res&&e.res.data&&e.toString(),j(),v(!1)}))}},r.a.createElement("h1",null,"Sign Up Form"),r.a.createElement(q.a.Group,null,r.a.createElement(q.a.Control,{type:"text",placeholder:"UserName",onChange:function(e){o(e.target.value)}})),r.a.createElement(q.a.Group,null,r.a.createElement(q.a.Control,{type:"email",placeholder:"Email",onChange:function(e){s(e.target.value)}})),r.a.createElement(q.a.Group,null,r.a.createElement(q.a.Control,{type:"password",placeholder:"Password",onChange:function(e){d(e.target.value)}})),r.a.createElement("input",{type:"submit",value:"Sign Up"})))))},H=function(e){return r.a.createElement("div",null,"UserPortfolio")};function L(){var e=Object(s.a)(["\n    ul{\n        list-style:none;\n    }\n    li{\n        display:inline-block;\n    }\n    li a{\n        padding:3px 15px;\n        background:#FBB124;\n        color:#000;\n        border:1px solid #FBB124;\n        border-radius:25px;\n        margin:5px;\n        display:inline-block;\n        text-decoration:none;\n    }\n"]);return L=function(){return e},e}var M=m.default.div(L()),J=function(e){e.catId;var n=Object(a.useState)([]),t=Object(b.a)(n,2),c=t[0],o=t[1];return Object(a.useEffect)((function(){O.a.get("\n ".concat(N.b,"/discover/movie?api_key=").concat(N.a,"&with_genres=80")).then((function(e){return o(e.data.results)})).catch((function(e){return console.error(e)}))}),[]),r.a.createElement(B.a,{moviesItems:c})},Q=function(e){var n=Object(a.useState)([]),t=Object(b.a)(n,2),c=t[0],o=t[1],i=Object(a.useState)(null),u=Object(b.a)(i,2),s=u[0],m=u[1];Object(a.useEffect)((function(){O.a.get("\n    ".concat(N.b,"/genre/movie/list?api_key=").concat(N.a,"&language=en-US")).then((function(e){return o(e.data.genres)})).catch((function(e){return console.error(e)}))}),[]);var p=function(e){m(e)};return r.a.createElement(P.a,e,r.a.createElement(h.a,null,r.a.createElement("h2",null,"Movies Genres"),r.a.createElement(M,null,r.a.createElement("ul",null,c.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(l.b,{to:"genres/".concat(e.id),onClick:p},e.name))})))),r.a.createElement(J,{catId:s})))},W=r.a.lazy((function(){return Promise.all([t.e(3),t.e(4)]).then(t.bind(null,171))})),R=r.a.lazy((function(){return Promise.all([t.e(6),t.e(5)]).then(t.bind(null,172))}));var $=function(e){return r.a.createElement("div",{className:"App"},r.a.createElement(l.a,{basename:"/"},r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(u.CubeGrid,{color:"red",size:"60px",duration:"1.5s"})},r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",exact:!0,component:W}),r.a.createElement(i.a,{path:"/movies/:id",component:R}),r.a.createElement(i.a,{path:"/nowplaying",component:G}),r.a.createElement(i.a,{path:"/pages/nowplay_grid",component:_}),r.a.createElement(i.a,{path:"/search",component:z}),r.a.createElement(i.a,{path:"/password-change",component:A}),r.a.createElement(i.a,{path:"/signup",component:D}),r.a.createElement(i.a,{path:"/User-login-page",component:H}),r.a.createElement(i.a,{path:"/Genre",component:Q}),r.a.createElement(i.a,{path:"genres/:id",component:J}))),r.a.createElement(d,null),r.a.createElement(g.TinyButton,{ContainerClassName:"AnyClassForContainer",TransitionClassName:"AnyClassForTransition",EasingType:"easeInCubic"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},23:function(e,n,t){"use strict";var a=t(1),r=t.n(a),c=t(55);n.a=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,e),e.children)}},31:function(e,n,t){"use strict";var a=t(1),r=t.n(a),c=t(139),o=t(140),l=t(56),i=t(74);n.a=function(e){var n=e.moviesItems;return r.a.createElement(a.Fragment,null,r.a.createElement(c.a,null,r.a.createElement(o.a,null,n.map((function(e){return r.a.createElement(l.a,{className:"col-lg-3 col-sm-12"},r.a.createElement(i.a,{movie:e}))})))))}},55:function(e,n,t){"use strict";var a=t(1),r=t.n(a),c=t(40),o=t.n(c),l=t(54),i=t(7),u=t(139),s=t(148),m=t(149),p=t(146),f=(t(100),t(13)),d=t(8);function g(){var e=Object(f.a)(["\n\nposition: absolute;\ntop: 50px;\nleft:0;\nz-index:9;\nul{\npadding: 0;\nbackground: #fff;\nlist-style: none;\nbox-shadow: 0 0 1px rgba(0,0,0,0.2); \noverflow-y: scroll;\nheight: 300px; \n}\nfigure{\n    margin-right:15px;\n}\nimg{\n    width:150px;\n}\nli{\n    display:flex;\n    font-size:20px;\n    align-items:center;\n}\n"]);return g=function(){return e},e}function b(){var e=Object(f.a)(['\nbackground-color:#FBB124;\nfont-family: "Lora", serif;\n.search-section{\n    background-color:#fff;\n    border-radius:100px;\n    margin-left:40px;\n    height:40px;\n    padding: 0 20px;\n    input{\n        border:0;\n    }\n    input:focus{\n        box-shadow:none;\n    }\n}\n.navbar-light .navbar-nav .nav-link{\n    color:#000;\n}\n\n']);return b=function(){return e},e}var h=d.default.div(b()),E=d.default.div(g()),v=t(17),x=t(9),w=t(34),j=t(147),y=t(82),O=function(e){var n=e.submitHandle,t=e.inputHandle;return r.a.createElement(a.Fragment,null,r.a.createElement(j.a,{inline:!0,onSubmit:n,className:"search-section"},r.a.createElement(w.c,null),r.a.createElement(y.a,{type:"text",placeholder:"Search",className:" mr-sm-2",onChange:t})))},k=t(12),S=t.n(k),N=t(73),C=function(e,n){var t=Object(a.useState)(e),r=Object(i.a)(t,2),c=r[0],o=r[1];return Object(a.useEffect)((function(){var t=setTimeout((function(){o(e)}),n);return function(){clearTimeout(t)}}),[e,n]),c},_=(t(31),function(e){var n=e.movies;return r.a.createElement(E,null,r.a.createElement("ul",null,n.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("figure",null,r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500/".concat(e.poster_path),alt:e.title})),e.title)}))))}),B=t(75),P=function(e){var n=Object(a.useState)([]),c=Object(i.a)(n,2),f=c[0],d=c[1],g=Object(a.useState)(""),b=Object(i.a)(g,2),E=b[0],j=b[1],y=Object(a.useState)(!1),k=Object(i.a)(y,2),P=k[0],I=k[1],F=Object(a.useState)(!0),z=Object(i.a)(F,2),G=z[0],q=z[1],T=C(E,500);Object(a.useEffect)((function(){T?(I(!0),U(T).then((function(e){I(!1),d(e)}))):d([])}),[T]);var U=function(){var e=Object(l.a)(o.a.mark((function e(n){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.get("".concat(x.b,"/search/movie?api_key=").concat(x.a,"&query=").concat(n));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){var e=B.parse({ignoreQueryPrefix:!0});S.a.post("https://api.themoviedb.org/3/authentication/session/new?api_key=8dcc478bc8ac0518dd5d7b133c69b56b",{request_token:e.request_token});q(!1)}),[G]);var A=function(){var e=Object(l.a)(o.a.mark((function e(n){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,S.a.get("".concat(x.b,"/authentication/token/new?api_key=").concat(x.a));case 3:t=e.sent,a=t.data.request_token,window.location="https://www.themoviedb.org/authenticate/".concat(a,"?redirect_to=https://saraswatiti.github.io/movie_project/#/");case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return r.a.createElement(h,null,r.a.createElement(u.a,null,r.a.createElement(s.a,{expand:"lg"},r.a.createElement(v.b,{to:"/"},r.a.createElement("img",{src:t(124),alt:"logo"})),r.a.createElement(s.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(s.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(O,{submitHandle:function(n){n.preventDefault(),e.history.push({pathname:"/search",search:"?q=".concat(E)})},inputHandle:function(e){j(e.target.value)},value:E}),P&&r.a.createElement(_,{movies:f}),r.a.createElement(m.a,{className:"ml-auto"},r.a.createElement(v.b,{to:"/",className:"nav-link"},"Home"),r.a.createElement(v.b,{to:"/Genre",className:"nav-link"},"movies"),r.a.createElement(p.a,{title:"Dropdown",id:"basic-nav-dropdown"},r.a.createElement(p.a.Item,{href:"#action/3.1"},"Action"),r.a.createElement(p.a.Item,{href:"#action/3.2"},"Another action"),r.a.createElement(p.a.Item,{href:"#action/3.3"},"Something"),r.a.createElement(p.a.Divider,null),r.a.createElement(p.a.Item,{href:"#action/3.4"},"Separated link")),r.a.createElement("a",{href:"#",onClick:A},r.a.createElement(N.a,null,r.a.createElement(w.b,null))))))))};n.a=function(e){return r.a.createElement("div",{className:"main-header"},r.a.createElement(P,e))}},73:function(e,n,t){"use strict";t.d(n,"b",(function(){return l})),t.d(n,"a",(function(){return i}));var a=t(13),r=t(8);function c(){var e=Object(a.a)(["\n    background:#000;\n    display: inline-block;\n    width: 25px;\n    height: 25px;\n    line-height: 20px;\n    text-align: center;\n    border-radius: 50%;\n    margin-top: 8px;\nsvg{\n    font-size:13px;\n    color:#fff;\n}\n"]);return c=function(){return e},e}function o(){var e=Object(a.a)(['\ntext-align:center;\nmargin:0 -15px;\n.card{\n    margin-bottom:30px;\n    text-align:left;\n}\nbutton{\n    text-align:center;\n    margin:20px 0 50px;\n    font-family: "Lora", serif; \n    font-weight:600;\n} \n']);return o=function(){return e},e}var l=r.default.div(o()),i=r.default.div(c())},74:function(e,n,t){"use strict";var a=t(1),r=t.n(a),c=t(62),o=t(141),l=t(17),i=t(34);n.a=function(e){var n=e.movie;return r.a.createElement(a.Fragment,null,r.a.createElement(c.a,null,r.a.createElement(l.b,{to:"/movies/".concat(n.id)},r.a.createElement(o.a,null,r.a.createElement(c.a.Img,{variant:"top",src:"https://image.tmdb.org/t/p/w500/".concat(n.poster_path)})),r.a.createElement(c.a.Body,null,r.a.createElement("h3",null,n.title),r.a.createElement("div",{className:"movie-content"},r.a.createElement("span",null,function(e){if(e)return e.split("-")[0]}(n.release_date)),r.a.createElement("span",{className:"float-right"},r.a.createElement(i.a,null)))))))}},77:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t(13);function r(){var e=Object(a.a)(['\nh1,h2,h3{\n    color:#000;\n   font-family: "Lora", serif; \n}\nh2{\n    font-size: 1.7rem;  \n    font-weight:500;\n}\nh3{\n    font-size:1.3rem;\n}\nh3:hover{\n    color:#FBB124;\n}\na:hover{\n    text-decoration:none;\n    transition:all 0.67s ease-in-out;\n}\n.slick-arrow{\n    background-color:#FBB124;\n    width:30px;\n    height:30px;\n    border-radius:100%;\n    transition:all 0.67s ease-in-out;\n}\n.slick-arrow:hover,\n.slick-arrow:active,\n.slick-arrow:focus{\n    background-color:#FBB124;\n    transition:all 0.67s ease-in-out;\n}\n.figure{\n    overflow:hidden;\n    margin:0;\n}\nimg:hover{\n    transform: scale(1.1);\n    transition:all 0.67s ease-in-out;\n}\n']);return r=function(){return e},e}var c=t(8).default.div(r())},9:function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"a",(function(){return r}));var a="https://api.themoviedb.org/3",r="8dcc478bc8ac0518dd5d7b133c69b56b"},93:function(e,n,t){e.exports=t(138)},98:function(e,n,t){}},[[93,1,2]]]);
//# sourceMappingURL=main.3ac98025.chunk.js.map
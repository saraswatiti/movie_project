(this.webpackJsonpmovie_project=this.webpackJsonpmovie_project||[]).push([[4],{171:function(e,a,t){"use strict";t.r(a);var n=t(40),c=t.n(n),l=t(54),r=t(7),s=t(1),o=t.n(s),m=t(9),i=t(12),u=t.n(i),p=t(31),f=t(139),E=t(87),b=t(23),v=t(152),g=t.n(v),d=(t(168),t(169),t(74)),h=t(56),j=function(e){var a=e.movies,t={dots:!1,infinite:!0,speed:500,slidesToShow:4,slidesToScroll:1,arrow:!0};return o.a.createElement(s.Fragment,null,o.a.createElement(g.a,t,a.map((function(e){return o.a.createElement(h.a,null,o.a.createElement(d.a,{movie:e}))}))))},w=t(77),y=t(17),N=t(73);a.default=function(e){var a=Object(s.useState)([]),t=Object(r.a)(a,2),n=t[0],i=t[1],v=Object(s.useState)([]),g=Object(r.a)(v,2),d=g[0],h=g[1],O=Object(s.useState)([]),S=Object(r.a)(O,2),k=S[0],x=S[1],_=Object(s.useState)([]),U=Object(r.a)(_,2),A=(U[0],U[1]);Object(s.useEffect)((function(){I()}),[]);var I=function(){var e=Object(l.a)(c.a.mark((function e(){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.all([u.a.get("".concat(m.b,"/movie/now_playing?api_key=").concat(m.a,"&language=en-US&page=1")),u.a.get("".concat(m.b,"/movie/popular?api_key=").concat(m.a,"&language=en-US&page=1")),u.a.get("".concat(m.b,"/movie/top_rated?api_key=").concat(m.a,"&language=en-US&page=1"))]);case 2:a=e.sent,i(a[0].data.results),h(a[1].data.results),x(a[2].data.results),A(a[0].data.results);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return o.a.createElement(b.a,e,o.a.createElement(w.a,null,o.a.createElement(f.a,null,o.a.createElement("div",{className:"clearfix mt-5 mb-2"},o.a.createElement("h2",{className:"float-left"},"Now playing"),o.a.createElement(y.b,{to:"/nowplaying",className:"float-right text-uppercase"},"see all")),o.a.createElement(j,{movies:n}),o.a.createElement("div",{className:"clearfix mt-5 mb-2"},o.a.createElement("h2",{className:"float-left"},"Now Popular"),o.a.createElement(y.b,{to:"/",className:"float-right text-uppercase"},"see all")),o.a.createElement(j,{movies:d}),o.a.createElement("div",{className:"clearfix mt-5 mb-2"},o.a.createElement("h2",{className:"float-left"},"Most Popular")),Array.isArray(k)?o.a.createElement(N.b,null,o.a.createElement(p.a,{moviesItems:k.slice(0,8)}),o.a.createElement(E.a,{onClick:function(){e.history.push("/nowplaying")}},"Load More")):o.a.createElement(p.a,{moviesItems:k}))))}}}]);
//# sourceMappingURL=4.d9a83c1b.chunk.js.map
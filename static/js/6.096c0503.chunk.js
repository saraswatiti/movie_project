(this.webpackJsonpmovie_project=this.webpackJsonpmovie_project||[]).push([[6],{153:function(e,t,a){"use strict";a.r(t);var n=a(117),r=a.n(n),l=a(119),c=a(48),o=a(1),s=a.n(o),i=a(104),m=a.n(i),u=a(97),p=a(57),d=a(154),g=a(113),f=a.n(g),E=(a(115),a(116),a(34));function h(){var e=Object(E.a)(['\nh3{\n    color:#000;\n   font-family: "Lora", serif; \n   font-size: 1.3rem;\n}\nh3:hover{\n    color:#FBB124;\n}\na:hover{\n    text-decoration:none;\n}\n.slick-arrow{\n    background-color:#FBB124;\n    width:30px;\n    height:30px;\n    border-radius:100%;\n}\n.slick-arrow:hover,\n.slick-arrow:active,\n.slick-arrow:focus{\n    background-color:#FBB124;\n}\n']);return h=function(){return e},e}var v=a(10).default.div(h()),b=a(24),w=function(e){var t=e.movies,a={dots:!1,infinite:!0,speed:500,slidesToShow:4,slidesToScroll:1,arrow:!0};return s.a.createElement(o.Fragment,null,s.a.createElement(v,null,s.a.createElement(u.a,null,s.a.createElement("div",{className:"clearfix mt-5 mb-2"},s.a.createElement("h3",{className:"float-left"},"Now playing"),s.a.createElement(b.b,{to:"/",className:"float-right text-uppercase"},"see all")),s.a.createElement(f.a,a,t.map((function(e){return s.a.createElement(o.Fragment,{key:e.id},s.a.createElement(p.a,null,s.a.createElement(b.b,{to:"/movies/".concat(e.id)},s.a.createElement(d.a,{key:e.id},s.a.createElement(d.a.Img,{variant:"top",src:"https://image.tmdb.org/t/p/w500/".concat(e.poster_path)}),s.a.createElement(d.a.Body,null,s.a.createElement("h3",null,e.title))))))}))))))},k=function(e){var t=e.states,a={dots:!1,infinite:!0,speed:500,slidesToShow:4,slidesToScroll:1,arrow:!0};return s.a.createElement(o.Fragment,null,s.a.createElement(v,null,s.a.createElement(u.a,null,s.a.createElement("div",{className:"clearfix mt-5 mb-2"},s.a.createElement("h3",{className:"float-left"},"Popular"),s.a.createElement(b.b,{to:"/",className:"float-right text-uppercase"},"see all")),s.a.createElement(f.a,a,t.map((function(e){return s.a.createElement(o.Fragment,{key:e.id},s.a.createElement(p.a,null,s.a.createElement(b.b,{to:"/movies/".concat(e.id)},s.a.createElement(d.a,null,s.a.createElement(d.a.Img,{variant:"top",src:"https://image.tmdb.org/t/p/w500/".concat(e.poster_path)}),s.a.createElement(d.a.Body,null,s.a.createElement("h3",null,e.title))))))}))))))};t.default=function(e){var t=Object(o.useState)([]),a=Object(c.a)(t,2),n=a[0],i=a[1],u=Object(o.useState)([]),p=Object(c.a)(u,2),d=p[0],g=p[1],f=Object(o.useState)([]),E=Object(c.a)(f,2),h=(E[0],E[1]);Object(o.useEffect)((function(){v()}),[]);var v=function(){var e=Object(l.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="8dcc478bc8ac0518dd5d7b133c69b56b",e.next=3,m.a.all([m.a.get("https://api.themoviedb.org/3/movie/now_playing?api_key=".concat(t,"&language=en-US&page=1")),m.a.get("https://api.themoviedb.org/3/movie/popular?api_key=".concat(t,"&language=en-US&page=1")),m.a.get("https://api.themoviedb.org/3/movie/top_rated?api_key=".concat(t,"&language=en-US&page=1"))]);case 3:a=e.sent,console.log(a[1].data.results),i(a[0].data.results),g(a[1].data.results),h(a[2].data.results);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return s.a.createElement(o.Fragment,null,s.a.createElement(w,{movies:n}),s.a.createElement(k,{states:d}))}}}]);
//# sourceMappingURL=6.096c0503.chunk.js.map
(this.webpackJsonptesting=this.webpackJsonptesting||[]).push([[0],{130:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(34),s=c.n(r),i=c(65),o=c.n(i),j=c(81),l=c(14),u=c(13),b=c(85),d=c.n(b),O=c(66),h=c.n(O),p=c(184),x=c(181),f=c(2),v=function(e){return Object(f.jsxs)(p.a,{className:"card__item",children:["=           ",Object(f.jsx)("img",{src:e.content.image}),"=           ",Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{className:"card__title",children:[Object(f.jsx)("h1",{children:e.content.title}),Object(f.jsx)(x.a,{label:e.content.price+"$",variant:"outlined"})]}),Object(f.jsx)("p",{children:e.content.body})]})]})},g=c(186),m=c(171),y=c(176),S=function(e){var t=e.posts;return Object(f.jsxs)("div",{className:h.a.card,children:[Object(f.jsx)(g.a,{className:h.a.card__list,children:t.map((function(e){return Object(f.jsx)(v,{content:e},e.id)}))}),Object(f.jsx)(m.a,{spacing:2,children:Object(f.jsx)(y.a,{count:10,showFirstButton:!0,showLastButton:!0})})]})},_=c(69),C=c(177),N=function(e){return Object(f.jsx)("div",{children:Object(f.jsx)(C.a,Object(_.a)(Object(_.a)({variant:"outlined"},e),{},{placeholder:e.placeholder}))})},w=c(179),k=c(174),B=c(178),M=function(e){var t=e.options,c=e.defaultValue,n=e.userChose,a=e.UserChange;return Object(f.jsx)("div",{children:Object(f.jsx)(w.a,{children:Object(f.jsxs)(k.a,{value:n,onChange:function(e){return a(e.target.value)},children:[Object(f.jsx)(B.a,{disabled:!0,children:c}),t.map((function(e){return Object(f.jsx)(B.a,{value:e.type,children:e.category},e.type)}))]})})})},E=c(189),J=c(190),U=c(183);var V=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(""),s=Object(u.a)(r,2),i=s[0],b=s[1],O=Object(n.useState)(""),h=Object(u.a)(O,2),p=h[0],x=h[1],v=Object(n.useState)(!0),g=Object(u.a)(v,2),m=g[0],y=g[1],_=Object(n.useState)(0),C=Object(u.a)(_,2),w=C[0],k=C[1],B=Object(n.useState)(10),V=Object(u.a)(B,1)[0],A=Object(n.useState)(1),D=Object(u.a)(A,1)[0];Object(n.useEffect)((function(){!function(){P.apply(this,arguments)}()}),[]);var F=function(e){b(e),a(Object(l.a)(c).sort((function(t,c){return t[e].localeCompare(c[e])})))},I=Object(n.useMemo)((function(){return c.filter((function(e){return e.title.includes(p)}))}),[p,F]),L=[];function P(){return P=Object(j.a)(o.a.mark((function e(){var t,c,n,r,s,i=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:V,c=i.length>1&&void 0!==i[1]?i[1]:D,e.prev=2,e.next=5,d.a.get("http://localhost:3000/cars",{params:{_limit:t,_page:c}});case 5:for(n=e.sent,a(n.data),r=n.headers["x-total-count"],Math.ceil(r/V),s=0;s<w;s++)L.push(s+1);k(L),console.log("array of pages:",L),y(!1),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(2),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[2,15]])}))),P.apply(this,arguments)}return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(E.a,{children:Object(f.jsxs)("div",{className:"filter",children:[Object(f.jsx)(N,{userChose:p,placeholder:"Serach",onChange:function(e){return x(e.target.value)}}),Object(f.jsx)(M,{userChose:i,UserChange:F,options:[{type:"title",category:"Name"},{type:"body",category:"Description"},{type:"price",category:"Price"}],defaultValue:"Sort by:"})]})}),m?Object(f.jsx)(U.a,{}):Object(f.jsx)(S,{posts:I}),Object(f.jsx)("div",{className:"cards__field",children:L.map((function(e){return Object(f.jsx)(J.a,{children:e})}))})]})};s.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(V,{})}),document.getElementById("root"))},66:function(e,t,c){}},[[130,1,2]]]);
//# sourceMappingURL=main.5af792aa.chunk.js.map
"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[414],{3527:function(n,e,t){t.r(e),t.d(e,{default:function(){return E}});var i,r,o,a=t(2791),c=t(168),u=t(6031),s=u.ZP.div(i||(i=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 1.6rem 12%;\n  justify-content: space-around;\n  overflow: auto;\n  /* gap: 1.4rem; */\n  /* mobile styles */\n  @media only screen and (max-width: 768px) {\n    padding: 1.6rem 4.2%;\n  }\n"]))),l=t(1413),d=[{id:0,content:"\u201cOrgans are like modules,\n    nerves are the compiler,\n    brain is the programmer,\n    and you are the user\u201d"},{id:1,content:"\u201cTweet less, code more\u201d"},{id:2,content:"\u201cThe longer you wait, the better you get\u201d"},{id:3,content:"\u201cThere cannot exist a Steve Jobs without a Steve Wozniak\u201d"}],f=t(885),m=t(4569),h=t.n(m),p=t(3830),k=t.p+"static/media/heart.1448196c32267c432b21.png",g=t.p+"static/media/heart-unfilled.0a2f928912c22b3f02c1.png",x=t(3535),v=u.ZP.div(r||(r=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  animation: "," 1s;\n  gap: 0.14rem;\n  span {\n    font-family: ",";;\n    font-size: 1.4rem;\n    opacity: 0.84;\n    text-align: center;\n    color: ",";\n  }\n  div {\n    animation: "," 1s;\n    align-self: flex-end;\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n    gap: 0.14rem;\n    padding: 0.15rem 0.2rem;\n    border-radius: 0.14rem;\n    span {\n      font-family: ",";;\n      font-size: 1.2rem;\n      color: ",";\n    }\n  }\n"])),x.Yk,(function(n){return n.theme.fontFamily}),(function(n){return n.theme.fontColor}),x.Yk,(function(n){return n.theme.fontFamily}),(function(n){return n.theme.fontColor})),y=u.ZP.img.attrs((function(n){return{src:n.liked?k:g,alt:"like"}}))(o||(o=(0,c.Z)(["\n  width: 1.6rem;\n  height: auto;\n  &:hover {\n    opacity: 0.5;\n  }\n  ","\n  ","\n"])),(function(n){return n.dark&&!n.liked&&"filter: invert(100%);"}),(function(n){return n.disabled&&"cursor: not-allowed;"})),b=t(8225),j=t(600),Z=t(184),w=function(n){var e=n.content,t=n.id,i=(0,b.Iq)().isDark,r=(0,j.SE)(),o=r.likes,c=r.addLike,u=r.removeLike,s=r.token,l=(0,a.useState)(!1),d=(0,f.Z)(l,2),m=d[0],k=d[1],g=(0,a.useState)(0),x=(0,f.Z)(g,2),w=x[0],T=x[1],z=(0,a.useState)(!1),E=(0,f.Z)(z,2),S=E[0],C=E[1],q=(0,a.useRef)(!1);(0,a.useEffect)((function(){q.current||s&&(h().post("".concat(p.T,"/api/quotes/likes/").concat(t),{},{headers:{Authorization:"Bearer ".concat(s)}}).then((function(n){var e=n.data;T(+e.likes),q.current=!0})),k(o.includes("QUOTE"+t)))}),[s]);return(0,Z.jsxs)(v,{children:[(0,Z.jsx)("span",{children:e}),(0,Z.jsxs)("div",{onClick:function(){S||(C(!0),m?h().put("".concat(p.T,"/api/quotes/dislike/").concat(t),{},{headers:{Authorization:"Bearer ".concat(s)}}).then((function(){u("QUOTE"+t),k(!1),T((function(n){return n-1})),C(!1)})):h().put("".concat(p.T,"/api/quotes/like/").concat(t),{},{headers:{Authorization:"Bearer ".concat(s)}}).then((function(){c("QUOTE"+t),k(!0),T((function(n){return n+1})),C(!1)})))},children:[(0,Z.jsx)(y,{disabled:S,dark:i,liked:m}),(0,Z.jsx)("span",{children:w>0?w:""})]})]})},T=function(){return(0,Z.jsx)(Z.Fragment,{children:d.map((function(n){return(0,Z.jsx)(w,(0,l.Z)({},n),n.id)}))})},z=t(8106),E=function(){var n=(0,z.Xh)().setMenu;return(0,a.useEffect)((function(){return n(7)}),[]),(0,Z.jsx)(s,{children:(0,Z.jsx)(T,{})})}}}]);
//# sourceMappingURL=414.b9572a5b.chunk.js.map
"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[414],{3527:function(n,e,t){t.r(e),t.d(e,{default:function(){return z}});var r,i,a,o=t(2791),c=t(168),s=t(6031),u=s.ZP.div(r||(r=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 1.4rem 12%;\n  overflow: auto;\n  gap: 1.4rem;\n  /* mobile styles */\n  @media only screen and (max-width: 768px) {\n    padding: 1.4rem 4.2%;\n  }\n"]))),d=t(1413),l=[{id:0,content:"\u201cOrgans are like modules,\n    nerves are the compiler,\n    brain is the programmer,\n    and you are the user\u201d"},{id:1,content:"\u201cTweet less, code more\u201d"}],f=t(885),p=t(4569),m=t.n(p),h=t(3830),k=t.p+"static/media/heart.1448196c32267c432b21.png",x=t.p+"static/media/heart-unfilled.0a2f928912c22b3f02c1.png",g=t(3535),v=s.ZP.div(i||(i=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  animation: "," 1s;\n  gap: 0.21rem;\n  span {\n    font-family: montserrat;\n    font-size: 2.1rem;\n    opacity: 0.84;\n    color: #1a1a1a;\n    ","\n  }\n  div {\n    animation: "," 1s;\n    align-self: flex-end;\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n    gap: 0.42rem;\n    padding: 0.28rem 0.3rem;\n    border-radius: 0.3rem;\n    ","\n    ","\n    span {\n      font-family: arial;\n      font-size: 1.2rem;\n      color: #1a1a1a;\n      ","\n    }\n  }\n"])),g.Yk,(function(n){return n.dark&&"color: #f5f4f9;"}),g.Yk,g.VK,(function(n){return n.dark&&"".concat(g.lN)}),(function(n){return n.dark&&"color: #f5f4f9;"})),y=s.ZP.img.attrs((function(n){return{src:n.liked?k:x,alt:"like"}}))(a||(a=(0,c.Z)(["\n  width: 1.4rem;\n  height: auto;\n  &:hover {\n    opacity: 0.5;\n  }\n  ","\n"])),(function(n){return n.dark&&!n.liked&&"filter: invert(100%);"})),j=t(8225),Z=t(600),b=t(184),T=function(n){var e=n.content,t=n.id,r=(0,j.Iq)().isDark,i=(0,Z.SE)(),a=i.likes,c=i.addLike,s=i.removeLike,u=i.token,d=(0,o.useState)(!1),l=(0,f.Z)(d,2),p=l[0],k=l[1],x=(0,o.useState)(0),g=(0,f.Z)(x,2),T=g[0],w=g[1];(0,o.useEffect)((function(){m().post("".concat(h.T,"/api/quotes/likes/").concat(t),{},{headers:{Authorization:"Bearer ".concat(u)}}).then((function(n){var e=n.data;return w(+e.likes)})),k(a.includes("QUOTE"+t))}),[t,u]);return(0,b.jsxs)(v,{dark:r,children:[(0,b.jsx)("span",{children:e}),(0,b.jsxs)("div",{onClick:function(){p?m().put("".concat(h.T,"/api/quotes/dislike/").concat(t),{},{headers:{Authorization:"Bearer ".concat(u)}}).then((function(){s("QUOTE"+t),k(!1),w((function(n){return n-1}))})):m().put("".concat(h.T,"/api/quotes/like/").concat(t),{},{headers:{Authorization:"Bearer ".concat(u)}}).then((function(){c("QUOTE"+t),k(!0),w((function(n){return n+1}))}))},children:[(0,b.jsx)(y,{dark:r,liked:p}),(0,b.jsx)("span",{children:T>0?T:""})]})]})},w=function(){return(0,b.jsx)(b.Fragment,{children:l.map((function(n){return(0,b.jsx)(T,(0,d.Z)({},n),n.id)}))})},E=t(8106),z=function(){var n=(0,E.Xh)().setMenu;return(0,o.useEffect)((function(){return n(7)}),[]),(0,b.jsx)(u,{children:(0,b.jsx)(w,{})})}}}]);
//# sourceMappingURL=414.8face6f1.chunk.js.map
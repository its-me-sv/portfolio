"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[971],{6971:function(n,e,r){r.r(e),r.d(e,{default:function(){return T}});var t,i,a,o,c,s=r(2791),l=r(3535),u=r(900),m=r(184),d=function(){var n=(0,u.gZ)(),e=n.years,r=n.setCurrYear,t=n.currYear;return(0,m.jsx)(l.Fe,{children:e.map((function(n){return(0,m.jsx)(l.sN,{onClick:function(){return r(n)},selected:n===t,children:n},n)}))})},f=r(1413),p=r(168),x=r(6031),h=x.ZP.div(t||(t=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  padding: 0rem 1.2rem;\n  /* mobile styles */\n  @media only screen and (max-width: 768px) {\n    padding: 1.4rem 2rem;\n    gap: 2.1.2rem;\n  }\n"]))),y=x.ZP.div(i||(i=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0rem 1.2rem 0.5rem 1.2rem;\n  border-radius: 0.14rem;\n  ","\n  /* mobile styles */\n  @media only screen and (max-width: 768px) {\n    padding: 0.5rem 1.2rem;\n  }\n"])),(function(n){return n.theme.boxShadowNoHover})),g=x.ZP.div(a||(a=(0,p.Z)(["\n  padding-top: 0.36rem;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 1.6rem;\n  /* mobile styles */\n  @media only screen and (max-width: 768px) {\n    flex-direction: column;\n    gap: 1.1.2rem;\n  }\n"]))),j=x.ZP.span(o||(o=(0,p.Z)(["\n  font-family: ",";;\n  font-size: 1.4rem;\n  opacity: 0.7;\n  text-decoration: underline;\n  animation: "," 1s;\n  color: ",";\n"])),(function(n){return n.theme.fontFamily}),l.Yk,(function(n){return n.theme.fontColor})),Z=x.ZP.div(c||(c=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.07rem;\n  span {\n    font-family: ",";;\n    font-size: 1.4rem;\n    text-align: center;\n    opacity: 0.8;\n    animation: "," 1s;\n    color: ",";\n    &:last-child {\n      font-family: ",";;\n    }\n  }\n"])),(function(n){return n.theme.fontFamily}),l.Yk,(function(n){return n.theme.fontColor}),(function(n){return n.theme.fontFamily})),v=r(3830),k=[{name:"General",url:"".concat(v.T,"/api/stats/general")},{name:"User",url:"".concat(v.T,"/api/stats/users")},{name:"Interactions",url:"".concat(v.T,"/api/stats/interactions")}],w=r(885),b=r(4569),C=r.n(b),P=r(5538),Y=r(8225),z=r(600),F=function(n){var e=n.name,r=n.url,t=(0,Y.Iq)().language,i=(0,u.gZ)().currYear,a=(0,z.SE)().token,o=(0,s.useState)({}),c=(0,w.Z)(o,2),l=c[0],d=c[1];return(0,s.useEffect)((function(){a&&C().post("".concat(r,"/").concat(i),{},{headers:{Authorization:"Bearer ".concat(a)}}).then((function(n){var e=n.data;return d(e)}))}),[i,a]),(0,m.jsxs)(y,{children:[(0,m.jsx)(j,{children:P.wp[e][+t]}),(0,m.jsx)(g,{children:Object.keys(l).map((function(n){var e=P.wp[n][+t],r=l[n];return(0,m.jsxs)(Z,{children:[(0,m.jsx)("span",{children:e}),(0,m.jsx)("span",{children:r})]},e+r)}))})]})},E=function(){return(0,m.jsx)(h,{children:k.map((function(n){return(0,m.jsx)(F,(0,f.Z)({},n),n.name)}))})},S=r(8106),T=function(){var n=(0,S.Xh)().setMenu;return(0,s.useEffect)((function(){return n(8)}),[]),(0,m.jsxs)(l._z,{children:[(0,m.jsx)(d,{}),(0,m.jsx)(E,{})]})}}}]);
//# sourceMappingURL=971.6234a1c2.chunk.js.map
import{G as x,b as t,M as g,e as $,s as a,F as h,A as l,u as C,y as S,r as c,z as b,j as m,J as f,a as v,P as M}from"./index-5b13c9be.js";const j=()=>{const{years:e,setCurrYear:i,currYear:s}=x();return t(g,{children:e.map(n=>t($,{onClick:()=>i(n),selected:n===s,children:n},n))})},w=a.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0rem 1.2rem;
  /* mobile styles */
  @media only screen and (max-width: 768px) {
    padding: 1.4rem 2rem;
    gap: 1.2rem;
  }
`,F=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0rem 1.2rem 0.5rem 1.2rem;
  border-radius: 0.14rem;
  ${e=>e.theme.boxShadowNoHover}
  /* mobile styles */
  @media only screen and (max-width: 768px) {
    padding: 0.5rem 1.2rem;
  }
`,P=a.div`
  padding-top: 0.36rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.6rem;
  /* mobile styles */
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 1.1.2rem;
  }
`,z=a.span`
  font-family: ${e=>e.theme.fontFamily};;
  font-size: 1.4rem;
  opacity: 0.7;
  text-decoration: underline;
  animation: ${h} 1s;
  color: ${e=>e.theme.fontColor};
`,A=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.07rem;
  span {
    font-family: ${e=>e.theme.fontFamily};;
    font-size: 1.4rem;
    text-align: center;
    opacity: 0.8;
    animation: ${h} 1s;
    color: ${e=>e.theme.fontColor};
    &:last-child {
      font-family: ${e=>e.theme.fontFamily};;
    }
  }
`,I=[{name:"General",url:`${l}/api/stats/general`},{name:"User",url:`${l}/api/stats/users`},{name:"Interactions",url:`${l}/api/stats/interactions`}],k=({name:e,url:i})=>{const{language:s}=C(),{currYear:n}=x(),{token:o}=S(),[d,y]=c.useState({});return c.useEffect(()=>{o&&b.post(`${i}/${n}`,{},{headers:{Authorization:`Bearer ${o}`}}).then(({data:r})=>y(r))},[n,o]),m(F,{children:[t(z,{children:f[e][+s]}),t(P,{children:Object.keys(d).map(r=>{const u=f[r][+s],p=d[r];return m(A,{children:[t("span",{children:u}),t("span",{children:p})]},u+p)})})]})},E=()=>t(w,{children:I.map(e=>t(k,{...e},e.name))}),Y=()=>{const{setMenu:e}=v();return c.useEffect(()=>e(9),[]),m(M,{children:[t(j,{}),t(E,{})]})};export{Y as default};

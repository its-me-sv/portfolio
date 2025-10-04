import{u as m,a as u,b as t,M as x,t as w,e as v,s as i,F as h,f as c,r as l,j as o,g as d,C as p,O as b,i as $,k as M,l as k,m as j,P as T,R as O,n as f}from"./index-2d5776e6.js";const B=()=>{const{language:e}=m(),{transMenu:n,setTransMenu:r}=u();return t(x,{children:Object.values(w).map((a,s)=>t(v,{onClick:()=>r(s),selected:s===n,children:a[+e]},a[+e]))})},E=i.div`
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1.4rem;
  place-items: center;
  padding: 1.4% 0%;
  /* mobile styles */
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 1.2rem;
  }
`,F=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 12rem;
  height: 22rem;
  overflow: auto;
  text-align: center;
  border-radius: 0.14rem;
  justify-content: space-around;
  padding: 0.42% 0;
  animation: ${h} 1s;
  ${e=>e.theme.boxShadowNoHover}
  /* mobile styles */
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 1.2rem;
    width: 10rem;
    height: 24rem;
    padding-bottom: 1.2rem;
  }
`,I=i.img`
  width: 7rem;
  height: auto;
  border-radius: 0.14rem;
`,S=i.span`
  font-family: ${e=>e.theme.fontFamily};;
  font-size: 1.4rem;
  color: ${e=>e.theme.fontColor};
`,N=i.span`
  font-family: ${e=>e.theme.fontFamily};;
  font-size: 1.2rem;
  color: ${e=>e.theme.fontColor};
`,P=({provider:e,name:n,date:r,picture:a,url:s})=>{const{language:g}=m(),{setCurrCertificate:C}=c(),y=l.useCallback(()=>{C({provider:e,name:n,date:r,picture:a,url:s})},[e,n,r,a,s]);return o(F,{children:[t(I,{src:e,alt:"issuer logo"}),t(S,{children:n}),o(N,{children:[d.issuedOn[+g],": ",r]}),t(p,{onClick:y,children:d.showCred[+g]})]})},z=()=>{const{setTransMenu:e}=u(),{certificates:n}=c();return l.useEffect(()=>e(0),[]),t(E,{children:n.map(r=>t(P,{...r},r.name))})},H=()=>{const{isDark:e,language:n}=m(),{currCertificate:r,setCurrCertificate:a}=c();return r?t(b,{children:o($,{children:[o(M,{children:[t("div",{}),t(k,{dark:e,onClick:()=>a(null)})]}),t(j,{src:r.picture,alt:r.name}),r.url&&t(p,{children:t("a",{href:r.url,target:"_blank",rel:"noreferrer",children:d.verify[+n]})})]})}):t("div",{})},R=i.div`
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1.4rem;
  place-items: center;
  padding: 1.4% 0%;
  /* mobile styles */
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 1.2rem;
  }
`,_=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 12rem;
  height: 16rem;
  overflow: auto;
  text-align: center;
  border-radius: 0.14rem;
  justify-content: space-around;
  padding: 0.42% 0;
  animation: ${h} 1s;
  a {all: unset;}
  ${e=>e.theme.boxShadowNoHover}
  /* mobile styles */
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 1.2rem;
    width: 10rem;
    height: 16rem;
    padding-bottom: 1.2rem;
  }
`,A=i.img`
  width: 7rem;
  height: auto;
  border-radius: 0.14rem;
`,D=i.span`
  font-family: ${e=>e.theme.fontFamily};;
  font-size: 1.2rem;
  color: ${e=>e.theme.fontColor};
`,V=({picture:e,url:n,issuer:r})=>{const{language:a}=m();return o(_,{children:[t(A,{src:e,alt:"badge logo"}),o(D,{children:[d.issuedBy[+a],": ",r]}),n.length>0&&t(p,{children:t("a",{href:n,target:"_blank",rel:"noreferrer",children:d.verify[+a]})})]})},q=()=>{const{setTransMenu:e}=u(),{badges:n}=c();return l.useEffect(()=>e(1),[]),t(R,{children:n.map((r,a)=>t(V,{...r},r.url+(a+"")))})},G=i.div`
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1.4rem;
  place-items: center;
  padding: 1.4% 0%;
  /* mobile styles */
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 1.2rem;
  }
`,J=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 12rem;
  height: 12rem;
  overflow: auto;
  text-align: center;
  border-radius: 0.14rem;
  justify-content: space-around;
  padding: 0.42% 0;
  animation: ${h} 1s;
  a {all: unset;}
  ${e=>e.theme.boxShadowNoHover}
  img {
    width: 7rem;
    height: auto;
    border-radius: 0.14rem;
    animation: ${h} 1s;
  }
  /* mobile styles */
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 1.2rem;
    width: 10rem;
    height: 12rem;
    padding-bottom: 1.2rem;
  }
`,K=i.span`
  font-family: ${e=>e.theme.fontFamily};;
  font-size: 1.4rem;
  color: ${e=>e.theme.fontColor};
`,L=({name:e,url:n})=>o(J,{children:[t("img",{src:n,alt:e+" logo"}),t(K,{children:e})]}),Q=()=>{const{setTransMenu:e}=u(),{skills:n}=c();return l.useEffect(()=>e(2),[]),t(G,{children:n.map(r=>t(L,{...r},r.name))})},X=()=>{const{language:e}=m(),{setMenu:n,transMenu:r,setTransMenu:a}=u(),{currCertificate:s}=c();return l.useEffect(()=>{n(3),a(0)},[]),l.useEffect(()=>{const g=Object.values(w)[r][+e];window.document.title=`${g} | Suraj Vijayan`},[r,e]),o(T,{children:[s&&t(H,{}),t(B,{}),o(O,{children:[t(f,{path:"certificates",element:t(z,{})}),t(f,{path:"badges",element:t(q,{})}),t(f,{path:"skills",element:t(Q,{})})]})]})};export{X as default};

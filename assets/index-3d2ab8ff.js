import{s as t,F as s,u as o,b as a,d as l,j as r,C as d,E as i,a as m,r as c}from"./index-a0fe0577.js";const u=t.div`
  display: flex;
  flex-direction: column;
  padding: 1.6rem 12%;
  overflow: auto;
  gap: 1.4rem;
  /* mobile styles */
  @media only screen and (max-width: 768px) {
    padding: 1.6rem 4.2%;
  }
`,h=[{name:"All about the AstraDB Build-A-Thon",url:"https://surajvijay.hashnode.dev/all-about-the-astradb-build-a-thon"},{name:"Everything about Project Payzer",url:"https://surajvijay.hashnode.dev/everything-about-project-payzer-1"}],p=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.42% 0.84%;
  border-radius: 0.14rem;
  gap: 0.14rem;
  a {
    all:unset;
    cursor: pointer;
  }
  animation: ${s} 1s;
  ${e=>e.theme.boxShadow}
  /* mobile styles */
  @media only screen and (max-width: 768px) {
    padding: 0.5rem 0.7rem;
  }
`,g=t.span`
  font-family: ${e=>e.theme.fontFamily};;
  font-size: 1.4rem;
  color: ${e=>e.theme.fontColor};
`,f=()=>{const{language:e}=o();return a(l,{children:h.map(n=>r(p,{children:[a(g,{children:n.name}),a("a",{href:n.url,target:"_blank",rel:"noreferrer",children:r(d,{children:["🚀 ",i.read[+e]]})})]},n.name))})},x=()=>{const{setMenu:e}=m();return c.useEffect(()=>e(7),[]),a(u,{children:a(f,{})})};export{x as default};

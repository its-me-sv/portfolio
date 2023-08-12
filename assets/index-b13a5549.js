import{s as t,F as r,u as m,a as f,r as h,j as a,b as n,h as i}from"./index-0d215795.js";const g=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  animation: ${r} 1s;
`,p=t.div`
  display: flex;
  flex-direction: column;
  span {
    &:last-child {
      font-family: ${e=>e.theme.fontFamily};;
      font-size: 1.2rem;
      color: ${e=>e.theme.fontColor};
    }
  }
`,y=t.img.attrs({alt:"Suraj Vijayan"})`
  height: 18rem;
  width: auto;
  /* desktop styles */
  @media only screen and (min-width: 768px) {
    height: 42vh;
    width: auto;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`,u=t.span`
  font-family: ${e=>e.theme.fontFamily};;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  background-image: linear-gradient(
    135deg,
    #0e73cc 1.93%,
    #624bbb 14.86%,
    #ff455d 48.09%,
    #f35815 77.82%,
    #f2b600 97.3%
  );
  font-size: 1.8rem;
`,x=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  color: ${e=>e.theme.fontColor};
  /* mobile styles */
  @media only screen and (max-width: 768px) {
    padding: 0 1%;
  }
`,b=t.span`
  font-family: ${e=>e.theme.fontFamily};;
  font-size: 1.4rem;
  color: ${e=>e.theme.fontColor};
`,C=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.36rem;
  animation: ${r} 1s;
`,l=t.span`
  font-family: ${e=>e.theme.fontFamily};;
  font-size: 1.4rem;
  color: ${e=>e.theme.fontColor};
  text-transform: uppercase;
`,s=t.span`
  font-family: ${e=>e.theme.fontFamily};;
  font-size: 1.4rem;
  color: ${e=>e.theme.contentColor};
`,$="/assets/no_grad-65523dad.png",j="/assets/grad-fca712d8.png",v=()=>{const{isMobile:e,isDark:c,language:o}=m(),{setMenu:d}=f();return h.useEffect(()=>d(0),[]),a(g,{children:[n(y,{src:c?j:$}),!e&&n("div",{}),a(p,{children:[n(u,{children:"Suraj Vijayan"}),n("span",{children:i.since[+o]})]}),a(x,{children:[n(b,{children:i.fsd[+o]}),a(C,{children:[a(s,{children:[n(l,{children:i.student[+o]})," ",i.at[+o]," Sri Venkateswara College of Engineering"]}),a(s,{children:[n(l,{children:i.resident[+o]})," ",i.of[+o]," Chennai, TN, India"]}),n(s,{children:"surajvijay67@gmail.com"})]})]})]})};export{v as default};

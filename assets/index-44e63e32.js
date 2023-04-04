import{s,F as c,u as h,a as m,r as f,j as o,b as a,c as i}from"./index-8adbf271.js";const u=s.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  overflow: auto;
  padding: 2.1% 0 3% 3%;
  animation: ${c} 1s;
  /* mobile styles */
  @media only screen and (max-width: 768px) {
    padding: 7%;
  }
`,l=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.07rem;
`,r=s.span`
  font-family: ${e=>e.theme.fontFamily};;
  font-size: 1.6rem;
  opacity: 0.7;
  text-decoration: underline;
  animation: ${c} 1s;
  color: ${e=>e.theme.fontColor};
`,t=s.span`
  max-width: 42rem;
  font-family: ${e=>e.theme.fontFamily};;
  font-size: 1.4rem;
  opacity: 0.9;
  text-align: center;
  animation: ${c} 1s;
  color: ${e=>e.theme.fontColor};
`,y=()=>{const{language:e,isDark:n}=h(),{setMenu:d}=m();return f.useEffect(()=>d(1),[]),o(u,{children:[o(l,{children:[a(r,{children:i.brief[+e]},e+(n+"2")),a(t,{children:i.briefContent[+e]},e+(n+"3"))]}),o(l,{children:[a(r,{children:i.iah[+e]},e+(n+"4")),a(t,{children:i.iahContent[+e]},e+(n+"5"))]}),o(l,{children:[a(r,{children:i.edu[+e]},e+(n+"6")),o(t,{children:[i.ps[+e]," - Don Bosco Nursery and Primary School"]},e+(n+"7")),o(t,{children:[i.hs[+e]," - SBOA School & Junior College"]},e+(n+"8")),o(t,{children:[i.clg[+e]," - Sri Venkateswara College of Engineering"]},e+(n+"9"))]}),o(l,{children:[a(r,{children:i.langs[+e]},e+(n+"10")),o(t,{children:["Tamil (",i.nat[+e],")"]},e+(n+"11")),o(t,{children:["English (",i.conv[+e],")"]},e+(n+"12"))]}),o(l,{children:[a(r,{children:i.moreAbtMe[+e]},e+(n+"13")),o(t,{children:[i.dob[+e]," - 11th May, 2002"]},e+(n+"14")),o(t,{children:[i.favCol[+e]," - Blue"]},e+(n+"15")),o(t,{children:[i.lovFud[+e]," - Anything edible and tasty"]},e+(n+"16"))]})]})};export{y as default};

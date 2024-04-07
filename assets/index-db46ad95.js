import{s as u,F as g,u as C,y as b,r as n,z as d,A as c,j as k,b as t,d as w,a as z}from"./index-67f80199.js";const L=u.div`
  display: flex;
  flex-direction: column;
  padding: 1.6rem 12%;
  justify-content: space-around;
  overflow: auto;
  /* gap: 1.4rem; */
  /* mobile styles */
  @media only screen and (max-width: 768px) {
    padding: 1.6rem 4.2%;
  }
`,A=[{id:0,content:`“Organs are like modules,
    nerves are the compiler,
    brain is the programmer,
    and you are the user”`},{id:1,content:"“Tweet less, code more”"},{id:2,content:"“The longer you wait, the better you get”"},{id:3,content:"“There cannot exist a Steve Jobs without a Steve Wozniak”"}],E="/assets/heart-cd11381e.png",Q="/assets/heart-unfilled-a143fcd0.png",T=u.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${g} 1s;
  gap: 0.14rem;
  span {
    font-family: ${e=>e.theme.fontFamily};;
    font-size: 1.4rem;
    opacity: 0.84;
    text-align: center;
    color: ${e=>e.theme.fontColor};
  }
  div {
    animation: ${g} 1s;
    align-self: flex-end;
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 0.14rem;
    padding: 0.15rem 0.2rem;
    border-radius: 0.14rem;
    span {
      font-family: ${e=>e.theme.fontFamily};;
      font-size: 1.2rem;
      color: ${e=>e.theme.fontColor};
    }
  }
`,U=u.img.attrs(e=>({src:e.liked?E:Q,alt:"like"}))`
  width: 1.6rem;
  height: auto;
  &:hover {
    opacity: 0.5;
  }
  ${e=>e.dark&&!e.liked&&"filter: invert(100%);"}
  ${e=>e.disabled&&"cursor: not-allowed;"}
`,F=({content:e,id:s})=>{const{isDark:x}=C(),{likes:y,addLike:$,removeLike:v,token:a}=b(),[m,o]=n.useState(!1),[f,i]=n.useState(0),[h,l]=n.useState(!1),p=n.useRef(!1);return n.useEffect(()=>{p.current||a&&(d.post(`${c}/api/quotes/likes/${s}`,{},{headers:{Authorization:`Bearer ${a}`}}).then(({data:r})=>{i(+r.likes),p.current=!0}),o(y.includes("QUOTE"+s)))},[a]),k(T,{children:[t("span",{children:e}),k("div",{onClick:()=>{h||(l(!0),m?d.put(`${c}/api/quotes/dislike/${s}`,{},{headers:{Authorization:`Bearer ${a}`}}).then(()=>{v("QUOTE"+s),o(!1),i(r=>r-1),l(!1)}):d.put(`${c}/api/quotes/like/${s}`,{},{headers:{Authorization:`Bearer ${a}`}}).then(()=>{$("QUOTE"+s),o(!0),i(r=>r+1),l(!1)}))},children:[t(U,{disabled:h,dark:x,liked:m}),t("span",{children:f>0?f:""})]})]})},S=()=>t(w,{children:A.map(e=>t(F,{...e},e.id))}),q=()=>{const{setMenu:e}=z();return n.useEffect(()=>e(8),[]),t(L,{children:t(S,{})})};export{q as default};

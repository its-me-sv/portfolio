import{s as o,F as n,b as t,d as r,a,r as i}from"./index-2d5776e6.js";const s=o.div`
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
`,d=[{id:0,content:`“Organs are like modules,
    nerves are the compiler,
    brain is the programmer,
    and you are the user”`},{id:1,content:"“Tweet less, code more”"},{id:2,content:"“The longer you wait, the better you get”"},{id:3,content:"“There cannot exist a Steve Jobs without a Steve Wozniak”"}],l=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${n} 1s;
  gap: 0.14rem;
  span {
    font-family: ${e=>e.theme.fontFamily};;
    font-size: 1.4rem;
    opacity: 0.84;
    text-align: center;
    color: ${e=>e.theme.fontColor};
  }
  div {
    animation: ${n} 1s;
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
`,m=({content:e,id:u})=>t(l,{children:t("span",{children:e})}),c=()=>t(r,{children:d.map(e=>t(m,{...e},e.id))}),p=()=>{const{setMenu:e}=a();return i.useEffect(()=>e(8),[]),t(s,{children:t(c,{})})};export{p as default};

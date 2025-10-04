import{s as r,F as l,u as c,y as m,r as u,z as t,j as o,b as i,A as d}from"./index-2d5776e6.js";const p=r.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  span {
    animation: ${l} 1s;
    font-family: ${e=>e.theme.fontFamily};;
    font-size: 4.2rem;
    text-align: center;
    &:last-child {
      font-size: 2.1.2rem;
    }
  }
  background-color: ${e=>e.theme.backgroundColor};
  color: ${e=>e.theme.fontColor};
`,g=()=>{const{language:e}=c(),n=m();return u.useEffect(()=>{window.document.title=`${t.title[+e]} | Suraj Vijay`;const s=setTimeout(()=>{n("/")},7e3);return()=>{const a=d.home[+e];window.document.title=`${a[0].toUpperCase()+a.slice(1)} | Suraj Vijayan`,clearTimeout(s)}},[e,n]),o(p,{children:[i("span",{children:t.title[+e]}),o("span",{children:[t.caption1[+e],i("br",{}),t.caption2[+e]]})]})};export{g as default};

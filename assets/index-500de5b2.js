import{s as c,F as Y,q as V,u as B,v as N,r as A,j as l,b as n,w as E,x as q,y as K,z as b,A as w,d as $,H,I as j,B as _,a as ee}from"./index-67f80199.js";import{c as te}from"./comment-8f34614d.js";const oe=c.div`
  display: grid;
  grid-template-rows: 1fr 8fr;
  overflow: auto;
`,ne="/assets/search-5ba0d661.png",ie=c.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
  gap: 0.42rem;
  width: 36rem;
  border-radius: 0.14rem;
  padding: 0.21% 0.49%;
  margin: 0 auto;
  /* padding: 0.36%; */
  animation: ${Y} 1s;
  background-color: ${e=>e.theme.backgroundColor};
  ${e=>e.theme.boxShadowNoHover}
  /* mobile styles */
  @media only screen and (max-width: 768px) {
    width: 90vw;
    padding: 1%;
  }
`,ae=c.img.attrs({src:ne,alt:"search"})`
  width: 1.4rem;
  height: auto;
  opacity: 0.84;
  ${e=>e.dark&&"filter: invert(100%);"}
`,Ae=c.input`
  font-family: ${e=>e.theme.fontFamily};;
  outline: none;
  border: none;
  text-align: center;
  border-radius: 0.14rem;
  font-size: 1.4rem;
  width: 100%;
  background-color: ${e=>e.theme.backgroundColor};
  color: ${e=>e.theme.fontColor};
  &:focus {
    ${e=>e.theme.boxShadowHover}
  }
  /* mobile styles */
  @media only screen and (max-width: 768px) {
    font-size: 1.2rem;
    height: 2.1.2rem;
  }
`,ce=c.img.attrs({src:V,alt:""})`
  width: 0.84rem;
  height: auto;
  cursor: pointer;
  &:hover { opacity: 0.7; }
  ${e=>e.dark&&"filter: invert(100%);"}
`,se=()=>{const{isDark:e,language:r}=B(),{searchField:s,setSearchField:h}=N(),g=A.useCallback(I=>h(I.target.value),[]),k=A.useCallback(()=>h(""),[]);return l(ie,{children:[n(ae,{dark:e}),n(Ae,{placeholder:E.placeholder[+r],value:s,onChange:g}),s.length>0&&n(ce,{dark:e,onClick:k})]})},re="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFKmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTA3LTE0VDIxOjIwOjA0KzA1OjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0wOC0wOFQwNToyNzoxOCswNTozMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMi0wOC0wOFQwNToyNzoxOCswNTozMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4OTVmOTM0Ny0yMWQyLWZjNGEtODljYi0yYTEyNWQ4YzIxNzUiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo2YmUxMzkzNC1jNjU5LTg2NDAtYTYwZi03NjJiNDkwNDJmODEiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4OTVmOTM0Ny0yMWQyLWZjNGEtODljYi0yYTEyNWQ4YzIxNzUiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjg5NWY5MzQ3LTIxZDItZmM0YS04OWNiLTJhMTI1ZDhjMjE3NSIgc3RFdnQ6d2hlbj0iMjAyMi0wNy0xNFQyMToyMDowNCswNTozMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoE0VHEAAALiSURBVGiB7ZlPaNNgGMaf6UAm/okUQdBBwYL451BPQyhzN0+CIt485KonEUHBg4IIXhzz5kFoBrsNXLWneWk7CmUqGNmsCJV12ovO2HZtt9Wtfl76dW/SJKZ+WZtAHwj0/fLmfZ9fSr58SQYYY/CzdvXagLAYY7ptByUBSAAIu1Gs5bdLABKA9wBYc5NFC3YTQILePANQFC3aLQAJ7eb5JqRuAEiwNl8SLb7TABL05ksAJkgcE23A/Q6KFgopmi7OyQEJhtlm+GFqYeNzJrwydZcPqcbjnCgnB9rGduI+EIXefHrP8JnI2mLiIMlJutXMVYCcHIgCuMRjbh4AaupsmKSqbvV0DaBpXuYxNd+oaCpJ/RBStJJbfV0BMJo/eudlipsHgN+FT2WSrrrRk0sYwGj+0MVb6aGTkfM0Zy2b2k1CVbQnlShAm/nAlXsRY1L1zUyQhEnBnjqJADgyD8bKm9+XjvEwpOiuB2GZ3QfuOzguDDLbWJoH0Kj+WsL2tJrPyQEn9e30FORObgbwoJNqB0avzVuZB4D17FyJhMFO65tIBnAWTQjhi3jv6bF1u/2VzLQk2sOgIMhJsF1KHLn+PGk2XslMS4Ybk6WkCzfK+89dNa3TieqF7GAxPs7/6VZvW4B9I5fHLHYla+qso8bGKfV/NXRqVC3Gx9vGff9M3AfotXwDYFhPteQbgB/KzeMkTPIfvgDY/Pl1ni5HACj8hy8Aiq+e0HASQJ4Hngdgja3C6tzUCBmaoPs9D7CaiH4hYQqG5wlvAzBW1mYeh8mIYkzxNEC98HHhT63E32Ysw28AK5O3D5NQMcvxLECjoqkbubcnmmEZhouXy7MApdfPqiSMWb2K8SQAa2wVyNofsHmK8yRA7V08R8JUSNHyVrmeBNBePAqRcMIu13MA9W+LabLuWQ4pWsz2AJPvA2YfJHq1yf/y7WWApJMT70WAPBy8O+J+B/pf6nusPkCv1Qfotf4C4BsAeNAUHOgAAAAASUVORK5CYII=",le="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF+mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTA3LTE0VDIxOjIwOjA0KzA1OjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0wOC0wOFQwNToyNDo1NSswNTozMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMi0wOC0wOFQwNToyNDo1NSswNTozMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5ZWYxYjg2MC1kOTgxLTQ5NDYtYTVlMC05NWRlY2E2MTEyNjkiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo2YmUxMzkzNC1jNjU5LTg2NDAtYTYwZi03NjJiNDkwNDJmODEiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowZTAzMmIwYi0xMmI4LWUxNGItYjFhMy03OTY2ZTJmMzgwYWIiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjBlMDMyYjBiLTEyYjgtZTE0Yi1iMWEzLTc5NjZlMmYzODBhYiIgc3RFdnQ6d2hlbj0iMjAyMi0wNy0xNFQyMToyMDowNCswNTozMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo5ZWYxYjg2MC1kOTgxLTQ5NDYtYTVlMC05NWRlY2E2MTEyNjkiIHN0RXZ0OndoZW49IjIwMjItMDgtMDhUMDU6MjQ6NTUrMDU6MzAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz52RE2RAAAB9klEQVRoge2Z623CMBRGD1UH8AiMkA2aDcoGzQZlg6Yb0AkaJmg2KExQNgAmKJ0g/QGGG+M8hJ3EkfgkSze28f1OHrZlJkVRMGY9DG3AWUVRlEqHUsA3EPkY7Oy3JwAF/ADFqSSuA/YJoCibL4Bf10H7AlBcm9fFSX0AKKrNH1wH7xpAUTZ/ABbiOndNoP12MY0qrmebudFn4y1bB0/gi/LrkpzqV6Iudk3S1Sv0id08Rr1yTdQFQJ35WNRvXJJo+QYwzc+N9rloy25NIuUTwDRvM5hRDXeTfAG0MQ+wFX2i2yyX5QOgrXll9PMi7ffR0vbW4vcRMBPXS6o3aJGIdy3Hr9MHciW3PAHb0l9X8oaE6Q1j1pUtoHyuxJuG9thDDqkpx5sCYH2FpN4r6mPgqWXCnOMq7Kop8HKKo3NtwytUpVT0ST2Ya6NY5Fx1uZnrVXeAoTUmgMhWOSaAVxGvdDAWgBnHaVQr08FYABIRLzluSYBxAEyBZ3G9kI1jAJiLeI2xdQkdQHHZPoBlyx46wIzLAcCeEQLIqTOzdQgZIOayeP1hfLxaIQMkIs6pOE8NFWBK+eNNqzqGCpCIeI1YuEyFCiDv/qKuY4gACZd9z56mQwMPpxJdlqTJd8gAqzY3PkSAHS0OCrTfyf2f+oF1Bxhad4Ch9Q88KEpOLhh4ZAAAAABJRU5ErkJggg==",de=c.div`
  padding: 1.4% 0%;
  padding-left: auto;
  padding-right: auto;
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 3rem;
  place-items: center;
  /* mobile styles */
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 1.4rem;
  }
`,me=c.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 24rem;
  height: 26rem;
  gap: 0.42rem;
  padding: 1% 1.6%;
  border-radius: 0.14rem;
  animation: ${Y} 1s;
  ${e=>e.theme.boxShadowNoHover}
  /* mobile styles */
  @media only screen and (max-width: 768px) {
    width: 84vw;
  }
`,he=c.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  span {
    font-family: ${e=>e.theme.fontFamily};;
    font-size: 1.4rem;
    color: ${e=>e.theme.fontColor};
  }
  a {
    all: unset;
  }
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.14rem;
    img {
      cursor: pointer;
      width: 1.6rem;
      height: auto;
      opacity: 0.8;
      &:hover {
        opacity: 0.5;
      }
      ${e=>e.dark&&"filter: invert(100%);"}
    }
  }
`,ge=c.div`
  display: flex;
  flex-direction: column;
  gap: 0.14rem;
  img {
    border-radius: 0.14rem;
    max-height: 12rem;
  }
  div {
    display: flex;
    align-items: center;
    align-self: center;
    gap: 0.14rem;
  }
`,ue=c.span`
  width: 0.42rem;
  height: 0.42rem;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid ${e=>e.theme.borderColor};
  background-color: ${e=>e.theme.backgroundColor};
  ${e=>e.selected&&`background-color: ${e.theme.borderColor};`}
`,Ie=c.div`
  font-family: ${e=>e.theme.fontFamily};;
  font-size: 1.2rem;
  max-height: 7rem;
  overflow: auto;
  color: ${e=>e.theme.fontColor};
`,be=c.span`
  font-family: ${e=>e.theme.fontFamily};;
  font-size: 1rem;
  opacity: 0.9;
  max-height: 2.8rem;
  overflow: auto;
  animation: ${Y} 1s;
  color: ${e=>e.theme.fontColor};
`,we=c.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 0.14rem;
    &:hover {
      opacity: 0.5;
    }
    span {
      font-family: ${e=>e.theme.fontFamily};;
      font-size: 1.2rem;
      color: ${e=>e.theme.fontColor};
    }
  }
`,ke=c.img.attrs(e=>({src:e.liked?re:le,alt:"like"}))`
  width: 1.6rem;
  height: auto;
  opacity: 0.9;
  &:hover {
    opacity: 0.5;
  }
  ${e=>e.dark&&!e.liked&&"filter: invert(100%);"}
  ${e=>e.disabled&&"cursor: not-allowed;"}
`,Me=c.span`
  align-self: center;
  margin-bottom: 0.42rem;
  border-radius: 0.14rem;
  padding: 0.3rem;
  padding-top: 0rem;
  padding-bottom: 0.14rem;
  cursor: pointer;
  color: ${e=>e.theme.fontColor};
  ${e=>e.theme.boxShadow}
`,Ne="/assets/loader-699de7c7.gif",ye="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAfhJREFUaEPtmeFNxDAMhd9NAEwCbAAbsAEwATABbABMAGzABjACTMIxAehJtRSFJE1cO0el+E97bdO+z3YcX7vBym2zcv3wAjgBcAWAW9o7gMdpa+ozD4BrAPcZlTcAHiwJrAHo8bdA4Oe0fxgcO7WMhDXAM4DzSSxThtGg0etMKVp4fHEwSgD7AG4BXADgfquFno4jU3uvLQA6hamXtBJA6LXaB4bXvQK4nA48ATjT3GQuaiWAL6XnF+jMDmUkDlJnSwA/wQDruVILOathANS6UnndiIA4bsyBkUJIN57WVYgrNmt2yWqukfFdJzFX2yMAbCFyEBTPZu8jWKVLsN0AKJ49E43iUhAinpA09jjSauQgugCE4imELTSbt1QUwm61BsIdoEW8eLkFwhVAI74Vwg1gifgWCBcAC/G1EC4AcQ7nqs7c4htXJV7/ElQz/nYBkOoh/31LpTMHUSPeFWAJRK14dwANRIv4LgA5iONE7rSK7wYQQ+RWYgLwFaO85IonbGq+uE3i1MNYndjn5NoIjhEIVi7pnUrVqiuACFxtOz1X9zXnu0dAI/JfpdAAiDwwUkgcMt4LKSfHohRiPd9TPth62HfuVb/nBw5LiOxnqblPTHfTkr+rSNDzbFHkW9sfp+xqcppFZwCYuVJ5oxEBpePMhq0+Ar/7KqEx4wlkpgAAAABJRU5ErkJggg==",Re="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABCtJREFUaEPtmY2RTUEQhXsjQASIABEgAkSACBABIkAEbASIABEgAkSACKjv1bQ6r2/P331v99mqnapb+3bfnZlzuk//zOyRnfFxdMbx2zmBQ3vwf/PAdTO7U4zC54vl863y87uZXVWjHZoAAAEMwLsCuOXYLcyHIgDwR2b2eBB01einTaAH/IeZfTQzpPLLzL6Un5+FwcE8cN/MnpnZlaCPr2b2rjwAzsafQxLA6i/M7EFA9qn8DWu3BvHxobzwO0rupCUEeDYno/hAJmgfq48MJQBpz0ibuSdJANCA91TIfs+LjEaA+zuQxYOM4+jJNQRUEh5oBB76Rc9IArmwqYPH9aRJ3psdb8yM+GE8NDN+/zdmCWSSiIAgpVZHMoCPAeqyqgWur/tT1qOIbcXMDIER8JEMHkGzkPIB8LeSjQB0LyHI+7zrKRRDxAw2HAMZeNyJJNiEBytfE6AZeNb5lhQvSNwIRFnqZSl4qf5Hg7gGfkuLJWA9Q2Tg2Y/YeF0JArwQMxNk3eoL/Y8QGAWvmYJ1sWambQrZ0wqBCFDXTOXTIzAKPsriSXF9hlM1Hb9X0nHNzDub+bUgHgXPGprmFoUmYaHv+9evSnHz31X7zTUzAhl4ghUraDaJWaIlnciDgOdheB+kWUqbt9ut+pERiHrWzbEe1nJ9U2k9cKMVK1Jv/jkar+vRloQgQta4nGwJASxHUDKotGSL6KFZEmoQ1sQ4zUI3UsggwXOzgWZNjxOXI71qx9qUjk8eIaDaxCvelyiAoc0aBoiyTXN+Nn+GgM9Hp2zIc6H8EelAotfXZBg4WpJ1fCw6zpYO1xBQj5CddiERZdMN2khmFwKsRWFaQ4J5gNeDDustus1eFtiVwBoStBK124jpWNoHgVESpESsri0xqZJO1LvY6Ww2QoCgxWq4GxBsyEPh0u6xJiefv3WWNTM/1DsxDPFeKnRPPZvvewRYnMOHnrB0YQjQYtQCOwMRD/Xa4C2uDnssWgRwNT1JDbyvHd0ePeHvIRfSJU+s2Hrvc2mmorcIaFnHalRJMo7XAe3rY/8fSSAXmres1WA9DOWxMRXINQIsxmnIR3ZAQT5+k5wFn56+atKIzdvi4mqthLpn0WJR4oNRq55Y3AtdbA+ytr16cKkRqXkAl3qRqR0PkUSPgB4hkR/yYMwcmJpOqB1ouIthtFwKeD+U1I6RUYpUWrwSrxuHm7fIJiOgls16E6xHQXLwrNlqAfQISdxASluI1eBrdUDd7sEJaM4DgI63zK1DPHvo5Ww04E7gawTQqh9e/BpvcSNWkIweI2mz9dKL6TuDrxHQAK4FENLCU6OXtfFCay/gawS0KioBQAMYTff+KZER95S6N/AZAYKLQAOg/6/KP/dqSu97PMZa8UqyN286je604GlP7nWjp41ner9zAtMm2/OEv5Q3BUD+ZQLYAAAAAElFTkSuQmCC",fe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAyRJREFUaEPtmYFxFDEMRX8qACoAKgAqCFRAqABSAVABpAKgAkgFgQqACoAKAhWQVADzGIvRKPbae3fGvhk0c3N3e94bfenrS/YeaM/tYM/9138AozM4SwbuSnoh6ZYkPn+S9FXSiaSLpSDNAOCZpFcFJ79LepTAZJeMBnBf0scKDcnA7VImRgM4T7QBw2dJZAPqHEl6J+laAncq6UkO6EgA8B0A2I/Efc93nx1A3ZsNgHeQ6PM92i93IRvskRmoRThmiO9XbCSAp5JeO4+OE+/t0lmqBauPXIaGdGIcQTbR+2hwHenkNx/xB6k3DM0ADuE4CuPt0qlNjiVvkjoN6wPXJUGXl8EDCpdrRP29pMMMMKST34rWuwYeJ54DwgzJxHF03hsZshegeFWtF4Acz6EKRRszUXXyX2aACDKUxa4Jj3F8cTDbBElrBlCFh65bMi1+cA4ZzxkFPF1YwzWUpYvVAOAMEcWJaDYp3knR9bJnBQrQrlYD4JtJiyOlAm25d6M1SwDg8Vv3r0yESBqRhs82KbKkS4G2IFoCQPpNm9kZefUABDJnIIqdssWJbdYsAfjpCvJGRkE8wDjHbOPTqnuXACB5FuEcAOiEMmFTAqhR6IvL0JQAGLpQITNaP1GnJ0S9Zw2/Pe+p+Tlu1WTU0yR3f26SpNjpvDvvupsAoJHhENNktG9pZLA1fprEeQOyqijXLq5lwP4P2kAp3unASGicJukbDGu+P7CW+ujWkVsBtAaGbFAfjB/eAACQnc9EuwZgTtPoyIbJrF3nWvW4sDVarOsFwHxgXwDVbjqnSvUBaNbxTn0N3dDEIEKrOD9ZfeAoM1fcKwMU2g3dUnog1AcUYpu5xoZv6qOzKBlA4iaedVDHjlU87aY4VolA4rgexxHfREtHj92LeIkq/miRyMeDLijHRIyRFY7Yr1hvFWoFsJeHu/7wlghzfF46Xs9l6E9wRmbAqGHFSrdmmkVWaYD0DzvhKCrRaAAtj5hyDz/+UnM0ABzJDYHmIM7T4IpdeQYAOGubJN45Z6KooRT9YvrHrGu68lQyupXjdvMsFNoYzN4D+A3m9aUxd6JOSQAAAABJRU5ErkJggg==",Ce={title:"███████",src_code_link:"███████",demo_link:"███████",gallery:["https://sstech.us/wp-content/themes/sstech/assets/images/placeholder.jpg"],description:"███████",tech_stack:["███████"]},Se=({id:e})=>{const{isDark:r,language:s}=B(),{setCommentsMeta:h,onUnmount:g,setCallbacks:k}=q(),{likes:I,addLike:y,removeLike:u,token:d}=K(),{setDataMapper:R,dataMapper:z}=N(),[f,G]=A.useState(0),[D,J]=A.useState(!1),[o,W]=A.useState(Ce),[a,M]=A.useState(),[Z,C]=A.useState(!1),[T,L]=A.useState(!1),[F,S]=A.useState(!1),[p,Q]=A.useState(!1);A.useEffect(()=>{if(!T&&d){if(z[e]){W(z[e]),L(!0);return}C(I.includes(e)),b.post(`${w}/api/projects/${e}`,{},{headers:{Authorization:`Bearer ${d}`}}).then(({data:t})=>{W(t),R(m=>({...m,[e]:t})),b.post(`${w}/api/projects/stats/${e}`,{},{headers:{Authorization:`Bearer ${d}`}}).then(({data:m})=>{M(m),L(!0)})})}},[d]),A.useEffect(()=>()=>g(),[g]),A.useEffect(()=>{if(o==null||!D)return;const t=setInterval(()=>{G(m=>(m+1)%o.gallery.length)},2100);return()=>clearInterval(t)},[D,o]);const x=A.useCallback(()=>J(t=>!t),[J]),O=A.useCallback(()=>{const t=()=>{M(i=>({comments:`${+((i==null?void 0:i.comments)||0)+1}`,likes:i==null?void 0:i.likes,shares:i==null?void 0:i.shares}))},m=()=>{M(i=>({comments:`${+((i==null?void 0:i.comments)||0)+1}`,likes:i==null?void 0:i.likes,shares:i==null?void 0:i.shares}))};h("projects",e+"||"+(o==null?void 0:o.title)),k({incCmt:t,decCmt:m})},[e,o==null?void 0:o.title,h,k]),P=()=>{b.put(`${w}/api/stats/visits/${new Date().getFullYear()}`,{},{headers:{Authorization:`Bearer ${d}`}})},U=()=>{b.put(`${w}/api/stats/launches/${new Date().getFullYear()}`,{},{headers:{Authorization:`Bearer ${d}`}})},v=()=>{F||(S(!0),Z?b.put(`${w}/api/projects/dislike/${e}`,{},{headers:{Authorization:`Bearer ${d}`}}).then(()=>{M(t=>({likes:`${+((t==null?void 0:t.likes)||0)-1}`,comments:t==null?void 0:t.comments,shares:t==null?void 0:t.shares})),u(e),C(!1),S(!1)}):b.put(`${w}/api/projects/like/${e}`,{},{headers:{Authorization:`Bearer ${d}`}}).then(()=>{M(t=>({likes:`${+((t==null?void 0:t.likes)||0)+1}`,comments:t==null?void 0:t.comments,shares:t==null?void 0:t.shares})),y(e),C(!0),S(!1)}))},X=()=>{p||(Q(!0),b.put(`${w}/api/projects/share/${e}`,{},{headers:{Authorization:`Bearer ${d}`}}).then(()=>{navigator.clipboard.writeText(o==null?void 0:o.src_code_link),_.success("Source code link copied to clipboard"),M(t=>({likes:t==null?void 0:t.likes,comments:t==null?void 0:t.comments,shares:`${+((t==null?void 0:t.shares)||0)+1}`})),Q(!1)}))};return n(me,{onMouseEnter:x,onMouseLeave:x,children:T?l($,{children:[l(he,{dark:r,children:[n("span",{children:o==null?void 0:o.title}),l("div",{children:[n("a",{target:"_blank",rel:"noreferrer",href:o==null?void 0:o.src_code_link,onClick:P,children:n("img",{src:ye,alt:"code"})}),n("a",{target:"_blank",rel:"noreferrer",href:o==null?void 0:o.demo_link,onClick:U,children:n("img",{src:Re,alt:"open"})})]})]}),l(ge,{children:[n("img",{src:o==null?void 0:o.gallery[f],alt:"image "+(f+1+"")}),n("div",{children:o==null?void 0:o.gallery.slice(0,5).map((t,m)=>n(ue,{selected:m===f,onClick:()=>G(m)},t))})]}),n(Ie,{children:o==null?void 0:o.description}),n(H,{}),l(be,{children:[E.techStack[+s],":"," ",o==null?void 0:o.tech_stack.join(", ")]},s),n(H,{}),l(we,{children:[l("div",{onClick:v,children:[n(ke,{disabled:F,dark:r,liked:Z}),n("span",{children:(a==null?void 0:a.likes)!=="0"?a==null?void 0:a.likes:""})]}),l("div",{onClick:O,children:[n(j,{dark:r,src:te,alt:"comment"}),n("span",{children:(a==null?void 0:a.comments)!=="0"?a==null?void 0:a.comments:""})]}),l("div",{onClick:X,children:[n(j,{disabled:p,dark:r,src:fe,alt:"share"}),n("span",{children:(a==null?void 0:a.shares)!=="0"?a==null?void 0:a.shares:""})]})]})]}):n("img",{src:Ne,alt:"loading"})})},Ye=(e,r,s)=>Object.values(e[r]||{}).join("").toLowerCase().includes(s.toLowerCase()),Be=()=>{const{language:e}=B(),{projectIds:r,fetchProjects:s,currPage:h,searchField:g,dataMapper:k}=N(),I=A.useRef(),y=A.useCallback(()=>{if(!I.current||g.length>0)return;const{scrollTop:u,scrollHeight:d,clientHeight:R}=I.current;u+R>=d&&s()},[s,g.length]);return l(de,{ref:I,onScroll:y,children:[r.filter(u=>Ye(k,u,g)).map(u=>n(Se,{id:u},u)),h!==null&&g.length===0&&n(Me,{onClick:s,children:E.ldPrj[+e]})]})},Ge=()=>{const{setMenu:e}=ee(),{fetchProjects:r,resetProjects:s,currPage:h}=N();return A.useEffect(()=>(e(5),r(),()=>s()),[]),l(oe,{children:[h===null?n(se,{}):n("div",{}),n(Be,{})]})};export{Ge as default};

var c=Object.defineProperty,d=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var r=(i,o,t)=>o in i?c(i,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[o]=t,e=(i,o)=>{for(var t in o||(o={}))g.call(o,t)&&r(i,t,o[t]);if(n)for(var t of n(o))p.call(o,t)&&r(i,t,o[t]);return i},l=(i,o)=>d(i,f(o));import{j as a,s,a as m}from"./index.79738264.js";import{L as h}from"./Layout.5926343f.js";function y(i){return a(u,l(e({},i),{children:a("div",{className:"line"})}))}const u=s.div`
  width: 100%;
   .line {
   	 position: relative;
   	 left: 5%;
     right: 5%;
     height: 5px;
     border-radius: 2px;
     animation: line 2s;
     animation-fill-mode: forwards;
     background-color: ${i=>i.color};
   }
   @keyframes line {
   	 from {
   	 	width: 0;
   	 	background-color: #ffffff;
   	 }
   	 to {
   	 	width: 90%;
   	 	background-color: ${i=>i.color};
   	 }
   }
`,w={width:"150px",height:"auto",margin:"0 3.5em"};function v(){return a(h,{children:a(x,{children:m("section",{children:[m("article",{children:[a("img",{style:e({},w),src:"./images/segurmatica.jpg",alt:"Segurm\xE1tica"}),a("p",{className:"article__pki",children:"PKI"}),a(y,{color:"#1799ff"})]}),a("img",{src:"./images/homepage.png",alt:"robot"})]})})})}const x=s.div`
  width: 100%;

  section {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      max-width: 100%;
      height: auto;
    }
    article {
      position: relative;
      top: 3em;
      width: 100%;
      text-align: center;
      img {
        margin: 0 2em;
        opacity: 0;
        animation: logo;
        animation-delay: 0.2s;
        animation-duration: 1s;
        animation-direction: normal;
        animation-fill-mode: forwards;
      }
      .article__pki {
        opacity: 0;
        color: #0099ff;
        font-size: 3.2em;
        font-weight: bolder;
        font-family: calibri;
        animation: pki;
        animation-delay: 0.2s;
        animation-duration: 1.5s;
        animation-direction: normal;
        animation-fill-mode: forwards;
      }
    }
  }

  @keyframes logo {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes pki {
    from {
      opacity: 0;
      transform: rotateY(180deg);
    }
    to {
      opacity: 1;
      transform: rotateY(0);
    }
  }
`;export{v as default};

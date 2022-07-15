var c=Object.defineProperty,d=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var n=(i,t,o)=>t in i?c(i,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):i[t]=o,e=(i,t)=>{for(var o in t||(t={}))g.call(t,o)&&n(i,o,t[o]);if(r)for(var o of r(t))p.call(t,o)&&n(i,o,t[o]);return i},l=(i,t)=>d(i,f(t));import{j as a,s,a as m}from"./index.76db9c66.js";import{L as h}from"./Layout.e1bb17a1.js";function u(i){return a(y,l(e({},i),{children:a("div",{className:"line"})}))}const y=s.div`
  width: 100%;
  margin: 0 0 2em 0;
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
`,x={width:"150px",height:"auto",margin:"0 3.5em"};function E(){return a(h,{children:a(w,{children:m("section",{children:[m("article",{children:[a("img",{style:e({},x),src:"./images/segurmatica.jpg",alt:"Segurm\xE1tica"}),a("p",{className:"article__title",children:"PKI"}),a(u,{color:"#1799ff"})]}),a("img",{src:"./images/homepage.png",alt:"robot"}),a("h2",{className:"article__subtitle",children:"M\xC1S DE 25 A\xD1OS DE EXPERIENCIA."})]})})})}const w=s.div`
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
      .article__title {
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
  .article__subtitle {
    fontsize: 20px;
    margin: 0 0 2em 0;
    color: #000000;
    whitespace: nowrap;
    fontfamily: calibri;
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
`;export{E as default};

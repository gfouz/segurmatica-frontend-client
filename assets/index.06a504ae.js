var D=Object.defineProperty,M=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var f=(e,t,n)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,o=(e,t)=>{for(var n in t||(t={}))A.call(t,n)&&f(e,n,t[n]);if(g)for(var n of g(t))B.call(t,n)&&f(e,n,t[n]);return e},s=(e,t)=>M(e,R(t));import{s as I,r as p,j as r,F as L,a as d,U as x,W as q,X as z,Y as H,Z as b,$ as y,a0 as C}from"./index.79738264.js";import{B as v,L as Y}from"./Layout.5926343f.js";import{a as O,I as w,C as U}from"./index.esm.ea33a353.js";const V=I.div`
  background-color: #F1F1F1;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  @media (min-width: 800px){
    padding: 0.5em 0;
  }
`,S={size:"sm",type:"number",variant:"flushed"};function l(e,t,n){return parseInt(e.toString().substring(t,n))}let c=new Date().getFullYear(),F=new Date().getMonth()+1;c=l(c,2,4);F=l(F,2,4);const $={required:!0,maxLength:11,minLength:11,validate:{isGrownUp:e=>c>l(e,0,2)&&c-l(e,0,2)>18||c<l(e,0,2)&&l(e,0,2)<99,monthMin:e=>parseInt(e.substring(2,4))>=1,monthMax:e=>parseInt(e.substring(2,4))<=12,dayMin:e=>parseInt(e.substring(4,6))>=1,dayMax:e=>parseInt(e.substring(4,6))<=31}};function E(){const[e,t]=p.exports.useState("#666666"),[n,u]=p.exports.useState("");p.exports.useState("renewal");const{register:h,handleSubmit:_,formState:{errors:m}}=O(),N=a=>console.log(a);function j(a){let{value:k}=a.target,i=k.length;i&&i===11?t("#66CC00"):u("Validos 11 n\xFAmeros"),i&&i>11?t("#ff0000"):u("Complete 11 numeros"),i&&i<11?t("#CCCCCC"):u("N\xFAmero excedido de 11")}return r(L,{children:r(V,{children:d("form",{onSubmit:_(N),children:[r(x,{w:"100%",p:"1.5em",children:r(q,{as:"h3",size:"lg",color:"#B22222",children:"Solicitud:"})}),r(x,{w:"100%",p:"0.3em 0",children:r(z,{color:"#666666",children:"Renovaci\xF3n"})}),d(H,{spacing:2,p:"0.7em",children:[d(b,{children:[r("label",{style:{color:`${e}`},children:r("strong",{children:"Nro de ID"})}),r(w,o(s(o({},S),{_placeholder:{color:m.id?"red.400":"#666666"},placeholder:m.id?"Valido 11 d\xEDgitos":" "}),h("id",s(o({},$),{onChange:a=>j(a)}))))]}),d(b,{children:[r("label",{children:"Nro de Serie o DN"}),r(w,o(s(o({},S),{_placeholder:{color:m.dn?"red.400":"gray.500"},placeholder:m.dn?"Olvido su DN!":""}),h("dn",{required:!0})))]})]}),r(y,{p:"0 1em",w:"100%",children:r(C,{justifyContent:"flex-start",children:r(U,s(o({m:"0 0.7em",colorScheme:"red"},h("policy",{required:!0})),{children:"Acepto los terminos y condiciones."}))})}),r(y,{p:"2em 0.7em",w:"100%",children:d(C,{justifyContent:"space-evenly",children:[r(v,{colorScheme:"facebook",variant:"solid",type:"submit",children:"Continuar"}),r(v,{colorScheme:"red",variant:"solid",children:"Cancelar"})]})})]})})})}function Z(){return r(Y,{children:r(G,{children:r("section",{className:"login",children:r("div",{className:"login__divider",children:r(E,{})})})})})}const G=I.div`
  width: 100%;
  background-color: #f8f8f8;
  .login {
    position: relative;
    display: flex;
    @media (max-width: 800px) {
      flex-direction: column;
      align-items: center;
    }
  }
  .login__divider {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .login__logo {
    width: 300px;
    border-radius: 10px;
    background-color: #00000099;
    position: absolute;
    top: 50%;
    left: 50%;
    color: #ffffff;
    font-size: 1.7em;
    font-weight: bolder;
    font-family: calibri;
    text-align: center;
    transform: translate(-50%, -50%);
  }
  .login__image {
    max-width: 100%;
    height: auto;
  }
`;export{Z as default};

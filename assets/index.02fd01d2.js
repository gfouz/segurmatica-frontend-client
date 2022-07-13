var x=Object.defineProperty,_=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var d=(o,i,r)=>i in o?x(o,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[i]=r,m=(o,i)=>{for(var r in i||(i={}))y.call(i,r)&&d(o,r,i[r]);if(c)for(var r of c(i))w.call(i,r)&&d(o,r,i[r]);return o},h=(o,i)=>_(o,v(i));import{s as b,r as F,j as e,F as S,a as t,U as k,V as N,X as l,Y as a,L as C,Z as j,$ as q}from"./index.0752aace.js";import{B as p,L as z}from"./Layout.1154defa.js";import{W as A}from"./ReactToastify.7646dd66.js";import{b as B,C as n,c as L,d as E}from"./index.esm.df0d37e8.js";import{a as I,t as s,d as R,n as f,c as D,b as H,f as M,m as V,e as T}from"./constants.2bed07b7.js";const U=b.div`
  background-color: #F1F1F1;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  padding: 4em 1em;
  margin: 2em 0;
  border-radius: 20px;

  .input__label {
    color: #444444;
    font-size: 16px;
    white-space: nowrap;
    font-weight: bolder;
  }
  .checkbox__label {
    font-size: 16px;
    color:#0660b1;
  }
`;function W(){F.exports.useState("renewal");const{register:o,handleSubmit:i,formState:{errors:r}}=B(),u=g=>console.log(g);return I(r,A),e(S,{children:e(U,{children:t("form",{onSubmit:i(u),children:[e(k,{w:"100%",p:"1.5em",children:e(N,{as:"h3",size:"lg",color:"#B22222",children:"Revocaci\xF3n"})}),t(l,{p:"1em",children:[t(a,{children:[e("label",{style:{color:r.id?"red":"#222222"},children:e("strong",{className:"input__label",children:"Nro de ID"})}),e(n,{label:"id",message:s.ci,register:o,validations:R,htmlAttributes:f,requirements:D,placeholder:r.id&&"Escriba Nro de CI!",_placeholder:{color:r.id&&"red.400"}})]}),t(a,{children:[e("label",{style:{color:r.dn?"red":"#222222"},children:e("strong",{children:"Nro de Serie"})}),e(n,{label:"dn",message:s.dn,register:o,htmlAttributes:f,requirements:H,placeholder:r.dn&&"Escriba Nro de DN!",_placeholder:{color:r.dn&&"red.400"}})]})]}),e(l,{p:"1em",children:t(a,{children:[e("label",{className:"input__label",children:"Motivo de revocaci\xF3n"}),e(n,{label:"motive",message:s.motive,register:o,htmlAttributes:M,requirements:V,placeholder:r.motive&&"Escriba motivo de revocaci\xF3n!",_placeholder:{color:r.motive&&"red.400"}})]})}),e(l,{p:"1em",children:e(L,h(m({style:{border:"#444444"},m:"0 0.7em",colorScheme:"red"},o("policy",{required:!0})),{children:e(C,{to:"/terminos",children:e("span",{className:"checkbox__label",children:" Acepto los terminos y condiciones."})})}))}),e(j,{p:"2em 0.7em",w:"100%",children:t(q,{justifyContent:"space-evenly",children:[e(p,{colorScheme:"facebook",variant:"solid",type:"submit",children:"Continuar"}),e(p,{colorScheme:"red",variant:"solid",children:"Cancelar"})]})})]})})})}function O(){return e(z,{children:t(X,{children:[e(E,{linear:T.green,color:"#ffffff"}),e("section",{className:"login",children:e("div",{className:"login__divider",children:e(W,{})})})]})})}const X=b.div`
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
    align-items: center;
    justify-content: center;
  }
  .login__logo {
    width: 300px;
    border-radius: 10px;
    background-color:#00000099;
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
 .bg-grey  {
  background-color: #3a3839;
 }
`;export{O as default};

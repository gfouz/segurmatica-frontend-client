var _=Object.defineProperty,S=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var l=(o,i,r)=>i in o?_(o,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[i]=r,s=(o,i)=>{for(var r in i||(i={}))w.call(i,r)&&l(o,r,i[r]);if(a)for(var r of a(i))F.call(i,r)&&l(o,r,i[r]);return o},d=(o,i)=>S(o,v(i));import{s as b,r as n,j as e,F as C,a as t,U as N,V as c,X as m,Y as h,L as k,Z as j,$ as B}from"./index.0752aace.js";import{B as p,L}from"./Layout.1154defa.js";import{W as q}from"./ReactToastify.7646dd66.js";import{b as z,C as f,c as A,d as I}from"./index.esm.df0d37e8.js";import{a as R,t as u,d as D,n as g,c as E,b as H,e as V}from"./constants.2bed07b7.js";const M=b.div`
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
    white-space: nowrap;
  }
  .title {
    font-size: 16px;
    color:#0660b1;
    margin: 0 0 0 1em;
  }
`;function T(){n.exports.useState("#666666"),n.exports.useState(""),n.exports.useState("renewal");const{register:o,handleSubmit:i,formState:{errors:r}}=z(),x=y=>console.log(y);return R(r,q),e(C,{children:e(M,{children:t("form",{onSubmit:i(x),children:[e(N,{w:"100%",p:"1.5em",children:e(c,{as:"h3",size:"lg",color:"#B22222",children:"Renovaci\xF3n"})}),t(m,{p:"2em",children:[t(h,{children:[e("label",{style:{color:r.id?"red":"#222222"},children:e("strong",{children:"Nro de ID"})}),e(f,{label:"id",message:u.ci,register:o,validations:D,htmlAttributes:g,requirements:E,placeholder:r.id&&"Escriba Nro de CI!",_placeholder:{color:r.id&&"red.400"}})]}),t(h,{children:[e("label",{style:{color:r.dn?"red":"#222222"},children:e("strong",{className:"input__label",children:"Nro de Serie"})}),e(f,{label:"dn",message:u.dn,register:o,htmlAttributes:g,requirements:H,placeholder:r.dn&&"Escriba Nro de DN!",_placeholder:{color:r.dn&&"red.400"}})]})]}),e(m,{p:"2em",children:e(A,d(s({style:{border:"#444444"},m:"0 0.7em",colorScheme:"red"},o("policy",{required:!0})),{children:e(k,{to:"/terminos",children:e(c,{className:"title",children:" Acepto los terminos y condiciones."})})}))}),e(j,{p:"2em 0.7em",w:"100%",children:t(B,{justifyContent:"space-evenly",children:[e(p,{colorScheme:"facebook",variant:"solid",type:"submit",children:"Continuar"}),e(p,{colorScheme:"red",variant:"solid",children:"Cancelar"})]})})]})})})}function J(){return e(L,{children:t(U,{children:[e(I,{linear:V.green,color:"#ffffff"}),e("section",{className:"login",children:e("div",{className:"login__divider",children:e(T,{})})})]})})}const U=b.div`
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
`;export{J as default};

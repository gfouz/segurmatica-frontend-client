var Mt=Object.defineProperty,qt=Object.defineProperties;var Ut=Object.getOwnPropertyDescriptors;var Pe=Object.getOwnPropertySymbols;var ut=Object.prototype.hasOwnProperty,ct=Object.prototype.propertyIsEnumerable;var ot=(e,r,t)=>r in e?Mt(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,m=(e,r)=>{for(var t in r||(r={}))ut.call(r,t)&&ot(e,t,r[t]);if(Pe)for(var t of Pe(r))ct.call(r,t)&&ot(e,t,r[t]);return e},ae=(e,r)=>qt(e,Ut(r));var Ve=(e,r)=>{var t={};for(var n in e)ut.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&Pe)for(var n of Pe(e))r.indexOf(n)<0&&ct.call(e,n)&&(t[n]=e[n]);return t};import{b as pt,q as K,a1 as je,e as ye,f as de,v as Ct,o as Ft,a2 as $t,r as C,c as pe,K as jt,a3 as ze,a4 as Ke,a5 as He,a6 as zt,h as z,z as dt,n as Kt,a7 as Ht,m as At,A as Wt,a8 as Xt,p as Dt,R as ce}from"./index.79738264.js";function Re(){return Re=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Re.apply(this,arguments)}function wt(e,r){if(e==null)return{};var t={},n=Object.keys(e),i,l;for(l=0;l<n.length;l++)i=n[l],!(r.indexOf(i)>=0)&&(t[i]=e[i]);return t}var Gt=pt({strict:!1,name:"FormControlContext"}),Jt=Gt[1],Qt=["isDisabled","isInvalid","isReadOnly","isRequired"],Yt=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function Zt(e){var r=St(e),t=r.isDisabled,n=r.isInvalid,i=r.isReadOnly,l=r.isRequired,d=wt(r,Qt);return Re({},d,{disabled:t,readOnly:i,required:l,"aria-invalid":je(n),"aria-required":je(l),"aria-readonly":je(i)})}function St(e){var r,t,n,i=Jt(),l=e.id,d=e.disabled,v=e.readOnly,A=e.required,_=e.isRequired,F=e.isInvalid,p=e.isReadOnly,g=e.isDisabled,L=e.onFocus,ne=e.onBlur,N=wt(e,Yt),G=e["aria-describedby"]?[e["aria-describedby"]]:[];return i!=null&&i.hasFeedbackText&&i!=null&&i.isInvalid&&G.push(i.feedbackId),i!=null&&i.hasHelpText&&G.push(i.helpTextId),Re({},N,{"aria-describedby":G.join(" ")||void 0,id:l!=null?l:i==null?void 0:i.id,isDisabled:(r=d!=null?d:g)!=null?r:i==null?void 0:i.isDisabled,isReadOnly:(t=v!=null?v:p)!=null?t:i==null?void 0:i.isReadOnly,isRequired:(n=A!=null?A:_)!=null?n:i==null?void 0:i.isRequired,isInvalid:F!=null?F:i==null?void 0:i.isInvalid,onFocus:K(i==null?void 0:i.onFocus,L),onBlur:K(i==null?void 0:i.onBlur,ne)})}function T(){return T=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},T.apply(this,arguments)}var er=pt({name:"CheckboxGroupContext",strict:!1}),tr=er[1];function tt(e,r){if(e==null)return{};var t={},n=Object.keys(e),i,l;for(l=0;l<n.length;l++)i=n[l],!(r.indexOf(i)>=0)&&(t[i]=e[i]);return t}var rr=["isIndeterminate","isChecked"];function sr(e){var r=At;return"custom"in r&&typeof r.custom=="function"?r.custom(e):r(e)}var It=sr(ye.svg),ir=function(r){return C.exports.createElement(It,T({width:"1.2em",viewBox:"0 0 12 10",variants:{unchecked:{opacity:0,strokeDashoffset:16},checked:{opacity:1,strokeDashoffset:0,transition:{duration:.2}}},style:{fill:"none",strokeWidth:2,stroke:"currentColor",strokeDasharray:16}},r),C.exports.createElement("polyline",{points:"1.5 6 4.5 9 10.5 1"}))},nr=function(r){return C.exports.createElement(It,T({width:"1.2em",viewBox:"0 0 24 24",variants:{unchecked:{scaleX:.65,opacity:0},checked:{scaleX:1,opacity:1,transition:{scaleX:{duration:0},opacity:{duration:.02}}}},style:{stroke:"currentColor",strokeWidth:4}},r),C.exports.createElement("line",{x1:"21",x2:"3",y1:"12",y2:"12"}))},ar=function(r){var t=r.open,n=r.children;return C.exports.createElement(Wt,{initial:!1},t&&C.exports.createElement(At.div,{variants:{unchecked:{scale:.5},checked:{scale:1}},initial:"unchecked",animate:"checked",exit:"unchecked",style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"}},n))},lr=function(r){var t=r.isIndeterminate,n=r.isChecked,i=tt(r,rr),l=t?nr:ir;return C.exports.createElement(ar,{open:n||t},C.exports.createElement(l,i))},or=["defaultChecked","isChecked","isFocusable","onChange","isIndeterminate","name","value","tabIndex","aria-label","aria-labelledby","aria-invalid"];function ur(e){e===void 0&&(e={});var r=St(e),t=r.isDisabled,n=r.isReadOnly,i=r.isRequired,l=r.isInvalid,d=r.id,v=r.onBlur,A=r.onFocus,_=r["aria-describedby"],F=e,p=F.defaultChecked,g=F.isChecked,L=F.isFocusable,ne=F.onChange,N=F.isIndeterminate,G=F.name,P=F.value,U=F.tabIndex,S=U===void 0?void 0:U,Y=F["aria-label"],Z=F["aria-labelledby"],W=F["aria-invalid"],E=tt(F,or),X=jt(E,["isDisabled","isReadOnly","isRequired","isInvalid","id","onBlur","onFocus","aria-describedby"]),$=ze(ne),k=ze(v),x=ze(A),w=Ke(),R=w[0],V=w[1],oe=Ke(),ue=oe[0],fe=oe[1],ve=Ke(),ge=ve[0],re=ve[1],J=C.exports.useRef(null),Se=C.exports.useState(!0),Ie=Se[0],Ce=Se[1],be=C.exports.useState(!!p),at=be[0],Fe=be[1],Ue=Xt(g,at),$e=Ue[0],s=Ue[1],a=C.exports.useCallback(function(b){if(n||t){b.preventDefault();return}$e||Fe(s?b.target.checked:N?!0:b.target.checked),$==null||$(b)},[n,t,s,$e,N,$]);He(function(){J.current&&(J.current.indeterminate=Boolean(N))},[N]),zt(function(){t&&V.off()},[t,V]),He(function(){var b=J.current;!(b!=null&&b.form)||(b.form.onreset=function(){Fe(!!p)})},[]);var o=t&&!L,c=C.exports.useCallback(function(b){b.key===" "&&re.on()},[re]),y=C.exports.useCallback(function(b){b.key===" "&&re.off()},[re]);He(function(){if(!!J.current){var b=J.current.checked!==s;b&&Fe(J.current.checked)}},[J.current]);var u=C.exports.useCallback(function(b,B){b===void 0&&(b={}),B===void 0&&(B=null);var se=function(Ee){Ee.preventDefault(),re.on()};return T({},b,{ref:B,"data-active":z(ge),"data-hover":z(ue),"data-checked":z(s),"data-focus":z(R),"data-indeterminate":z(N),"data-disabled":z(t),"data-invalid":z(l),"data-readonly":z(n),"aria-hidden":!0,onMouseDown:K(b.onMouseDown,se),onMouseUp:K(b.onMouseUp,re.off),onMouseEnter:K(b.onMouseEnter,fe.on),onMouseLeave:K(b.onMouseLeave,fe.off)})},[ge,s,t,R,ue,N,l,n,re,fe.off,fe.on]),f=C.exports.useCallback(function(b,B){return b===void 0&&(b={}),B===void 0&&(B=null),T({},X,b,{ref:dt(B,function(se){!se||Ce(se.tagName==="LABEL")}),onClick:K(b.onClick,function(){if(!Ie){var se;(se=J.current)==null||se.click(),Kt(J.current,{nextTick:!0})}}),"data-disabled":z(t),"data-checked":z(s),"data-invalid":z(l)})},[X,t,s,l,Ie]),D=C.exports.useCallback(function(b,B){return b===void 0&&(b={}),B===void 0&&(B=null),T({},b,{ref:dt(J,B),type:"checkbox",name:G,value:P,id:d,tabIndex:S,onChange:K(b.onChange,a),onBlur:K(b.onBlur,k,V.off),onFocus:K(b.onFocus,x,V.on),onKeyDown:K(b.onKeyDown,c),onKeyUp:K(b.onKeyUp,y),required:i,checked:s,disabled:o,readOnly:n,"aria-label":Y,"aria-labelledby":Z,"aria-invalid":W?Boolean(W):l,"aria-describedby":_,"aria-disabled":t,style:Ht})},[G,P,d,a,V.off,V.on,k,x,c,y,i,s,o,n,Y,Z,W,l,_,t,S]),j=C.exports.useCallback(function(b,B){return b===void 0&&(b={}),B===void 0&&(B=null),T({},b,{ref:B,onMouseDown:K(b.onMouseDown,ft),onTouchStart:K(b.onTouchStart,ft),"data-disabled":z(t),"data-checked":z(s),"data-invalid":z(l)})},[s,t,l]),me={isInvalid:l,isFocused:R,isChecked:s,isActive:ge,isHovered:ue,isIndeterminate:N,isDisabled:t,isReadOnly:n,isRequired:i};return{state:me,getRootProps:f,getCheckboxProps:u,getInputProps:D,getLabelProps:j,htmlProps:X}}function ft(e){e.preventDefault(),e.stopPropagation()}var cr=["spacing","className","children","iconColor","iconSize","icon","isChecked","isDisabled","onChange","inputProps"],dr=ye("span",{baseStyle:{display:"inline-flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",userSelect:"none",flexShrink:0}}),fr=ye("label",{baseStyle:{cursor:"pointer",display:"inline-flex",alignItems:"center",verticalAlign:"top",position:"relative"}}),zr=de(function(e,r){var t=tr(),n=T({},t,e),i=Ct("Checkbox",n),l=Ft(e),d=l.spacing,v=d===void 0?"0.5rem":d,A=l.className,_=l.children,F=l.iconColor,p=l.iconSize,g=l.icon,L=g===void 0?C.exports.createElement(lr,null):g,ne=l.isChecked,N=l.isDisabled,G=N===void 0?t==null?void 0:t.isDisabled:N,P=l.onChange,U=l.inputProps,S=tt(l,cr),Y=ne;t!=null&&t.value&&l.value&&(Y=t.value.includes(l.value));var Z=P;t!=null&&t.onChange&&l.value&&(Z=$t(t.onChange,P));var W=ur(T({},S,{isDisabled:G,isChecked:Y,onChange:Z})),E=W.state,X=W.getInputProps,$=W.getCheckboxProps,k=W.getLabelProps,x=W.getRootProps,w=C.exports.useMemo(function(){return T({opacity:E.isChecked||E.isIndeterminate?1:0,transform:E.isChecked||E.isIndeterminate?"scale(1)":"scale(0.95)",fontSize:p,color:F},i.icon)},[F,p,E.isChecked,E.isIndeterminate,i.icon]),R=C.exports.cloneElement(L,{__css:w,isIndeterminate:E.isIndeterminate,isChecked:E.isChecked});return C.exports.createElement(fr,T({__css:i.container,className:pe("chakra-checkbox",A)},x()),C.exports.createElement("input",T({className:"chakra-checkbox__input"},X(U,r))),C.exports.createElement(dr,T({__css:i.control,className:"chakra-checkbox__control"},$()),R),_&&C.exports.createElement(ye.span,T({className:"chakra-checkbox__label"},k(),{__css:T({marginStart:v},i.label)}),_))});function te(){return te=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},te.apply(this,arguments)}function De(e,r){if(e==null)return{};var t={},n=Object.keys(e),i,l;for(l=0;l<n.length;l++)i=n[l],!(r.indexOf(i)>=0)&&(t[i]=e[i]);return t}var hr=["htmlSize"],yr=de(function(e,r){var t=e.htmlSize,n=De(e,hr),i=Ct("Input",n),l=Ft(n),d=Zt(l),v=pe("chakra-input",e.className);return C.exports.createElement(ye.input,te({size:t},d,{__css:i.field,ref:r,className:v}))});yr.id="Input";var vr=["placement"],gr={left:{marginEnd:"-1px",borderEndRadius:0,borderEndColor:"transparent"},right:{marginStart:"-1px",borderStartRadius:0,borderStartColor:"transparent"}},br=ye("div",{baseStyle:{flex:"0 0 auto",width:"auto",display:"flex",alignItems:"center",whiteSpace:"nowrap"}}),Et=de(function(e,r){var t,n=e.placement,i=n===void 0?"left":n,l=De(e,vr),d=(t=gr[i])!=null?t:{},v=Dt();return C.exports.createElement(br,te({ref:r},l,{__css:te({},v.addon,d)}))}),mr=de(function(e,r){return C.exports.createElement(Et,te({ref:r,placement:"left"},e,{className:pe("chakra-input__left-addon",e.className)}))});mr.id="InputLeftAddon";var xr=de(function(e,r){return C.exports.createElement(Et,te({ref:r,placement:"right"},e,{className:pe("chakra-input__right-addon",e.className)}))});xr.id="InputRightAddon";var kr=["placement"],_r=["className"],pr=["className"],Cr=ye("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),rt=de(function(e,r){var t,n,i,l=e.placement,d=l===void 0?"left":l,v=De(e,kr),A=Dt(),_=A.field,F=d==="left"?"insetStart":"insetEnd",p=te((i={},i[F]="0",i.width=(t=_==null?void 0:_.height)!=null?t:_==null?void 0:_.h,i.height=(n=_==null?void 0:_.height)!=null?n:_==null?void 0:_.h,i.fontSize=_==null?void 0:_.fontSize,i),A.element);return C.exports.createElement(Cr,te({ref:r,__css:p},v))});rt.id="InputElement";var Fr=de(function(e,r){var t=e.className,n=De(e,_r),i=pe("chakra-input__left-element",t);return C.exports.createElement(rt,te({ref:r,placement:"left",className:i},n))});Fr.id="InputLeftElement";var Ar=de(function(e,r){var t=e.className,n=De(e,pr),i=pe("chakra-input__right-element",t);return C.exports.createElement(rt,te({ref:r,placement:"right",className:i},n))});Ar.id="InputRightElement";var we=e=>e.type==="checkbox",ke=e=>e instanceof Date,H=e=>e==null;const Pt=e=>typeof e=="object";var M=e=>!H(e)&&!Array.isArray(e)&&Pt(e)&&!ke(e),Dr=e=>M(e)&&e.target?we(e.target)?e.target.checked:e.target.value:e,wr=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Sr=(e,r)=>e.has(wr(r)),Me=e=>Array.isArray(e)?e.filter(Boolean):[],O=e=>e===void 0,h=(e,r,t)=>{if(!r||!M(e))return t;const n=Me(r.split(/[,[\].]+?/)).reduce((i,l)=>H(i)?i:i[l],e);return O(n)||n===e?O(e[r])?t:e[r]:n};const ht={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},ee={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},le={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};ce.createContext(null);var Ir=(e,r,t,n=!0)=>{const i={};for(const l in e)Object.defineProperty(i,l,{get:()=>{const d=l;return r[d]!==ee.all&&(r[d]=!n||ee.all),t&&(t[d]=!0),e[d]}});return i},Q=e=>M(e)&&!Object.keys(e).length,Er=(e,r,t)=>{const l=e,{name:n}=l,i=Ve(l,["name"]);return Q(i)||Object.keys(i).length>=Object.keys(r).length||Object.keys(i).find(d=>r[d]===(!t||ee.all))},We=e=>Array.isArray(e)?e:[e];function Pr(e){const r=ce.useRef(e);r.current=e,ce.useEffect(()=>{const t=i=>{i&&i.unsubscribe()},n=!e.disabled&&r.current.subject.subscribe({next:r.current.callback});return()=>t(n)},[e.disabled])}var ie=e=>typeof e=="string",Vr=(e,r,t,n)=>{const i=Array.isArray(e);return ie(e)?(n&&r.watch.add(e),h(t,e)):i?e.map(l=>(n&&r.watch.add(l),h(t,l))):(n&&(r.watchAll=!0),t)},qe=e=>typeof e=="function",Vt=e=>{for(const r in e)if(qe(e[r]))return!0;return!1},Or=(e,r,t,n,i)=>r?ae(m({},t[e]),{types:ae(m({},t[e]&&t[e].types?t[e].types:{}),{[n]:i||!0})}):{},st=e=>/^\w*$/.test(e),Ot=e=>Me(e.replace(/["|']|\]/g,"").split(/\.|\[/));function I(e,r,t){let n=-1;const i=st(r)?[r]:Ot(r),l=i.length,d=l-1;for(;++n<l;){const v=i[n];let A=t;if(n!==d){const _=e[v];A=M(_)||Array.isArray(_)?_:isNaN(+i[n+1])?{}:[]}e[v]=A,e=e[v]}return e}const Ye=(e,r,t)=>{for(const i of t||Object.keys(e)){const l=h(e,i);if(l){const n=l,{_f:d}=n,v=Ve(n,["_f"]);if(d&&r(d.name)){if(d.ref.focus&&O(d.ref.focus()))break;if(d.refs){d.refs[0].focus();break}}else M(v)&&Ye(v,r)}}};var yt=(e,r,t)=>!t&&(r.watchAll||r.watch.has(e)||[...r.watch].some(n=>e.startsWith(n)&&/^\.\w+/.test(e.slice(n.length)))),Ze=typeof window!="undefined"&&typeof window.HTMLElement!="undefined"&&typeof document!="undefined";function he(e){let r;const t=Array.isArray(e);if(e instanceof Date)r=new Date(e);else if(e instanceof Set)r=new Set(e);else if(!(Ze&&(e instanceof Blob||e instanceof FileList))&&(t||M(e))){r=t?[]:{};for(const n in e)r[n]=qe(e[n])?e[n]:he(e[n])}else return e;return r}function Rr(e,r){const t=r.slice(0,-1).length;let n=0;for(;n<t;)e=O(e)?n++:e[r[n++]];return e}function q(e,r){const t=st(r)?[r]:Ot(r),n=t.length==1?e:Rr(e,t),i=t[t.length-1];let l;n&&delete n[i];for(let d=0;d<t.slice(0,-1).length;d++){let v=-1,A;const _=t.slice(0,-(d+1)),F=_.length-1;for(d>0&&(l=e);++v<_.length;){const p=_[v];A=A?A[p]:e[p],F===v&&(M(A)&&Q(A)||Array.isArray(A)&&!A.filter(g=>!O(g)).length)&&(l?delete l[p]:delete e[p]),l=A}}return e}function Xe(){let e=[];return{get observers(){return e},next:i=>{for(const l of e)l.next(i)},subscribe:i=>(e.push(i),{unsubscribe:()=>{e=e.filter(l=>l!==i)}}),unsubscribe:()=>{e=[]}}}var Le=e=>H(e)||!Pt(e);function _e(e,r){if(Le(e)||Le(r))return e===r;if(ke(e)&&ke(r))return e.getTime()===r.getTime();const t=Object.keys(e),n=Object.keys(r);if(t.length!==n.length)return!1;for(const i of t){const l=e[i];if(!n.includes(i))return!1;if(i!=="ref"){const d=r[i];if(ke(l)&&ke(d)||M(l)&&M(d)||Array.isArray(l)&&Array.isArray(d)?!_e(l,d):l!==d)return!1}}return!0}var vt=e=>({isOnSubmit:!e||e===ee.onSubmit,isOnBlur:e===ee.onBlur,isOnChange:e===ee.onChange,isOnAll:e===ee.all,isOnTouch:e===ee.onTouched}),Ne=e=>typeof e=="boolean",it=e=>e.type==="file",et=e=>e instanceof HTMLElement,Rt=e=>e.type==="select-multiple",nt=e=>e.type==="radio",Lr=e=>nt(e)||we(e),Ge=e=>et(e)&&e.isConnected;function Be(e,r={}){const t=Array.isArray(e);if(M(e)||t)for(const n in e)Array.isArray(e[n])||M(e[n])&&!Vt(e[n])?(r[n]=Array.isArray(e[n])?[]:{},Be(e[n],r[n])):H(e[n])||(r[n]=!0);return r}function Lt(e,r,t){const n=Array.isArray(e);if(M(e)||n)for(const i in e)Array.isArray(e[i])||M(e[i])&&!Vt(e[i])?O(r)||Le(t[i])?t[i]=Array.isArray(e[i])?Be(e[i],[]):m({},Be(e[i])):Lt(e[i],H(r)?{}:r[i],t[i]):t[i]=!_e(e[i],r[i]);return t}var Je=(e,r)=>Lt(e,r,Be(r));const gt={value:!1,isValid:!1},bt={value:!0,isValid:!0};var Nt=e=>{if(Array.isArray(e)){if(e.length>1){const r=e.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:r,isValid:!!r.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!O(e[0].attributes.value)?O(e[0].value)||e[0].value===""?bt:{value:e[0].value,isValid:!0}:bt:gt}return gt},Bt=(e,{valueAsNumber:r,valueAsDate:t,setValueAs:n})=>O(e)?e:r?e===""?NaN:+e:t&&ie(e)?new Date(e):n?n(e):e;const mt={isValid:!1,value:null};var Tt=e=>Array.isArray(e)?e.reduce((r,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:r,mt):mt;function Qe(e){const r=e.ref;if(!(e.refs?e.refs.every(t=>t.disabled):r.disabled))return it(r)?r.files:nt(r)?Tt(e.refs).value:Rt(r)?[...r.selectedOptions].map(({value:t})=>t):we(r)?Nt(e.refs).value:Bt(O(r.value)?e.ref.value:r.value,e)}var Nr=(e,r,t,n)=>{const i={};for(const l of e){const d=h(r,l);d&&I(i,l,d._f)}return{criteriaMode:t,names:[...e],fields:i,shouldUseNativeValidation:n}},Te=e=>e instanceof RegExp,Ae=e=>O(e)?void 0:Te(e)?e.source:M(e)?Te(e.value)?e.value.source:e.value:e,Br=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function xt(e,r,t){const n=h(e,t);if(n||st(t))return{error:n,name:t};const i=t.split(".");for(;i.length;){const l=i.join("."),d=h(r,l),v=h(e,l);if(d&&!Array.isArray(d)&&t!==l)return{name:t};if(v&&v.type)return{name:l,error:v};i.pop()}return{name:t}}var Tr=(e,r,t,n,i)=>i.isOnAll?!1:!t&&i.isOnTouch?!(r||e):(t?n.isOnBlur:i.isOnBlur)?!e:(t?n.isOnChange:i.isOnChange)?e:!0,Mr=(e,r)=>!Me(h(e,r)).length&&q(e,r),Oe=e=>ie(e)||ce.isValidElement(e);function kt(e,r,t="validate"){if(Oe(e)||Array.isArray(e)&&e.every(Oe)||Ne(e)&&!e)return{type:t,message:Oe(e)?e:"",ref:r}}var xe=e=>M(e)&&!Te(e)?e:{value:e,message:""},_t=async(e,r,t,n)=>{const{ref:i,refs:l,required:d,maxLength:v,minLength:A,min:_,max:F,pattern:p,validate:g,name:L,valueAsNumber:ne,mount:N,disabled:G}=e._f;if(!N||G)return{};const P=l?l[0]:i,U=k=>{n&&P.reportValidity&&(P.setCustomValidity(Ne(k)?"":k||" "),P.reportValidity())},S={},Y=nt(i),Z=we(i),W=Y||Z,E=(ne||it(i))&&!i.value||r===""||Array.isArray(r)&&!r.length,X=Or.bind(null,L,t,S),$=(k,x,w,R=le.maxLength,V=le.minLength)=>{const oe=k?x:w;S[L]=m({type:k?R:V,message:oe,ref:i},X(k?R:V,oe))};if(d&&(!W&&(E||H(r))||Ne(r)&&!r||Z&&!Nt(l).isValid||Y&&!Tt(l).isValid)){const{value:k,message:x}=Oe(d)?{value:!!d,message:d}:xe(d);if(k&&(S[L]=m({type:le.required,message:x,ref:P},X(le.required,x)),!t))return U(x),S}if(!E&&(!H(_)||!H(F))){let k,x;const w=xe(F),R=xe(_);if(isNaN(r)){const V=i.valueAsDate||new Date(r);ie(w.value)&&(k=V>new Date(w.value)),ie(R.value)&&(x=V<new Date(R.value))}else{const V=i.valueAsNumber||+r;H(w.value)||(k=V>w.value),H(R.value)||(x=V<R.value)}if((k||x)&&($(!!k,w.message,R.message,le.max,le.min),!t))return U(S[L].message),S}if((v||A)&&!E&&ie(r)){const k=xe(v),x=xe(A),w=!H(k.value)&&r.length>k.value,R=!H(x.value)&&r.length<x.value;if((w||R)&&($(w,k.message,x.message),!t))return U(S[L].message),S}if(p&&!E&&ie(r)){const{value:k,message:x}=xe(p);if(Te(k)&&!r.match(k)&&(S[L]=m({type:le.pattern,message:x,ref:i},X(le.pattern,x)),!t))return U(x),S}if(g){if(qe(g)){const k=await g(r),x=kt(k,P);if(x&&(S[L]=m(m({},x),X(le.validate,x.message)),!t))return U(x.message),S}else if(M(g)){let k={};for(const x in g){if(!Q(k)&&!t)break;const w=kt(await g[x](r),P,x);w&&(k=m(m({},w),X(x,w.message)),U(w.message),t&&(S[L]=k))}if(!Q(k)&&(S[L]=m({ref:P},k),!t))return S}}return U(!0),S};const qr={mode:ee.onSubmit,reValidateMode:ee.onChange,shouldFocusError:!0};function Ur(e={}){let r=m(m({},qr),e),t={isDirty:!1,isValidating:!1,dirtyFields:{},isSubmitted:!1,submitCount:0,touchedFields:{},isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,errors:{}},n={},i=he(r.defaultValues)||{},l=r.shouldUnregister?{}:he(i),d={action:!1,mount:!1,watch:!1},v={mount:new Set,unMount:new Set,array:new Set,watch:new Set},A,_=0,F={};const p={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},g={watch:Xe(),array:Xe(),state:Xe()},L=vt(r.mode),ne=vt(r.reValidateMode),N=r.criteriaMode===ee.all,G=(s,a)=>(...o)=>{clearTimeout(_),_=window.setTimeout(()=>s(...o),a)},P=async s=>{let a=!1;return p.isValid&&(a=r.resolver?Q((await E()).errors):await $(n,!0),!s&&a!==t.isValid&&(t.isValid=a,g.state.next({isValid:a}))),a},U=(s,a=[],o,c,y=!0,u=!0)=>{if(c&&o){if(d.action=!0,u&&Array.isArray(h(n,s))){const f=o(h(n,s),c.argA,c.argB);y&&I(n,s,f)}if(p.errors&&u&&Array.isArray(h(t.errors,s))){const f=o(h(t.errors,s),c.argA,c.argB);y&&I(t.errors,s,f),Mr(t.errors,s)}if(p.touchedFields&&u&&Array.isArray(h(t.touchedFields,s))){const f=o(h(t.touchedFields,s),c.argA,c.argB);y&&I(t.touchedFields,s,f)}p.dirtyFields&&(t.dirtyFields=Je(i,l)),g.state.next({isDirty:x(s,a),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else I(l,s,a)},S=(s,a)=>(I(t.errors,s,a),g.state.next({errors:t.errors})),Y=(s,a,o,c)=>{const y=h(n,s);if(y){const u=h(l,s,O(o)?h(i,s):o);O(u)||c&&c.defaultChecked||a?I(l,s,a?u:Qe(y._f)):V(s,u),d.mount&&P()}},Z=(s,a,o,c,y)=>{let u=!1;const f={name:s},D=h(t.touchedFields,s);if(p.isDirty){const j=t.isDirty;t.isDirty=f.isDirty=x(),u=j!==f.isDirty}if(p.dirtyFields&&(!o||c)){const j=h(t.dirtyFields,s);_e(h(i,s),a)?q(t.dirtyFields,s):I(t.dirtyFields,s,!0),f.dirtyFields=t.dirtyFields,u=u||j!==h(t.dirtyFields,s)}return o&&!D&&(I(t.touchedFields,s,o),f.touchedFields=t.touchedFields,u=u||p.touchedFields&&D!==o),u&&y&&g.state.next(f),u?f:{}},W=async(s,a,o,c,y)=>{const u=h(t.errors,a),f=p.isValid&&t.isValid!==o;if(e.delayError&&c?(A=A||G(S,e.delayError),A(a,c)):(clearTimeout(_),c?I(t.errors,a,c):q(t.errors,a)),((c?!_e(u,c):u)||!Q(y)||f)&&!s){const D=ae(m(m({},y),f?{isValid:o}:{}),{errors:t.errors,name:a});t=m(m({},t),D),g.state.next(D)}F[a]--,p.isValidating&&!Object.values(F).some(D=>D)&&(g.state.next({isValidating:!1}),F={})},E=async s=>r.resolver?await r.resolver(m({},l),r.context,Nr(s||v.mount,n,r.criteriaMode,r.shouldUseNativeValidation)):{},X=async s=>{const{errors:a}=await E();if(s)for(const o of s){const c=h(a,o);c?I(t.errors,o,c):q(t.errors,o)}else t.errors=a;return a},$=async(s,a,o={valid:!0})=>{for(const y in s){const u=s[y];if(u){const c=u,{_f:f}=c,D=Ve(c,["_f"]);if(f){const j=await _t(u,h(l,f.name),N,r.shouldUseNativeValidation);if(j[f.name]&&(o.valid=!1,a))break;a||(j[f.name]?I(t.errors,f.name,j[f.name]):q(t.errors,f.name))}D&&await $(D,a,o)}}return o.valid},k=()=>{for(const s of v.unMount){const a=h(n,s);a&&(a._f.refs?a._f.refs.every(o=>!Ge(o)):!Ge(a._f.ref))&&Ce(s)}v.unMount=new Set},x=(s,a)=>(s&&a&&I(l,s,a),!_e(ge(),i)),w=(s,a,o)=>{const c=m({},d.mount?l:O(a)?i:ie(s)?{[s]:a}:a);return Vr(s,v,c,o)},R=s=>Me(h(d.mount?l:i,s,e.shouldUnregister?h(i,s,[]):[])),V=(s,a,o={})=>{const c=h(n,s);let y=a;if(c){const u=c._f;u&&(!u.disabled&&I(l,s,Bt(a,u)),y=Ze&&et(u.ref)&&H(a)?"":a,Rt(u.ref)?[...u.ref.options].forEach(f=>f.selected=y.includes(f.value)):u.refs?we(u.ref)?u.refs.length>1?u.refs.forEach(f=>!f.disabled&&(f.checked=Array.isArray(y)?!!y.find(D=>D===f.value):y===f.value)):u.refs[0]&&(u.refs[0].checked=!!y):u.refs.forEach(f=>f.checked=f.value===y):it(u.ref)?u.ref.value="":(u.ref.value=y,u.ref.type||g.watch.next({name:s})))}(o.shouldDirty||o.shouldTouch)&&Z(s,y,o.shouldTouch,o.shouldDirty,!0),o.shouldValidate&&ve(s)},oe=(s,a,o)=>{for(const c in a){const y=a[c],u=`${s}.${c}`,f=h(n,u);(v.array.has(s)||!Le(y)||f&&!f._f)&&!ke(y)?oe(u,y,o):V(u,y,o)}},ue=(s,a,o={})=>{const c=h(n,s),y=v.array.has(s),u=he(a);I(l,s,u),y?(g.array.next({name:s,values:l}),(p.isDirty||p.dirtyFields)&&o.shouldDirty&&(t.dirtyFields=Je(i,l),g.state.next({name:s,dirtyFields:t.dirtyFields,isDirty:x(s,u)}))):c&&!c._f&&!H(u)?oe(s,u,o):V(s,u,o),yt(s,v)&&g.state.next({}),g.watch.next({name:s})},fe=async s=>{const a=s.target;let o=a.name;const c=h(n,o);if(c){let y,u;const f=a.type?Qe(c._f):Dr(s),D=s.type===ht.BLUR||s.type===ht.FOCUS_OUT,j=!Br(c._f)&&!r.resolver&&!h(t.errors,o)&&!c._f.deps||Tr(D,h(t.touchedFields,o),t.isSubmitted,ne,L),me=yt(o,v,D);I(l,o,f),D?c._f.onBlur&&c._f.onBlur(s):c._f.onChange&&c._f.onChange(s);const b=Z(o,f,D,!1),B=!Q(b)||me;if(!D&&g.watch.next({name:o,type:s.type}),j)return B&&g.state.next(m({name:o},me?{}:b));if(!D&&me&&g.state.next({}),F[o]=(F[o],1),g.state.next({isValidating:!0}),r.resolver){const{errors:se}=await E([o]),lt=xt(t.errors,n,o),Ee=xt(se,n,lt.name||o);y=Ee.error,o=Ee.name,u=Q(se)}else y=(await _t(c,h(l,o),N,r.shouldUseNativeValidation))[o],u=await P(!0);c._f.deps&&ve(c._f.deps),W(!1,o,u,y,b)}},ve=async(s,a={})=>{let o,c;const y=We(s);if(g.state.next({isValidating:!0}),r.resolver){const u=await X(O(s)?s:y);o=Q(u),c=s?!y.some(f=>h(u,f)):o}else s?(c=(await Promise.all(y.map(async u=>{const f=h(n,u);return await $(f&&f._f?{[u]:f}:f)}))).every(Boolean),!(!c&&!t.isValid)&&P()):c=o=await $(n);return g.state.next(ae(m(m({},!ie(s)||p.isValid&&o!==t.isValid?{}:{name:s}),r.resolver?{isValid:o}:{}),{errors:t.errors,isValidating:!1})),a.shouldFocus&&!c&&Ye(n,u=>h(t.errors,u),s?y:v.mount),c},ge=s=>{const a=m(m({},i),d.mount?l:{});return O(s)?a:ie(s)?h(a,s):s.map(o=>h(a,o))},re=(s,a)=>({invalid:!!h((a||t).errors,s),isDirty:!!h((a||t).dirtyFields,s),isTouched:!!h((a||t).touchedFields,s),error:h((a||t).errors,s)}),J=s=>{s?We(s).forEach(a=>q(t.errors,a)):t.errors={},g.state.next({errors:t.errors})},Se=(s,a,o)=>{const c=(h(n,s,{_f:{}})._f||{}).ref;I(t.errors,s,ae(m({},a),{ref:c})),g.state.next({name:s,errors:t.errors,isValid:!1}),o&&o.shouldFocus&&c&&c.focus&&c.focus()},Ie=(s,a)=>qe(s)?g.watch.subscribe({next:o=>s(w(void 0,a),o)}):w(s,a,!0),Ce=(s,a={})=>{for(const o of s?We(s):v.mount)v.mount.delete(o),v.array.delete(o),h(n,o)&&(a.keepValue||(q(n,o),q(l,o)),!a.keepError&&q(t.errors,o),!a.keepDirty&&q(t.dirtyFields,o),!a.keepTouched&&q(t.touchedFields,o),!r.shouldUnregister&&!a.keepDefaultValue&&q(i,o));g.watch.next({}),g.state.next(m(m({},t),a.keepDirty?{isDirty:x()}:{})),!a.keepIsValid&&P()},be=(s,a={})=>{let o=h(n,s);const c=Ne(a.disabled);return I(n,s,{_f:m(ae(m({},o&&o._f?o._f:{ref:{name:s}}),{name:s,mount:!0}),a)}),v.mount.add(s),o?c&&I(l,s,a.disabled?void 0:h(l,s,Qe(o._f))):Y(s,!0,a.value),ae(m(m({},c?{disabled:a.disabled}:{}),r.shouldUseNativeValidation?{required:!!a.required,min:Ae(a.min),max:Ae(a.max),minLength:Ae(a.minLength),maxLength:Ae(a.maxLength),pattern:Ae(a.pattern)}:{}),{name:s,onChange:fe,onBlur:fe,ref:y=>{if(y){be(s,a),o=h(n,s);const u=O(y.value)&&y.querySelectorAll&&y.querySelectorAll("input,select,textarea")[0]||y,f=Lr(u),D=o._f.refs||[];if(f?D.find(j=>j===u):u===o._f.ref)return;I(n,s,{_f:m(m({},o._f),f?{refs:[...D.filter(Ge),u,...Array.isArray(h(i,s))?[{}]:[]],ref:{type:u.type,name:s}}:{ref:u})}),Y(s,!1,void 0,u)}else o=h(n,s,{}),o._f&&(o._f.mount=!1),(r.shouldUnregister||a.shouldUnregister)&&!(Sr(v.array,s)&&d.action)&&v.unMount.add(s)}})};return{control:{register:be,unregister:Ce,getFieldState:re,_executeSchema:E,_getWatch:w,_getDirty:x,_updateValid:P,_removeUnmounted:k,_updateFieldArray:U,_getFieldArray:R,_subjects:g,_proxyFormState:p,get _fields(){return n},get _formValues(){return l},get _stateFlags(){return d},set _stateFlags(s){d=s},get _defaultValues(){return i},get _names(){return v},set _names(s){v=s},get _formState(){return t},set _formState(s){t=s},get _options(){return r},set _options(s){r=m(m({},r),s)}},trigger:ve,register:be,handleSubmit:(s,a)=>async o=>{o&&(o.preventDefault&&o.preventDefault(),o.persist&&o.persist());let c=!0,y=he(l);g.state.next({isSubmitting:!0});try{if(r.resolver){const{errors:u,values:f}=await E();t.errors=u,y=f}else await $(n);Q(t.errors)?(g.state.next({errors:{},isSubmitting:!0}),await s(y,o)):(a&&await a(m({},t.errors),o),r.shouldFocusError&&Ye(n,u=>h(t.errors,u),v.mount))}catch(u){throw c=!1,u}finally{t.isSubmitted=!0,g.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Q(t.errors)&&c,submitCount:t.submitCount+1,errors:t.errors})}},watch:Ie,setValue:ue,getValues:ge,reset:(s,a={})=>{const o=s||i,c=he(o),y=s&&!Q(s)?c:i;if(a.keepDefaultValues||(i=o),!a.keepValues){if(a.keepDirtyValues)for(const u of v.mount)h(t.dirtyFields,u)?I(y,u,h(l,u)):ue(u,h(y,u));else{if(Ze&&O(s))for(const u of v.mount){const f=h(n,u);if(f&&f._f){const D=Array.isArray(f._f.refs)?f._f.refs[0]:f._f.ref;try{et(D)&&D.closest("form").reset();break}catch{}}}n={}}l=e.shouldUnregister?a.keepDefaultValues?he(i):{}:c,g.array.next({values:y}),g.watch.next({values:y})}v={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},d.mount=!p.isValid||!!a.keepIsValid,d.watch=!!e.shouldUnregister,g.state.next({submitCount:a.keepSubmitCount?t.submitCount:0,isDirty:a.keepDirty||a.keepDirtyValues?t.isDirty:!!(a.keepDefaultValues&&!_e(s,i)),isSubmitted:a.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:a.keepDirty||a.keepDirtyValues?t.dirtyFields:a.keepDefaultValues&&s?Je(i,s):{},touchedFields:a.keepTouched?t.touchedFields:{},errors:a.keepErrors?t.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},resetField:(s,a={})=>{h(n,s)&&(O(a.defaultValue)?ue(s,h(i,s)):(ue(s,a.defaultValue),I(i,s,a.defaultValue)),a.keepTouched||q(t.touchedFields,s),a.keepDirty||(q(t.dirtyFields,s),t.isDirty=a.defaultValue?x(s,h(i,s)):x()),a.keepError||(q(t.errors,s),p.isValid&&P()),g.state.next(m({},t)))},clearErrors:J,unregister:Ce,setError:Se,setFocus:(s,a={})=>{const o=h(n,s)._f,c=o.refs?o.refs[0]:o.ref;a.shouldSelect?c.select():c.focus()},getFieldState:re}}function Kr(e={}){const r=ce.useRef(),[t,n]=ce.useState({isDirty:!1,isValidating:!1,dirtyFields:{},isSubmitted:!1,submitCount:0,touchedFields:{},isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,errors:{}});r.current?r.current.control._options=e:r.current=ae(m({},Ur(e)),{formState:t});const i=r.current.control,l=ce.useCallback(d=>{Er(d,i._proxyFormState,!0)&&(i._formState=m(m({},i._formState),d),n(m({},i._formState)))},[i]);return Pr({subject:i._subjects.state,callback:l}),ce.useEffect(()=>{i._stateFlags.mount||(i._proxyFormState.isValid&&i._updateValid(),i._stateFlags.mount=!0),i._stateFlags.watch&&(i._stateFlags.watch=!1,i._subjects.state.next({})),i._removeUnmounted()}),r.current.formState=Ir(t,i._proxyFormState),r.current}export{zr as C,yr as I,Kr as a,Jt as b,Zt as u};

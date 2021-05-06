var a=Object.defineProperty,e=Object.prototype.hasOwnProperty,r=Object.getOwnPropertySymbols,l=Object.prototype.propertyIsEnumerable,o=(e,r,l)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[r]=l,t=(a,t)=>{for(var s in t||(t={}))e.call(t,s)&&o(a,s,t[s]);if(r)for(var s of r(t))l.call(t,s)&&o(a,s,t[s]);return a};import{r as s,a as d,i as m,m as u,t as n,n as p,q as i,u as f,b as c,p as w,d as b,e as y,o as _,c as D,f as V,g as v,h}from"./index.3bcaf0cf.js";const x={name:"UserForm",setup(){const{proxy:a}=p();console.log("proxy",a);const e=s(null),r=i(),l=f(),{id:o}=r.query,w=d({id:o,formData:{username:"",email:"",password:"",password_confirmation:""},rules:{username:[{required:"true"}],email:[{required:"true",type:"email"}],password:[{required:"true",min:6,max:40}],password_confirmation:[{required:"true",min:6,max:40}]}});m((()=>{})),u((()=>{}));return t(t({},n(w)),{formRef:e,submitAdd:()=>{e.value.validate((async a=>{if(a){let a=w.formData;await c.storeUser(a),await l.push({name:"user"})}}))}})}},U=v();w("data-v-933ddfa0");const q=h("Submit");b();const O=U(((a,e,r,l,o,t)=>{const s=y("el-input"),d=y("el-form-item"),m=y("el-button"),u=y("el-form"),n=y("el-col"),p=y("el-row");return _(),D("div",null,[V(p,null,{default:U((()=>[V(n,{span:12},{default:U((()=>[V(u,{model:a.formData,rules:a.rules,ref:"formRef","label-width":"200px",class:"formData"},{default:U((()=>[V(d,{label:"Username",prop:"username"},{default:U((()=>[V(s,{modelValue:a.formData.username,"onUpdate:modelValue":e[1]||(e[1]=e=>a.formData.username=e),placeholder:""},null,8,["modelValue"])])),_:1}),V(d,{label:"Email",prop:"email"},{default:U((()=>[V(s,{modelValue:a.formData.email,"onUpdate:modelValue":e[2]||(e[2]=e=>a.formData.email=e),placeholder:""},null,8,["modelValue"])])),_:1}),V(d,{label:"Password",prop:"password"},{default:U((()=>[V(s,{type:"password",modelValue:a.formData.password,"onUpdate:modelValue":e[3]||(e[3]=e=>a.formData.password=e),placeholder:""},null,8,["modelValue"])])),_:1}),V(d,{label:"Password Confirmation",prop:"password_confirmation"},{default:U((()=>[V(s,{type:"password",modelValue:a.formData.password_confirmation,"onUpdate:modelValue":e[4]||(e[4]=e=>a.formData.password_confirmation=e),placeholder:""},null,8,["modelValue"])])),_:1}),V(d,null,{default:U((()=>[V(m,{type:"primary",onClick:e[5]||(e[5]=a=>l.submitAdd())},{default:U((()=>[q])),_:1})])),_:1})])),_:1},8,["model","rules"])])),_:1})])),_:1})])}));x.render=O,x.__scopeId="data-v-933ddfa0";export default x;

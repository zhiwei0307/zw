var e=(e,a,r)=>new Promise(((s,l)=>{var t=e=>{try{i(r.next(e))}catch(a){l(a)}},o=e=>{try{i(r.throw(e))}catch(a){l(a)}},i=e=>e.done?s(e.value):Promise.resolve(e.value).then(t,o);i((r=r.apply(e,a)).next())}));import"./vue.fac137a9.js";import{_ as a,p as r,e as s,a as l}from"./index.05cc104a.js";import{d as t,k as o,v as i,f as n,_ as u,$ as p,a2 as m,a3 as d,m as c,a1 as g,a9 as v,aa as f,J as b}from"./@vue.ed68ab6b.js";import"./ant-design-vue.24427c72.js";import"./@babel.eda524f0.js";import"./regenerator-runtime.7769f52d.js";import"./@ant-design.8ff23611.js";import"./@ctrl.fa7cbd46.js";import"./lodash-es.a53432ff.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.5d25c98b.js";import"./scroll-into-view-if-needed.5191fdbf.js";import"./compute-scroll-into-view.6058b3be.js";import"./dayjs.39b8ebe2.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./lodash.5f175b98.js";import"./vuex.b53f2403.js";import"./axios.82d3905a.js";import"./vue-router.85180a08.js";import"./nprogress.6eaf9b6f.js";import"./js-cookie.31874410.js";import"./clipboard.5999f2a2.js";const h=t({name:"Register",setup(){const a=o("context"),t=i(null),u=n({username:"",nickname:"",realname:"",phone:"",email:"",password:"",checkpass:""});return{registerFormEl:t,registerForm:u,submit:()=>e(this,null,(function*(){try{const e=yield t.value.validate();delete e.checkpass,a.$http.post("/register",e).then((e=>{e.success?(a.$message.success(e.message),a.$router.push("/login")):a.$message.error(e.message)})).catch((e=>{console.log(e)}))}catch(e){console.log("valid error",e)}})),reset:()=>{t.value.resetFields()},phoneRegexp:r,emailRegexp:s,pwdRegexp:l,validCheckpass:(a,r)=>e(this,null,(function*(){return""===r?Promise.reject("Please input the password again"):r!==u.password?Promise.reject("Two inputs don't match!"):Promise.resolve()}))}}}),j=e=>(v("data-v-111609f8"),e=e(),f(),e),x={class:"register-wrap"},w={class:"register-wrap-inner"},F=j((()=>d("h2",{style:{"text-align":"center","margin-bottom":"40px"}},[d("b",null,"用户注册")],-1))),k=j((()=>d("div",{class:"pwd-rules"},[d("small",null,[b(" 密码长度8-20位字符 "),d("br"),b(" 由数字、大小写字母、特殊英文字符（!$%^&*()_）组成 ")])],-1))),_=b("重置"),y=b("提交"),P={style:{"text-align":"center","margin-top":"30px"}},R=b(" 已有账户，"),U=b("点击登录");var C=a(h,[["render",function(e,a,r,s,l,t){const o=u("a-input"),i=u("a-form-item"),n=u("a-input-password"),v=u("a-button"),f=u("a-space"),b=u("a-form"),h=u("router-link");return p(),m("div",x,[d("div",w,[F,c(b,{ref:"registerFormEl",model:e.registerForm,name:"basic","label-col":{xs:{span:24},sm:{span:24},md:{span:6}},"wrapper-col":{xs:{span:24},sm:{span:24},md:{span:18}},autocomplete:"off"},{default:g((()=>[c(i,{label:"用户名",name:"username",rules:[{required:!0,message:"Please input your username!"}]},{default:g((()=>[c(o,{value:e.registerForm.username,"onUpdate:value":a[0]||(a[0]=a=>e.registerForm.username=a),placeholder:"请输入用户名"},null,8,["value"])])),_:1}),c(i,{label:"真实姓名",name:"realname"},{default:g((()=>[c(o,{value:e.registerForm.realname,"onUpdate:value":a[1]||(a[1]=a=>e.registerForm.realname=a),placeholder:"请输入您的名字"},null,8,["value"])])),_:1}),c(i,{label:"昵称",name:"nickname"},{default:g((()=>[c(o,{value:e.registerForm.nickname,"onUpdate:value":a[2]||(a[2]=a=>e.registerForm.nickname=a),placeholder:"请输入用户昵称"},null,8,["value"])])),_:1}),c(i,{label:"手机号",name:"phone",rules:[{required:!0,message:"Please input your phone!"},{pattern:e.phoneRegexp,message:"手机号码不合法~",trigger:"blur"}]},{default:g((()=>[c(o,{value:e.registerForm.phone,"onUpdate:value":a[3]||(a[3]=a=>e.registerForm.phone=a),placeholder:"请输入常用手机号"},null,8,["value"])])),_:1},8,["rules"]),c(i,{label:"邮箱",name:"email",rules:[{pattern:e.emailRegexp,message:"邮箱号不合法~",trigger:"blur"}]},{default:g((()=>[c(o,{value:e.registerForm.email,"onUpdate:value":a[4]||(a[4]=a=>e.registerForm.email=a),placeholder:"请输入常用邮箱"},null,8,["value"])])),_:1},8,["rules"]),c(i,{label:"登录密码",name:"password",rules:[{required:!0,message:"Please input your password!"},{pattern:e.pwdRegexp,message:"密码格式不正确~",trigger:"blur"}]},{default:g((()=>[c(n,{value:e.registerForm.password,"onUpdate:value":a[5]||(a[5]=a=>e.registerForm.password=a),placeholder:"请输入登录密码"},null,8,["value"]),k])),_:1},8,["rules"]),c(i,{label:"确认密码",name:"checkpass",rules:[{validator:e.validCheckpass,trigger:"blur"}],required:""},{default:g((()=>[c(n,{value:e.registerForm.checkpass,"onUpdate:value":a[6]||(a[6]=a=>e.registerForm.checkpass=a),placeholder:"请再次输入登录密码"},null,8,["value"])])),_:1},8,["rules"]),c(i,{style:{"text-align":"center"}},{default:g((()=>[c(f,null,{default:g((()=>[c(v,{onClick:e.reset},{default:g((()=>[_])),_:1},8,["onClick"]),c(v,{type:"primary",onClick:e.submit},{default:g((()=>[y])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["model"]),d("div",P,[R,c(h,{to:"/login"},{default:g((()=>[U])),_:1})])])])}],["__scopeId","data-v-111609f8"]]);export{C as default};

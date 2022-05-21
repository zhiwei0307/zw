import"./vue.f15e169e.js";import{f as e}from"./ant-design-vue.be1a23bd.js";import{M as a,d as t,_ as l}from"./index.8318cbd7.js";import{d as s,l as n,k as o,v as d,_ as i,$ as r,a0 as u,a1 as A,a3 as c,a2 as m,a7 as f,J as g,ab as h,F as p,m as E,a9 as Q,aa as v,I as b,w as I,f as R,A as B,z as k,ae as w,U as C}from"./@vue.454ad140.js";import{l as y}from"./lodash.3cabe671.js";import{Q as S}from"./@ant-design.0ba83ffb.js";import"./@babel.29daae83.js";import"./regenerator-runtime.6bfb484e.js";import"./lodash-es.a53432ff.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.5d25c98b.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./dayjs.39b8ebe2.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./vuex.5db4980b.js";import"./axios.82d3905a.js";import"./vue-router.12677813.js";import"./nprogress.6eaf9b6f.js";import"./js-cookie.31874410.js";import"./clipboard.16092f5a.js";import"./@ctrl.fa7cbd46.js";const j=s({name:"UserAuthSet",components:{MenuSelector:a},props:{authId:{type:Number,default:null},defaultRoles:{type:Array,default:()=>[]}},setup(e,{emit:a}){const l=n({get:()=>!!e.authId,set(t){a("update:authId",t?e.authId:null)}}),s=o("context"),i=d(!1);i.value=!0;const r=d([]),u=d([]);return new Promise(((a,t)=>{s.$http.get("user/"+e.authId).then((e=>{a(e.data)})).catch((e=>{t(e)}))})).then((e=>{const[a,l]=t(e.roles);r.value=a,u.value=l})).catch((e=>{console.log(e)})).finally((()=>{i.value=!1})),{visible:l,hasMenus:r,roles:u}}}),J=e=>(Q("data-v-01350ab2"),e=e(),v(),e),N=J((()=>c("h4",null,"已有角色",-1))),U={class:"wrap-content"},x=J((()=>c("h4",null,"拥有权限",-1))),K={class:"wrap-content menu-tree"};var M=l(j,[["render",function(e,a,t,l,s,n){const o=i("a-tag"),d=i("MenuSelector"),Q=i("ZwModal");return r(),u(Q,{ref:"authModal",visible:e.visible,"onUpdate:visible":a[0]||(a[0]=a=>e.visible=a),title:"用户权限查看",width:600,"mask-closable":!1,"show-ok":!1,"cancel-text":"关闭"},{default:A((()=>[N,c("div",U,[(r(!0),m(p,null,f(e.roles,(e=>(r(),u(o,{key:e.id,color:"purple"},{default:A((()=>[g(h(e.name),1)])),_:2},1024)))),128))]),x,c("div",K,[E(d,{"has-menus":e.hasMenus},null,8,["has-menus"])])])),_:1},8,["visible"])}],["__scopeId","data-v-01350ab2"]]);const z=s({name:"RolesSelector",components:{},props:{roles:{type:Array,default:()=>[]},disabled:{type:Boolean,default:!1}},setup(e,{emit:a}){const t=o("context"),l=n({get:()=>e.roles,set(e){a("update:roles",e)}}),s=d([]),i=n((()=>s.value.map((e=>e.value)))),r=n((()=>l.value.length===i.value.length)),u=n((()=>{const e=l.value.length;return!!e&&e<i.value.length}));return b((()=>{t.$http.get("role/authed").then((e=>{s.value=e.data.map((e=>({label:e.name,value:e.id})))}))})),{checkedList:l,checkAll:r,onCheckAllChange:e=>{const t=e.target.checked?i.value:[];a("update:roles",t)},indeterminate:u,rolesOptions:s}}}),Y={class:"role-list-wrap"},L=g("全选");const D=s({name:"UserSet",components:{RolesSelector:l(z,[["render",function(e,a,t,l,s,n){const o=i("a-checkbox"),d=i("a-form-item"),u=i("a-checkbox-group"),c=i("ZwScrollbar");return r(),m("div",Y,[E(d,null,{default:A((()=>[E(o,{checked:e.checkAll,indeterminate:e.indeterminate,disabled:e.disabled,onChange:e.onCheckAllChange},{default:A((()=>[L])),_:1},8,["checked","indeterminate","disabled","onChange"])])),_:1}),E(c,{class:"role-list-inner"},{default:A((()=>[E(u,{value:e.checkedList,"onUpdate:value":a[0]||(a[0]=a=>e.checkedList=a),name:"roles",options:e.rolesOptions,disabled:e.disabled},null,8,["value","options","disabled"])])),_:1})])}],["__scopeId","data-v-557f89ea"]])},props:{show:{type:Boolean,default:!1},authId:{type:Number,default:null},userInfo:{type:Object,default:()=>({})}},setup(e,{emit:a}){const t=n({get:()=>e.show,set(e){a("update:show",e)}}),l=o("context"),s=d(null),i=d({roles:[]});I((()=>e.userInfo.id),(a=>{const t=y.exports.cloneDeep(e.userInfo);i.value=t,i.value.roles=t.roles.map((e=>e.id))}),{immediate:!0});return{visible:t,zwModalRef:s,handleAuthOk:()=>{l.$http.put("user/"+e.userInfo.id,i.value).then((e=>{if(!e.success)return l.$message.error(e.message);l.$message.success(e.message),t.value=!1,a("refresh")})).finally((()=>{s.value.submiting=!1}))},afterClose:()=>{},fdRef:i,gender:[{text:"男"},{text:"女"},{text:"未知"}]}}}),F=e=>(Q("data-v-4b14170e"),e=e(),v(),e),Z={class:"base-set"},P=F((()=>c("h4",null,"基本信息",-1))),H={class:"base-set-inner"},_=F((()=>c("small",null,[c("i",null,"   TIP："),g(" 随机生成不能更改 ")],-1))),T=g(" ****** "),G=g("重 置 "),q=g("启用"),O=g("禁用"),X={class:"role-set"},W=F((()=>c("h4",null,"角色设置",-1)));const V=s({name:"User",components:{AuthView:M,UserSet:l(D,[["render",function(e,a,t,l,s,n){const o=i("a-form-item"),d=i("RedoOutlined"),Q=i("a-button"),v=i("a-input"),b=i("a-select-option"),I=i("a-select"),R=i("a-radio"),B=i("a-radio-group"),k=i("roles-selector"),w=i("a-form"),C=i("ZwModal");return r(),u(C,{ref:"zwModalRef",visible:e.visible,"onUpdate:visible":a[7]||(a[7]=a=>e.visible=a),title:"用户信息编辑",width:600,"mask-closable":!1,"after-close":e.afterClose,onSubmit:e.handleAuthOk},{default:A((()=>[E(w,{ref:"userForm",model:e.fdRef,layout:"horizontal","label-col":{span:4},"wrapper-col":{span:18}},{default:A((()=>[c("div",Z,[P,c("div",H,[E(o,{label:"头像",name:"headimg"}),E(o,{label:"账号",name:"account"},{default:A((()=>[g(h(e.fdRef.account)+" ",1),_])),_:1}),E(o,{label:"密码",name:"password"},{default:A((()=>[T,E(Q,{type:"link",class:"redo-pwd"},{default:A((()=>[E(d),G])),_:1})])),_:1}),E(o,{label:"用户名",name:"username"},{default:A((()=>[E(v,{value:e.fdRef.username,"onUpdate:value":a[0]||(a[0]=a=>e.fdRef.username=a),valueModifiers:{trim:!0},placeholder:"请输入用户名",tabindex:"1",type:"text"},null,8,["value"])])),_:1}),E(o,{label:"昵称",name:"nickname"},{default:A((()=>[E(v,{value:e.fdRef.nickname,"onUpdate:value":a[1]||(a[1]=a=>e.fdRef.nickname=a),valueModifiers:{trim:!0},placeholder:"请输入昵称",tabindex:"1",type:"text"},null,8,["value"])])),_:1}),E(o,{label:"性别",name:"gender"},{default:A((()=>[E(I,{value:e.fdRef.gender,"onUpdate:value":a[2]||(a[2]=a=>e.fdRef.gender=a),name:"gender"},{default:A((()=>[(r(!0),m(p,null,f(e.gender,((e,a)=>(r(),u(b,{key:a,value:a+1},{default:A((()=>[g(h(e.text),1)])),_:2},1032,["value"])))),128))])),_:1},8,["value"])])),_:1}),E(o,{label:"手机号码",name:"phone"},{default:A((()=>[E(v,{value:e.fdRef.phone,"onUpdate:value":a[3]||(a[3]=a=>e.fdRef.phone=a),valueModifiers:{trim:!0},placeholder:"请输入手机号码"},null,8,["value"])])),_:1}),E(o,{label:"邮箱",name:"email"},{default:A((()=>[E(v,{value:e.fdRef.email,"onUpdate:value":a[4]||(a[4]=a=>e.fdRef.email=a),valueModifiers:{trim:!0},placeholder:"请输入邮箱"},null,8,["value"])])),_:1}),E(o,{label:"状态",name:"status"},{default:A((()=>[E(B,{value:e.fdRef.status,"onUpdate:value":a[5]||(a[5]=a=>e.fdRef.status=a)},{default:A((()=>[E(R,{value:1},{default:A((()=>[q])),_:1}),E(R,{value:0},{default:A((()=>[O])),_:1})])),_:1},8,["value"])])),_:1})])]),c("div",X,[W,E(o,{"label-col":{span:0},"wrapper-col":{span:24},name:"roles"},{default:A((()=>[E(k,{roles:e.fdRef.roles,"onUpdate:roles":a[6]||(a[6]=a=>e.fdRef.roles=a)},null,8,["roles"])])),_:1})])])),_:1},8,["model"])])),_:1},8,["visible","after-close","onSubmit"])}],["__scopeId","data-v-4b14170e"]])},setup(){const a=o("context"),t=d(null),l=()=>{t.value.handleReload()},s=R({visible:!1,email:"",submiting:!1}),n=d(!1),r=d(null),u=d(void 0),A=d([]),c=(e,t)=>{a.$modal.confirm({title:"警告",content:e,icon:C(S),okText:"确定",okType:"danger",onOk:()=>new Promise(((e,a)=>{"function"==typeof t&&t(e,a)}))})};return{listdata:t,columns:[{title:"ID",dataIndex:"id",width:48,align:"center"},{title:"用户名",dataIndex:"username",width:168,align:"center"},{title:"头像",dataIndex:"headimg",width:64,align:"center",customRender:({text:a})=>{const t="data:image/png;base64,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";return C(e,{width:36,height:36,src:a||t,fallback:t})}},{title:"性别",dataIndex:"gender",width:64,align:"center",customRender:({text:e})=>{var a,t;return(t=a||(a={}))[t["男"]=1]="男",t[t["女"]=2]="女",t[t["未知"]=3]="未知",C("small",null,a[e])}},{title:"账号",dataIndex:"account",width:166,align:"center"},{title:"手机号码",dataIndex:"phone",width:146,align:"center"},{title:"邮箱",dataIndex:"email",width:196,align:"center"},{title:"状态",dataIndex:"status",width:78,align:"center",customRender:({text:e})=>C(i("a-badge"),{status:e?"processing":"default",text:e?"正常":"禁用"})},{title:"角色",dataIndex:"roles",ellipsis:!0,customRender:({text:e})=>e.reduce(((a,t,l)=>a+=t.name+(l<e.length-1?"，":"")),"")},{title:"更新时间",dataIndex:"update_at",width:96,align:"center",customRender:({text:e})=>e?e.split(" ")[0]:"-"},{title:"操作",dataIndex:"action",width:186,align:"center"}],createRet:s,createSubmit:()=>{const e=s.email;if(!e)return a.$message.warning("请输入邮箱！");s.submiting=!0,a.$http.post("user",{email:e}).then((e=>{e.success?(a.$message.success(e.message),s.visible=!1,l()):a.$message.error(e.message)})).catch((e=>{console.log(e)})).finally((()=>{s.submiting=!1}))},createClear:function(){s.email=""},beforeFormOpen:function(e){return"add"!==e||(s.visible=!0,!1)},handleResetPwd:e=>{c("确定要重置密码么？",((t,l)=>{a.$http.put("password/reset/"+e.id).then((e=>{t(e),a.$message.success(e.msg)})).catch((e=>{l(e)}))}))},handleSetStatus:(e,t)=>{const s=t?"启用":"禁用";if(e.status==t)return a.$message.warning(`该用户已在${s}状态了！`);c(`确定要${s}用户: ${e.username} 么`,((s,n)=>{a.$http.put("status/set/"+e.id,{status:t}).then((e=>{s(e),l(),a.$message.success(e.msg)})).catch((e=>{n(e)}))}))},handleDelete:function(e){c(`确定要删除 ${e.username} 么？`,((t,s)=>{a.$http.delete("user/"+e.id).then((e=>{e.success?(a.$message.success(e.message),l(),t(e.message)):(a.$message.error(e.message),s())})).catch((e=>{console.log(e)}))}))},userId:u,userInfo:r,authRoles:A,handleShowAuthSet:e=>{u.value=e.id,A.value=e.roles.map((e=>e.id))},handelRefreshList:l,showEditRef:n,handleShowEdit:e=>{n.value=!0,r.value=e}}}}),$=e=>(Q("data-v-7fd18572"),e=e(),v(),e),ee={class:"tools-btn-group"},ae=$((()=>c("span",null,"查看权限",-1))),te=$((()=>c("span",{style:{color:"#f5ac07"}},"编辑",-1))),le=$((()=>c("span",{style:{color:"#ff4d4f"}},"删除",-1))),se=g("关 闭"),ne=g("创 建");var oe=l(V,[["render",function(e,a,t,l,s,n){const o=i("a-button"),d=i("a-divider"),m=i("ListData"),f=i("a-input"),g=i("a-form-item"),h=i("a-form"),p=i("ZwModal"),Q=i("AuthView"),v=i("UserSet"),b=i("ZwScrollbar"),I=B("perms");return r(),u(b,{"wrap-class":"pd-17"},{default:A((()=>[E(m,{ref:"listdata",class:"data-table","row-key":"id",columns:e.columns,apis:"user","before-form-open":e.beforeFormOpen},{action:A((({record:a})=>[c("div",ee,[E(o,{type:"link",onClick:t=>e.handleShowAuthSet(a)},{default:A((()=>[ae])),_:2},1032,["onClick"]),E(d,{type:"vertical"}),k((r(),u(o,{type:"link",onClick:t=>e.handleShowEdit(a)},{default:A((()=>[te])),_:2},1032,["onClick"])),[[I,"sys:m:users:edit","disabled"]]),E(d,{type:"vertical"}),E(o,{type:"link",onClick:t=>e.handleDelete(a)},{default:A((()=>[le])),_:2},1032,["onClick"])])])),_:1},8,["columns","before-form-open"]),E(p,{ref:"createModal",visible:e.createRet.visible,"onUpdate:visible":a[2]||(a[2]=a=>e.createRet.visible=a),title:"创建用户",width:600,"mask-closable":!1,"after-close":e.createClear},{footer:A((()=>[E(o,{onClick:a[1]||(a[1]=a=>e.createRet.visible=!1)},{default:A((()=>[se])),_:1}),E(o,{type:"primary",loading:e.createRet.submiting,onClick:e.createSubmit},{default:A((()=>[ne])),_:1},8,["loading","onClick"])])),default:A((()=>[E(h,{layout:"vertical",model:e.createRet},{default:A((()=>[E(g,{label:"邮箱",name:"email",required:""},{default:A((()=>[E(f,{value:e.createRet.email,"onUpdate:value":a[0]||(a[0]=a=>e.createRet.email=a),placeholder:"请输入邮箱"},null,8,["value"])])),_:1})])),_:1},8,["model"])])),_:1},8,["visible","after-close"]),e.userId?(r(),u(Q,{key:0,"auth-id":e.userId,"onUpdate:auth-id":a[3]||(a[3]=a=>e.userId=a),"default-roles":e.authRoles,onRefresh:e.handelRefreshList},null,8,["auth-id","default-roles","onRefresh"])):w("",!0),e.userInfo?(r(),u(v,{key:1,show:e.showEditRef,"onUpdate:show":a[4]||(a[4]=a=>e.showEditRef=a),"user-info":e.userInfo,onRefresh:e.handelRefreshList},null,8,["show","user-info","onRefresh"])):w("",!0)])),_:1})}],["__scopeId","data-v-7fd18572"]]);export{oe as default};

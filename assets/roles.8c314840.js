import"./vue.bba2ec4d.js";import{_ as m}from"./index.57d03647.js";import{d as s,e as l,_ as o,$ as p,a0 as c,a1 as d,c as f,h as r}from"./@vue.ce69bcce.js";import"./ant-design-vue.4bd4cff1.js";import"./@babel.d77ec770.js";import"./regenerator-runtime.52b57d8c.js";import"./@ant-design.dce0d0de.js";import"./@ctrl.837ec117.js";import"./lodash-es.a7598bc1.js";import"./resize-observer-polyfill.8deb1e21.js";import"./dayjs.3e893def.js";import"./vue-types.6e6d84ba.js";import"./dom-align.243fa364.js";import"./async-validator.ed4c92a2.js";import"./scroll-into-view-if-needed.5191fdbf.js";import"./compute-scroll-into-view.6058b3be.js";import"./lodash.20dab116.js";import"./vuex.6a416a8d.js";import"./axios.e9656f83.js";import"./vue-router.b7fb3786.js";import"./nprogress.bfa0410b.js";import"./js-cookie.31874410.js";import"./clipboard.4ddab532.js";const _=s({name:"Roles",components:{},setup(){const e=l("context");return{columns:[{title:"\u5E8F\u53F7",dataIndex:"index",width:60,align:"center",customRender:({index:t})=>t+1},{title:"\u89D2\u8272\u540D\u79F0",dataIndex:"name",width:118,align:"center"},{title:"\u89D2\u8272\u4EE3\u7801",dataIndex:"code",width:118,align:"center"},{title:"\u7EA7\u522B",dataIndex:"level",width:118,align:"center"},{title:"\u66F4\u65B0\u65F6\u95F4",dataIndex:"update_at",width:128,align:"center",customRender:({text:t})=>t?t.split(" ")[0]:"-"},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"create_at",align:"center",width:128,customRender:({text:t})=>t?t.split(" ")[0]:"-"},{title:"\u5907\u6CE8",dataIndex:"remarks",ellipsis:!0},{title:"\u64CD\u4F5C",dataIndex:"action",width:108,align:"center"}],beforeSubmit:t=>t.name?!0:(e.$message.warning(r("span",null,[r("b",{style:"color: #f00; margin: 0 6px;"}," * "),r("span",null," \u53F7\u4E3A\u5FC5\u586B\u9879")])),!1)}}});function w(e,n,i,t,b,F){const a=o("ListData"),u=o("ZwScrollbar");return p(),c(u,{"wrap-class":"pd-17"},{default:d(()=>[f(a,{"row-key":"id",columns:e.columns,apis:"role","modal-width":720,"dynamic-form":"RoleForm","before-submit":e.beforeSubmit},null,8,["columns","before-submit"])]),_:1})}var H=m(_,[["render",w]]);export{H as default};

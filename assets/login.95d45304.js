import"./vue.eb83bc4e.js";import{_ as e}from"./index.bb86dfd8.js";import{d as t,a0 as a,a1 as s,a2 as i,a3 as r,m as o}from"./@vue.1265f2a3.js";import"./ant-design-vue.c7eb8cce.js";import"./@babel.eda524f0.js";import"./regenerator-runtime.7769f52d.js";import"./@ant-design.292a0b26.js";import"./@ctrl.fa7cbd46.js";import"./lodash-es.a53432ff.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.5d25c98b.js";import"./scroll-into-view-if-needed.5191fdbf.js";import"./compute-scroll-into-view.6058b3be.js";import"./dayjs.39b8ebe2.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./lodash.5f175b98.js";import"./vuex.2f5af126.js";import"./axios.82d3905a.js";import"./vue-router.cdfd841b.js";import"./nprogress.6eaf9b6f.js";import"./js-cookie.31874410.js";import"./clipboard.5999f2a2.js";var d=e(t({name:"LogsLogin",components:{},setup:()=>({columns:[{title:"序号",dataIndex:"index",width:48,align:"center",customRender:({index:e})=>e+1},{title:"账号",dataIndex:["user","phone"],width:156,align:"center",customRender:({text:e,record:t})=>e||t.account||"-"},{title:"用户名",dataIndex:["user","username"],width:156,align:"center"},{title:"登录IP",dataIndex:"ip",width:156,align:"center"},{title:"登录地点",dataIndex:"addr",width:156,align:"center"},{title:"登录结果信息",dataIndex:"message"},{title:"访问时间",dataIndex:"create_at",width:190,align:"center"}]})}),[["render",function(e,t,d,n,l,m){const p=a("ListData"),c=a("ZwScrollbar");return s(),i(c,{"wrap-class":"pd-17"},{default:r((()=>[o(p,{class:"","row-key":"id",columns:e.columns,apis:{query:"login/list"},"top-tools":{hiddenAdd:!0}},null,8,["columns"])])),_:1})}]]);export{d as default};

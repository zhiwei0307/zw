import"./vue.9122bf33.js";import{_ as e}from"./index.c9bd1832.js";import{d as t,_ as a,$ as s,a0 as i,a1 as r,m as o}from"./@vue.42962c1d.js";import"./ant-design-vue.692d4b86.js";import"./@babel.29daae83.js";import"./regenerator-runtime.6bfb484e.js";import"./@ant-design.a7a0eb88.js";import"./@ctrl.fa7cbd46.js";import"./lodash-es.a53432ff.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.5d25c98b.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./dayjs.39b8ebe2.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./lodash.3cabe671.js";import"./vuex.35cecaef.js";import"./axios.82d3905a.js";import"./vue-router.a3c62d0a.js";import"./nprogress.6eaf9b6f.js";import"./js-cookie.31874410.js";import"./clipboard.16092f5a.js";var d=e(t({name:"LogsLogin",components:{},setup:()=>({columns:[{title:"序号",dataIndex:"index",width:48,align:"center",customRender:({index:e})=>e+1},{title:"账号",dataIndex:["user","phone"],width:156,align:"center",customRender:({text:e,record:t})=>e||t.account||"-"},{title:"用户名",dataIndex:["user","username"],width:156,align:"center"},{title:"登录IP",dataIndex:"ip",width:156,align:"center"},{title:"登录地点",dataIndex:"addr",width:156,align:"center"},{title:"登录结果信息",dataIndex:"message"},{title:"访问时间",dataIndex:"create_at",width:190,align:"center"}]})}),[["render",function(e,t,d,n,l,c){const m=a("ListData"),p=a("ZwScrollbar");return s(),i(p,{"wrap-class":"pd-17"},{default:r((()=>[o(m,{class:"","row-key":"id",columns:e.columns,apis:{query:"login/list"},"top-tools":{hiddenAdd:!0}},null,8,["columns"])])),_:1})}]]);export{d as default};
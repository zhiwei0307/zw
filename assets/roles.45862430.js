import"./vue.3c1b29c4.js";import{_ as e}from"./index.b0c776a2.js";import{d as t,k as a,_ as i,$ as s,a0 as r,a1 as o,m as n,U as d}from"./@vue.61fb48b5.js";import"./ant-design-vue.2d339fb3.js";import"./@babel.eda524f0.js";import"./regenerator-runtime.7769f52d.js";import"./@ant-design.2f8223f0.js";import"./@ctrl.fa7cbd46.js";import"./lodash-es.a53432ff.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.5d25c98b.js";import"./scroll-into-view-if-needed.5191fdbf.js";import"./compute-scroll-into-view.6058b3be.js";import"./dayjs.39b8ebe2.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./lodash.5f175b98.js";import"./vuex.fb8d35f6.js";import"./axios.82d3905a.js";import"./vue-router.9a97da5e.js";import"./nprogress.6eaf9b6f.js";import"./js-cookie.31874410.js";import"./clipboard.5999f2a2.js";var l=e(t({name:"Roles",components:{},setup(){const e=a("context");return{columns:[{title:"序号",dataIndex:"index",width:60,align:"center",customRender:({index:e})=>e+1},{title:"角色名称",dataIndex:"name",width:118,align:"center"},{title:"角色代码",dataIndex:"code",width:118,align:"center"},{title:"级别",dataIndex:"level",width:118,align:"center"},{title:"更新时间",dataIndex:"update_at",width:128,align:"center",customRender:({text:e})=>e?e.split(" ")[0]:"-"},{title:"创建时间",dataIndex:"create_at",align:"center",width:128,customRender:({text:e})=>e?e.split(" ")[0]:"-"},{title:"备注",dataIndex:"remarks",ellipsis:!0},{title:"操作",dataIndex:"action",width:108,align:"center"}],beforeSubmit:t=>!!t.name||(e.$message.warning(d("span",null,[d("b",{style:"color: #f00; margin: 0 6px;"}," * "),d("span",null," 号为必填项")])),!1)}}}),[["render",function(e,t,a,d,l,m){const p=i("ListData"),c=i("ZwScrollbar");return s(),r(c,{"wrap-class":"pd-17"},{default:o((()=>[n(p,{"row-key":"id",columns:e.columns,apis:"role","modal-width":720,"dynamic-form":"RoleForm","before-submit":e.beforeSubmit},null,8,["columns","before-submit"])])),_:1})}]]);export{l as default};

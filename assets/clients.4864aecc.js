import"./vue.f15e169e.js";import{_ as e,p as t}from"./index.8318cbd7.js";import{d as a,k as i,_ as s,$ as n,a0 as r,a1 as o,m as d}from"./@vue.454ad140.js";import"./ant-design-vue.be1a23bd.js";import"./@babel.29daae83.js";import"./regenerator-runtime.6bfb484e.js";import"./@ant-design.0ba83ffb.js";import"./@ctrl.fa7cbd46.js";import"./lodash-es.a53432ff.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.5d25c98b.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./dayjs.39b8ebe2.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./lodash.3cabe671.js";import"./vuex.5db4980b.js";import"./axios.82d3905a.js";import"./vue-router.12677813.js";import"./nprogress.6eaf9b6f.js";import"./js-cookie.31874410.js";import"./clipboard.16092f5a.js";var m=e(a({name:"Client",components:{},setup(){const e=i("context");return{columns:[{title:"序号",dataIndex:"index",width:60,align:"center",customRender:({index:e})=>e+1},{title:"姓名",dataIndex:"c_name",width:118,align:"center"},{title:"手机",dataIndex:"c_phone",width:118,align:"center"},{title:"微信号",dataIndex:"c_wx",align:"center",width:152},{title:"旺旺号",dataIndex:"c_ww",align:"center",width:152},{title:"省-市-区",dataIndex:["a","path"],align:"center",width:202,customRender({text:e}){const t=e?e.split(",").join("-"):"";return t.length>0?t.substr(1,e.length-2):"-"}},{title:"详细地址",dataIndex:"c_address",width:286,customRender:({text:e})=>e<=0?"--":e},{title:"备注",dataIndex:"c_mark",ellipsis:!0},{title:"操作",dataIndex:"action",width:108,align:"center"}],beforeSubmit:a=>a.c_name?a.c_phone?t.test(a.c_phone)?(a.a_id||(a.a_id=0),!0):(e.$message.warning("手机号码不合法~"),!1):(e.$message.warning("客户手机号不能为空~"),!1):(e.$message.warning("客户姓名不能为空~"),!1)}}}),[["render",function(e,t,a,i,m,l){const c=s("ListData"),p=s("ZwScrollbar");return n(),r(p,{"wrap-class":"pd-17"},{default:o((()=>[d(c,{"row-key":"c_id",columns:e.columns,apis:"client","modal-width":720,"dynamic-form":"ClientForm","before-submit":e.beforeSubmit},null,8,["columns","before-submit"])])),_:1})}]]);export{m as default};

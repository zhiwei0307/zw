import"./vue.bba2ec4d.js";import{_ as s,p as c}from"./index.57d03647.js";import{d as m,e as d,_ as i,$ as l,a0 as p,a1 as _,c as f}from"./@vue.ce69bcce.js";import"./ant-design-vue.4bd4cff1.js";import"./@babel.d77ec770.js";import"./regenerator-runtime.52b57d8c.js";import"./@ant-design.dce0d0de.js";import"./@ctrl.837ec117.js";import"./lodash-es.a7598bc1.js";import"./resize-observer-polyfill.8deb1e21.js";import"./dayjs.3e893def.js";import"./vue-types.6e6d84ba.js";import"./dom-align.243fa364.js";import"./async-validator.ed4c92a2.js";import"./scroll-into-view-if-needed.5191fdbf.js";import"./compute-scroll-into-view.6058b3be.js";import"./lodash.20dab116.js";import"./vuex.6a416a8d.js";import"./axios.e9656f83.js";import"./vue-router.b7fb3786.js";import"./nprogress.bfa0410b.js";import"./js-cookie.31874410.js";import"./clipboard.4ddab532.js";const w=m({name:"Client",components:{},setup(){const e=d("context");return{columns:[{title:"\u5E8F\u53F7",dataIndex:"index",width:60,align:"center",customRender({index:t}){return t+1}},{title:"\u59D3\u540D",dataIndex:"c_name",width:118,align:"center"},{title:"\u624B\u673A",dataIndex:"c_phone",width:118,align:"center"},{title:"\u5FAE\u4FE1\u53F7",dataIndex:"c_wx",align:"center",width:152},{title:"\u65FA\u65FA\u53F7",dataIndex:"c_ww",align:"center",width:152},{title:"\u7701-\u5E02-\u533A",dataIndex:["a","path"],align:"center",width:202,customRender({text:t}){const n=t?t.split(",").join("-"):"";return n.length>0?n.substr(1,t.length-2):"-"}},{title:"\u8BE6\u7EC6\u5730\u5740",dataIndex:"c_address",width:286,customRender({text:t}){return t<=0?"--":t}},{title:"\u5907\u6CE8",dataIndex:"c_mark",ellipsis:!0},{title:"\u64CD\u4F5C",dataIndex:"action",width:108,align:"center"}],beforeSubmit:t=>t.c_name?t.c_phone?c.test(t.c_phone)?(t.a_id||(t.a_id=0),!0):(e.$message.warning("\u624B\u673A\u53F7\u7801\u4E0D\u5408\u6CD5~"),!1):(e.$message.warning("\u5BA2\u6237\u624B\u673A\u53F7\u4E0D\u80FD\u4E3A\u7A7A~"),!1):(e.$message.warning("\u5BA2\u6237\u59D3\u540D\u4E0D\u80FD\u4E3A\u7A7A~"),!1)}}});function h(e,r,o,t,n,g){const u=i("ListData"),a=i("ZwScrollbar");return l(),p(a,{"wrap-class":"pd-17"},{default:_(()=>[f(u,{"row-key":"c_id",columns:e.columns,apis:"client","modal-width":720,"dynamic-form":"ClientForm","before-submit":e.beforeSubmit},null,8,["columns","before-submit"])]),_:1})}var H=s(w,[["render",h]]);export{H as default};

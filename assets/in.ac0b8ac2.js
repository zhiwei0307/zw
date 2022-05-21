import"./vue.f15e169e.js";import{_ as e,g as t,c as a,i}from"./index.62669d4e.js";import{d as l}from"./dayjs.39b8ebe2.js";import{d as o,v as d,f as n,w as r,U as s,_ as c,$ as m,a0 as u,a1 as p,m as _,a3 as f,ab as b,W as h,J as v,p as w}from"./@vue.454ad140.js";import"./ant-design-vue.de3a7dcd.js";import"./@babel.29daae83.js";import"./regenerator-runtime.6bfb484e.js";import"./@ant-design.0ba83ffb.js";import"./@ctrl.fa7cbd46.js";import"./lodash-es.a53432ff.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.5d25c98b.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./lodash.3cabe671.js";import"./vuex.5db4980b.js";import"./axios.82d3905a.js";import"./vue-router.a66e1d8c.js";import"./nprogress.6eaf9b6f.js";import"./js-cookie.31874410.js";import"./clipboard.16092f5a.js";const x=o({name:"FromClientInModal",components:{},props:{visible:{type:Boolean,default:!1},clientInfo:{default:()=>({})}},setup(e,{emit:o}){const c=d(null),m=d(2),u=[{title:"产品名称",dataIndex:"b_name",ellipses:!0,customRender:({record:e,text:i})=>{const l=e.b_all_path?Number(e.b_all_path.split("-")[1]):null;return t(a.value,l)+" - "+i+" - "+e.f_name}},{title:"数量",dataIndex:"io_num",width:118,align:"center"},{title:"单价",dataIndex:"io_price",width:118,align:"center"},{title:"总价",dataIndex:"io_total_price",width:118,align:"center"},{title:"新旧程度",dataIndex:"i_fineness",align:"center",width:80},{title:"不良品数",dataIndex:"i_rejects",align:"center",width:80},{title:"不良品描述",dataIndex:"i_rejects_desc",ellipses:!0,align:"center",width:152},{title:"是否到货",dataIndex:"i_is_resived",align:"center",width:80,customRender:({text:e})=>{var t,a;return(a=t||(t={}))[a["已到货"]=1]="已到货",a[a["未到货"]=2]="未到货",s("span",{style:"color: "+(1==e?"green":"orange")},{default:()=>t[e]})}},{title:"收货时间",dataIndex:"i_receipt_date",align:"center",width:92,customRender:({text:e})=>e?e.substring(0,11):""},{title:"创建时间",dataIndex:"io_intime",align:"center",width:92,customRender:({text:e})=>l.unix(e).format("YYYY-MM-DD")}],p=n({keywords:"",io_time:[]});return r((()=>e.visible),(e=>{e||(p.io_time=[],p.keywords="")})),{listdataEl:c,columns:u,beforeListdataLoad:t=>{t.io_mold=m.value,t.c_id=e.clientInfo.c_id,t.keywords=p.keywords,i(p.io_time)||(t.io_time=JSON.stringify(p.io_time))},beforeSubmit:e=>{const t=["order","c_id","mold","id","io_id","mark","list","delDatas"];return Object.keys(e).forEach((a=>{t.includes(a)||delete e[a]})),!0},handleCancel:function(){o("update:visible",!1)},searchForm:p,handleSearch:()=>{c.value.handleKeywordSearch()}}}}),g=v(" 查询 "),I=v("关闭 ");var j=e(o({name:"ProductsIn",components:{FromClientInModel:e(x,[["render",function(e,t,a,i,l,o){const d=c("a-col"),n=c("a-row"),r=c("a-input"),s=c("a-form-item"),v=c("a-range-picker"),w=c("a-button"),x=c("a-form"),j=c("ListData"),y=c("CloseOutlined"),k=c("ZwModal");return m(),u(k,h({visible:e.visible},e.$attrs),{footer:p((()=>[_(w,{key:"back",onClick:e.handleCancel},{icon:p((()=>[_(y)])),default:p((()=>[I])),_:1},8,["onClick"])])),default:p((()=>[_(n,null,{default:p((()=>[_(d,{span:24},{default:p((()=>[f("h3",null," 供应商："+b(e.clientInfo.c_name),1)])),_:1})])),_:1}),_(j,{ref:"listdataEl",columns:e.columns,"row-key":"io_id",apis:"product_io",beforeListdataLoad:e.beforeListdataLoad},{topTools:p((()=>[_(x,{class:"search-form",layout:"inline",model:e.searchForm},{default:p((()=>[_(s,{label:"关键字"},{default:p((()=>[_(r,{value:e.searchForm.keywords,"onUpdate:value":t[0]||(t[0]=t=>e.searchForm.keywords=t),placeholder:"請輸入關鍵字"},null,8,["value"])])),_:1}),_(s,{label:"时间"},{default:p((()=>[_(v,{value:e.searchForm.io_time,"onUpdate:value":t[1]||(t[1]=t=>e.searchForm.io_time=t),"value-format":"YYYY-MM-DD",format:"YYYY-MM-DD"},null,8,["value"])])),_:1}),_(s,null,{default:p((()=>[_(w,{type:"primary",onClick:e.handleSearch},{default:p((()=>[g])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model"])])),_:1},8,["columns","beforeListdataLoad"])])),_:1},16,["visible"])}],["__scopeId","data-v-2fc25ba0"]])},setup(){const e=d(2);w("iomold",e.value);const i=d(!1),o=d({}),n=[{title:"产品名称",dataIndex:"b_name",ellipses:!0,width:168,customRender:({record:e,text:i})=>{const l=e.b_all_path?Number(e.b_all_path.split("-")[1]):null;return t(a.value,l)+" - "+i+" - "+e.f_name}},{title:"供应商",dataIndex:"c_name",width:98,align:"center",customCell:(e,t)=>({class:"click-cursor",onClick:t=>{t.stopPropagation(),o.value=e,i.value=!0}})},{title:"数量",dataIndex:"io_num",width:118,align:"center"},{title:"价格",dataIndex:"io_price",width:118,align:"center"},{title:"总价",dataIndex:"io_total_price",width:118,align:"center"},{title:"新旧程度",dataIndex:"i_fineness",align:"center",width:82},{title:"不良品数",dataIndex:"i_rejects",align:"center",width:82},{title:"不良品描述",dataIndex:"i_rejects_desc",ellipses:!0,align:"center",width:152},{title:"是否到货",dataIndex:"i_is_resived",align:"center",width:82,customRender:({text:e})=>{var t,a;return(a=t||(t={}))[a["已到货"]=1]="已到货",a[a["未到货"]=2]="未到货",s("span",{style:"color: "+(1==e?"green":"orange")},{default:()=>t[e]})}},{title:"收货时间",dataIndex:"i_receipt_date",align:"center",width:92,customRender:({text:e})=>e?e.substring(0,11):""},{title:"创建时间",dataIndex:"io_intime",align:"center",width:92,customRender:({text:e})=>l.unix(e).format("YYYY-MM-DD")},{title:"备注",dataIndex:"io_mark",ellipsis:!0},{title:"操作",dataIndex:"action",width:108,align:"center"}],r=d(640);return w("setModalWidth",(function(e){r.value=e||1280})),{columns:n,beforeListdataLoad:t=>{t.io_mold=e.value},modalWidth:r,beforeSubmit:e=>{const t=["order","c_id","mold","id","io_id","mark","list","delDatas"];return Object.keys(e).forEach((a=>{t.includes(a)||delete e[a]})),!0},modelVisible:i,fc:o}}}),[["render",function(e,t,a,i,l,o){const d=c("ListData"),n=c("FromClientInModel"),r=c("ZwScrollbar");return m(),u(r,{"wrap-class":"pd-17"},{default:p((()=>[_(d,{columns:e.columns,"row-key":"io_id",apis:"product_io","dynamic-form":"ProductIoForm","modal-width":e.modalWidth,beforeListdataLoad:e.beforeListdataLoad,"before-submit":e.beforeSubmit},null,8,["columns","modal-width","beforeListdataLoad","before-submit"]),_(n,{visible:e.modelVisible,"onUpdate:visible":t[0]||(t[0]=t=>e.modelVisible=t),"client-info":e.fc,width:1280,title:"进货列表信息"},null,8,["visible","client-info"])])),_:1})}]]);export{j as default};

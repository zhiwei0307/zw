import"./vue.f15e169e.js";import{_ as e,g as t,c as a}from"./index.8a912b13.js";import{d as r,p as i,_ as s,$ as d,a0 as n,a1 as o,m as l,U as m}from"./@vue.454ad140.js";import"./ant-design-vue.de3a7dcd.js";import"./@babel.29daae83.js";import"./regenerator-runtime.6bfb484e.js";import"./@ant-design.0ba83ffb.js";import"./@ctrl.fa7cbd46.js";import"./lodash-es.a53432ff.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.5d25c98b.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./dayjs.39b8ebe2.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./lodash.3cabe671.js";import"./vuex.5db4980b.js";import"./axios.82d3905a.js";import"./vue-router.a66e1d8c.js";import"./nprogress.6eaf9b6f.js";import"./js-cookie.31874410.js";import"./clipboard.16092f5a.js";var p=e(r({name:"Products",components:{},setup(){const e=[{title:"品牌",dataIndex:["b","b_all_path"],width:128,align:"center",customRender:({text:e})=>{const r=e?Number(e.split("-")[1]):null;return t(a.value,r)}},{title:"型号",dataIndex:["b","b_name"],width:128,align:"center"},{title:"配件名称",dataIndex:["f","f_name"],align:"center",width:152},{title:"总数",dataIndex:"p_total_num",align:"center",width:72},{title:"成本价",dataIndex:"cost_price",width:86,align:"center",customRender:({text:e})=>e<=0?"--":e},{title:"销售价(￥)",dataIndex:"sell_price",width:86,align:"center",customRender:({text:e})=>e<=0?"--":e},{title:"维修价(￥)",dataIndex:"repair_price",width:86,align:"center",customRender:({text:e})=>e<=0?"--":e},{title:"状态",dataIndex:"p_state",width:66,align:"center",customRender:({text:e})=>m(s("a-badge"),1===e?{status:"processing",text:"正常"}:{status:"error",text:"处理"})},{title:"更新时间",dataIndex:"p_utime",width:140,align:"center"},{title:"备注",dataIndex:"p_mark",ellipsis:!0},{title:"操作",dataIndex:"action",width:108,align:"center"}];return i("searchFormOptions",[{name:"brand",comment:"品牌",rule:[],type:"String",formType:"text",props:{clearable:!0},default:""},{name:"date",comment:"时间",rule:[],type:"String",formType:"date",props:{clearable:!0},default:""}]),{columns:e}}}),[["render",function(e,t,a,r,i,m){const p=s("ListData"),c=s("ZwScrollbar");return d(),n(c,{"wrap-class":"pd-17"},{default:o((()=>[l(p,{columns:e.columns,"row-key":"p_id",apis:"product","dynamic-form":"ProductForm","modal-width":{add:640,edit:640,view:980}},null,8,["columns"])])),_:1})}]]);export{p as default};

import"./vue.3c1b29c4.js";import{_ as t,h as e,c as a}from"./index.3f7bb403.js";import{d as r,p as i,_ as s,$ as d,a0 as n,a1 as o,m as l,U as m}from"./@vue.61fb48b5.js";import"./ant-design-vue.fade4faf.js";import"./@babel.eda524f0.js";import"./regenerator-runtime.7769f52d.js";import"./@ant-design.2f8223f0.js";import"./@ctrl.fa7cbd46.js";import"./lodash-es.a53432ff.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.5d25c98b.js";import"./scroll-into-view-if-needed.5191fdbf.js";import"./compute-scroll-into-view.6058b3be.js";import"./dayjs.39b8ebe2.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./lodash.5f175b98.js";import"./vuex.fb8d35f6.js";import"./axios.82d3905a.js";import"./vue-router.9a97da5e.js";import"./nprogress.6eaf9b6f.js";import"./js-cookie.31874410.js";import"./clipboard.5999f2a2.js";var p=t(r({name:"Products",components:{},setup(){const t=[{title:"品牌",dataIndex:["b","b_all_path"],width:128,align:"center",customRender:({text:t})=>{const r=t?Number(t.split("-")[1]):null;return e(a.value,r)}},{title:"型号",dataIndex:["b","b_name"],width:128,align:"center"},{title:"配件名称",dataIndex:["f","f_name"],align:"center",width:152},{title:"总数",dataIndex:"p_total_num",align:"center",width:72},{title:"成本价",dataIndex:"cost_price",width:86,align:"center",customRender:({text:t})=>t<=0?"--":t},{title:"销售价(￥)",dataIndex:"sell_price",width:86,align:"center",customRender:({text:t})=>t<=0?"--":t},{title:"维修价(￥)",dataIndex:"repair_price",width:86,align:"center",customRender:({text:t})=>t<=0?"--":t},{title:"状态",dataIndex:"p_state",width:66,align:"center",customRender:({text:t})=>m(s("a-badge"),1===t?{status:"processing",text:"正常"}:{status:"error",text:"处理"})},{title:"更新时间",dataIndex:"p_utime",width:140,align:"center"},{title:"备注",dataIndex:"p_mark",ellipsis:!0},{title:"操作",dataIndex:"action",width:108,align:"center"}];return i("searchFormOptions",[{name:"brand",comment:"品牌",rule:[],type:"String",formType:"text",props:{clearable:!0},default:""},{name:"date",comment:"时间",rule:[],type:"String",formType:"date",props:{clearable:!0},default:""}]),{columns:t}}}),[["render",function(t,e,a,r,i,m){const p=s("ListData"),c=s("ZwScrollbar");return d(),n(c,{"wrap-class":"pd-17"},{default:o((()=>[l(p,{columns:t.columns,"row-key":"p_id",apis:"product","dynamic-form":"ProductForm","modal-width":{add:640,edit:640,view:980}},null,8,["columns"])])),_:1})}]]);export{p as default};

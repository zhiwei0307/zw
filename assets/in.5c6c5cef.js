import"./vue.bba2ec4d.js";import{_ as D,h as I,c as v,i as Y}from"./index.17c23084.js";import{d as C}from"./dayjs.3e893def.js";import{d as g,m as p,r as A,w as $,h as E,_ as l,$ as k,a0 as y,a1 as u,c as a,a3 as x,ac as S,a4 as R,E as B,p as w}from"./@vue.ce69bcce.js";import"./ant-design-vue.4bd4cff1.js";import"./@babel.d77ec770.js";import"./regenerator-runtime.52b57d8c.js";import"./@ant-design.dce0d0de.js";import"./@ctrl.837ec117.js";import"./lodash-es.a7598bc1.js";import"./resize-observer-polyfill.8deb1e21.js";import"./vue-types.6e6d84ba.js";import"./dom-align.243fa364.js";import"./async-validator.ed4c92a2.js";import"./scroll-into-view-if-needed.5191fdbf.js";import"./compute-scroll-into-view.6058b3be.js";import"./lodash.20dab116.js";import"./vuex.6a416a8d.js";import"./axios.e9656f83.js";import"./vue-router.b7fb3786.js";import"./nprogress.bfa0410b.js";import"./js-cookie.31874410.js";import"./clipboard.4ddab532.js";const j=g({name:"FromClientInModal",components:{},props:{visible:{type:Boolean,default:!1},clientInfo:{default(){return{}}}},setup(e,{emit:r}){const _=p(null),f=p(2),b=[{title:"\u4EA7\u54C1\u540D\u79F0",dataIndex:"b_name",ellipses:!0,customRender:({record:o,text:c})=>{const d=o.b_all_path?Number(o.b_all_path.split("-")[1]):null;return I(v.value,d)+" - "+c+" - "+o.f_name}},{title:"\u6570\u91CF",dataIndex:"io_num",width:118,align:"center"},{title:"\u5355\u4EF7",dataIndex:"io_price",width:118,align:"center"},{title:"\u603B\u4EF7",dataIndex:"io_total_price",width:118,align:"center"},{title:"\u65B0\u65E7\u7A0B\u5EA6",dataIndex:"i_fineness",align:"center",width:80},{title:"\u4E0D\u826F\u54C1\u6570",dataIndex:"i_rejects",align:"center",width:80},{title:"\u4E0D\u826F\u54C1\u63CF\u8FF0",dataIndex:"i_rejects_desc",ellipses:!0,align:"center",width:152},{title:"\u662F\u5426\u5230\u8D27",dataIndex:"i_is_resived",align:"center",width:80,customRender:({text:o})=>{let c;return(d=>{d[d.\u5DF2\u5230\u8D27=1]="\u5DF2\u5230\u8D27",d[d.\u672A\u5230\u8D27=2]="\u672A\u5230\u8D27"})(c||(c={})),E("span",{style:`color: ${o==1?"green":"orange"}`},{default:()=>c[o]})}},{title:"\u6536\u8D27\u65F6\u95F4",dataIndex:"i_receipt_date",align:"center",width:92,customRender:({text:o})=>o?o.substring(0,11):""},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"io_intime",align:"center",width:92,customRender:({text:o})=>C.unix(o).format("YYYY-MM-DD")}],s=A({keywords:"",io_time:[]}),m=()=>{_.value.handleKeywordSearch()},t=o=>{o.io_mold=f.value,o.c_id=e.clientInfo.c_id,o.keywords=s.keywords,Y(s.io_time)||(o.io_time=JSON.stringify(s.io_time))},n=o=>{const c=["order","c_id","mold","id","io_id","mark","list","delDatas"];return Object.keys(o).forEach(d=>{c.includes(d)||delete o[d]}),!0},i=function(){r("update:visible",!1)};return $(()=>e.visible,o=>{o||(s.io_time=[],s.keywords="")}),{listdataEl:_,columns:b,beforeListdataLoad:t,beforeSubmit:n,handleCancel:i,searchForm:s,handleSearch:m}}}),N=B(" \u67E5\u8BE2 "),V=B("\u5173\u95ED ");function O(e,r,_,f,b,s){const m=l("a-col"),t=l("a-row"),n=l("a-input"),i=l("a-form-item"),o=l("a-range-picker"),c=l("a-button"),d=l("a-form"),h=l("ListData"),L=l("CloseOutlined"),M=l("ZwModal");return k(),y(M,R({visible:e.visible},e.$attrs),{footer:u(()=>[a(c,{key:"back",onClick:e.handleCancel},{icon:u(()=>[a(L)]),default:u(()=>[V]),_:1},8,["onClick"])]),default:u(()=>[a(t,null,{default:u(()=>[a(m,{span:24},{default:u(()=>[x("h3",null," \u4F9B\u5E94\u5546\uFF1A"+S(e.clientInfo.c_name),1)]),_:1})]),_:1}),a(h,{ref:"listdataEl",columns:e.columns,"row-key":"io_id",apis:"product_io",beforeListdataLoad:e.beforeListdataLoad},{topTools:u(()=>[a(d,{class:"search-form",layout:"inline",model:e.searchForm},{default:u(()=>[a(i,{label:"\u5173\u952E\u5B57"},{default:u(()=>[a(n,{value:e.searchForm.keywords,"onUpdate:value":r[0]||(r[0]=F=>e.searchForm.keywords=F),placeholder:"\u8ACB\u8F38\u5165\u95DC\u9375\u5B57"},null,8,["value"])]),_:1}),a(i,{label:"\u65F6\u95F4"},{default:u(()=>[a(o,{value:e.searchForm.io_time,"onUpdate:value":r[1]||(r[1]=F=>e.searchForm.io_time=F),"value-format":"YYYY-MM-DD",format:"YYYY-MM-DD"},null,8,["value"])]),_:1}),a(i,null,{default:u(()=>[a(c,{type:"primary",onClick:e.handleSearch},{default:u(()=>[N]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"])]),_:1},8,["columns","beforeListdataLoad"])]),_:1},16,["visible"])}var P=D(j,[["render",O],["__scopeId","data-v-09772d9d"]]);const Z=g({name:"ProductsIn",components:{FromClientInModel:P},setup(){const e=p(2);w("iomold",e.value);const r=p(!1),_=p({}),f=[{title:"\u4EA7\u54C1\u540D\u79F0",dataIndex:"b_name",ellipses:!0,width:168,customRender:({record:t,text:n})=>{const i=t.b_all_path?Number(t.b_all_path.split("-")[1]):null;return I(v.value,i)+" - "+n+" - "+t.f_name}},{title:"\u4F9B\u5E94\u5546",dataIndex:"c_name",width:98,align:"center",customCell:(t,n)=>({class:"click-cursor",onClick:i=>{i.stopPropagation(),_.value=t,r.value=!0}})},{title:"\u6570\u91CF",dataIndex:"io_num",width:118,align:"center"},{title:"\u4EF7\u683C",dataIndex:"io_price",width:118,align:"center"},{title:"\u603B\u4EF7",dataIndex:"io_total_price",width:118,align:"center"},{title:"\u65B0\u65E7\u7A0B\u5EA6",dataIndex:"i_fineness",align:"center",width:82},{title:"\u4E0D\u826F\u54C1\u6570",dataIndex:"i_rejects",align:"center",width:82},{title:"\u4E0D\u826F\u54C1\u63CF\u8FF0",dataIndex:"i_rejects_desc",ellipses:!0,align:"center",width:152},{title:"\u662F\u5426\u5230\u8D27",dataIndex:"i_is_resived",align:"center",width:82,customRender:({text:t})=>{let n;return(i=>{i[i.\u5DF2\u5230\u8D27=1]="\u5DF2\u5230\u8D27",i[i.\u672A\u5230\u8D27=2]="\u672A\u5230\u8D27"})(n||(n={})),E("span",{style:`color: ${t==1?"green":"orange"}`},{default:()=>n[t]})}},{title:"\u6536\u8D27\u65F6\u95F4",dataIndex:"i_receipt_date",align:"center",width:92,customRender:({text:t})=>t?t.substring(0,11):""},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"io_intime",align:"center",width:92,customRender:({text:t})=>C.unix(t).format("YYYY-MM-DD")},{title:"\u5907\u6CE8",dataIndex:"io_mark",ellipsis:!0},{title:"\u64CD\u4F5C",dataIndex:"action",width:108,align:"center"}],b=t=>{t.io_mold=e.value},s=t=>{const n=["order","c_id","mold","id","io_id","mark","list","delDatas"];return Object.keys(t).forEach(i=>{n.includes(i)||delete t[i]}),!0},m=p(640);return w("setModalWidth",function(t){m.value=t||1280}),{columns:f,beforeListdataLoad:b,modalWidth:m,beforeSubmit:s,modelVisible:r,fc:_}}});function U(e,r,_,f,b,s){const m=l("ListData"),t=l("FromClientInModel"),n=l("ZwScrollbar");return k(),y(n,{"wrap-class":"pd-17"},{default:u(()=>[a(m,{columns:e.columns,"row-key":"io_id",apis:"product_io","dynamic-form":"ProductIoForm","modal-width":e.modalWidth,beforeListdataLoad:e.beforeListdataLoad,"before-submit":e.beforeSubmit},null,8,["columns","modal-width","beforeListdataLoad","before-submit"]),a(t,{visible:e.modelVisible,"onUpdate:visible":r[0]||(r[0]=i=>e.modelVisible=i),"client-info":e.fc,width:1280,title:"\u8FDB\u8D27\u5217\u8868\u4FE1\u606F"},null,8,["visible","client-info"])]),_:1})}var _e=D(Z,[["render",U]]);export{_e as default};

import"./vue.9122bf33.js";import{i as e,r as a,d as t}from"./index.9217fc36.js";import{_ as s}from"./index.c9bd1832.js";import{d as r,k as l,_ as i,$ as o,a2 as n,a3 as d,m as u,a1 as c,ab as p,ae as v,ad as m,a0 as _,J as w,a9 as f,aa as b,v as x,l as h,u as g,F as j,a7 as y,aj as k}from"./@vue.42962c1d.js";import"./ant-design-vue.692d4b86.js";import"./@babel.29daae83.js";import"./regenerator-runtime.6bfb484e.js";import"./@ant-design.a7a0eb88.js";import"./@ctrl.fa7cbd46.js";import"./lodash-es.a53432ff.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.5d25c98b.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./dayjs.39b8ebe2.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./lodash.3cabe671.js";import"./vuex.35cecaef.js";import"./axios.82d3905a.js";import"./vue-router.a3c62d0a.js";import"./nprogress.6eaf9b6f.js";import"./js-cookie.31874410.js";import"./clipboard.16092f5a.js";const I=e=>(f("data-v-62cd5895"),e=e(),b(),e),R={class:"base-info"},q={key:0,class:"price"},L=w(" 元"),$={class:"status"},z={class:"fault-wrap"},C=I((()=>d("span",{class:"label"},"故障描述：",-1))),S={class:"fault-wrap"},A=I((()=>d("span",{class:"label"},"确认故障：",-1))),D={class:"fault-wrap"},E=I((()=>d("span",{class:"label"},"更换配件：",-1)));var F=s(r({props:["row"],setup(e){const a=l("context");function t(e){return[{color:"#909399",text:"待确认"},{color:"#909399",text:"同意"},{color:"red",text:"拒绝"}][e=e>0?e:0]}function s(e){return[{color:"default",text:"等待维修"},{color:"success",text:"已维修"},{color:"processing",text:"维修中"},{color:"warning",text:"原机返回"}][e=e>0?e:0]}function r(e){return[{color:"default",text:"--"},{color:"success",text:"已发货"},{color:"warning",text:"未发货"}][e]}return(l,f)=>{const b=i("a-space"),x=i("a-tag");return o(),n("li",{class:"m-list__item",onClick:f[0]||(f[0]=t=>{return s=e.row.r_id,void a.$router.push({path:"/machine/mine/detail",query:{id:s}});var s})},[d("div",R,[d("div",null,[u(b,null,{default:c((()=>[d("b",null,p(e.row.b_name),1),d("span",null,p(e.row.machine_id),1)])),_:1})]),e.row.r_price?(o(),n("span",q,[d("span",null,p(e.row.r_price),1),L])):v("",!0)]),d("p",$,[u(b,null,{default:c((()=>[d("small",null,p(e.row.receipt_date.substring(0,11)),1),d("span",{style:m({color:t(e.row.is_repair).color})},p(t(e.row.is_repair).text),5),e.row.is_repair>0?(o(),_(x,{key:0,color:s(e.row.repair_status).color},{default:c((()=>[w(p(s(e.row.repair_status).text),1)])),_:1},8,["color"])):v("",!0),e.row.repair_status>0?(o(),_(x,{key:1,color:r(e.row.is_deliver).color},{default:c((()=>[w(p(r(e.row.is_deliver).text),1)])),_:1},8,["color"])):v("",!0)])),_:1})]),d("div",z,[C,d("span",null,p(e.row.fault_desc||"-"),1)]),d("div",S,[A,d("span",null,p(e.row.r_o_fault||"-"),1)]),d("div",D,[E,d("span",null,p(e.row.replace_part||"-"),1)])])}}}),[["__scopeId","data-v-62cd5895"]]);const J={style:{flex:"1",height:"100%"}},U={class:"pc-show"},Z={class:"m-show"},B={class:"search-wrap"},G={key:1},H=(e=>(f("data-v-39d9ced2"),e=e(),b(),e))((()=>d("small",null,"   加载更多... ",-1)));var K=s(r({setup(s){const r=l("context"),p=x(null),m=x(!0),w=x(""),f=x(1),b=x(10),I=h((()=>{const{id:e}=r.$store.getters.userinfo;return e})),R=x([]),q=x(!1),L=e=>{w.value&&(e.keywords=w.value)},$=e=>{m.value=!1;const a=e.data.rows;a.length<b.value?q.value=!1:q.value=!0,R.value.push(...a)},z=()=>{m.value=!0,p.value.requestList(++f.value)},C=()=>{m.value=!0,R.value=[],p.value.requestList(f.value=1)},S=[{title:"序号",dataIndex:"index",width:49,align:"center",customRender:({index:e})=>e+1},{title:"日期",dataIndex:"receipt_date",width:96,align:"center",customRender:function({text:e}){if(!e)return"--";return e.substring(0,11)}},{title:"型号",dataIndex:"b_name",width:118,align:"center"},{title:"原故障",dataIndex:"r_o_fault",ellipsis:!0,width:118},{title:"确认故障",ellipsis:!0,dataIndex:"fault_desc"},{title:"更换配件",dataIndex:"replace_part",ellipsis:!0},{title:"是否维修",dataIndex:"is_repair",width:89,align:"center",customRender:e},{title:"维修状态",dataIndex:"repair_status",width:89,align:"center",customRender:a},{title:"是否发货",dataIndex:"is_deliver",width:89,align:"center",customRender:t},{title:"机器编号",key:"machine_id",dataIndex:"machine_id",width:139,align:"center",ellipsis:!0}],A=(e,a)=>{r.$router.push({path:"/machine/mine/detail",query:{id:e.r_id}})};return(e,a)=>{const t=i("ListData"),s=i("a-spin"),r=i("a-input-search"),l=i("a-empty"),f=i("loading-outlined"),x=i("a-button"),h=i("ZwScrollbar");return o(),n("div",J,[u(h,{"wrap-class":"pd-17"},{default:c((()=>[d("div",U,[u(t,{ref_key:"listdataRef",ref:p,"row-key":"r_id","page-size":b.value,columns:S,apis:{query:"rp/mine/"+g(I)},"modal-width":720,"top-tools":{hiddenAdd:!0},"before-listdata-load":L,onListdataLoaded:$,onCustomRowEvent:A},null,8,["page-size","apis"])]),d("div",Z,[m.value?(o(),_(s,{key:0,class:"loading-wrap",spinning:m.value},null,8,["spinning"])):v("",!0),d("div",B,[u(r,{value:w.value,"onUpdate:value":a[0]||(a[0]=e=>w.value=e),placeholder:"请输入关键字搜索","enter-button":"",onSearch:C},null,8,["value"])]),R.value.length>0?(o(),n("ul",G,[(o(!0),n(j,null,y(R.value,(e=>(o(),_(F,{key:e.r_id,row:e},null,8,["row"])))),128))])):m.value?v("",!0):(o(),_(l,{key:2})),q.value?(o(),_(x,{key:3,type:"text",onClick:z,block:""},k({default:c((()=>[H])),_:2},[m.value?{name:"icon",fn:c((()=>[u(f)]))}:void 0]),1024)):v("",!0)])])),_:1})])}}}),[["__scopeId","data-v-39d9ced2"]]);export{K as default};

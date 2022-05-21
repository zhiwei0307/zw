var P=(e,r,i)=>new Promise((n,_)=>{var h=c=>{try{f(i.next(c))}catch(t){_(t)}},y=c=>{try{f(i.throw(c))}catch(t){_(t)}},f=c=>c.done?n(c.value):Promise.resolve(c.value).then(h,y);f((i=i.apply(e,r)).next())});import"./vue.bba2ec4d.js";import{l as q,_ as N,i as G}from"./index.17c23084.js";import{d as K,e as z,m as g,D as j,w as H,_ as d,$ as S,a2 as A,c as u,a3 as D,a1 as p,E as w,ac as M,a9 as J,p as Q,h as B}from"./@vue.ce69bcce.js";import"./ant-design-vue.4bd4cff1.js";import"./@babel.d77ec770.js";import"./regenerator-runtime.52b57d8c.js";import"./@ant-design.dce0d0de.js";import"./@ctrl.837ec117.js";import"./lodash-es.a7598bc1.js";import"./resize-observer-polyfill.8deb1e21.js";import"./dayjs.3e893def.js";import"./vue-types.6e6d84ba.js";import"./dom-align.243fa364.js";import"./async-validator.ed4c92a2.js";import"./scroll-into-view-if-needed.5191fdbf.js";import"./compute-scroll-into-view.6058b3be.js";import"./lodash.20dab116.js";import"./vuex.6a416a8d.js";import"./axios.e9656f83.js";import"./vue-router.b7fb3786.js";import"./nprogress.bfa0410b.js";import"./js-cookie.31874410.js";import"./clipboard.4ddab532.js";const L=(e,r)=>{let i;for(let n=0;n<r.length;n++){const _=r[n];_.children&&(_.children.some(h=>h.id===e)?i=_.id:L(e,_.children)&&(i=L(e,_.children)))}return i},W=K({name:"MenuTree",setup(e,{emit:r}){const i=z("context"),n=g(!1),_=g([]),h=g([]),y=g(null),f=g(!0),c=g([]),t=g([]);let o=[];const m=s=>{s.forEach(a=>{G(a.children)||(o.push(a.id),m(a.children))})};function E(){return n.value=!0,o=[],new Promise((s,a)=>{i.$http.get("menus/all").then(l=>{if(!l.success)return a(l.message);const v=q(l.data,"id","p_id");c.value=l.data,t.value=v,m(v),h.value=o,s(v)}).catch(l=>{a(l)}).finally(()=>{n.value=!1})})}j(()=>{E()});const k=g(!0),I=()=>{h.value=k.value?[]:o,k.value=!k.value},O=s=>{h.value=s,f.value=!1};H(y,s=>{const a=c.value.map(l=>l.name.indexOf(s)>-1?L(l.id,t.value):null).filter((l,v,C)=>l&&C.indexOf(l)===v);h.value=a,k.value=!0,y.value=s,f.value=!0});const R=(s,a)=>{const{id:l,dataRef:v}=a.node;_.value=[l],r("select",v)},T=(s,a,l)=>{r("contextMenuClick",{menuKey:s,id:a,code:l})},x=(s,a)=>new Promise((l,v)=>{i.$http.put("menus/"+s,a).then(C=>{l(C)}).catch(C=>{v(C)})});return{loading:n,expandedKeys:h,searchValue:y,autoExpandParent:f,gData:t,onExpand:O,onNodeSelect:R,selected_keys:_,onDrop:s=>{const{id:a,code:l,sort:v,p_id:C,p_code:Z}=s.node,U=s.dragNode.id,V=!!s.dropToGap,$={p_id:C,p_code:Z,sort:(Number(v)||0)+1};V&&s.dropPosition===-1&&($.sort=(Number(v)||0)-1),V||($.p_id=a,$.p_code=l),n.value=!0,x(U,$).then(F=>{i.$message[F.success?"success":"error"](F.message),F.success&&E()}).catch(F=>{i.$message.error(F),n.value=!1})},onContextMenuClick:T,collapse:k,handleExpand:I,getMenuAll:E}}}),X={style:{height:"100%",position:"relative"}},Y={class:"tools"},ee=w(" \u521B\u5EFA "),te={key:0},ne={style:{color:"#f50"}},oe={key:1},ae=w(" \u6DFB\u52A0 "),se=w(" \u7F16\u8F91 "),le=w(" \u5220\u9664 ");function ue(e,r,i,n,_,h){const y=d("a-spin"),f=d("a-input-search"),c=d("DoubleRightOutlined"),t=d("a-button"),o=d("PlusOutlined"),m=d("a-menu-item"),E=d("FormOutlined"),k=d("ClearOutlined"),I=d("a-menu"),O=d("a-dropdown"),R=d("a-tree"),T=d("zw-scrollbar");return S(),A("div",X,[u(y,{spinning:e.loading,"wrapper-class-name":"spin-wrap"},null,8,["spinning"]),u(f,{value:e.searchValue,"onUpdate:value":r[0]||(r[0]=x=>e.searchValue=x),placeholder:"Search"},null,8,["value"]),D("div",Y,[u(t,{type:"link",onClick:e.handleExpand,size:"small"},{default:p(()=>[w(M(e.collapse?"\u5168\u90E8\u6536\u8D77":"\u5168\u90E8\u5C55\u5F00")+" ",1),D("span",{class:J(["collapse-btn",{collapsed:e.collapse}])},[u(c)],2)]),_:1},8,["onClick"]),u(t,{type:"link",onClick:r[1]||(r[1]=x=>e.onContextMenuClick("add",null,"\u6839\u76EE\u5F55")),size:"small"},{icon:p(()=>[u(o)]),default:p(()=>[ee]),_:1})]),u(T,{class:"scroll-tree","wrap-class":"scroll-tree_inner"},{default:p(()=>[u(R,{"block-node":"",draggable:"","selected-keys":e.selected_keys,"expanded-keys":e.expandedKeys,"auto-expand-parent":e.autoExpandParent,"tree-data":e.gData,"field-names":{title:"name",key:"id"},onExpand:e.onExpand,onSelect:e.onNodeSelect,onDrop:e.onDrop},{title:p(({id:x,name:b,code:s})=>[u(O,{trigger:["contextmenu"],"overlay-class-name":"context-menu"},{overlay:p(()=>[u(I,{onClick:({key:a})=>e.onContextMenuClick(a,x,s)},{default:p(()=>[u(m,{key:"add"},{icon:p(()=>[u(o)]),default:p(()=>[ae]),_:1}),u(m,{key:"edit"},{icon:p(()=>[u(E)]),default:p(()=>[se]),_:1}),u(m,{key:"del"},{icon:p(()=>[u(k)]),default:p(()=>[le]),_:1})]),_:2},1032,["onClick"])]),default:p(()=>{var a;return[b.indexOf(e.searchValue)>-1?(S(),A("div",te,[w(M(b.substr(0,b.indexOf(e.searchValue)))+" ",1),D("span",ne,M(e.searchValue),1),w(" "+M(b.substr(b.indexOf(e.searchValue)+((a=e.searchValue)==null?void 0:a.length))),1)])):(S(),A("div",oe,M(b),1))]}),_:2},1024)]),_:1},8,["selected-keys","expanded-keys","auto-expand-parent","tree-data","onExpand","onSelect","onDrop"])]),_:1})])}var ie=N(W,[["render",ue],["__scopeId","data-v-d6329a10"]]);const re=K({name:"MenusPage",components:{MenuTree:ie},setup(){z("context");const e=g(null),r=g(null),i=[{title:"\u5E8F\u53F7",dataIndex:"index",width:48,align:"center",customRender({index:t}){return t+1}},{title:"\u83DC\u5355\u540D\u79F0",dataIndex:"name",width:118,align:"center"},{title:"\u83DC\u5355URL",dataIndex:"path",width:252,align:"center"},{title:"\u8D44\u6E90\u7F16\u7801",dataIndex:"code",width:168,align:"center"},{title:"\u56FE\u6807",key:"icon",width:72,align:"center",customRender:({record:t})=>{const o=t.icon_type&&(t.icon_name||t.icon_svg_path);return B("span",{style:"font-size: 18px"+(o?"":";color: lightgray")},[B(d("ZwIcons"),{name:o?t.icon_name:"exclamation-circle-outlined",type:t.icon_type||"ant",path:t.icon_svg_path})])}},{title:"\u7C7B\u578B",dataIndex:"mold",width:86,align:"center",customRender({text:t}){let o="\u9875\u9762";switch(t){case"A":o="\u5E94\u7528";break;case"M":o="\u6A21\u5757";break;case"P":o="\u9875\u9762";break;case"F":o="\u529F\u80FD";break}return o}},{title:"\u6392\u5E8F",dataIndex:"sort",width:78,align:"center"},{title:"\u66F4\u65B0\u65F6\u95F4",dataIndex:"update_at",width:128,align:"center",customRender:({text:t})=>t?t.split(" ")[0]:"-"},{title:"\u5907\u6CE8",dataIndex:"remarks",width:128,ellipsis:!0},{title:"\u64CD\u4F5C",dataIndex:"action",width:108,align:"center",fixed:"right"}],n=g({p_id:null,p_code:"\u6839\u76EE\u5F55"});return Q("parentInfo",n),{listdata:e,menuTree:r,columns:i,beforeListdataLoad:t=>{t.p_id=n.value.p_id},beforeSubmit:(t,o)=>P(this,null,function*(){try{yield o.menuForm.validate()}catch(m){return!1}return t.path||delete t.path,!0}),onMenuTreeSelect:t=>{const o=t.code,m=t.id;m!==n.value.p_id&&(n.value.p_id=m,n.value.p_code=o,e.value.keyword="",e.value.requestList())},onContextMenuClick:({menuKey:t,id:o,code:m})=>{t==="add"&&(n.value.p_id=o,n.value.p_code=m),e.value.handleAction[t]({id:o,code:m})},onRefreshAfter:()=>{n.value.p_id=null,n.value.p_code="\u6839\u76EE\u5F55",r.value.getMenuAll()}}}}),de={class:"menu-wrap"},ce={class:"aside m-left pd-17"},pe={class:"aside m-right"};function _e(e,r,i,n,_,h){const y=d("MenuTree"),f=d("ListData"),c=d("ZwScrollbar");return S(),A("div",de,[D("aside",ce,[u(y,{ref:"menuTree",onSelect:e.onMenuTreeSelect,onContextMenuClick:e.onContextMenuClick},null,8,["onSelect","onContextMenuClick"])]),D("aside",pe,[u(c,{"wrap-class":"pd-17"},{default:p(()=>[u(f,{ref:"listdata","row-key":"id",columns:e.columns,apis:"menus","modal-width":720,"dynamic-form":"MenuForm","before-listdata-load":e.beforeListdataLoad,"before-submit":e.beforeSubmit,"top-tools":{hiddenAdd:!0},onRefreshAfter:e.onRefreshAfter},null,8,["columns","before-listdata-load","before-submit","onRefreshAfter"])]),_:1})])])}var Pe=N(re,[["render",_e],["__scopeId","data-v-309b34c8"]]);export{Pe as default};

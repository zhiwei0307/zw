import"./vue.3c1b29c4.js";import{l as e,_ as a,i as t}from"./index.3f7bb403.js";import{d as n,k as l,v as o,I as s,w as d,_ as i,$ as r,a2 as c,m as u,a3 as p,a1 as m,J as f,ab as h,a8 as v,p as x,U as b}from"./@vue.61fb48b5.js";import"./ant-design-vue.fade4faf.js";import"./@babel.eda524f0.js";import"./regenerator-runtime.7769f52d.js";import"./@ant-design.2f8223f0.js";import"./@ctrl.fa7cbd46.js";import"./lodash-es.a53432ff.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.5d25c98b.js";import"./scroll-into-view-if-needed.5191fdbf.js";import"./compute-scroll-into-view.6058b3be.js";import"./dayjs.39b8ebe2.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./lodash.5f175b98.js";import"./vuex.fb8d35f6.js";import"./axios.82d3905a.js";import"./vue-router.9a97da5e.js";import"./nprogress.6eaf9b6f.js";import"./js-cookie.31874410.js";import"./clipboard.5999f2a2.js";const _=(e,a)=>{let t;for(let n=0;n<a.length;n++){const l=a[n];l.children&&(l.children.some((a=>a.id===e))?t=l.id:_(e,l.children)&&(t=_(e,l.children)))}return t},g=n({name:"MenuTree",setup(a,{emit:n}){const i=l("context"),r=o(!1),c=o([]),u=o([]),p=o(null),m=o(!0),f=o([]),h=o([]);let v=[];const x=e=>{e.forEach((e=>{t(e.children)||(v.push(e.id),x(e.children))}))};function b(){return r.value=!0,v=[],new Promise(((a,t)=>{i.$http.get("menus/all").then((n=>{if(!n.success)return t(n.message);const l=e(n.data,"id","p_id");f.value=n.data,h.value=l,x(l),u.value=v,a(l)})).catch((e=>{t(e)})).finally((()=>{r.value=!1}))}))}s((()=>{b()}));const g=o(!0);d(p,(e=>{const a=f.value.map((a=>a.name.indexOf(e)>-1?_(a.id,h.value):null)).filter(((e,a,t)=>e&&t.indexOf(e)===a));u.value=a,g.value=!0,p.value=e,m.value=!0}));return{loading:r,expandedKeys:u,searchValue:p,autoExpandParent:m,gData:h,onExpand:e=>{u.value=e,m.value=!1},onNodeSelect:(e,a)=>{const{id:t,dataRef:l}=a.node;c.value=[t],n("select",l)},selected_keys:c,onDrop:e=>{const{id:a,code:t,sort:n,p_id:l,p_code:o}=e.node,s=e.dragNode.id,d=!!e.dropToGap,c={p_id:l,p_code:o,sort:(Number(n)||0)+1};d&&-1===e.dropPosition&&(c.sort=(Number(n)||0)-1),d||(c.p_id=a,c.p_code=t),r.value=!0,((e,a)=>new Promise(((t,n)=>{i.$http.put("menus/"+e,a).then((e=>{t(e)})).catch((e=>{n(e)}))})))(s,c).then((e=>{i.$message[e.success?"success":"error"](e.message),e.success&&b()})).catch((e=>{i.$message.error(e),r.value=!1}))},onContextMenuClick:(e,a,t)=>{n("contextMenuClick",{menuKey:e,id:a,code:t})},collapse:g,handleExpand:()=>{u.value=g.value?[]:v,g.value=!g.value},getMenuAll:b}}}),y={style:{height:"100%",position:"relative"}},k={class:"tools"},w=f(" 创建 "),j={key:0},C={style:{color:"#f50"}},M={key:1},I=f(" 添加 "),S=f(" 编辑 "),R=f(" 删除 ");const P=n({name:"MenusPage",components:{MenuTree:a(g,[["render",function(e,a,t,n,l,o){const s=i("a-spin"),d=i("a-input-search"),x=i("DoubleRightOutlined"),b=i("a-button"),_=i("PlusOutlined"),g=i("a-menu-item"),P=i("FormOutlined"),A=i("ClearOutlined"),E=i("a-menu"),O=i("a-dropdown"),D=i("a-tree"),T=i("zw-scrollbar");return r(),c("div",y,[u(s,{spinning:e.loading,"wrapper-class-name":"spin-wrap"},null,8,["spinning"]),u(d,{value:e.searchValue,"onUpdate:value":a[0]||(a[0]=a=>e.searchValue=a),placeholder:"Search"},null,8,["value"]),p("div",k,[u(b,{type:"link",onClick:e.handleExpand,size:"small"},{default:m((()=>[f(h(e.collapse?"全部收起":"全部展开")+" ",1),p("span",{class:v(["collapse-btn",{collapsed:e.collapse}])},[u(x)],2)])),_:1},8,["onClick"]),u(b,{type:"link",onClick:a[1]||(a[1]=a=>e.onContextMenuClick("add",null,"根目录")),size:"small"},{icon:m((()=>[u(_)])),default:m((()=>[w])),_:1})]),u(T,{class:"scroll-tree","wrap-class":"scroll-tree_inner"},{default:m((()=>[u(D,{"block-node":"",draggable:"","selected-keys":e.selected_keys,"expanded-keys":e.expandedKeys,"auto-expand-parent":e.autoExpandParent,"tree-data":e.gData,"field-names":{title:"name",key:"id"},onExpand:e.onExpand,onSelect:e.onNodeSelect,onDrop:e.onDrop},{title:m((({id:a,name:t,code:n})=>[u(O,{trigger:["contextmenu"],"overlay-class-name":"context-menu"},{overlay:m((()=>[u(E,{onClick:({key:t})=>e.onContextMenuClick(t,a,n)},{default:m((()=>[u(g,{key:"add"},{icon:m((()=>[u(_)])),default:m((()=>[I])),_:1}),u(g,{key:"edit"},{icon:m((()=>[u(P)])),default:m((()=>[S])),_:1}),u(g,{key:"del"},{icon:m((()=>[u(A)])),default:m((()=>[R])),_:1})])),_:2},1032,["onClick"])])),default:m((()=>{var a;return[t.indexOf(e.searchValue)>-1?(r(),c("div",j,[f(h(t.substr(0,t.indexOf(e.searchValue)))+" ",1),p("span",C,h(e.searchValue),1),f(" "+h(t.substr(t.indexOf(e.searchValue)+(null==(a=e.searchValue)?void 0:a.length))),1)])):(r(),c("div",M,h(t),1))]})),_:2},1024)])),_:1},8,["selected-keys","expanded-keys","auto-expand-parent","tree-data","onExpand","onSelect","onDrop"])])),_:1})])}],["__scopeId","data-v-d6329a10"]])},setup(){l("context");const e=o(null),a=o(null),t=[{title:"序号",dataIndex:"index",width:48,align:"center",customRender:({index:e})=>e+1},{title:"菜单名称",dataIndex:"name",width:118,align:"center"},{title:"菜单URL",dataIndex:"path",width:252,align:"center"},{title:"资源编码",dataIndex:"code",width:168,align:"center"},{title:"图标",key:"icon",width:72,align:"center",customRender:({record:e})=>{const a=e.icon_type&&(e.icon_name||e.icon_svg_path);return b("span",{style:"font-size: 18px"+(a?"":";color: lightgray")},[b(i("ZwIcons"),{name:a?e.icon_name:"exclamation-circle-outlined",type:e.icon_type||"ant",path:e.icon_svg_path})])}},{title:"类型",dataIndex:"mold",width:86,align:"center",customRender({text:e}){let a="页面";switch(e){case"A":a="应用";break;case"M":a="模块";break;case"P":a="页面";break;case"F":a="功能"}return a}},{title:"排序",dataIndex:"sort",width:78,align:"center"},{title:"更新时间",dataIndex:"update_at",width:128,align:"center",customRender:({text:e})=>e?e.split(" ")[0]:"-"},{title:"备注",dataIndex:"remarks",width:128,ellipsis:!0},{title:"操作",dataIndex:"action",width:108,align:"center",fixed:"right"}],n=o({p_id:null,p_code:"根目录"});x("parentInfo",n);return{listdata:e,menuTree:a,columns:t,beforeListdataLoad:e=>{e.p_id=n.value.p_id},beforeSubmit:(e,a)=>{return t=this,n=null,l=function*(){try{yield a.menuForm.validate()}catch(t){return!1}return e.path||delete e.path,!0},new Promise(((e,a)=>{var o=e=>{try{d(l.next(e))}catch(t){a(t)}},s=e=>{try{d(l.throw(e))}catch(t){a(t)}},d=a=>a.done?e(a.value):Promise.resolve(a.value).then(o,s);d((l=l.apply(t,n)).next())}));var t,n,l},onMenuTreeSelect:a=>{const t=a.code,l=a.id;l!==n.value.p_id&&(n.value.p_id=l,n.value.p_code=t,e.value.keyword="",e.value.requestList())},onContextMenuClick:({menuKey:a,id:t,code:l})=>{"add"===a&&(n.value.p_id=t,n.value.p_code=l),e.value.handleAction[a]({id:t,code:l})},onRefreshAfter:()=>{n.value.p_id=null,n.value.p_code="根目录",a.value.getMenuAll()}}}}),A={class:"menu-wrap"},E={class:"aside m-left pd-17"},O={class:"aside m-right"};var D=a(P,[["render",function(e,a,t,n,l,o){const s=i("MenuTree"),d=i("ListData"),f=i("ZwScrollbar");return r(),c("div",A,[p("aside",E,[u(s,{ref:"menuTree",onSelect:e.onMenuTreeSelect,onContextMenuClick:e.onContextMenuClick},null,8,["onSelect","onContextMenuClick"])]),p("aside",O,[u(f,{"wrap-class":"pd-17"},{default:m((()=>[u(d,{ref:"listdata","row-key":"id",columns:e.columns,apis:"menus","modal-width":720,"dynamic-form":"MenuForm","before-listdata-load":e.beforeListdataLoad,"before-submit":e.beforeSubmit,"top-tools":{hiddenAdd:!0},onRefreshAfter:e.onRefreshAfter},null,8,["columns","before-listdata-load","before-submit","onRefreshAfter"])])),_:1})])])}],["__scopeId","data-v-309b34c8"]]);export{D as default};

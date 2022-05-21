import"./vue.f15e169e.js";import{_ as e,B as a,i as t}from"./index.8a912b13.js";import{_ as l}from"./lodash.3cabe671.js";import{d as o,k as n,v as d,l as i,_ as s,A as r,$ as c,a0 as u,a1 as m,m as p,H as b,z as f,U as v,J as _,a3 as h}from"./@vue.454ad140.js";import{Q as g}from"./@ant-design.0ba83ffb.js";import"./ant-design-vue.de3a7dcd.js";import"./@babel.29daae83.js";import"./regenerator-runtime.6bfb484e.js";import"./lodash-es.a53432ff.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.5d25c98b.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./dayjs.39b8ebe2.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./vuex.5db4980b.js";import"./axios.82d3905a.js";import"./vue-router.a66e1d8c.js";import"./nprogress.6eaf9b6f.js";import"./js-cookie.31874410.js";import"./clipboard.16092f5a.js";import"./@ctrl.fa7cbd46.js";const j=o({name:"brand",components:{BrandCascader:a},setup(){const e=n("context"),a=e.$store,o=d(!1),s=d(null),r=i((()=>a.state.machine.brands));t(r.value)&&a.dispatch("machine/get_brands_action");const c=d(!1),u=d(""),m=i((()=>!("view"===u.value||!u.value))),p=d({}),b=i((()=>p.value.b_id||Math.random().toFixed(10))),f=function(){o.value=!0,a.dispatch("machine/get_brands_action").finally((()=>{o.value=!1}))};return{columns:[{title:"ID",dataIndex:"b_id",width:60,align:"center"},{title:"名称",dataIndex:"b_name",width:260},{title:"排序",dataIndex:"b_sort",width:100,align:"center"},{title:"创建时间",dataIndex:"b_intime",width:192,align:"center"},{title:"更新时间",dataIndex:"b_utime",width:192,align:"center"},{title:"备注/描述",dataIndex:"b_intro",ellipsis:!0},{title:"操作",dataIndex:"action",align:"center",width:108,slots:{customRender:"action"}}],listdata:r,loading:o,visible:c,mode:u,canEdit:m,formkey:b,foo:p,handleAdd:()=>{p.value={},c.value=!0,u.value="add"},handleEdit:({record:e})=>{p.value=l.cloneDeep(e),c.value=!0,u.value="edit"},handleView:({record:e})=>{p.value=e,c.value=!0,u.value="view"},handleDel:({record:a})=>{e.$modal.confirm({title:"警告",content:"确定删除么？",icon:v(g),okText:"确定",okType:"danger",onOk:()=>new Promise((t=>{e.$http.delete("brand/"+a.b_id).then((a=>{f(),e.$message.open({content:a.message,type:a.success?"success":"error"}),t(a)}))}))})},handerBrandCascaderChange:e=>{t(e)||(p.value.b_pid=e[e.length-1],p.value.b_all_path=`${e.join("-")}-${p.value.b_id}`)},handleFormOk:()=>{let a="brand",t="post";"edit"===u.value&&(t="put",a+="/"+p.value.b_id,delete p.value.id,delete p.value.children),e.$http[t](a,p.value).then((a=>{f(),c.value=!1,e.$message.open({content:a.message,type:a.success?"success":"error"})})).finally((()=>{s.value.submiting=!1}))},queryAction:f,zwModal:s}}}),k=_(" 新增 "),w=h("i",null,null,-1);var y=e(j,[["render",function(e,a,t,l,o,n){const d=s("PlusOutlined"),i=s("a-button"),v=s("ReloadOutlined"),_=s("a-button-group"),h=s("a-col"),g=s("a-row"),j=s("EditFilled"),y=s("EyeOutlined"),C=s("DeleteTwoTone"),x=s("a-table"),I=s("BrandCascader"),E=s("a-form-item"),$=s("a-input"),U=s("a-textarea"),z=s("a-form"),O=s("ZwModal"),A=s("ZwScrollbar"),B=r("can-edit");return c(),u(A,{"wrap-class":"pd-17"},{default:m((()=>[p(g,{style:{"margin-bottom":"15px"}},{default:m((()=>[p(h,{span:18},{default:m((()=>[p(_,null,{default:m((()=>[p(i,{onClick:e.handleAdd},{icon:m((()=>[p(d)])),default:m((()=>[k])),_:1},8,["onClick"]),p(i,{onClick:e.queryAction},{icon:m((()=>[p(v)])),default:m((()=>[w])),_:1},8,["onClick"])])),_:1})])),_:1}),p(h,{span:6})])),_:1}),p(x,{"row-key":"b_id",columns:e.columns,"data-source":e.listdata,loading:e.loading,"indent-size":25,expandIconColumnIndex:1,bordered:"",pagination:!1,size:"small",style:{width:"100%"}},{action:m((a=>[p(_,null,{default:m((()=>[p(i,{type:"link",onClick:b((t=>e.handleEdit(a)),["stop"])},{icon:m((()=>[p(j)])),_:2},1032,["onClick"]),p(i,{type:"link",onClick:b((t=>e.handleView(a)),["stop"])},{icon:m((()=>[p(y,{style:{color:"#606266"}})])),_:2},1032,["onClick"]),p(i,{type:"link",onClick:b((t=>e.handleDel(a)),["stop"])},{icon:m((()=>[p(C,{twoToneColor:"#ff4d4f"})])),_:2},1032,["onClick"])])),_:2},1024)])),_:1},8,["columns","data-source","loading"]),p(O,{ref:"zwModal",visible:e.visible,"onUpdate:visible":a[4]||(a[4]=a=>e.visible=a),mode:e.mode,"onUpdate:mode":a[5]||(a[5]=a=>e.mode=a),title:"品牌信息编辑",width:520,"mask-closable":!1,onSubmit:e.handleFormOk},{default:m((()=>[(c(),u(z,{ref:"brandForm",model:e.foo,key:e.formkey,"label-col":{span:5},"wrapper-col":{span:16}},{default:m((()=>[p(E,{label:"上级名称"},{default:m((()=>[f(p(I,{brands:e.foo.b_p_path,"onUpdate:brands":a[0]||(a[0]=a=>e.foo.b_p_path=a),onChange:e.handerBrandCascaderChange},null,8,["brands","onChange"]),[[B,e.canEdit]])])),_:1}),p(E,{label:"品牌名称"},{default:m((()=>[f(p($,{value:e.foo.b_name,"onUpdate:value":a[1]||(a[1]=a=>e.foo.b_name=a),placeholder:"品牌名称"},null,8,["value"]),[[B,e.canEdit]])])),_:1}),p(E,{label:"排序"},{default:m((()=>[f(p($,{value:e.foo.b_sort,"onUpdate:value":a[2]||(a[2]=a=>e.foo.b_sort=a),valueModifiers:{number:!0},placeholder:"排序"},null,8,["value"]),[[B,e.canEdit]])])),_:1}),p(E,{label:"描述"},{default:m((()=>[f(p(U,{value:e.foo.b_intro,"onUpdate:value":a[3]||(a[3]=a=>e.foo.b_intro=a),placeholder:"描述"},null,8,["value"]),[[B,e.canEdit]])])),_:1})])),_:1},8,["model"]))])),_:1},8,["visible","mode","onSubmit"])])),_:1})}]]);export{y as default};

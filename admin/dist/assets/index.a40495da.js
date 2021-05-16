var e=Object.defineProperty,a=Object.prototype.hasOwnProperty,l=Object.getOwnPropertySymbols,t=Object.prototype.propertyIsEnumerable,o=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t,r=(e,r)=>{for(var n in r||(r={}))a.call(r,n)&&o(e,n,r[n]);if(l)for(var n of l(r))t.call(r,n)&&o(e,n,r[n]);return e};import{r as n,i as s,b as d,t as u,u as p,v as i,p as c,d as m,e as b,j as g,o as h,c as f,f as C,k as y,g as w,h as S}from"./index.a4f4e22b.js";import{u as v,r as D,a as _}from"./table.eec2a45c.js";const x={name:"UserTable",setup(){const e=n(null),a=p(),l=v();s((()=>{console.log("UserTable onMounted"),t()}));const t=async()=>{l.loading=!0;let e=await d.listUser(l.query);D(e,l),l.loading=!1};return r(r({},u(l)),{multipleTable:e,handleSelectionChange:e=>{l.multipleSelection=e},handleAdd:()=>{a.push({name:"user-form"})},handleEdit:e=>{a.push({name:"user-form",query:{id:e}})},handleDelete:async e=>{let a=await d.deleteExam(e);i.success(a.msg),l.query.page=1,await t()},handleDetail:e=>{a.push({name:"user-detail",query:{id:e}})},fetchTableData:t,changePage:e=>{l.query.page=e,t()},handleSortChange:e=>{_(e,l),t()},formatColumnClass:(e,a)=>e.class_text,formatColumnUploaded:(e,a)=>e.uploaded_text,formatColumnDownloaded:(e,a)=>e.downloaded_text})}},j=w();c("data-v-ae65dbc0");const k={class:"header"},P=S("Add");m();const U=j(((e,a,l,t,o,r)=>{const n=b("el-button"),s=b("el-table-column"),d=b("el-table"),u=b("el-pagination"),p=b("el-card"),i=g("loading");return h(),f(p,null,{header:j((()=>[C("div",k,[C(n,{type:"primary",size:"small",icon:"el-icon-plus",onClick:t.handleAdd},{default:j((()=>[P])),_:1},8,["onClick"])])])),default:j((()=>[y(C(d,{ref:"multipleTable",data:e.tableData,"tooltip-effect":"dark",onSortChange:t.handleSortChange,onSelectionChange:t.handleSelectionChange},{default:j((()=>[C(s,{type:"selection",width:"55"}),C(s,{prop:"id",label:"Id",width:"60",sortable:"custom"}),C(s,{prop:"username",label:"Username",sortable:"custom"}),C(s,{prop:"email",label:"Email"}),C(s,{prop:"class",label:"Class",sortable:"custom",formatter:t.formatColumnClass},null,8,["formatter"]),C(s,{prop:"uploaded",label:"Uploaded",sortable:"custom",formatter:t.formatColumnUploaded},null,8,["formatter"]),C(s,{prop:"downloaded",label:"Downloaded",sortable:"custom",formatter:t.formatColumnDownloaded},null,8,["formatter"]),C(s,{prop:"bonus",label:"Bonus"}),C(s,{prop:"status",label:"Status"}),C(s,{prop:"added",label:"Added"}),C(s,{label:"Action",width:"100"},{default:j((e=>[C("a",{style:{cursor:"pointer","margin-right":"10px"},onClick:a=>t.handleDetail(e.row.id)},"Detail",8,["onClick"])])),_:1})])),_:1},8,["data","onSortChange","onSelectionChange"]),[[i,e.loading]]),C(u,{background:"",layout:"prev, pager, next",total:e.total,"page-size":e.perPage,"current-page":e.currentPage,onCurrentChange:t.changePage},null,8,["total","page-size","current-page","onCurrentChange"])])),_:1})}));x.render=U,x.__scopeId="data-v-ae65dbc0";export default x;
var Ae=Object.defineProperty,Ee=Object.defineProperties;var Be=Object.getOwnPropertyDescriptors;var he=Object.getOwnPropertySymbols;var Le=Object.prototype.hasOwnProperty,Re=Object.prototype.propertyIsEnumerable;var se=(n,e,s)=>e in n?Ae(n,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[e]=s,g=(n,e)=>{for(var s in e||(e={}))Le.call(e,s)&&se(n,s,e[s]);if(he)for(var s of he(e))Re.call(e,s)&&se(n,s,e[s]);return n},W=(n,e)=>Ee(n,Be(e));var T=(n,e,s)=>(se(n,typeof e!="symbol"?e+"":e,s),s);import{s as Ue,j as t,O as ne,d as Ie,a as Oe,b as Fe,c as Me,u as z,L as E,e as me,A as He,C as re,f as o,T as Ne,g as l,B as h,h as B,I as fe,i as _e,k as Pe,D as je,l as Ge,r as i,m as C,n as K,o as D,p as ue,F as $,q as xe,M as ve,t as V,v as q,w as X,S as ye,x as F,y as J,z as w,E as ke,G as ge,H as ze,J as Ke,K as Ve,R as qe,N as R,P as Xe,Q as Je,U as Qe}from"./vendor.12fa45d2.js";const Ye=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))u(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&u(c)}).observe(document,{childList:!0,subtree:!0});function s(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerpolicy&&(r.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?r.credentials="include":a.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function u(a){if(a.ep)return;a.ep=!0;const r=s(a);fetch(a.href,r)}};Ye();const Ze=Ue("main")({flexGrow:1,margin:10}),et=()=>t(Ze,{children:t(ne,{})}),Q="/";var we=[{label:"\u0413\u043B\u0430\u0432\u043D\u0430\u044F",path:`${Q}`,icon:t(Ie,{color:"primary"})},{label:"\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B",path:`${Q}tasks`,icon:t(Oe,{color:"primary"})},{label:"\u0417\u0430\u0434\u0430\u0447\u0438",path:`${Q}works`,icon:t(Fe,{color:"primary"})},{label:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",path:`${Q}settings`,icon:t(Me,{color:"primary"})}];const Te="Pulsar",tt=({toggleOpen:n})=>{const e=z(),s=we.map(u=>t(E,{button:!0,onClick:()=>e(u.path,{replace:!0}),children:t(me,{primary:u.label})},u.label));return t(He,{position:"fixed",children:t(re,{maxWidth:"xl",children:o(Ne,{disableGutters:!0,children:[t(l,{variant:"h6",noWrap:!0,component:"h1",sx:M.logoSm,children:Te}),t(h,{sx:M.menu,children:t(B,{component:"nav",sx:M.nav,children:s})}),t(h,{sx:M.icon,children:t(fe,{size:"large","aria-label":"open menu","aria-controls":"menu-appbar","aria-haspopup":"true",color:"inherit",onClick:n,sx:M.iconButton,children:t(_e,{})})}),t(l,{variant:"h6",noWrap:!0,component:"h1",sx:M.logoXs,children:Te})]})})})},M={logoSm:{mr:2,display:{xs:"none",sm:"flex"}},logoXs:{flexGrow:1,justifyContent:"flex-end",display:{xs:"flex",sm:"none"}},menu:{flexGrow:1,justifyContent:"flex-end",display:{xs:"none",sm:"flex"}},nav:{display:"flex",flexDirection:"row"},iconButton:{padding:"20px"},icon:{display:{xs:"flex",sm:"none"}}},st=({open:n,toggleOpen:e})=>{const s=z(),u=r=>{s(r,{replace:!0}),e()},a=we.map(r=>o(E,{button:!0,onClick:()=>u(r.path),children:[t(Pe,{children:r.icon}),t(me,{primary:r.label})]},r.label));return o(je,{sx:Ce.drawer,open:n,onClose:e,children:[o(h,{sx:{display:{xs:"flex",sm:"none"}},children:[t(l,{children:"Pulsar"}),t(fe,{size:"large","aria-label":"open menu","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:e,sx:Ce.closeButton,children:t(Ge,{})})]}),t(B,{component:"nav",children:a})]})},Ce={drawer:{width:300,"& .MuiDrawer-paper":{width:300,boxSizing:"border-box",top:"auto",padding:"10px 10px"}},closeButton:{color:"text.secondary"}},nt=n=>{const[e,s]=i.exports.useState(!!n);return[e,()=>{s(()=>!e)}]},rt=({children:n})=>{const[e,s]=nt(!1);return o(re,{maxWidth:"100vw",disableGutters:!0,sx:Se.container,children:[t(tt,{toggleOpen:s}),o(re,{sx:Se.content,disableGutters:!0,children:[t(st,{open:e,toggleOpen:s}),n]})]})},Se={container:{display:"flex",flexDirection:"column",minHeight:"100vh"},content:{display:"flex",flexGrow:1,mt:8}},ut=`${location.protocol}//${location.hostname}`;class at{async fetch(){return(await C.get(`${ut}/dictonary`)).data}}var ot=new at;const it=ot;class lt{constructor(){T(this,"actionTypes",[]);T(this,"workTypes",[]);T(this,"statusTypes",[]);T(this,"WORK",{});T(this,"STATUS",{});K(this),this.fetch()}fill(e){this.actionTypes=e.actionTypes,this.workTypes=e.workTypes,this.statusTypes=e.statusTypes,this.WORK=e.WORK,this.STATUS=e.STATUS}async fetch(){const e=await it.fetch();this.fill(e)}getStatus(e){return this.statusTypes.find(s=>s.id===e)}}const f=new lt,ae=`${location.protocol}//${location.hostname}`;class ct{async fetch(){return(await C.get(`${ae}/settings`)).data}async updateServer(){setTimeout(()=>{window.close()},2e3),await C.get(`${ae}/settings/updateServer`)}async shutdown(){setTimeout(()=>{window.close()},2e3),await C.get(`${ae}/settings/shutdown`)}}var dt=new ct;const oe=dt;class pt{constructor(){T(this,"settingList",[]);K(this)}fill(e){this.settingList=e}async fetch(){const e=await oe.fetch();this.fill(e)}async updateServer(){await oe.updateServer()}async shutdown(){await oe.shutdown()}}const Y=new pt,_=`${location.protocol}//${location.hostname}`;class ht{async fetch(){return(await C.get(`${_}/tasks`)).data}async fetchById(e){return(await C.get(`${_}/tasks/${e}`)).data}async create(e){return(await C.post(`${_}/tasks`,e)).data}async remove(e){return(await C.delete(`${_}/tasks/${e}`)).data}async update(e){return await C.put(`${_}/tasks/${e.id}`,e)}}var mt=new ht;const P=mt;class ft{constructor(){T(this,"taskList",[]);K(this)}fill(e){this.taskList=e}async remove(e){const s=await P.remove(e.id);if(s.removed===1){const u=this.taskList.filter(a=>a.id!==e.id);this.fill(u)}return s.removed}async create(e){const s=await P.create(e);this.fill([...this.taskList,s])}async update(e){await P.update(e);let s=this.taskList.findIndex(u=>u.id===e.id);this.taskList[s]=g({},e)}async fetch(){this.fill(await P.fetch())}async fetchById(e){return await P.fetchById(e)}}const U=new ft,j=`${location.protocol}//${location.hostname}`;class xt{async fetch(){return(await C.get(`${j}/works`)).data}async fetchCurrentWork(){return(await C.get(`${j}/works/current-work`)).data}async create(e){return(await C.post(`${j}/works`,e)).data}async remove(e){return(await C.delete(`${j}/works/${e}`)).data}async update(e){return await C.put(`${j}/works/${e.id}`,e)}}var vt=new xt;const be=[{id:1,type:{id:1,name:"\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430"},status:{id:1,name:"\u043E\u0436\u0438\u0434\u0430\u043D\u0438\u0435"},item:{id:2,name:"\u0412\u0442\u043E\u0440\u0430\u044F \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430",description:"\u041A\u0440\u0430\u0442\u043A\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0432\u0442\u043E\u0440\u043E\u0439 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B",actions:[{id:1,type:{id:1,name:"\u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0430\u0437\u0438\u043C\u0443\u0442\u0430"},value1:120.9,value2:0,value3:0},{id:2,type:{id:3,name:"\u043E\u0436\u0438\u0434\u0430\u043D\u0438\u0435"},value1:200,value2:0,value3:0},{id:3,type:{id:4,name:"\u0440\u0430\u0437\u0440\u044F\u0434"},value1:3,value2:2.5,value3:5}]},startTime:1645191e6,details:[]},{id:2,type:{id:1,name:"\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430"},status:{id:1,name:"\u043E\u0436\u0438\u0434\u0430\u043D\u0438\u0435"},item:{id:2,name:"\u0412\u0442\u043E\u0440\u0430\u044F \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430",description:"\u041A\u0440\u0430\u0442\u043A\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0432\u0442\u043E\u0440\u043E\u0439 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B",actions:[{id:1,type:{id:1,name:"\u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0430\u0437\u0438\u043C\u0443\u0442\u0430"},value1:120.9,value2:0,value3:0},{id:2,type:{id:3,name:"\u043E\u0436\u0438\u0434\u0430\u043D\u0438\u0435"},value1:200,value2:0,value3:0},{id:3,type:{id:4,name:"\u0440\u0430\u0437\u0440\u044F\u0434"},value1:3,value2:2.5,value3:5}]},startTime:16457166e5,details:[]}];class yt{constructor(){T(this,"currentWork",null);T(this,"updateWork",null)}setUpdaters(e){this.updateWork=e}createCurrentWork(e){}async startWork(e){this.currentWork=e;const s=await f.getStatus(f.STATUS.STATUS_RUN);this.currentWork=W(g({},this.currentWork),{status:s}),await this.updateWork(this.currentWork),console.log("status ",f.STATUS.STATUS_RUN)}async stopWork(){const e=await f.getStatus(f.STATUS.STATUS_DONE);this.currentWork=W(g({},this.currentWork),{status:e}),await this.updateWork(this.currentWork),this.currentWork=null,console.log("stop")}}var Z=new yt;let We=be.length+1;class kt{constructor(){T(this,"works",be);T(this,"timers",[]);T(this,"update",async e=>{const s=this.works.findIndex(u=>u.id===e.id);this.works[s]=g({},e)});Z.setUpdaters(this.update),this.fillTimers()}createTimer(e){const s=new Date().getTime(),u=e.startTime;if(!u)return null;const a=u-s,r=a<0?null:setTimeout(()=>{console.log("timer run",e.id),Z.startWork(e),this.removeTimer(e.id),clearTimeout(r)},a);return r}removeTimer(e){const s=this.timers.find(u=>u.workId===e);s&&(clearTimeout(s),this.timers=this.timers.filter(u=>u.workId===e))}fillTimers(){this.timers.forEach(e=>clearTimeout(e.timer)),this.timers=[],this.works.forEach(e=>{const s=this.createTimer(e);s&&this.timers.push({timerId:s,workId:e.id})})}async fetch(){return this.works}async create(e){We++;const s=g({id:We},e);return this.works.push(s),this.createTimer(s)||Z.startWork(s),s}async remove(e){return this.works=this.works.filter(s=>s.id!==e),Z.stopWork(),this.removeTimer(e),{removed:1,error:""}}}new kt;const ee=vt;class gt{constructor(){T(this,"workList",[]);T(this,"currentWork",null);K(this)}fill(e){this.workList=e}fillCurrentWork(e){e.length>0?this.currentWork=e[0]:this.currentWork=null}async fetch(){const e=await ee.fetch();this.fill(e)}async fetchCurrentWork(){const e=await ee.fetchCurrentWork();this.fillCurrentWork(e)}async create(e){const s=await ee.create(e);this.fill([...this.workList,s])}async remove(e){const s=await ee.remove(e.id);if(s.removed===1){const u=this.workList.filter(a=>a.id!==e.id);this.fill(u)}return s.removed}}const S=new gt,wt=()=>{var a;i.exports.useEffect(()=>{S.fetch()},[]);const n=S.workList.filter(r=>r.status.id===f.STATUS.STATUS_WAIT).map(r=>o(E,{children:[r.item.name," ",ue(new Date(r.startTime),"dd-MM-yyyy - HH:mm")]},r.id)),e=S.workList.filter(r=>r.status.id===f.STATUS.STATUS_RUN).map(r=>t(E,{children:r.item.name},r.id));let s=null;const u=(a=S.currentWork)==null?void 0:a.work;return u&&(s=u.details.filter(r=>r.status.id===f.STATUS.STATUS_RUN).map(r=>t(E,{children:r.type.name},r.id))),o(h,{sx:{borderWidth:"1px",borderStyle:"solid",borderColor:"black",borderRadius:"5px",minHeight:"98%",p:.5,m:.5},children:[t(l,{children:"\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u0437\u0430\u0434\u0430\u043D\u0438\u044F\u0445"}),t(l,{variant:"span",paragraph:!0,children:"\u0417\u0430\u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435"}),t(B,{children:n}),t(l,{variant:"span",children:"\u0422\u0435\u043A\u0443\u0449\u0430\u044F \u0437\u0430\u0434\u0430\u0447\u0430 "}),e.length===0&&t(l,{variant:"span",children:"\u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442"}),e.length!==0&&t(B,{children:e}),o(l,{variant:"span",paragraph:!0,children:["\u0422\u0435\u043A\u0443\u0449\u0435\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435"," "]}),s&&t(B,{children:s})]})};var Tt=D(wt);const Ct=()=>t(h,{sx:{borderWidth:"1px",borderStyle:"solid",borderColor:"black",borderRadius:"5px",minHeight:"98%",p:.5,m:.5},children:t(l,{children:"\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E\u0431 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0435"})});var St=D(Ct);const bt=()=>t($,{children:o(h,{sx:{bgcolor:"#f9f9f9",padding:1,minHeight:"98%",display:"flex",flexWrap:"wrap",justifyContent:"center"},children:[t(h,{sx:{padding:1,width:{xs:"100%",sm:"45%"},minHeight:"95%"},children:t(Tt,{})}),t(h,{sx:{padding:1,width:{xs:"100%",sm:"45%"},minHeight:"95%"},children:t(St,{})})]})}),Wt=()=>t($,{children:t(ne,{})}),Dt=()=>t($,{children:t(ne,{})}),ie=n=>{const{open:e,onCloseDialog:s,children:u}=n;return t(xe,{open:e,onClose:s,sx:{"& .MuiPaper-root":{width:{xs:"98%",sm:"50%"}}},children:u})},$t=({task:n,onSubmit:e,onCancel:s})=>{const u=i.exports.useMemo(()=>f.workTypes.find(p=>p.id===f.WORK.WORK_PROGRAMM),[]),a=i.exports.useMemo(()=>f.statusTypes.find(p=>p.id===f.STATUS.STATUS_RUN),[]),r=i.exports.useMemo(()=>({type:u,status:a,item:n,startTime:null,details:[]}),[]),[c,d]=i.exports.useState(r),[x,v]=i.exports.useState(a),[y,A]=i.exports.useState(ue(new Date,"yyyy-MM-dd'T'HH:mm")),L=p=>{const O=ke(ge(p.target.value));A(p.target.value),d(W(g({},c),{startTime:O}))},b=p=>{const O=p.target.value;let G=null;v(O),O.id===f.STATUS.STATUS_WAIT&&(G=ke(ge(y))),d(W(g({},c),{status:O,startTime:G}))},m=i.exports.useMemo(()=>f.statusTypes.map(p=>(p.id===f.STATUS.STATUS_RUN||p.id===f.STATUS.STATUS_WAIT)&&t(ve,{value:p,children:p.name},p.id)),[]);return o($,{children:[t(V,{children:t(l,{children:"\u0417\u0430\u0434\u0430\u043D\u0438\u0435"})}),t(q,{children:o(h,{sx:{display:"flex",flexDirection:"column"},children:[t(X,{fullWidth:!0,sx:At.gutters,children:t(ye,{autoFocus:!0,value:x,onChange:b,children:m})}),x.id===f.STATUS.STATUS_WAIT&&t(X,{children:t(F,{label:"\u0414\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043C\u044F",type:"datetime-local",value:y,onChange:L,InputLabelProps:{shrink:!0}})})]})}),o(J,{children:[t(w,{onClick:s,children:"\u041E\u0442\u043C\u0435\u043D\u0430"}),t(w,{onClick:()=>e(c),children:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"})]})]})},At={gutters:{my:1}};var Et=D($t);const Bt=({task:n,onSelect:e,onRemove:s})=>{const[u,a]=i.exports.useState(!1),r=()=>{a(!0)},c=()=>{a(!1)},d=x=>{S.create(x),a(!1)};return o($,{children:[o(E,{sx:{color:"text.primary",mb:.5,p:.2,width:"auto"},children:[o(h,{sx:{display:"flex",bgcolor:"#ffffff",width:"80%",border:"1px solid #001e3c",borderRadius:"2px",cursor:"pointer",flexWrap:"wrap","&:hover":{bgcolor:"#f1f1f1",color:"text.secondary"}},onClick:()=>e(n.id),children:[t(l,{variant:"p",component:"span",sx:{width:{xs:"100%",sm:"40%"},padding:1},children:n.name}),t(l,{variant:"p",component:"span",sx:{padding:1,fontSize:"caption.fontSize"},children:n.description})]}),o(h,{sx:{display:"flex",flexWrap:{xs:"wrap",sm:"nowrap"},flexGrow:1,justifyContent:"center",ml:1},children:[t(w,{variant:"outlined",size:"small",sx:{mr:{xs:0,sm:.5},mb:{xs:.5,sm:0}},onClick:r,children:"\u0437\u0430\u043F\u0443\u0441\u043A"}),t(w,{variant:"outlined",size:"small",onClick:()=>s(n),children:"\u0443\u0434\u0430\u043B\u0438\u0442\u044C"})]})]}),t(ie,{open:u,onCloseDialog:c,children:t(Et,{onCancel:c,onSubmit:d,task:n})})]})};var Lt=D(Bt);const le=({open:n,children:e,onOk:s,onCancel:u})=>t(h,{sx:{display:"flex",justifyContent:"space-between",width:"80%",flexWrap:"wrap"},children:o(xe,{open:n,onClose:u,children:[t(V,{}),t(q,{children:e}),o(J,{children:[t(w,{onClick:u,children:"\u041E\u0442\u043C\u0435\u043D\u0430"}),t(w,{onClick:s,children:"Ok"})]})]})}),Rt=n=>{const[e,s]=i.exports.useState(!1),[u,a]=i.exports.useState("");return[e,u,c=>{s(c),a(c?n:"")}]},Ut=({open:n,onAddTask:e,onCloseDialog:s})=>{const[u,a,r]=Rt("\u0418\u043C\u044F \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C."),[c,d]=i.exports.useState(""),[x,v]=i.exports.useState(""),y=b=>{v(b.target.value)},A=b=>{const m=b.target.value;r(!m),d(b.target.value)},L=()=>{if(!c){r(!0);return}e({name:c,description:x})};return i.exports.useEffect(()=>{n&&(d(""),r(!1),v(""))},[n]),o($,{children:[t(V,{children:t(l,{children:"\u041D\u043E\u0432\u0430\u044F \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430"})}),t(q,{children:o(h,{sx:{display:"flex",flexDirection:"column"},children:[t(F,{autoFocus:!0,error:u,label:"\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435",value:c,helperText:a,variant:"filled",onChange:A,sx:{mb:1}}),t(F,{label:"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",value:x,variant:"filled",multiline:!0,maxRows:4,onChange:y})]})}),o(J,{children:[t(w,{onClick:s,children:"\u041E\u0442\u043C\u0435\u043D\u0430"}),t(w,{onClick:L,children:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C"})]})]})},It="/",Ot=()=>{const n=z(),[e,s]=i.exports.useState(!1),[u,a]=i.exports.useState(!1),[r,c]=i.exports.useState(null),d=i.exports.useCallback(p=>{n(`${It}tasks/${p}`)},[]);i.exports.useEffect(()=>U.fetch(),[]);const x=i.exports.useCallback(()=>{s(!1)},[]),v=i.exports.useCallback(()=>{s(!0)},[]),y=p=>{c(p),a(!0)},A=()=>{r&&U.remove(r).then(()=>{c(null)}),a(!1)},L=()=>{c(null),a(!1)},b=i.exports.useCallback(p=>{U.create(W(g({},p),{actions:[]})),x()},[]),m=i.exports.useMemo(()=>U.taskList.map(p=>t(Lt,{task:p,onSelect:d,onRemove:y},p.id)),[U.taskList]);return o(h,{sx:{bgcolor:"#f9f9f9",padding:1,minHeight:"98%"},children:[o(h,{sx:{display:"flex",justifyContent:"space-between",width:"80%",flexWrap:"wrap"},children:[t(l,{variant:"h5",children:"\u0421\u043F\u0438\u0441\u043E\u043A \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C"}),t(w,{variant:"contained",color:"primary",onClick:v,children:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C"})]}),t(B,{children:m}),t(ie,{open:e,onCloseDialog:x,children:t(Ut,{open:e,onAddTask:b,onCloseDialog:x})}),o(le,{open:u,onOk:A,onCancel:L,children:[t(l,{sx:{mb:2},children:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u0443\u044E \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0443?"}),t(l,{align:"center",sx:{fontWeight:"bold"},children:r==null?void 0:r.name})]})]})};var Ft=D(Ot);const Mt=({work:n,onSelect:e,onRemove:s})=>o(E,{sx:{color:"text.primary",mb:.5,p:.2,width:"auto"},children:[o(h,{sx:{display:"flex",bgcolor:"#ffffff",width:"80%",border:"1px solid #001e3c",borderRadius:"2px",cursor:"pointer",flexWrap:"wrap","&:hover":{bgcolor:"#f1f1f1",color:"text.secondary"}},children:[t(l,{variant:"p",component:"span",sx:{width:{xs:"100%",sm:"20%"},padding:1},children:n.status.name}),t(l,{variant:"p",component:"span",sx:{width:{xs:"100%",sm:"40%"},padding:1},children:n.item.name}),n.startTime&&t(l,{variant:"p",component:"span",sx:{width:{xs:"100%",sm:"20%"},padding:1},children:ue(new Date(n.startTime),"dd-MM-yyyy - HH:mm")})]}),t(h,{sx:{display:"flex",flexWrap:{xs:"wrap",sm:"nowrap"},flexGrow:1,justifyContent:"center",ml:1},children:t(w,{variant:"outlined",size:"small",onClick:()=>s(n),children:"\u0443\u0434\u0430\u043B\u0438\u0442\u044C"})})]});var Ht=D(Mt);const Nt=()=>{var x,v;z();const[n,e]=i.exports.useState(!1),[s,u]=i.exports.useState(null);i.exports.useEffect(()=>S.fetch(),[]);const a=y=>{u(y),e(!0)},r=()=>{s&&S.remove(s).then(()=>{u(null)}),e(!1)},c=()=>{u(null),e(!1)},d=i.exports.useMemo(()=>S.workList.map(y=>t(Ht,{work:y,onRemove:a},y.id)),[S.workList]);return o(h,{sx:{bgcolor:"#f9f9f9",padding:1,minHeight:"98%"},children:[t(h,{sx:{display:"flex",justifyContent:"space-between",width:"80%",flexWrap:"wrap"},children:t(l,{variant:"h5",children:"\u0421\u043F\u0438\u0441\u043E\u043A \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044B\u0445 \u0437\u0430\u0434\u0430\u0447"})}),t(B,{children:d}),o(le,{open:n,onOk:r,onCancel:c,children:[t(l,{sx:{mb:2},children:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u0443\u044E \u0437\u0430\u0434\u0430\u0447\u0443?"}),o(l,{align:"center",sx:{fontWeight:"bold"},children:[(x=s==null?void 0:s.status)==null?void 0:x.name," ",(v=s==null?void 0:s.item)==null?void 0:v.name]})]})]})};var _t=D(Nt);const Pt=()=>{var s;i.exports.useEffect(()=>{S.fetchCurrentWork()},[]);let n=null;const e=(s=S.currentWork)==null?void 0:s.work;return e&&(n=e.details.map(u=>o(E,{children:[u.type.name," ",u.status.name]},u.id))),o($,{children:[t(l,{variant:"h6",children:"\u0422\u0435\u043A\u0443\u0449\u0430\u044F \u0437\u0430\u0434\u0430\u0447\u0430"}),t(B,{children:n})]})};var jt=D(Pt);const Gt=({action:n,onRemove:e,onEdit:s})=>o(E,{sx:{color:"text.primary",mb:.5,p:.2,width:"auto"},children:[o(h,{sx:{display:"flex",bgcolor:"#ffffff",width:"80%",border:"1px solid #001e3c",borderRadius:"2px",flexWrap:"wrap",cursor:"pointer","&:hover":{bgcolor:"#f1f1f1",color:"text.secondary"}},onClick:()=>s(n),children:[t(l,{variant:"p",component:"span",sx:{width:{xs:"100%",sm:"40%"},padding:1},children:n.type.name}),o(l,{variant:"p",component:"span",sx:{padding:1},children:[n.type.id===1&&o(l,{children:["\u0430\u0437\u0438\u043C\u0443\u0442 ",t("span",{children:n.value1})," \u0433\u0440\u0430\u0434\u0443\u0441\u043E\u0432"]}),n.type.id===2&&o(l,{children:["\u043D\u0430\u043A\u043B\u043E\u043D ",t("span",{children:n.value1})," \u0433\u0440\u0430\u0434\u0443\u0441\u043E\u0432"]}),n.type.id===3&&o(l,{children:["\u043E\u0436\u0438\u0434\u0430\u043D\u0438\u0435 ",t("span",{children:n.value1})," \u0441\u0435\u043A"]}),n.type.id===4&&o(l,{children:["\u0440\u0430\u0437\u0440\u044F\u0434 \u043A\u043E\u043B-\u0432\u043E ",t("span",{children:n.value1})," \u0432\u0440\u0435\u043C\u044F\xA0",t("span",{children:n.value2})," \u0441\u0435\u043A \u0438\u043D\u0442\u0435\u0440\u0432\u0430\u043B\xA0",t("span",{children:n.value3})," \u0441\u0435\u043A"]})]})]}),t(h,{sx:{display:"flex",flexWrap:{xs:"wrap",sm:"nowrap"},flexGrow:1,justifyContent:"center",ml:1},children:t(w,{variant:"outlined",size:"small",onClick:()=>e(n),children:"\u0443\u0434\u0430\u043B\u0438\u0442\u044C"})})]});var zt=D(Gt);const Kt=({action:n,onSubmit:e,onCloseDialog:s})=>{const u=i.exports.useMemo(()=>({id:f.actionTypes[0].id,name:f.actionTypes[0].name}),[]),a=i.exports.useMemo(()=>({id:null,type:u,value1:0,value2:0,value3:0}),[]),[r,c]=i.exports.useState(n||a),[d,x]=i.exports.useState(()=>f.actionTypes.find(m=>m.id===r.type.id)),v=m=>{c(()=>W(g({},r),{value1:+m.target.value}))},y=m=>{c(()=>W(g({},r),{value2:+m.target.value}))},A=m=>{c(()=>W(g({},r),{value3:+m.target.value}))},L=m=>{const p=m.target.value;x(p),c(W(g({},r),{type:{id:p.id,name:p.name},value1:1,value2:0,value3:0}))},b=i.exports.useMemo(()=>f.actionTypes.map(m=>t(ve,{value:m,children:m.name},m.id)),[]);return o($,{children:[t(V,{children:t(l,{children:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435"})}),t(q,{children:o(h,{sx:{display:"flex",flexDirection:"column"},children:[t(X,{fullWidth:!0,sx:te.gutters,children:t(ye,{autoFocus:!0,value:d,onChange:L,children:b})}),t(X,{fullWidth:!0,children:t(F,{label:d.value1.label,value:r.value1,onChange:v,type:"number",inputProps:{max:d.value1.max,min:d.value1.min,step:d.value1.step},sx:te.gutters,InputLabelProps:{shrink:!0}})}),d.id===4&&t(F,{label:d.value2.label,value:r.value2,onChange:y,type:"number",inputProps:{max:d.value2.max,min:d.value2.min,step:d.value2.step},sx:te.gutters,InputLabelProps:{shrink:!0}}),d.id===4&&t(F,{label:d.value3.label,value:r.value3,onChange:A,type:"number",inputProps:{max:d.value3.max,min:d.value3.min,step:d.value3.step},sx:te.gutters,InputLabelProps:{shrink:!0}})]})}),o(J,{children:[t(w,{onClick:s,children:"\u041E\u0442\u043C\u0435\u043D\u0430"}),t(w,{onClick:()=>e(r),children:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"})]})]})},te={gutters:{my:1}};var Vt=D(Kt);const qt=()=>{var de;const n=ze(),[e,s]=i.exports.useState(!1),[u,a]=i.exports.useState(null),[r,c]=i.exports.useState({}),[d,x]=i.exports.useState(!1),[v,y]=i.exports.useState(null);i.exports.useEffect(()=>{U.fetchById(n.id).then(k=>c(k))},[]);const A=i.exports.useCallback(()=>{s(!1)},[]),L=i.exports.useCallback(k=>{a(k),s(!0)},[]),b=i.exports.useCallback(()=>{a(null),s(!0)},[]),m=k=>{y(k),x(!0)},p=()=>{if(v){const k=r.actions.filter(N=>v.id!==N.id),H=W(g({},r),{actions:k});c(H),U.update(H).then(()=>{y(null)})}x(!1)},O=()=>{y(null),x(!1)},G=k=>{k.id||(k.id=Ke());const H=r.actions.findIndex($e=>$e.id===k.id),N=[...r.actions];H===-1?N.push(k):N[H]=g({},k);const pe=W(g({},r),{actions:[...N]});c(pe),s(!1),U.update(pe)},De=Array.isArray(r.actions)?r.actions.map(k=>t(zt,{action:k,onRemove:m,onEdit:L},k.id)):null;return o(h,{sx:{bgcolor:"#f9f9f9",padding:1,minHeight:"98%"},children:[o(h,{sx:{display:"flex",justifyContent:"space-between",width:"80%",flexWrap:"wrap"},children:[t(l,{variant:"h5",children:"\u0421\u043E\u0441\u0442\u0430\u0432 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B"}),t(w,{variant:"contained",color:"primary",onClick:b,children:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C"})]}),t(B,{children:De}),t(ie,{open:e,onCloseDialog:A,children:t(Vt,{open:e,onCloseDialog:A,onSubmit:G,action:u})}),o(le,{open:d,onOk:p,onCancel:O,children:[t(l,{sx:{mb:2},children:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435?"}),t(l,{align:"center",sx:{fontWeight:"bold"},children:(de=v==null?void 0:v.type)==null?void 0:de.name})]})]})};var Xt=D(qt);const Jt=()=>{i.exports.useEffect(()=>{Y.fetch()},[]);const n=Y.settingList.map(e=>t(E,{children:e.name},e.id));return o($,{children:[t(B,{children:n}),t(w,{onClick:Y.updateServer,children:"\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435"}),t(w,{onClick:Y.shutdown,children:"\u0412\u044B\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E"})]})};var Qt=D(Jt);const Yt=()=>o($,{children:[t(l,{variant:"h6",children:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438"}),t(Qt,{})]}),I="/",Zt=({routes:n})=>t($,{children:t(Ve,{children:t(rt,{children:t(qe,{children:o(R,{path:`${I}`,element:t(et,{}),children:[t(R,{path:`${I}`,element:t(bt,{})}),o(R,{path:`${I}tasks`,element:t(Wt,{}),children:[t(R,{path:`${I}tasks`,element:t(Ft,{})}),t(R,{path:`${I}tasks:id`,element:t(Xt,{})})]}),o(R,{path:`${I}works`,element:t(Dt,{}),children:[t(R,{path:`${I}works`,element:t(_t,{})}),t(R,{path:"/works/current-work",element:t(jt,{})})]}),t(R,{path:`${I}settings`,element:t(Yt,{})})]})})})})});const ce=Xe(`ws://${location.hostname}`);ce.on("connect",()=>{console.log("socket ",ce.connected)});ce.on("workStatusUpdate",n=>{S.fetch(),S.fetchCurrentWork()});Je.render(t(Qe.StrictMode,{children:t(Zt,{})}),document.getElementById("root"));

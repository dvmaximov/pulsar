var Le=Object.defineProperty,Fe=Object.defineProperties;var Oe=Object.getOwnPropertyDescriptors;var ye=Object.getOwnPropertySymbols;var Re=Object.prototype.hasOwnProperty,Ue=Object.prototype.propertyIsEnumerable;var he=(s,u,t)=>u in s?Le(s,u,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[u]=t,y=(s,u)=>{for(var t in u||(u={}))Re.call(u,t)&&he(s,t,u[t]);if(ye)for(var t of ye(u))Ue.call(u,t)&&he(s,t,u[t]);return s},b=(s,u)=>Fe(s,Oe(u));var S=(s,u,t)=>(he(s,typeof u!="symbol"?u+"":u,t),t);import{s as Ne,j as e,O as me,d as Me,a as _e,b as Pe,c as ze,u as V,L as M,e as Ce,A as He,C as fe,f as r,T as je,g as d,B as h,h as R,I as ge,i as Ge,k as Ve,D as Ke,l as Xe,r as o,m as T,n as ie,o as ee,p as F,q as f,t as ke,F as A,v as X,w as Z,x as q,y as z,z as J,E as xe,M as we,S as Te,G as Ze,H as Se,J as Ee,K as qe,N as Je,P as Qe,Q as Ye,R as eu,U as uu,V as tu,W as _,X as su,Y as nu,Z as ru,_ as iu,$ as au,a0 as ou,a1 as lu,a2 as cu}from"./vendor.32e403ff.js";const du=function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(a){if(a.ep)return;a.ep=!0;const i=t(a);fetch(a.href,i)}};du();const pu=Ne("main")({flexGrow:1,margin:10}),hu=()=>e(pu,{children:e(me,{})}),ae="/";var be=[{label:"\u0413\u043B\u0430\u0432\u043D\u0430\u044F",path:`${ae}`,icon:e(Me,{color:"primary"})},{label:"\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B",path:`${ae}tasks`,icon:e(_e,{color:"primary"})},{label:"\u0417\u0430\u0434\u0430\u0447\u0438",path:`${ae}works`,icon:e(Pe,{color:"primary"})},{label:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",path:`${ae}settings`,icon:e(ze,{color:"primary"})}];const De="Pulsar",mu=({toggleOpen:s})=>{const u=V(),t=be.map(n=>e(M,{button:!0,onClick:()=>u(n.path,{replace:!0}),children:e(Ce,{primary:n.label})},n.label));return e(He,{position:"fixed",children:e(fe,{maxWidth:"xl",children:r(je,{disableGutters:!0,children:[e(d,{variant:"h6",noWrap:!0,component:"h1",sx:Q.logoSm,children:De}),e(h,{sx:Q.menu,children:e(R,{component:"nav",sx:Q.nav,children:t})}),e(h,{sx:Q.icon,children:e(ge,{size:"large","aria-label":"open menu","aria-controls":"menu-appbar","aria-haspopup":"true",color:"inherit",onClick:s,sx:Q.iconButton,children:e(Ge,{})})}),e(d,{variant:"h6",noWrap:!0,component:"h1",sx:Q.logoXs,children:De})]})})})},Q={logoSm:{mr:2,display:{xs:"none",sm:"flex"}},logoXs:{flexGrow:1,justifyContent:"flex-end",display:{xs:"flex",sm:"none"}},menu:{flexGrow:1,justifyContent:"flex-end",display:{xs:"none",sm:"flex"}},nav:{display:"flex",flexDirection:"row"},iconButton:{padding:"20px"},icon:{display:{xs:"flex",sm:"none"}}},fu=({open:s,toggleOpen:u})=>{const t=V(),n=i=>{t(i,{replace:!0}),u()},a=be.map(i=>r(M,{button:!0,onClick:()=>n(i.path),children:[e(Ve,{children:i.icon}),e(Ce,{primary:i.label})]},i.label));return r(Ke,{sx:Ae.drawer,open:s,onClose:u,children:[r(h,{sx:{display:{xs:"flex",sm:"none"}},children:[e(d,{children:"Pulsar"}),e(ge,{size:"large","aria-label":"open menu","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:u,sx:Ae.closeButton,children:e(Xe,{})})]}),e(R,{component:"nav",children:a})]})},Ae={drawer:{width:300,"& .MuiDrawer-paper":{width:300,boxSizing:"border-box",top:"auto",padding:"10px 10px"}},closeButton:{color:"text.secondary"}},xu=s=>{const[u,t]=o.exports.useState(!!s);return[u,()=>{t(()=>!u)}]},vu=({children:s})=>{const[u,t]=xu(!1);return r(fe,{maxWidth:"100vw",disableGutters:!0,sx:We.container,children:[e(mu,{toggleOpen:t}),r(fe,{sx:We.content,disableGutters:!0,children:[e(fu,{open:u,toggleOpen:t}),s]})]})},We={container:{display:"flex",flexDirection:"column",minHeight:"100vh"},content:{display:"flex",flexGrow:1,mt:8}},yu=`${location.protocol}//${location.hostname}`;class Cu{async fetch(){return(await T.get(`${yu}/dictonary`)).data}}var gu=new Cu;const ku=gu;class wu{constructor(){S(this,"actionTypes",[]);S(this,"workTypes",[]);S(this,"statusTypes",[]);S(this,"WORK",{});S(this,"STATUS",{});S(this,"ACTION",{});ie(this),this.fetch()}fill(u){this.actionTypes=u.actionTypes,this.workTypes=u.workTypes,this.statusTypes=u.statusTypes,this.WORK=u.WORK,this.STATUS=u.STATUS,this.ACTION=u.ACTION}async fetch(){const u=await ku.fetch();this.fill(u)}getStatus(u){return this.statusTypes.find(t=>t.id===u)}}const x=new wu,ue=`${location.protocol}//${location.hostname}`;class Tu{async fetch(){return(await T.get(`${ue}/settings`)).data}async getServerTime(){return(await T.get(`${ue}/settings/serverTime`)).data}async update(u){return await T.put(`${ue}/settings/${u.id}`,u)}async updateServer(){setTimeout(()=>{window.close()},2e3),await T.get(`${ue}/settings/updateServer`)}async shutdown(){setTimeout(()=>{window.close()},2e3),await T.get(`${ue}/settings/shutdown`)}}var Su=new Tu;const te=Su;class Eu{constructor(){S(this,"settingList",[]);S(this,"SETTING",{});S(this,"serverTime","");ie(this)}setServerTime(u){this.serverTime=ee(u,"dd-MM-yyyy - HH:mm")}fill(u){this.settingList=u.settings,this.SETTING=u.SETTING}async fetch(){const u=await te.fetch();this.fill(u),await te.getServerTime()}async update(u){try{await te.update(u);const t=[...this.settingList],n=t.findIndex(a=>a.id===u.id);t[n]=y({},u),this.fill(t)}catch{}}async updateServer(){await te.updateServer()}async shutdown(){await te.shutdown()}}const D=new Eu,se=`${location.protocol}//${location.hostname}`;class bu{async fetch(){return(await T.get(`${se}/tasks`)).data}async fetchById(u){return(await T.get(`${se}/tasks/${u}`)).data}async create(u){return(await T.post(`${se}/tasks`,u)).data}async remove(u){return(await T.delete(`${se}/tasks/${u}`)).data}async update(u){return await T.put(`${se}/tasks/${u.id}`,u)}}var Du=new bu;const ne=Du;class Au{constructor(){S(this,"taskList",[]);ie(this)}fill(u){this.taskList=u}async remove(u){const t=await ne.remove(u.id);if(t.removed===1){const n=this.taskList.filter(a=>a.id!==u.id);this.fill(n)}return t.removed}async create(u){const t=await ne.create(u);this.fill([...this.taskList,t])}async update(u){await ne.update(u);let t=this.taskList.findIndex(n=>n.id===u.id);this.taskList[t]=y({},u)}async fetch(){this.fill(await ne.fetch())}async fetchById(u){return await ne.fetchById(u)}}const H=new Au,j=`${location.protocol}//${location.hostname}`;class Wu{async fetch(){return(await T.get(`${j}/works`)).data}async fetchCurrentWork(){return(await T.get(`${j}/works/currentWork`)).data}async create(u){return(await T.post(`${j}/works`,u)).data}async remove(u){return(await T.delete(`${j}/works/${u}`)).data}async stopCurrent(u){return await T.get(`${j}/works/stopCurrent`)}async update(u){return await T.put(`${j}/works/${u.id}`,u)}async calibrateAzimuth(u){await T.get(`${j}/works/calibrateAzimuth?time=${u}`)}async calibrateSlope(u){await T.get(`${j}/works/calibrateSlope?time=${u}`)}}var Bu=new Wu;const Be=[{id:1,type:{id:1,name:"\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430"},status:{id:1,name:"\u043E\u0436\u0438\u0434\u0430\u043D\u0438\u0435"},item:{id:2,name:"\u0412\u0442\u043E\u0440\u0430\u044F \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430",description:"\u041A\u0440\u0430\u0442\u043A\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0432\u0442\u043E\u0440\u043E\u0439 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B",actions:[{id:1,type:{id:1,name:"\u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0430\u0437\u0438\u043C\u0443\u0442\u0430"},value1:120.9,value2:0,value3:0},{id:2,type:{id:3,name:"\u043E\u0436\u0438\u0434\u0430\u043D\u0438\u0435"},value1:200,value2:0,value3:0},{id:3,type:{id:4,name:"\u0440\u0430\u0437\u0440\u044F\u0434"},value1:3,value2:2.5,value3:5}]},startTime:1645191e6,details:[]},{id:2,type:{id:1,name:"\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430"},status:{id:1,name:"\u043E\u0436\u0438\u0434\u0430\u043D\u0438\u0435"},item:{id:2,name:"\u0412\u0442\u043E\u0440\u0430\u044F \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430",description:"\u041A\u0440\u0430\u0442\u043A\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0432\u0442\u043E\u0440\u043E\u0439 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B",actions:[{id:1,type:{id:1,name:"\u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0430\u0437\u0438\u043C\u0443\u0442\u0430"},value1:120.9,value2:0,value3:0},{id:2,type:{id:3,name:"\u043E\u0436\u0438\u0434\u0430\u043D\u0438\u0435"},value1:200,value2:0,value3:0},{id:3,type:{id:4,name:"\u0440\u0430\u0437\u0440\u044F\u0434"},value1:3,value2:2.5,value3:5}]},startTime:16457166e5,details:[]}];class $u{constructor(){S(this,"currentWork",null);S(this,"updateWork",null)}setUpdaters(u){this.updateWork=u}createCurrentWork(u){}async startWork(u){this.currentWork=u;const t=await x.getStatus(x.STATUS.STATUS_RUN);this.currentWork=b(y({},this.currentWork),{status:t}),await this.updateWork(this.currentWork),console.log("status ",x.STATUS.STATUS_RUN)}async stopWork(){const u=await x.getStatus(x.STATUS.STATUS_DONE);this.currentWork=b(y({},this.currentWork),{status:u}),await this.updateWork(this.currentWork),this.currentWork=null,console.log("stop")}}var oe=new $u;let $e=Be.length+1;class Iu{constructor(){S(this,"works",Be);S(this,"timers",[]);S(this,"update",async u=>{const t=this.works.findIndex(n=>n.id===u.id);this.works[t]=y({},u)});oe.setUpdaters(this.update),this.fillTimers()}createTimer(u){const t=new Date().getTime(),n=u.startTime;if(!n)return null;const a=n-t,i=a<0?null:setTimeout(()=>{console.log("timer run",u.id),oe.startWork(u),this.removeTimer(u.id),clearTimeout(i)},a);return i}removeTimer(u){const t=this.timers.find(n=>n.workId===u);t&&(clearTimeout(t),this.timers=this.timers.filter(n=>n.workId===u))}fillTimers(){this.timers.forEach(u=>clearTimeout(u.timer)),this.timers=[],this.works.forEach(u=>{const t=this.createTimer(u);t&&this.timers.push({timerId:t,workId:u.id})})}async fetch(){return this.works}async create(u){$e++;const t=y({id:$e},u);return this.works.push(t),this.createTimer(t)||oe.startWork(t),t}async remove(u){return this.works=this.works.filter(t=>t.id!==u),oe.stopWork(),this.removeTimer(u),{removed:1,error:""}}}new Iu;const K=Bu;class Lu{constructor(){S(this,"workList",[]);S(this,"currentWork",null);ie(this)}fill(u){this.workList=u}fillCurrentWork(u){u.length>0?this.currentWork=u[0]:this.currentWork=null}async fetch(){const u=await K.fetch();this.fill(u)}async fetchCurrentWork(){const u=await K.fetchCurrentWork();this.fillCurrentWork(u)}async create(u){const t=await K.create(u);this.fill([...this.workList,t])}async stopCurrent(u){return await K.stopCurrent()}async calibrateAzimuth(u){return await K.calibrateAzimuth(u)}async calibrateSlope(u){return await K.calibrateSlope(u)}async remove(u){const t=await K.remove(u.id);if(t.removed===1){const n=this.workList.filter(a=>a.id!==u.id);this.fill(n)}return t.removed}}const w=new Lu,Fu=()=>{var c;o.exports.useEffect(()=>{w.fetch()},[]);const s=V(),u=o.exports.useCallback(()=>{s("/works/current-work")},[]),t=o.exports.useCallback(()=>{w.stopCurrent()},[]),n=w.workList.filter(p=>p.status.id===x.STATUS.STATUS_WAIT).map(p=>r(M,{children:[p.item.name," ",ee(new Date(p.startTime),"dd-MM-yyyy - HH:mm")]},p.id)),a=w.workList.filter(p=>p.status.id===x.STATUS.STATUS_RUN).map(p=>e(M,{children:p.item.name},p.id));let i=[];const l=(c=w.currentWork)==null?void 0:c.work;return l&&(i=l.details.filter(p=>p.status.id===x.STATUS.STATUS_RUN).map(p=>e(M,{children:p.type.name},p.id))),r(h,{sx:{borderWidth:"1px",borderStyle:"solid",borderColor:"black",borderRadius:"5px",minHeight:"98%",p:.5,m:.5},children:[e(d,{children:"\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u0437\u0430\u0434\u0430\u043D\u0438\u044F\u0445"}),r(h,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",bgcolor:"#cdcdcd",p:1,my:2,flexWrap:"wrap"},children:[e(d,{variant:"span",children:"\u0417\u0430\u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435"}),n.length===0&&e(d,{variant:"span",children:"\u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044E\u0442"}),n.length!==0&&e(R,{children:n})]}),r(h,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",bgcolor:"#cdcdcd",p:1,mb:2},children:[e(d,{variant:"span",children:"\u0422\u0435\u043A\u0443\u0449\u0430\u044F \u0437\u0430\u0434\u0430\u0447\u0430 "}),a.length===0&&e(d,{variant:"span",children:"\u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442"}),a.length!==0&&e(R,{children:a})]}),r(h,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",p:1,bgcolor:"#cdcdcd"},children:[e(d,{variant:"span",children:"\u0422\u0435\u043A\u0443\u0449\u0435\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435"}),i.length===0&&e(d,{variant:"span",children:"\u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442"}),i.length!==0&&e(R,{children:i})]}),r(h,{sx:{display:"flex",bgcolor:"#cdcdcd"},children:[e(f,{variant:"contained",color:"primary",onClick:u,sx:{m:1},children:"\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435"}),e(f,{variant:"contained",color:"primary",onClick:t,sx:{m:1},children:"\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C"})]})]})};var Ou=F(Fu);const re=s=>{const{open:u,onCloseDialog:t,children:n}=s;return e(ke,{open:u,onClose:t,sx:{"& .MuiPaper-root":{width:{xs:"98%",sm:"50%"}}},children:n})},Ru=({setting:s,onCancel:u,onSubmit:t})=>{const[n,a]=o.exports.useState(y({},s)),i=l=>{const c=l.target.value;a(b(y({},n),{value:c}))};return r(A,{children:[e(X,{children:e(d,{children:"\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430"})}),e(Z,{children:e(h,{sx:{display:"flex",flexDirection:"column"},children:e(q,{children:e(z,{autoFocus:!0,sx:{m:1},label:"\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435",type:"number",inputProps:{max:350,min:0,step:.1},value:n.value,onChange:i,InputLabelProps:{shrink:!0}})})})}),r(J,{children:[e(f,{onClick:u,children:"\u041E\u0442\u043C\u0435\u043D\u0430"}),e(f,{onClick:()=>t(n),children:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"})]})]})},Ie=({setting:s,onEdit:u,editable:t=!0})=>{const[n,a]=o.exports.useState(!1),i=()=>{a(!0)},l=()=>{a(!1)},c=p=>{u(y({},p)),l()};return r(A,{children:[r(M,{sx:{justifyContent:"space-between",wordWrap:"wrap",bgcolor:"#f9f9f9"},children:[e(d,{sx:{width:"40%"},children:s.name}),e(d,{sx:{width:"25%",display:"flex",justifyContent:"center",fontSize:"1.5rem",color:"blue"},children:s.value}),t&&e(f,{onClick:i,children:"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C"})]},s.id),e(re,{open:n,onCloseDialog:l,children:e(Ru,{onCancel:l,onSubmit:c,setting:s})})]})},Uu=()=>{o.exports.useEffect(()=>{D.fetch()},[]);const s=D.settingList.filter(u=>u.id!==D.SETTING.SETTING_AZIMUTH_SPEED&&u.id!==D.SETTING.SETTING_SLOPE_SPEED).map(u=>e(Ie,{setting:u,editable:!1},u.id));return r(h,{sx:{borderWidth:"1px",borderStyle:"solid",borderColor:"black",borderRadius:"5px",minHeight:"98%",p:.5,m:.5},children:[e(d,{children:"\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E\u0431 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0435"}),r(h,{sx:{display:"flex",justifyContent:"space-between",px:2,mt:2,color:"blue"},children:[e(d,{variant:"div",children:"\u0412\u0440\u0435\u043C\u044F \u0441\u0435\u0440\u0432\u0435\u0440\u0430"}),e(d,{variant:"div",children:D.serverTime})]}),e(R,{sx:{mb:2},children:s})]})};var Nu=F(Uu);const Mu=()=>r(A,{children:[e(d,{sx:{color:"red",border:"2px solid red",borderRadius:1,fontWeight:"bold",width:"80%",m:"10px auto",p:1},children:"\u0412\u041D\u0418\u041C\u0410\u041D\u0418\u0415!!! \u041F\u0435\u0440\u0435\u0434 \u0440\u0430\u0431\u043E\u0442\u043E\u0439 \u043F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0432\u0442\u044C \u0432\u044B\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u043E\u0433\u043E \u0430\u0437\u0438\u043C\u0443\u0442\u0430 \u0438 \u043D\u0430\u043A\u043B\u043E\u043D\u0430!!!"}),r(h,{sx:{bgcolor:"#f9f9f9",p:1,minHeight:"85%",display:"flex",flexWrap:"wrap",justifyContent:"center"},children:[e(h,{sx:{padding:1,width:{xs:"100%",sm:"45%"},minHeight:"95%"},children:e(Ou,{})}),e(h,{sx:{padding:1,width:{xs:"100%",sm:"45%"},minHeight:"95%"},children:e(Nu,{})})]})]}),_u=()=>e(A,{children:e(me,{})}),Pu=()=>e(A,{children:e(me,{})}),zu=({task:s,onSubmit:u,onCancel:t})=>{const n=o.exports.useMemo(()=>x.workTypes.find(m=>m.id===x.WORK.WORK_PROGRAMM),[]),a=o.exports.useMemo(()=>x.statusTypes.find(m=>m.id===x.STATUS.STATUS_RUN),[]),i=o.exports.useMemo(()=>({type:n,status:a,item:s,startTime:null,details:[]}),[]),[l,c]=o.exports.useState(i),[p,v]=o.exports.useState(a),[k,W]=o.exports.useState(ee(new Date,"yyyy-MM-dd'T'HH:mm",{locale:xe})),O=m=>{const U=ee(m,"yyyy-MM-dd'T'HH:mm",{locale:xe}),P=Se(Ee(U));W(U),c(b(y({},l),{startTime:P}))},E=m=>{const U=m.target.value;let P=null;v(U),U.id===x.STATUS.STATUS_WAIT&&(P=Se(Ee(k))),c(b(y({},l),{status:U,startTime:P}))},g=o.exports.useMemo(()=>x.statusTypes.map(m=>(m.id===x.STATUS.STATUS_RUN||m.id===x.STATUS.STATUS_WAIT)&&e(we,{value:m,children:m.name},m.id)),[]);return r(A,{children:[e(X,{children:e(d,{children:"\u0417\u0430\u0434\u0430\u043D\u0438\u0435"})}),e(Z,{children:r(h,{sx:{display:"flex",flexDirection:"column"},children:[e(q,{fullWidth:!0,sx:Hu.gutters,children:e(Te,{autoFocus:!0,value:p,onChange:E,children:g})}),p.id===x.STATUS.STATUS_WAIT&&e(q,{children:e(Ze,{value:k,onChange:O,renderInput:m=>e(z,y({},m))})})]})}),r(J,{children:[e(f,{onClick:t,children:"\u041E\u0442\u043C\u0435\u043D\u0430"}),e(f,{onClick:()=>u(l),children:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"})]})]})},Hu={gutters:{my:1}};var ju=F(zu);const Gu=({task:s,onSelect:u,onRemove:t})=>{const[n,a]=o.exports.useState(!1),i=V(),l=()=>{a(!0)},c=()=>{a(!1)},p=async v=>{await w.create(v),a(!1),v.status.id===x.STATUS.STATUS_RUN&&i("/works/current-work")};return r(A,{children:[r(M,{sx:{color:"text.primary",mb:.5,p:.2,width:"auto"},children:[r(h,{sx:{display:"flex",bgcolor:"#ffffff",width:"80%",border:"1px solid #001e3c",borderRadius:"2px",cursor:"pointer",flexWrap:"wrap","&:hover":{bgcolor:"#f1f1f1",color:"text.secondary"}},onClick:()=>u(s.id),children:[e(d,{variant:"p",component:"span",sx:{width:{xs:"100%",sm:"40%"},padding:1},children:s.name}),e(d,{variant:"p",component:"span",sx:{padding:1,fontSize:"caption.fontSize"},children:s.description})]}),r(h,{sx:{display:"flex",flexWrap:{xs:"wrap",sm:"nowrap"},flexGrow:1,justifyContent:"center",ml:1},children:[e(f,{variant:"outlined",size:"small",sx:{mr:{xs:0,sm:.5},mb:{xs:.5,sm:0}},onClick:l,children:"\u0437\u0430\u043F\u0443\u0441\u043A"}),e(f,{variant:"outlined",size:"small",onClick:()=>t(s),children:"\u0443\u0434\u0430\u043B\u0438\u0442\u044C"})]})]}),e(re,{open:n,onCloseDialog:c,children:e(ju,{onCancel:c,onSubmit:p,task:s})})]})};var Vu=F(Gu);const ve=({open:s,children:u,onOk:t,onCancel:n})=>e(h,{sx:{display:"flex",justifyContent:"space-between",width:"80%",flexWrap:"wrap"},children:r(ke,{open:s,onClose:n,children:[e(X,{}),e(Z,{children:u}),r(J,{children:[e(f,{onClick:n,children:"\u041E\u0442\u043C\u0435\u043D\u0430"}),e(f,{onClick:t,children:"Ok"})]})]})}),Ku=s=>{const[u,t]=o.exports.useState(!1),[n,a]=o.exports.useState("");return[u,n,l=>{t(l),a(l?s:"")}]},Xu=({open:s,onAddTask:u,onCloseDialog:t})=>{const[n,a,i]=Ku("\u0418\u043C\u044F \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C."),[l,c]=o.exports.useState(""),[p,v]=o.exports.useState(""),k=E=>{v(E.target.value)},W=E=>{const g=E.target.value;i(!g),c(E.target.value)},O=()=>{if(!l){i(!0);return}u({name:l,description:p})};return o.exports.useEffect(()=>{s&&(c(""),i(!1),v(""))},[s]),r(A,{children:[e(X,{children:e(d,{children:"\u041D\u043E\u0432\u0430\u044F \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430"})}),e(Z,{children:r(h,{sx:{display:"flex",flexDirection:"column"},children:[e(z,{autoFocus:!0,error:n,label:"\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435",value:l,helperText:a,variant:"filled",onChange:W,sx:{mb:1}}),e(z,{label:"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",value:p,variant:"filled",multiline:!0,maxRows:4,onChange:k})]})}),r(J,{children:[e(f,{onClick:t,children:"\u041E\u0442\u043C\u0435\u043D\u0430"}),e(f,{onClick:O,children:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C"})]})]})},Zu=()=>{const s=V(),[u,t]=o.exports.useState(!1),[n,a]=o.exports.useState(!1),[i,l]=o.exports.useState(null),c=o.exports.useCallback(m=>{s(`/tasks/${m}`)},[]);o.exports.useEffect(()=>H.fetch(),[]);const p=o.exports.useCallback(()=>{t(!1)},[]),v=o.exports.useCallback(()=>{t(!0)},[]),k=m=>{l(m),a(!0)},W=()=>{i&&H.remove(i).then(()=>{l(null)}),a(!1)},O=()=>{l(null),a(!1)},E=o.exports.useCallback(m=>{H.create(b(y({},m),{actions:[]})),p()},[]),g=o.exports.useMemo(()=>H.taskList.map(m=>e(Vu,{task:m,onSelect:c,onRemove:k},m.id)),[H.taskList]);return r(h,{sx:{bgcolor:"#f9f9f9",padding:1,minHeight:"98%"},children:[r(h,{sx:{display:"flex",justifyContent:"space-between",width:"80%",flexWrap:"wrap"},children:[e(d,{variant:"h5",children:"\u0421\u043F\u0438\u0441\u043E\u043A \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C"}),e(f,{variant:"contained",color:"primary",onClick:v,children:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C"})]}),e(R,{children:g}),e(re,{open:u,onCloseDialog:p,children:e(Xu,{open:u,onAddTask:E,onCloseDialog:p})}),r(ve,{open:n,onOk:W,onCancel:O,children:[e(d,{sx:{mb:2},children:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u0443\u044E \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0443?"}),e(d,{align:"center",sx:{fontWeight:"bold"},children:i==null?void 0:i.name})]})]})};var qu=F(Zu);const Ju=({work:s,onSelect:u,onRemove:t})=>r(M,{sx:{color:"text.primary",mb:.5,p:.2,width:"auto"},children:[r(h,{sx:{display:"flex",bgcolor:"#ffffff",width:"80%",border:"1px solid #001e3c",borderRadius:"2px",cursor:"pointer",flexWrap:"wrap","&:hover":{bgcolor:"#f1f1f1",color:"text.secondary"}},children:[e(d,{variant:"p",component:"span",sx:{width:{xs:"100%",sm:"20%"},padding:1},children:s.status.name}),e(d,{variant:"p",component:"span",sx:{width:{xs:"100%",sm:"40%"},padding:1},children:s.item.name}),s.startTime&&e(d,{variant:"p",component:"span",sx:{width:{xs:"100%",sm:"20%"},padding:1},children:ee(new Date(s.startTime),"dd-MM-yyyy - HH:mm")})]}),e(h,{sx:{display:"flex",flexWrap:{xs:"wrap",sm:"nowrap"},flexGrow:1,justifyContent:"center",ml:1},children:e(f,{variant:"outlined",size:"small",onClick:()=>t(s),children:"\u0443\u0434\u0430\u043B\u0438\u0442\u044C"})})]});var Qu=F(Ju);const Yu=()=>{var p,v;V();const[s,u]=o.exports.useState(!1),[t,n]=o.exports.useState(null);o.exports.useEffect(()=>w.fetch(),[]);const a=k=>{n(k),u(!0)},i=()=>{t&&w.remove(t).then(()=>{n(null)}),u(!1)},l=()=>{n(null),u(!1)},c=o.exports.useMemo(()=>w.workList.map(k=>e(Qu,{work:k,onRemove:a},k.id)),[w.workList]);return r(h,{sx:{bgcolor:"#f9f9f9",padding:1,minHeight:"98%"},children:[e(h,{sx:{display:"flex",justifyContent:"space-between",width:"80%",flexWrap:"wrap"},children:e(d,{variant:"h5",children:"\u0421\u043F\u0438\u0441\u043E\u043A \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044B\u0445 \u0437\u0430\u0434\u0430\u0447"})}),e(R,{children:c}),r(ve,{open:s,onOk:i,onCancel:l,children:[e(d,{sx:{mb:2},children:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u0443\u044E \u0437\u0430\u0434\u0430\u0447\u0443?"}),r(d,{align:"center",sx:{fontWeight:"bold"},children:[(p=t==null?void 0:t.status)==null?void 0:p.name," ",(v=t==null?void 0:t.item)==null?void 0:v.name]})]})]})};var et=F(Yu);const ut=({work:s})=>{let u="#f1f1f1";switch(s.status.id){case x.STATUS.STATUS_RUN:u="#ffffe6";break;case x.STATUS.STATUS_DONE:u="#e8ffe6";break}console.log(s.type.id);let t="";switch(s.type.id){case x.ACTION.ACTION_AZIMUTH:case x.ACTION.ACTION_SLOPE:t=s.value1+" \u0433\u0440\u0430\u0434.";break;case x.ACTION.ACTION_WAIT:t=s.value1+" \u0441\u0435\u043A.";break;case x.ACTION.ACTION_SPARK:t=s.value2+" \u0441\u0435\u043A.";break}return e(A,{children:r(M,{sx:{justifyContent:"space-between",flexWrap:"wrap",bgcolor:u,mb:1},children:[e(d,{sx:{width:{xs:"100%",sm:"15%",md:"15%"},fontWeight:"bold"},children:s.type.name}),e(d,{sx:{width:{xs:"100%",sm:"15%",md:"15%"},textAlign:{xs:"left",sm:"center"}},children:t})," ",e(d,{sx:{width:{xs:"100%",sm:"20%"},textAlign:{xs:"left",sm:"right"},fontWeight:"bold"},children:s.status.name})]},s.id)})},tt=()=>{var n;const s=o.exports.useCallback(()=>{w.stopCurrent()},[]);o.exports.useEffect(()=>{w.fetchCurrentWork()},[]);let u=null;const t=(n=w.currentWork)==null?void 0:n.work;return t&&(u=t.details.map(a=>e(ut,{work:a},a.id))),r(A,{children:[r(h,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",bgcolor:"#cdcdcd",px:1},children:[e(d,{variant:"h6",children:"\u0422\u0435\u043A\u0443\u0449\u0430\u044F \u0437\u0430\u0434\u0430\u0447\u0430"}),e(h,{children:e(f,{variant:"contained",color:"primary",onClick:s,sx:{m:1},children:"\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C"})})]}),e(R,{children:u})]})};var st=F(tt);const nt=({action:s,onRemove:u,onEdit:t})=>r(M,{sx:{color:"text.primary",mb:.5,p:.2,width:"auto"},children:[r(h,{sx:{display:"flex",bgcolor:"#ffffff",width:"80%",border:"1px solid #001e3c",borderRadius:"2px",flexWrap:"wrap",cursor:"pointer","&:hover":{bgcolor:"#f1f1f1",color:"text.secondary"}},onClick:()=>t(s),children:[e(d,{variant:"p",component:"span",sx:{width:{xs:"100%",sm:"40%"},padding:1},children:s.type.name}),r(d,{variant:"p",component:"span",sx:{padding:1},children:[s.type.id===1&&r(d,{children:["\u0430\u0437\u0438\u043C\u0443\u0442 ",e("span",{children:s.value1})," \u0433\u0440\u0430\u0434\u0443\u0441\u043E\u0432"]}),s.type.id===2&&r(d,{children:["\u043D\u0430\u043A\u043B\u043E\u043D ",e("span",{children:s.value1})," \u0433\u0440\u0430\u0434\u0443\u0441\u043E\u0432"]}),s.type.id===3&&r(d,{children:["\u043E\u0436\u0438\u0434\u0430\u043D\u0438\u0435 ",e("span",{children:s.value1})," \u0441\u0435\u043A"]}),s.type.id===4&&r(d,{children:["\u0440\u0430\u0437\u0440\u044F\u0434 \u043A\u043E\u043B-\u0432\u043E ",e("span",{children:s.value1})," \u0432\u0440\u0435\u043C\u044F\xA0",e("span",{children:s.value2})," \u0441\u0435\u043A \u0438\u043D\u0442\u0435\u0440\u0432\u0430\u043B\xA0",e("span",{children:s.value3})," \u0441\u0435\u043A"]})]})]}),e(h,{sx:{display:"flex",flexWrap:{xs:"wrap",sm:"nowrap"},flexGrow:1,justifyContent:"center",ml:1},children:e(f,{variant:"outlined",size:"small",onClick:()=>u(s),children:"\u0443\u0434\u0430\u043B\u0438\u0442\u044C"})})]});var rt=F(nt);const it=({action:s,onSubmit:u,onCloseDialog:t})=>{const n=o.exports.useMemo(()=>({id:x.actionTypes[0].id,name:x.actionTypes[0].name}),[]),a=o.exports.useMemo(()=>({id:null,type:n,value1:0,value2:0,value3:0}),[]),[i,l]=o.exports.useState(s||a),[c,p]=o.exports.useState(()=>x.actionTypes.find(g=>g.id===i.type.id)),v=g=>{l(()=>b(y({},i),{value1:+g.target.value}))},k=g=>{l(()=>b(y({},i),{value2:+g.target.value}))},W=g=>{l(()=>b(y({},i),{value3:+g.target.value}))},O=g=>{const m=g.target.value;p(m),l(b(y({},i),{type:{id:m.id,name:m.name},value1:1,value2:0,value3:0}))},E=o.exports.useMemo(()=>x.actionTypes.map(g=>e(we,{value:g,children:g.name},g.id)),[]);return r(A,{children:[e(X,{children:e(d,{children:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435"})}),e(Z,{children:r(h,{sx:{display:"flex",flexDirection:"column"},children:[e(q,{fullWidth:!0,sx:le.gutters,children:e(Te,{autoFocus:!0,value:c,onChange:O,children:E})}),e(q,{fullWidth:!0,children:e(z,{label:c.value1.label,value:i.value1,onChange:v,type:"number",inputProps:{max:c.value1.max,min:c.value1.min,step:c.value1.step},sx:le.gutters,InputLabelProps:{shrink:!0}})}),c.id===4&&e(z,{label:c.value2.label,value:i.value2,onChange:k,type:"number",inputProps:{max:c.value2.max,min:c.value2.min,step:c.value2.step},sx:le.gutters,InputLabelProps:{shrink:!0}}),c.id===4&&e(z,{label:c.value3.label,value:i.value3,onChange:W,type:"number",inputProps:{max:c.value3.max,min:c.value3.min,step:c.value3.step},sx:le.gutters,InputLabelProps:{shrink:!0}})]})}),r(J,{children:[e(f,{onClick:t,children:"\u041E\u0442\u043C\u0435\u043D\u0430"}),e(f,{onClick:()=>u(i),children:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"})]})]})},le={gutters:{my:1}};var at=F(it);const ot=()=>{var I;const s=qe(),u=V(),[t,n]=o.exports.useState(!1),[a,i]=o.exports.useState(null),[l,c]=o.exports.useState({}),[p,v]=o.exports.useState(!1),[k,W]=o.exports.useState(null),O=o.exports.useCallback(()=>{u("/tasks")},[]);o.exports.useEffect(()=>{H.fetchById(s.id).then(C=>c(C))},[]);const E=o.exports.useCallback(()=>{n(!1)},[]),g=o.exports.useCallback(C=>{i(C),n(!0)},[]),m=o.exports.useCallback(()=>{i(null),n(!0)},[]),U=C=>{W(C),v(!0)},P=()=>{if(k){const C=l.actions.filter($=>k.id!==$.id),L=b(y({},l),{actions:C});c(L),H.update(L).then(()=>{W(null)})}v(!1)},de=()=>{W(null),v(!1)},pe=C=>{C.id||(C.id=Je());const L=l.actions.findIndex(Y=>Y.id===C.id),$=[...l.actions];L===-1?$.push(C):$[L]=y({},C);const N=b(y({},l),{actions:[...$]});c(N),n(!1),H.update(N)},B=Array.isArray(l.actions)?l.actions.map(C=>e(rt,{action:C,onRemove:U,onEdit:g},C.id)):null;return r(h,{sx:{bgcolor:"#f9f9f9",padding:1,minHeight:"98%"},children:[r(h,{sx:{display:"flex",justifyContent:"space-between",width:"80%",flexWrap:"wrap"},children:[e(d,{variant:"h5",children:"\u0421\u043E\u0441\u0442\u0430\u0432 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B"}),r(h,{children:[e(f,{variant:"contained",color:"primary",onClick:O,sx:{mr:1},children:"\u041A \u0441\u043F\u0438\u0441\u043A\u0443"}),e(f,{variant:"contained",color:"primary",onClick:m,children:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C"})]})]}),e(R,{children:B}),e(re,{open:t,onCloseDialog:E,children:e(at,{open:t,onCloseDialog:E,onSubmit:pe,action:a})}),r(ve,{open:p,onOk:P,onCancel:de,children:[e(d,{sx:{mb:2},children:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435?"}),e(d,{align:"center",sx:{fontWeight:"bold"},children:(I=k==null?void 0:k.type)==null?void 0:I.name})]})]})};var lt=F(ot);const ct=()=>{o.exports.useEffect(()=>{D.fetch()},[]);const s=t=>{D.update(y({},t))},u=D.settingList.map(t=>e(Ie,{setting:t,onEdit:s},t.id));return e(A,{children:e(R,{sx:{mb:2},children:u})})};var dt=F(ct);const pt=({openDialog:s})=>r(A,{children:[e(f,{variant:"contained",color:"primary",onClick:D.updateServer,sx:{mr:1,mb:1},children:"\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430"}),e(f,{variant:"contained",color:"primary",onClick:D.shutdown,sx:{mr:1,mb:1},children:"\u0412\u044B\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E"}),e(f,{variant:"contained",color:"primary",onClick:()=>{s("azimuth")},sx:{mr:1,mb:1},children:"\u041A\u0430\u043B\u0438\u0431\u0440\u043E\u0432\u043A\u0430 \u0430\u0437\u0438\u043C\u0443\u0442\u0430"}),e(f,{variant:"contained",color:"primary",onClick:()=>{s("slope")},sx:{mr:1,mb:1},children:"\u041A\u0430\u043B\u0438\u0431\u0440\u043E\u0432\u043A\u0430 \u043D\u0430\u043A\u043B\u043E\u043D\u0430"})]}),ht=[{description:'\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E \u043D\u0430 \u0430\u0437\u0438\u043C\u0443\u0442 0 \u0438 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 "\u0414\u0430\u043B\u0435\u0435".',time:0},{description:`\u041F\u043E\u0432\u043E\u0440\u043E\u0442 \u043F\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C\u044E 5 \u0441\u0435\u043A. \u041F\u043E\u0441\u043B\u0435 \u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438 \u0432\u0432\u0435\u0434\u0438\u0442\u0435
                  \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0430\u0437\u0438\u043C\u0443\u0442\u0430.`,time:5},{description:`\u041F\u043E\u0432\u043E\u0440\u043E\u0442 \u043F\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C\u044E 10 \u0441\u0435\u043A. \u041F\u043E\u0441\u043B\u0435 \u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438 \u0432\u0432\u0435\u0434\u0438\u0442\u0435
                  \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0430\u0437\u0438\u043C\u0443\u0442\u0430.`,time:10},{description:`\u041F\u043E\u0432\u043E\u0440\u043E\u0442 \u043F\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C\u044E 15 \u0441\u0435\u043A. \u041F\u043E\u0441\u043B\u0435 \u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438 \u0432\u0432\u0435\u0434\u0438\u0442\u0435
                  \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0430\u0437\u0438\u043C\u0443\u0442\u0430.`,time:15}],mt=[{description:'\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 \u043D\u0430\u043A\u043B\u043E\u043D \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430 \u043D\u0430 0 \u0438 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 "\u0414\u0430\u043B\u0435\u0435".',time:0},{description:`\u041D\u0430\u043A\u043B\u043E\u043D \u043F\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C\u044E 2 \u0441\u0435\u043A. \u041F\u043E\u0441\u043B\u0435 \u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438 \u0432\u0432\u0435\u0434\u0438\u0442\u0435
                  \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0443\u0433\u043B\u0430 \u043D\u0430\u043A\u043B\u043E\u043D\u0430.`,time:2},{description:`\u041D\u0430\u043A\u043B\u043E\u043D \u043F\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C\u044E 4 \u0441\u0435\u043A. \u041F\u043E\u0441\u043B\u0435 \u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438 \u0432\u0432\u0435\u0434\u0438\u0442\u0435
                  \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0443\u0433\u043B\u0430 \u043D\u0430\u043A\u043B\u043E\u043D\u0430.`,time:4},{description:`\u041D\u0430\u043A\u043B\u043E\u043D \u043F\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C\u044E 6 \u0441\u0435\u043A. \u041F\u043E\u0441\u043B\u0435 \u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438 \u0432\u0432\u0435\u0434\u0438\u0442\u0435
                  \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0443\u0433\u043B\u0430 \u043D\u0430\u043A\u043B\u043E\u043D\u0430.`,time:6}],ft=({onCancel:s,mode:u})=>{const[t,n]=o.exports.useState(0),[a,i]=o.exports.useState(!1);let l="",c=[];switch(u){case"azimuth":l="\u041A\u0430\u043B\u0438\u0431\u0440\u043E\u0432\u043A\u0430 \u0430\u0437\u0438\u043C\u0443\u0442\u0430",c=ht;break;case"slope":l="\u041A\u0430\u043B\u0438\u0431\u0440\u043E\u0432\u043A\u0430 \u043D\u0430\u043A\u043B\u043E\u043D\u0430",c=mt;break}const p=c.length,[v,k]=o.exports.useState(new Array(p).fill(0)),[W,O]=o.exports.useState(new Array(p).fill(0)),E=(B,I=3)=>Number(B.toFixed(I)),g=()=>{w.stopCurrent(),i(!0);const B=c[t].time;let I=()=>{};switch(u){case"azimuth":I=w.calibrateAzimuth;break;case"slope":I=w.calibrateSlope;break}I(B)},m=()=>{w.stopCurrent(),s()},U=B=>{const I=+B.target.value,C=[...v],L=[...W];C[t]=I;let $=E((I-C[t-1])/c[t].time);$=$<=0?0:$,L[t]=$,k(C),O(L)},P=()=>{w.stopCurrent();const B=[0];for(let N=1;N<c.length;N++){const Y=E((v[N]-v[N-1])/c[N].time);B.push(Y)}const I=B.reduce((N,Y)=>N+Y),C=E(I/(c.length-1));let L={},$={};switch(u){case"azimuth":L=b(y({},D.settingList[0]),{value:C}),$=b(y({},D.settingList[2]),{value:v[v.length-1]});break;case"slope":L=b(y({},D.settingList[1]),{value:C}),$=b(y({},D.settingList[3]),{value:v[v.length-1]});break}C>0&&(D.update(L),D.update($)),s()},de=()=>{n(B=>B+1),i(!1)},pe=()=>{n(B=>B-1),i(!1)};return r(A,{children:[e(X,{children:e(d,{children:l})}),e(Z,{children:r(h,{sx:{display:"flex",flexDirection:"column"},children:[e(h,{sx:{p:2},children:c[t].description}),t!==0&&r(q,{children:[e(f,{onClick:g,variant:"contained",color:"primary",disabled:a,sx:{width:{md:"50%",xl:"25%"},mb:1,ml:1},children:"\u0421\u0442\u0430\u0440\u0442"}),e(z,{sx:{m:1},label:"\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435",type:"number",inputProps:{max:350,min:0,step:.1},value:v[t],onChange:U,InputLabelProps:{shrink:!0}}),r(d,{sx:{mx:1},children:["\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C: ",W[t]]})]}),e(Qe,{sx:{justifySelf:"flex-end"},variant:"text",steps:p,position:"static",activeStep:t,nextButton:r(f,{size:"small",onClick:de,disabled:t===p-1,children:["\u0414\u0430\u043B\u0435\u0435",e(Ye,{})]}),backButton:r(f,{size:"small",onClick:pe,disabled:t===0,children:[e(eu,{}),"\u041D\u0430\u0437\u0430\u0434"]})})]})}),r(J,{children:[e(f,{onClick:m,children:"\u041E\u0442\u043C\u0435\u043D\u0430"}),e(f,{onClick:P,children:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"})]})]})},xt=()=>{const[s,u]=o.exports.useState(!1),[t,n]=o.exports.useState("azimuth"),a=l=>{n(l),u(!0)},i=()=>{u(!1)};return r(A,{children:[e(d,{variant:"h6",children:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438"}),e(dt,{}),e(pt,{openDialog:a}),e(re,{open:s,onCloseDialog:i,children:e(ft,{onCancel:i,mode:t})})]})},G="/",vt=({routes:s})=>e(A,{children:e(uu,{children:e(vu,{children:e(tu,{children:r(_,{path:`${G}`,element:e(hu,{}),children:[e(_,{path:`${G}`,element:e(Mu,{})}),r(_,{path:`${G}tasks`,element:e(_u,{}),children:[e(_,{path:`${G}tasks`,element:e(qu,{})}),e(_,{path:`${G}tasks:id`,element:e(lt,{})})]}),r(_,{path:`${G}works`,element:e(Pu,{}),children:[e(_,{path:`${G}works`,element:e(et,{})}),e(_,{path:"/works/current-work",element:e(st,{})})]}),e(_,{path:`${G}settings`,element:e(xt,{})})]})})})})});const ce=su(`ws://${location.hostname}`);ce.on("connect",()=>{console.log("socket ",ce.connected)});ce.on("workStatusUpdate",s=>{w.fetch(),w.fetchCurrentWork()});ce.on("serverTime",s=>{D.setServerTime(+s)});const yt=nu({palette:{primary:{main:"#1976d2"},bgGray:{main:"#f9f9f9"}}},ru);iu.render(e(au.StrictMode,{children:e(ou,{theme:yt,children:e(lu,{dateAdapter:cu,locale:xe,children:e(vt,{})})})}),document.getElementById("root"));
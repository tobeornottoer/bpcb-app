import{d as f,l as m,r as C,a as R,h as S,q as w,ae as p,s as x,e as o,f as n,g as r,F as s,i as P,v as O,C as l,X as A,B as _,t as y,b as B,_ as E}from"./index-61481958.js";const I={class:"pure-member-module"},D={class:"member-module-header"},N={key:0,class:"category-gap"},V=["onClick"],F={class:"pure-member-body"},L=f({__name:"index",setup(M){const i=m(()=>p().order),c=C(),h=R(),v=S();w(()=>{p().getOrderCount(),c.value=h.path});const d=[{name:"Review",path:"",count:void 0},{key:"cart_number",name:"Under Review",path:"/member/underReview"},{key:"waiting_pay",name:"Awaiting Payment",path:"/member/awaitingPayment"},{name:"ORDERS",path:""},{key:"all_count",name:"All orders",path:"/member/orders"},{key:"uncompleted_pay",name:"Uncompleted Paymentment",path:"/member/unpayment"},{key:"making_count",name:"Production Status",path:"/member/production"},{key:"delivery_count",name:"Delivery",path:"/member/delivery"},{key:"completed_count",name:"Completed",path:"/member/completed"},{name:"SPECIALS",path:""},{key:"message",name:"Message Center",path:"/member/message"},{name:"MY PROFILE",path:""},{key:"address",name:"Delivery Address",path:"/member/address"},{key:"afterSales",name:"After Sales",path:"/member/afterSales"}],k=m(()=>{const t=B(i.value),u=Object.keys(t);return d.forEach(a=>{u.includes(a==null?void 0:a.key)&&(a.count=t[a.key])}),d}),b=t=>{t&&v.push(t)};return(t,u)=>{const a=x("router-view");return o(),n("div",I,[r("div",D,[(o(!0),n(s,null,P(k.value,(e,g)=>(o(),n(s,{key:e.name},[!(e!=null&&e.path)&&g!=0?(o(),n("div",N)):l("",!0),r("div",{class:A([e!=null&&e.path?"category-item":"category-group",{active:e.path===c.value}]),onClick:T=>b(e.path)},[_(y(e.name)+" ",1),e.count!==void 0?(o(),n(s,{key:0},[_("("+y(e.count)+")",1)],64)):l("",!0)],10,V)],64))),128))]),r("div",F,[O(a)])])}}});const j=E(L,[["__scopeId","data-v-867fbd1e"]]);export{j as default};

import{e as v,a as m,p as g}from"./pay-0b545f01.js";import{u as E}from"./awaitPayment-33aff63c.js";import{r as u,b as y,E as o,a9 as w,ae as p}from"./index-61481958.js";function U({getListFn:n}){const c=u(),a=u(),r=u(),e=u(),t=async i=>{r.value=i;const f=await E().getAddressList();e.value=y(f),c.value="address"},s=()=>{r.value=void 0,c.value=void 0,a.value=void 0};return{editType:c,addressId:a,orderInfo:r,addressList:e,handleEditAddress:t,cancelEdit:()=>{s()},sumbitEdit:async()=>{if(!a.value){o.error("Please select a address");return}const i=await v(r.value.order_no,{address_id:a.value});i.code===200&&i.message==="success"?(await n(),o.success("Update Successful")):o.success("Update failed"),s()}}}function b(n){const c=async e=>{const{order_no:t}=e,s=await m(t);s.code===200&&s.message==="success"?(n.value=n.value.filter(d=>d.order_no!==t),r(1),o.success("Update Successful")):o.success("Update failed")},a=async e=>{var l;const t=w.service({lock:!0,text:"Loading",background:"rgba(0, 0, 0, 0.7)"}),{order_no:s}=e,d=await g(s);d.code===200&&d.message==="success"&&(t.close(),window.location.href=(l=d.data)==null?void 0:l.url)},r=e=>{p().SET_ORDER_COUNT({waiting_pay:p().order.waiting_pay-e})};return{cancelOrder:c,payOrder:a}}export{b as a,U as u};

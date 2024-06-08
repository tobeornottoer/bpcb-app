import{d as N,s as O,j as i,e as r,f as _,k as a,p as l,l as $,F as S,z as C,b as T,g as e,N as Q,q as B,m as U,r as F,B as W,i as j,A as q,J as z,_ as P,h as L,C as Y,Y as G,n as K,R as D,S as A,c as X,w as Z,M as ee}from"./index-02b6e309.js";import{v as ae,g as le}from"./index-ced1bd49.js";import{u as I}from"./home-41da435a.js";const te={class:"standard-quote-wrap"},se=e("div",{class:"h1"},"Instant Quote",-1),oe=e("div",{class:"h2 mb-[15px]"}," Full feature prototype PCB custom service at low cost. ",-1),ne=e("i",{class:"common-icon-wrap calculator-icon mr-[18px]"},null,-1),H=N({__name:"standard",emits:["quote"],setup(p,{emit:f}){const c=[{label:"5",value:5},{label:"10",value:10},{label:"15",value:15},{label:"20",value:20},{label:"25",value:25},{label:"30",value:30},{label:"40",value:40},{label:"50",value:50},{label:"75",value:75},{label:"100",value:100},{label:"100+",value:-1}],g=[{label:"1 Layer",value:1},{label:"2 Layer",value:2},{label:"4 Layer",value:4},{label:"6 Layer",value:6},{label:"8 Layer",value:8},{label:"10 Layer",value:10},{label:"12 Layer",value:12},{label:"14 Layer",value:14}],n=[{label:"0.4mm",value:.4},{label:"0.6mm",value:.6},{label:"0.8mm",value:.8},{label:"1.0mm",value:1},{label:"1.2mm",value:1.2},{label:"1.6mm",value:1.6},{label:"2.0mm",value:2},{label:"2.4mm",value:2.4}],o=O({hidLength:"",hidWidth:"",hidNum:void 0,hidLayers:2,radBoardThickness:1.6}),u=Q(()=>{f("quote",JSON.parse(JSON.stringify(o)))});return(t,s)=>{const h=i("el-input"),d=i("el-form-item"),y=i("el-option"),v=i("el-select"),V=i("el-button"),m=i("el-form");return r(),_("div",te,[se,oe,a(m,{inline:!0,model:o,"label-position":"top"},{default:l(()=>[a(d,{label:"Dimensions",class:"btw-item"},{default:l(()=>[a(d,{prop:"hidLength"},{default:l(()=>[a(h,{type:"text",modelValue:o.hidLength,"onUpdate:modelValue":s[0]||(s[0]=b=>o.hidLength=b),class:"btw-input before",placeholder:"Length",oninput:"value=value.replace(/^\\D*(\\d*(?:\\.\\d{0,})?).*$/g, '$1').replace(/^0{1,}[0-9]/g,'')"},{append:l(()=>[$("x")]),_:1},8,["modelValue"])]),_:1}),a(d,{prop:"hidWidth"},{default:l(()=>[a(h,{type:"text",modelValue:o.hidWidth,"onUpdate:modelValue":s[1]||(s[1]=b=>o.hidWidth=b),class:"btw-input after",placeholder:"Width",oninput:"value=value.replace(/^\\D*(\\d*(?:\\.\\d{0,})?).*$/g, '$1').replace(/^0{1,}[0-9]/g,'')"},{append:l(()=>[$("mm")]),_:1},8,["modelValue"])]),_:1})]),_:1}),a(d,{prop:"hidNum",label:"Quantity"},{default:l(()=>[a(v,{placeholder:"Choose Num (pcs)",class:"w-[160px]",modelValue:o.hidNum,"onUpdate:modelValue":s[2]||(s[2]=b=>o.hidNum=b)},{default:l(()=>[(r(),_(S,null,C(c,b=>a(y,{key:b.value,value:b.value,label:b.label},null,8,["value","label"])),64))]),_:1},8,["modelValue"])]),_:1}),a(d,{prop:"hidLayers",label:"Layers"},{default:l(()=>[a(v,{placeholder:"Choose Num (pcs)",class:"w-190",modelValue:o.hidLayers,"onUpdate:modelValue":s[3]||(s[3]=b=>o.hidLayers=b)},{default:l(()=>[(r(),_(S,null,C(g,b=>a(y,{key:b.value,value:b.value,label:b.label},null,8,["value","label"])),64))]),_:1},8,["modelValue"])]),_:1}),a(d,{prop:"radBoardThickness",label:"Thickness"},{default:l(()=>[a(v,{placeholder:"Thickness",class:"w-[160px]",modelValue:o.radBoardThickness,"onUpdate:modelValue":s[4]||(s[4]=b=>o.radBoardThickness=b)},{default:l(()=>[(r(),_(S,null,C(n,b=>a(y,{key:b.value,value:b.value,label:b.label},null,8,["value","label"])),64))]),_:1},8,["modelValue"])]),_:1}),a(d,null,{default:l(()=>[a(V,{type:"primary",class:"s-btn mt-[10px]",onClick:T(u)},{default:l(()=>[ne,$(" Quote Now ")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"])])}}});const ie={class:"assembly-quote-wrap"},ce=e("div",{class:"h1"},"Assembly Enquiry",-1),de=e("div",{class:"h2 mb-[15px]"},"PCB Assembly service at low cost.",-1),re=e("i",{class:"common-icon-wrap calculator-icon mr-[18px]"},null,-1),ue=N({__name:"assembly",emits:["quote"],setup(p,{emit:f}){const c=O({txtBoardNum:void 0,txtICType:void 0,txtPadsNum:void 0,txtHolesNum:void 0}),g=Q(()=>{f("quote",JSON.parse(JSON.stringify(c)))});return(n,o)=>{const u=i("el-input"),t=i("el-form-item"),s=i("el-button"),h=i("el-form");return r(),_("div",ie,[ce,de,a(h,{inline:!0,model:c,"label-position":"top"},{default:l(()=>[a(t,{prop:"txtBoardNum",label:"Quantity"},{default:l(()=>[a(u,{type:"text",placeholder:"quantity of single PCBs",maxlength:"8",modelValue:c.txtBoardNum,"onUpdate:modelValue":o[0]||(o[0]=d=>c.txtBoardNum=d),class:"w-190",oninput:"value=value.replace(/[^\\d]/g,'')"},null,8,["modelValue"])]),_:1}),a(t,{prop:"txtICType",label:"Number of Unique Parts"},{default:l(()=>[a(u,{type:"text",placeholder:"Number of Unique Parts",maxlength:"5",modelValue:c.txtICType,"onUpdate:modelValue":o[1]||(o[1]=d=>c.txtICType=d),class:"w-176",oninput:"value=value.replace(/[^\\d]/g,'')"},null,8,["modelValue"])]),_:1}),a(t,{prop:"txtPadsNum",label:"SMT Pads"},{default:l(()=>[a(u,{type:"text",placeholder:"Total number",modelValue:c.txtPadsNum,"onUpdate:modelValue":o[2]||(o[2]=d=>c.txtPadsNum=d),maxlength:"5",class:"w-190",oninput:"value=value.replace(/[^\\d]/g,'')"},null,8,["modelValue"])]),_:1}),a(t,{prop:"txtHolesNum",label:"Thru-Holes"},{default:l(()=>[a(u,{type:"text",placeholder:"Total number",modelValue:c.txtHolesNum,"onUpdate:modelValue":o[3]||(o[3]=d=>c.txtHolesNum=d),maxlength:"5",class:"w-176",oninput:"value=value.replace(/[^\\d]/g,'')"},null,8,["modelValue"])]),_:1}),a(t,null,{default:l(()=>[a(s,{type:"primary",class:"s-btn mt-[10px]",onClick:T(g)},{default:l(()=>[re,$(" Quote Now ")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"])])}}});const pe={class:"advanced-quote-wrap"},me=e("div",{class:"h1"},"High-Quality Advanced PCB",-1),ve=e("div",{class:"h2 mb-[15px]"}," Printed circuit boards for demanding customers ",-1),_e=e("i",{class:"common-icon-wrap calculator-icon mr-[18px]"},null,-1),fe=N({__name:"advanced",emits:["quote"],setup(p,{emit:f}){const c=[{label:"1 Layer",value:1},{label:"2 Layer",value:2},{label:"4 Layer",value:4},{label:"6 Layer",value:6},{label:"8 Layer",value:8},{label:"10 Layer",value:10},{label:"12 Layer",value:12},{label:"14 Layer",value:14},{label:"16 Layer",value:16},{label:"18 Layer",value:18},{label:"20 Layer",value:20},{label:"22 Layer",value:22},{label:"24 Layer",value:24},{label:"26 Layer",value:26},{label:"28 Layer",value:28},{label:"30 Layer",value:30}],g=[{label:"≥0.1-0.2(reviewed)",value:.102},{label:"0.2mm",value:.2},{label:"0.4mm",value:.4},{label:"0.6mm",value:.6},{label:"0.8mm",value:.8},{label:"1.0mm",value:1},{label:"1.2mm",value:1.2},{label:"1.6mm",value:1.6},{label:"2.0mm",value:2},{label:"2.4mm",value:2.4},{label:"2.6mm",value:2.6},{label:"2.8mm",value:2.8},{label:"3.2mm",value:3.2},{label:"6.6mm",value:3.6},{label:"4.0mm",value:4},{label:"4.4mm",value:4.4},{label:"4.8mm",value:4.8},{label:"5.2mm",value:5.2},{label:"6.0mm",value:6},{label:"≥6.5-8.0(reviewed)",value:6.58}],n=O({hidLength:"",hidWidth:"",hidNum:1,hidLayers:2,radBoardThickness:1.6}),o=Q(()=>{f("quote",JSON.parse(JSON.stringify(n)))});return(u,t)=>{const s=i("el-input"),h=i("el-form-item"),d=i("el-option"),y=i("el-select"),v=i("el-button"),V=i("el-form");return r(),_("div",pe,[me,ve,a(V,{inline:!0,model:n,"label-position":"top"},{default:l(()=>[a(h,{label:"Dimensions",class:"btw-item"},{default:l(()=>[a(h,{prop:"hidLength"},{default:l(()=>[a(s,{type:"text",modelValue:n.hidLength,"onUpdate:modelValue":t[0]||(t[0]=m=>n.hidLength=m),class:"btw-input before",placeholder:"Length",oninput:"value=value.replace(/^\\D*(\\d*(?:\\.\\d{0,})?).*$/g, '$1').replace(/^0{1,}[0-9]/g,'')"},{append:l(()=>[$("x")]),_:1},8,["modelValue"])]),_:1}),a(h,{prop:"hidWidth"},{default:l(()=>[a(s,{type:"text",modelValue:n.hidWidth,"onUpdate:modelValue":t[1]||(t[1]=m=>n.hidWidth=m),class:"btw-input after",placeholder:"Width",oninput:"value=value.replace(/^\\D*(\\d*(?:\\.\\d{0,})?).*$/g, '$1').replace(/^0{1,}[0-9]/g,'')"},{append:l(()=>[$("mm")]),_:1},8,["modelValue"])]),_:1})]),_:1}),a(h,{prop:"hidNum",label:"Quantity"},{default:l(()=>[a(s,{type:"text",modelValue:n.hidNum,"onUpdate:modelValue":t[2]||(t[2]=m=>n.hidNum=m),class:"w-160",oninput:"value=value.replace(/[^\\d]/g,'')",maxlength:"8"},null,8,["modelValue"])]),_:1}),a(h,{prop:"hidLayers",label:"Layers"},{default:l(()=>[a(y,{placeholder:"Choose Num (pcs)",class:"w-190",modelValue:n.hidLayers,"onUpdate:modelValue":t[3]||(t[3]=m=>n.hidLayers=m)},{default:l(()=>[(r(),_(S,null,C(c,m=>a(d,{key:m.value,value:m.value,label:m.label},null,8,["value","label"])),64))]),_:1},8,["modelValue"])]),_:1}),a(h,{prop:"radBoardThickness",label:"Thickness"},{default:l(()=>[a(y,{placeholder:"Thickness",class:"w-[160px]",modelValue:n.radBoardThickness,"onUpdate:modelValue":t[4]||(t[4]=m=>n.radBoardThickness=m)},{default:l(()=>[(r(),_(S,null,C(g,m=>a(d,{key:m.value,value:m.value,label:m.label},null,8,["value","label"])),64))]),_:1},8,["modelValue"])]),_:1}),a(h,null,{default:l(()=>[a(v,{type:"primary",class:"s-btn mt-[10px]",onClick:T(o)},{default:l(()=>[_e,$(" Quote Now ")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"])])}}});const be={class:"stencil-quote-wrap"},he=e("div",{class:"h1"},"SMD-Stencils",-1),ye=e("div",{class:"h2 mb-[15px]"}," Online calculation and order of your precision SMD-Stencils. ",-1),ge=e("i",{class:"common-icon-wrap calculator-icon mr-[18px]"},null,-1),xe=N({__name:"stencil",emits:["quote"],setup(p,{emit:f}){const c=[{label:"370×470mm",value:"370×470mm",isYes:!0},{label:"420×520mm",value:"420×520mm",isYes:!0},{label:"450×550mm",value:"450×550mm",isYes:!0},{label:"584×584mm",value:"584×584mm",isYes:!0},{label:"550×650mm",value:"550×650mm",isYes:!0},{label:"736×736mm",value:"736×736mm",isYes:!0},{label:"400×600mm",value:"400×600mm",isYes:!0},{label:"400×800mm",value:"400×800mm"},{label:"400×1000mm",value:"400×1000mm"},{label:"500×800mm",value:"500×800mm"},{label:"400×1200mm",value:"400×1200mm"},{label:"400×1400mm",value:"400×1400mm"},{label:"500×1200mm",value:"500×1200mm"},{label:"500×1400mm",value:"500×1400mm"},{label:"190×290mm",value:"190×290mm",notNo:!0,isNonFrameWork:!0},{label:"550×550mm",value:"550×550mm",notNo:!0,isNonFrameWork:!0}],g=B(()=>n.radStencilType==="Non-framework"?c.filter(u=>u.notNo):c.filter(u=>!u.notNo)),n=O({radStencilType:"Framework",radStencilId:"",radStencilSide:"Top Side",iptStencilNum:1}),o=Q(()=>{f("quote",JSON.parse(JSON.stringify(n)))});return(u,t)=>{const s=i("el-radio-button"),h=i("el-radio-group"),d=i("el-form-item"),y=i("el-option"),v=i("el-select"),V=i("el-input"),m=i("el-button"),b=i("el-form");return r(),_("div",be,[he,ye,a(b,{inline:!0,model:n,"label-position":"top"},{default:l(()=>[a(d,{label:"Stencil type",prop:"radStencilType",onChange:t[1]||(t[1]=w=>n.radStencilId="")},{default:l(()=>[a(h,{modelValue:n.radStencilType,"onUpdate:modelValue":t[0]||(t[0]=w=>n.radStencilType=w)},{default:l(()=>[a(s,{label:"Framework"}),a(s,{label:"Non-framework"})]),_:1},8,["modelValue"])]),_:1}),a(d,{label:"Size (mm)",prop:"radStencilId"},{default:l(()=>[a(v,{modelValue:n.radStencilId,"onUpdate:modelValue":t[2]||(t[2]=w=>n.radStencilId=w),placeholder:"Choose Size (mm)",class:"w-128"},{default:l(()=>[(r(!0),_(S,null,C(g.value,w=>(r(),U(y,{key:w.label,value:w.value,label:w.label},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(d,{label:"Stencil side",prop:"radStencilSide"},{default:l(()=>[a(v,{modelValue:n.radStencilSide,"onUpdate:modelValue":t[3]||(t[3]=w=>n.radStencilSide=w),placeholder:"Choose Size (mm)",class:"w-238"},{default:l(()=>[a(y,{value:"Top Side",label:"Top Side"}),a(y,{value:"Bottom Side",label:"Bottom Side"}),a(y,{value:"Combine Top Bottom",label:"Combine Top Bottom"}),a(y,{value:"Separate Top Bottom",label:"Separate Top Bottom"})]),_:1},8,["modelValue"])]),_:1}),a(d,{prop:"iptStencilNum",label:"Quantity"},{default:l(()=>[a(V,{type:"text",modelValue:n.iptStencilNum,"onUpdate:modelValue":t[4]||(t[4]=w=>n.iptStencilNum=w),class:"w-128",oninput:"value=value.replace(/[^\\d]/g,'')",maxlength:"8"},null,8,["modelValue"])]),_:1}),a(d,null,{default:l(()=>[a(m,{type:"primary",class:"s-btn mt-[10px]",onClick:T(o)},{default:l(()=>[ge,$(" Quote Now ")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"])])}}});const we={class:"fpc-quote-wrap"},$e={class:"tabs-wrap"},Le=e("i",{class:"common-icon-wrap calculator-icon mr-[18px]"},null,-1),ke=N({__name:"fpc",emits:["quote"],setup(p,{emit:f}){const c=[{label:"1 Layer",value:1},{label:"2 Layer",value:2},{label:"4 Layer",value:4},{label:"6 Layer",value:6},{label:"8 Layer",value:8}],g=[{label:"2 Layer",value:2},{label:"4 Layer",value:4},{label:"6 Layer",value:6},{label:"8 Layer",value:8},{label:"10 Layer",value:10},{label:"12 Layer",value:12},{label:"14 Layer",value:14},{label:"16 Layer",value:16},{label:"18 Layer",value:18},{label:"20 Layer",value:20},{label:"22 Layer",value:22},{label:"24 Layer",value:24},{label:"26 Layer",value:26},{label:"28 Layer",value:28},{label:"30 Layer",value:30},{label:"32 Layer",value:32}],n=B(()=>t.value==="flexible"?c:g),o=B(()=>t.value==="flexible"?"Flexible Qty":"Rigid-flex Qty"),u=F(),t=F("flexible"),s=O({hidLength:"",hidWidth:"",hidNum:"",hidLayers:1}),h=async y=>{var v;await((v=u.value)==null?void 0:v.resetFields()),t.value=y,y==="flexible"?Object.assign(s,{layer:1}):y==="rigidFlex"&&Object.assign(s,{layer:4})},d=Q(()=>{f("quote",JSON.parse(JSON.stringify(Object.assign(s,{childType:t.value}))))});return(y,v)=>{const V=i("el-input"),m=i("el-form-item"),b=i("el-option"),w=i("el-select"),J=i("el-button"),E=i("el-form");return r(),_("div",we,[e("div",$e,[e("div",{class:W(t.value==="flexible"?"active":""),onClick:v[0]||(v[0]=k=>h("flexible"))}," Flexible PCB ",2),e("div",{class:W(t.value==="rigidFlex"?"active":""),onClick:v[1]||(v[1]=k=>h("rigidFlex"))}," Rigid-Flex PCB ",2)]),a(E,{class:"pl-[25px] pt-[20px]",inline:!0,model:s,"label-position":"top",ref_key:"formRef",ref:u},{default:l(()=>[a(m,{label:"Dimensions",class:"btw-item"},{default:l(()=>[a(m,{prop:"hidLength"},{default:l(()=>[a(V,{type:"text",modelValue:s.hidLength,"onUpdate:modelValue":v[2]||(v[2]=k=>s.hidLength=k),class:"btw-input before",placeholder:"Length",oninput:"value=value.replace(/^\\D*(\\d*(?:\\.\\d{0,})?).*$/g, '$1').replace(/^0{1,}[0-9]/g,'')"},{append:l(()=>[$("x")]),_:1},8,["modelValue"])]),_:1}),a(m,{prop:"hidWidth"},{default:l(()=>[a(V,{type:"text",modelValue:s.hidWidth,"onUpdate:modelValue":v[3]||(v[3]=k=>s.hidWidth=k),class:"btw-input after",placeholder:"Width",oninput:"value=value.replace(/^\\D*(\\d*(?:\\.\\d{0,})?).*$/g, '$1').replace(/^0{1,}[0-9]/g,'')"},{append:l(()=>[$("mm")]),_:1},8,["modelValue"])]),_:1})]),_:1}),a(m,{prop:"hidNum",label:"Quantity"},{default:l(()=>[a(V,{type:"text",modelValue:s.hidNum,"onUpdate:modelValue":v[4]||(v[4]=k=>s.hidNum=k),class:"w-160",oninput:"value=value.replace(/[^\\d]/g,'')",maxlength:"8",palceholder:o.value},null,8,["modelValue","palceholder"])]),_:1}),a(m,{prop:"hidLayers",label:"Layers"},{default:l(()=>[a(w,{placeholder:"Choose Num (pcs)",class:"w-190",modelValue:s.hidLayers,"onUpdate:modelValue":v[5]||(v[5]=k=>s.hidLayers=k)},{default:l(()=>[(r(!0),_(S,null,C(n.value,k=>(r(),U(b,{key:k.value,value:k.value,label:k.label},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(m,null,{default:l(()=>[a(J,{type:"primary",class:"s-btn mt-[10px]",onClick:T(d)},{default:l(()=>[Le,$(" Quote Now ")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"])])}}});const Se={class:"quote-com-wrap"},Ce={class:"custom-tabs-label"},Ne={class:"quote-tabs-content"},Ve=N({__name:"index",setup(p){const f=[{key:"standard",name:"PCB Prototype",com:H},{key:"advanced",name:"Advanced PCBs",com:fe},{key:"fpc",name:"FPC/Rigid-Flex",com:ke},{key:"assembly",name:"PCB Assembly",com:ue},{key:"stencil",name:"SMD Stencil",com:xe}],c=F("standard"),g=t=>{c.value=t},n=B(()=>{const t=f.find(s=>s.key===c.value);return(t==null?void 0:t.com)??H}),o=j(),u=t=>{const s=Object.assign(t,{tab:c.value});sessionStorage.removeItem("quoteInfo"),sessionStorage.setItem("quoteInfo",JSON.stringify(s)),o.push("/instantQuote")};return(t,s)=>{const h=i("el-tab-pane"),d=i("el-tabs");return r(),_("div",Se,[a(d,{type:"border-card",tabPosition:"left",class:"quote-tabs",modelValue:c.value,"onUpdate:modelValue":s[0]||(s[0]=y=>c.value=y),onTabChange:g},{default:l(()=>[(r(),_(S,null,C(f,(y,v)=>a(h,{key:y.key,name:y.key},{label:l(()=>[e("span",Ce,[e("span",{class:W([`quote-icon-${v+1}`,"quote-icon"])},null,2),e("span",null,q(y.name),1)])]),default:l(()=>[e("div",Ne,[(r(),U(z(n.value),{onQuote:u},null,32))])]),_:2},1032,["name"])),64))]),_:1},8,["modelValue"])])}}});const Be=P(Ve,[["__scopeId","data-v-d6e9cbfb"]]);const Pe={},Te={class:"content1 pw-main-feature"},qe=L('<div class="wcontainer" data-v-7f3c361a><div class="feature-list" data-v-7f3c361a><div class="bestv grid-item" data-v-7f3c361a><i class="hm-icon" data-v-7f3c361a></i><h3 data-v-7f3c361a>Best Value</h3><p data-v-7f3c361a>Manufacturer Direct Pricing</p></div><div class="fastt grid-item" data-v-7f3c361a><i class="hm-icon" data-v-7f3c361a></i><h3 data-v-7f3c361a>Fast Turnaround</h3><p data-v-7f3c361a>As fast as 24 hours</p></div><div class="lowm grid-item" data-v-7f3c361a><i class="hm-icon" data-v-7f3c361a></i><h3 data-v-7f3c361a>One-on-one assistance</h3><p data-v-7f3c361a>Smooth shopping experience</p></div></div></div>',1),Ie=[qe];function Fe(p,f){return r(),_("div",Te,Ie)}const Oe=P(Pe,[["render",Fe],["__scopeId","data-v-7f3c361a"]]),Qe=""+new URL("../jpg/pro-PCB-9e32e047.jpg",import.meta.url).href,Ue=""+new URL("../jpg/pro-PCBA-cc7ef652.jpg",import.meta.url).href,je=""+new URL("../jpg/pro-Flex-f1fa608b.jpg",import.meta.url).href,De=""+new URL("../jpg/pro-HDI-2dafd531.jpg",import.meta.url).href,R=p=>(D("data-v-aa18a092"),p=p(),A(),p),Ae={class:"wcontainer content2"},Re={class:"pcbw_process clearfix"},We={class:"process-title"},He=R(()=>e("h3",null,"How to use",-1)),Me=R(()=>e("p",{class:"pro-content"},"Place an order on BPCB",-1)),Je={class:"text-[26px] mt-[1px]"},Ee=L('<div class="process-step" data-v-aa18a092><div class="steptopicon clearfix" data-v-aa18a092><ul data-v-aa18a092><li class="onliquot" data-v-aa18a092><i data-v-aa18a092></i><span class="lineprocess" data-v-aa18a092></span></li><li class="uplpcbfil" data-v-aa18a092><span class="lineprocess" data-v-aa18a092></span><i data-v-aa18a092></i><span class="lineprocess" data-v-aa18a092></span></li><li class="ordreview" data-v-aa18a092><span class="lineprocess" data-v-aa18a092></span><i data-v-aa18a092></i><span class="lineprocess" data-v-aa18a092></span></li><li class="payme" data-v-aa18a092><span class="lineprocess" data-v-aa18a092></span><i data-v-aa18a092></i><span class="lineprocess" data-v-aa18a092></span></li><li class="fabric" data-v-aa18a092><span class="lineprocess" data-v-aa18a092></span><i data-v-aa18a092></i><span class="lineprocess" data-v-aa18a092></span></li><li class="delive" data-v-aa18a092><span class="lineprocess" data-v-aa18a092></span><i data-v-aa18a092></i><span class="lineprocess" data-v-aa18a092></span></li><li class="comrec" data-v-aa18a092><span class="lineprocess" data-v-aa18a092></span><i data-v-aa18a092></i></li></ul></div><div class="steptopcontent clearfix" data-v-aa18a092><ul data-v-aa18a092><li data-v-aa18a092>Online Quote</li><li data-v-aa18a092>Upload PCB File</li><li data-v-aa18a092>Order Review</li><li class="payme" data-v-aa18a092>Payment</li><li data-v-aa18a092>Real-time Fabrication Tracking</li><li data-v-aa18a092>Delivery</li><li data-v-aa18a092>Confirm Received</li></ul></div></div>',1),ze={class:"solutions-box clearfix"},Ye=R(()=>e("div",{class:"solutions-left"},[e("div",{class:"more-title"},[e("span",{class:"flag"},"Solutions"),$(" We Do More ")]),e("div",{class:"more-title-des"}," Electrical & Mechanical, cable assembly, box build assembly, Final Product Assembly and contract manufacturing... ")],-1)),Ge={class:"solutions-right"},Ke={class:"entry"},Xe=L('<div class="entry-img" data-v-aa18a092><img src="'+Qe+'" alt="PCB prototype" data-v-aa18a092></div><div class="entry-title" data-v-aa18a092>PCB Prototype</div><div class="entry-price js-changecurrency5price" data-v-aa18a092> From <span class="price" data-v-aa18a092>$10</span>/10pcs </div><div class="entry-time" data-v-aa18a092>Build Time:24 hours</div>',4),Ze=[Xe],ea={class:"entry"},aa=L('<div class="entry-img" data-v-aa18a092><img src="'+Ue+'" alt="PCB Assembly" data-v-aa18a092></div><div class="entry-title" data-v-aa18a092>PCB Assembly</div><div class="entry-price js-changecurrency30price" data-v-aa18a092> From <span class="price" data-v-aa18a092>$30</span></div><div class="entry-time" data-v-aa18a092>100+ component vendors</div>',4),la=[aa],ta={class:"entry"},sa=L('<div class="entry-img" data-v-aa18a092><img src="'+je+'" alt="Flex,Rigid-Flex PCB" data-v-aa18a092></div><div class="entry-title" data-v-aa18a092>Flex,Rigid-Flex PCB</div><div class="entry-price js-changecurrency46_74price" data-v-aa18a092> From <span class="price" data-v-aa18a092>$46.74</span></div><div class="entry-time" data-v-aa18a092>Build Time:6-7 days</div>',4),oa=[sa],na={class:"entry"},ia=L('<div class="entry-img" data-v-aa18a092><img src="'+De+'" alt="HDI PCB" data-v-aa18a092></div><div class="entry-title" data-v-aa18a092>HDI PCB</div><div class="entry-price js-changecurrency349_68price" data-v-aa18a092> From <span class="price" data-v-aa18a092>$349.68</span></div><div class="entry-time" data-v-aa18a092>Build Time:7-8 days</div>',4),ca=[ia],da={key:0,class:"video-dialog",teleport:"body"},ra={class:"video-wrap"},ua=R(()=>e("source",{src:"https://www.pcbway.com/img/images/how-to-order.mp4",type:"video/mp4"},null,-1)),pa=[ua],ma=N({__name:"content2",setup(p){const f=F(!1),c=F(),g=()=>{f.value=!0,K(()=>{var t;(t=c.value)==null||t.play()})},n=()=>{var t;(t=c.value)==null||t.pause(),f.value=!1},o=j(),u=t=>{const s=Object.assign(t);sessionStorage.removeItem("quoteInfo"),sessionStorage.setItem("quoteInfo",JSON.stringify(s)),o.push("/instantQuote")};return(t,s)=>{const h=i("el-icon");return r(),_("div",Ae,[e("div",Re,[e("div",We,[He,Me,e("a",{class:"shopnow-btn openvideo1",onClick:g},[e("span",Je,[a(h,null,{default:l(()=>[a(T(ae))]),_:1})]),$("See how it works")])]),Ee]),e("div",ze,[Ye,e("div",Ge,[e("div",Ke,[e("a",{onClick:s[0]||(s[0]=d=>u({tab:"standard"}))},Ze)]),e("div",ea,[e("a",{onClick:s[1]||(s[1]=d=>u({tab:"assembly"}))},la)]),e("div",ta,[e("a",{onClick:s[2]||(s[2]=d=>u({tab:"fpc"}))},oa)]),e("div",na,[e("a",{onClick:s[3]||(s[3]=d=>u({tab:"advanced"}))},ca)])])]),(r(),U(G,{to:"body"},[f.value?(r(),_("div",da,[e("div",ra,[e("span",{class:"close-video cursor-pointer",onClick:n},[a(h,null,{default:l(()=>[a(T(le))]),_:1})]),e("video",{class:"video",controls:"true",autoplay:"true",ref_key:"videoRef",ref:c},pa,512)])])):Y("",!0)]))])}}});const va=P(ma,[["__scopeId","data-v-aa18a092"]]),_a=""+new URL("../png/pcba_product01-b0dae3f8.png",import.meta.url).href,fa=""+new URL("../jpg/home_pcba01-503d5ab6.jpg",import.meta.url).href,x=p=>(D("data-v-72ee34f0"),p=p(),A(),p),ba={class:"wcontainer clearfix content3"},ha={class:"hp-featuresource-item",style:{"margin-right":"20px"}},ya={class:"leftfeature",style:{"padding-left":"10px",width:"204px","border-right":"0 none"}},ga=x(()=>e("div",{class:"label",style:{background:"#32b051"}},null,-1)),xa={class:"promotion-plan promotion-plan-basic plan-box"},wa=x(()=>e("div",{class:"deck-name"},[e("h3",null,"Assembly Service Promotion"),e("span",{class:"plan-download-limit"}," Only")],-1)),$a={class:"deck-content"},La=x(()=>e("span",{class:"plan-currency"},"$",-1)),ka=x(()=>e("span",{class:"plan-amount monthly js-changecurrency30"},"30",-1)),Sa=x(()=>e("span",{class:"plan-month"},"in total",-1)),Ca=x(()=>e("span",{class:"plan-users"},"for 1-20pcs assembly",-1)),Na=x(()=>e("div",{class:"centerfeature"},[e("div",{class:"assembly_service_text"},[e("img",{src:_a,alt:"Assembly Service Promotion"})])],-1)),Va={class:"hp-featuresource-item"},Ba=L('<a class="leftfeature" data-v-72ee34f0><div class="label" data-v-72ee34f0></div><div class="title clearfix" data-v-72ee34f0> One-Stop Solution for PCB &amp; Assembly </div><div class="subTitle" data-v-72ee34f0>Made Easy,Quality,On Time</div><ul class="liebks" data-v-72ee34f0><li data-v-72ee34f0><i class="f-sp-check" data-v-72ee34f0></i>SMT &amp; Through-Hole Assembly</li><li data-v-72ee34f0><i class="f-sp-check" data-v-72ee34f0></i>Wave Solder for PCBA</li><li data-v-72ee34f0><i class="f-sp-check" data-v-72ee34f0></i>PCBA Online Quote</li><li style="letter-spacing:-1px;" data-v-72ee34f0><i class="f-sp-check" data-v-72ee34f0></i>One-stop BOM Purchase Solution </li><li data-v-72ee34f0><i class="f-sp-check" data-v-72ee34f0></i>Over 99.6% Satisfied rate</li><li data-v-72ee34f0><i class="f-sp-check" data-v-72ee34f0></i>Box Build,Cable Wire Harness</li></ul><div class="tagContainer" data-v-72ee34f0><div class="tag" style="background-color:#0c9;" data-v-72ee34f0> Functional Testing <br data-v-72ee34f0>and Other Testing </div><div class="tag" style="background-color:#0c9;" data-v-72ee34f0>IC Programming</div><div class="tag" style="background-color:#0c9;" data-v-72ee34f0>BGA &amp; QFN</div></div></a>',1),Pa={class:"centerfeature"},Ta=L('<div class="topContainer" data-v-72ee34f0><div class="column-group__ct-inner" data-v-72ee34f0><h3 class="column-group__sub-headline" data-v-72ee34f0>Inside BPCB Factory</h3><div class="column-group__img-wrap" data-v-72ee34f0><img src="'+fa+'" alt="Production Process Video" data-v-72ee34f0></div></div></div>',1),qa={class:"clearfix join_transaction"},Ia=x(()=>e("span",{class:"left"},[e("i",{class:"hm-icon"})],-1)),Fa={class:"left"},Oa={class:"num_jilu"},Qa=x(()=>e("p",null,"Last 30 days",-1)),Ua=x(()=>e("li",{class:"shuline"},null,-1)),ja=x(()=>e("span",{class:"left"},[e("i",{class:"payshu hm-icon"})],-1)),Da={class:"left"},Aa={class:"num_jilu"},Ra=x(()=>e("p",null,"Customers",-1)),Wa=x(()=>e("li",{class:"shuline"},null,-1)),Ha=x(()=>e("span",{class:"left"},[e("i",{class:"chegnjiaoshu hm-icon"})],-1)),Ma={class:"left"},Ja={class:"num_jilu"},Ea=x(()=>e("p",null,"Paying",-1)),za=N({__name:"content3",setup(p){const f=B(()=>I().orderNumbers),c=B(()=>I().customerNumber),g=B(()=>I().payNumber),n=j(),o=u=>{const t=Object.assign(u);sessionStorage.removeItem("quoteInfo"),sessionStorage.setItem("quoteInfo",JSON.stringify(t)),n.push("/instantQuote")};return(u,t)=>(r(),_("div",ba,[e("div",ha,[e("div",ya,[ga,e("div",xa,[wa,e("div",$a,[La,ka,Sa,Ca,e("a",{onClick:t[0]||(t[0]=s=>o({tab:"assembly"})),class:"s-btn-encased"},"Quote Now")])])]),Na]),e("div",Va,[Ba,e("div",Pa,[Ta,e("ul",qa,[e("li",null,[Ia,e("div",Fa,[e("span",Oa,q(f.value.toLocaleString())+"+",1),Qa])]),Ua,e("li",null,[ja,e("div",Da,[e("span",Aa,q(c.value.toLocaleString())+"+",1),Ra])]),Wa,e("li",null,[Ha,e("div",Ma,[e("span",Ja,q(g.value.toLocaleString())+"+",1),Ea])])])])])]))}});const Ya=P(za,[["__scopeId","data-v-72ee34f0"]]),M=p=>(D("data-v-9c2238ca"),p=p(),A(),p),Ga={class:"wcontainer clearfix content4",style:{"border-top":"2px solid #b59f38"}},Ka={class:"market-list"},Xa=M(()=>e("h1",{class:"logo-slogan"}," Affordable Prototype PCB Manufacturer in China ",-1)),Za=M(()=>e("div",{id:"market-dynamic",class:"market-dynamic"},[e("div",{class:"title"},"Latest orders")],-1)),el={class:"order-market clear"},al=L('<div class="olist-title clearfix" data-v-9c2238ca><ul data-v-9c2238ca><li style="width:25%;" data-v-9c2238ca>Date</li><li style="width:20%;" data-v-9c2238ca>Buyer name</li><li style="width:30%;" data-v-9c2238ca>Build Time</li><li style="width:25%;" data-v-9c2238ca>Progress</li></ul></div>',1),ll={class:"orlist-container"},tl={class:"clearfix"},sl={style:{width:"25%"}},ol={style:{width:"20%"}},nl=["src"],il={style:{width:"30%"},class:"s-price"},cl={style:{width:"25%"},class:"oprogress"},dl={class:"index-sale"},rl={class:"clearfix market-application-list"},ul={class:"pcb_assembly"},pl=L('<p data-v-9c2238ca><span class="hm-icon icon-cpa" data-v-9c2238ca></span></p><h3 data-v-9c2238ca>PCB Assembly</h3><p class="left-ability" data-v-9c2238ca><label data-v-9c2238ca>Part procurement</label><span class="ability_ru" data-v-9c2238ca>Turnkey/Kitted/Hybrid</span></p><p class="left-ability" data-v-9c2238ca><label data-v-9c2238ca>Turn time</label><span data-v-9c2238ca>2 days - 3 weeks </span></p><p class="left-ability" data-v-9c2238ca><label data-v-9c2238ca>Qty req.</label><span data-v-9c2238ca>1 - 10000+</span></p><p class="left-ability" data-v-9c2238ca><label data-v-9c2238ca>Capability</label><span data-v-9c2238ca>SMT &amp; Supply Parts</span></p><p class="left-ability" data-v-9c2238ca><label data-v-9c2238ca>Soldering</label><span data-v-9c2238ca>Machine+Hand </span></p><p class="left-ability" data-v-9c2238ca><label data-v-9c2238ca>Stencil</label><span data-v-9c2238ca>Framework Stencil</span></p><div class="split-line" data-v-9c2238ca></div>',9),ml={class:"custom_specs"},vl=L('<p data-v-9c2238ca><span class="hm-icon icon-ccs" data-v-9c2238ca></span></p><h3 data-v-9c2238ca>Full Feature</h3><p class="left-ability" data-v-9c2238ca><label data-v-9c2238ca>Layer count</label><span data-v-9c2238ca>1 - 64 Layers</span></p><p class="left-ability" data-v-9c2238ca><label data-v-9c2238ca>Turn time</label><span data-v-9c2238ca>Same Day - 5 weeks </span></p><p class="left-ability" data-v-9c2238ca><label data-v-9c2238ca>Qty req.</label><span data-v-9c2238ca>1 - 10000+</span></p><p class="left-ability" data-v-9c2238ca><label data-v-9c2238ca>Board type</label><span style="font-size:12px;line-height:13px;text-align:right;" data-v-9c2238ca>High-Temp.FR4, Flex,<br data-v-9c2238ca>Flex-rigid, HDI, Rogers, etc.</span></p><p class="left-ability" data-v-9c2238ca><label data-v-9c2238ca>Finished copper</label><span data-v-9c2238ca>0.5 - 13oz</span></p><p class="left-ability" data-v-9c2238ca><label data-v-9c2238ca>Trace / space</label><span data-v-9c2238ca>Down to 2/2mil</span></p><div class="split-line" data-v-9c2238ca></div>',9),_l={class:"standard_specs"},fl=L('<p data-v-9c2238ca><span class="hm-icon icon-csts" data-v-9c2238ca></span></p><h3 data-v-9c2238ca> Basic Specs <i class="p-icon hot-icon" data-v-9c2238ca></i></h3><p class="left-ability" data-v-9c2238ca><label data-v-9c2238ca><i class="hm-icon main-picon" data-v-9c2238ca></i></label><span class="ability_ru" data-v-9c2238ca>1 - 10 Layers</span></p><p class="left-ability" data-v-9c2238ca><label data-v-9c2238ca>Turn time</label><span data-v-9c2238ca>As fast as 24 hours</span></p><p class="left-ability" data-v-9c2238ca><label data-v-9c2238ca>Qty req.</label><span data-v-9c2238ca>5 - 10000+</span></p><p class="left-ability" data-v-9c2238ca><label data-v-9c2238ca>Materials</label><span data-v-9c2238ca>FR4,Aluminum</span></p><p class="left-ability" data-v-9c2238ca><label data-v-9c2238ca>Finished copper</label><span data-v-9c2238ca>1-3 oz</span></p><p class="left-ability" data-v-9c2238ca><label data-v-9c2238ca>Trace / space</label><span data-v-9c2238ca>4/4mil (0.1mm)</span></p>',8),bl=N({__name:"content4",setup(p){const f=B(()=>I().latestOrderList),c=j(),g=n=>{const o=Object.assign(n);sessionStorage.removeItem("quoteInfo"),sessionStorage.setItem("quoteInfo",JSON.stringify(o)),c.push("/instantQuote")};return(n,o)=>{const u=i("el-progress"),t=X("time-format");return r(),_("div",Ga,[e("div",Ka,[Xa,Za,e("div",el,[al,e("div",ll,[(r(!0),_(S,null,C(f.value,(s,h)=>(r(),_("ul",tl,[Z(e("li",sl,null,512),[[t,s.create_time]]),e("li",ol,[e("img",{class:"mr-[2px] align-middle",src:`/country/${Math.ceil(Math.random()*30)}.gif`},null,8,nl),$(q(s.identity),1)]),e("li",il,q(s.build_time),1),e("li",cl,[a(u,{percentage:s.progress,"text-inside":!0,"stroke-width":16},null,8,["percentage"])])]))),256))])])]),e("div",dl,[e("ul",rl,[e("li",ul,[pl,e("p",null,[e("a",{onClick:o[0]||(o[0]=s=>g({tab:"standard"})),class:"upgrade_plans__cta"},"Quote Now")])]),e("li",ml,[vl,e("p",null,[e("a",{onClick:o[1]||(o[1]=s=>g({tab:"fpc"})),class:"upgrade_plans__cta blackcolplans"},"Quote Now")])]),e("li",_l,[fl,e("p",null,[e("a",{onClick:o[2]||(o[2]=s=>g({tab:"assembly"})),class:"upgrade_plans__cta goldcoloplans"},"Quote Now")])])])])])}}});const hl=P(bl,[["__scopeId","data-v-9c2238ca"]]),yl=""+new URL("../png/home-image4-9f70298a.png",import.meta.url).href,gl=""+new URL("../jpg/home-image5-19e09ed3.jpg",import.meta.url).href,xl=""+new URL("../jpg/home-image6-0aee5f57.jpg",import.meta.url).href;const wl={},$l=p=>(D("data-v-fdf635c2"),p=p(),A(),p),Ll={class:"wcontainer module-wrap clearfix content5"},kl=L('<div class="market-list whyus" data-v-fdf635c2><h2 data-v-fdf635c2>Why Buy Printed Circuit Boards From us?</h2><ul class="goldBullet" data-v-fdf635c2><li data-v-fdf635c2><i class="f-sp-check" data-v-fdf635c2></i>24 hours production lead-time*</li><li data-v-fdf635c2><i class="f-sp-check" data-v-fdf635c2></i>Team supported by over 90 professionals &amp; technical </li><li data-v-fdf635c2><i class="f-sp-check" data-v-fdf635c2></i>99% on-Time Shipping with great support from DHL </li><li data-v-fdf635c2><i class="f-sp-check" data-v-fdf635c2></i>Great quality approved by customers all over the world </li><li data-v-fdf635c2><i class="f-sp-check" data-v-fdf635c2></i>Trusted Experience</li><li data-v-fdf635c2><i class="f-sp-check" data-v-fdf635c2></i>A 24/7 non-stop production and assistance service </li><li data-v-fdf635c2><i class="f-sp-check" data-v-fdf635c2></i>Low minimum quantity requirement</li><li data-v-fdf635c2><i class="f-sp-check" data-v-fdf635c2></i>Factory PCBs with competitive advantages </li><li data-v-fdf635c2><i class="f-sp-check" data-v-fdf635c2></i>A Chinese expert in Electronic Manufacturing Service (EMS) </li></ul></div>',1),Sl=$l(()=>e("div",{class:"carousel-item-container"},[e("a",{class:"carousel-a"},[e("img",{class:"subcategory-img",src:yl,alt:"Advanced PCB:HIGH-END,COMPLEX",width:"240",height:"330"})]),e("a",{class:"carousel-a"},[e("img",{class:"subcategory-img",src:gl,alt:"Flexible,Rigid-Flex:Polyimid,Stiffener,E-Test",width:"240",height:"330"})]),e("a",{class:"carousel-a"},[e("img",{class:"subcategory-img",src:xl,alt:"PCB Assembly:Turnkey or consigned",width:"240",height:"330"})])],-1));function Cl(p,f){const c=i("el-carousel-item"),g=i("el-carousel");return r(),_("div",Ll,[kl,a(g,{autoplay:!1,arrow:"always",class:"carousel-wrap"},{default:l(()=>[(r(),_(S,null,C(4,n=>a(c,{key:n},{default:l(()=>[Sl]),_:2},1024)),64))]),_:1})])}const Nl=P(wl,[["render",Cl],["__scopeId","data-v-fdf635c2"]]);const Vl={},Bl={class:"content6"},Pl=L('<div class="hyperchannel" data-v-891971cc><div class="wcontainer" data-v-891971cc><div class="item fore1" data-v-891971cc><s data-v-891971cc></s><h4 data-v-891971cc>Buyer Protection</h4><p data-v-891971cc> We will refund if the PCB quality is not as described or has defects </p></div><div class="item fore2" data-v-891971cc><s data-v-891971cc></s><h4 data-v-891971cc>Worldwide Delivery</h4><p data-v-891971cc>Covers more than 200 countries and regions worldwide</p></div><div class="item fore3" data-v-891971cc><s data-v-891971cc></s><h4 data-v-891971cc>Safe Payment</h4><p data-v-891971cc>Pay with popular and secure payment methods</p></div><div class="item fore4" data-v-891971cc><s data-v-891971cc></s><h4 data-v-891971cc>Not A Broker</h4><p data-v-891971cc>Competitive pricing from manufacturer of diverse capabilities</p></div></div></div>',1),Tl=[Pl];function ql(p,f){return r(),_("div",Bl,Tl)}const Il=P(Vl,[["render",ql],["__scopeId","data-v-891971cc"]]),Fl={class:"home-wrap"},Ol={class:"home-quote-container"},Ql={class:"home-quote-wrap"},Ul={class:"home-module-wrap"},jl=N({name:"Welcome",__name:"index",setup(p){const f=B(()=>I().banner);return(c,g)=>{const n=i("el-carousel-item"),o=i("el-carousel");return r(),_("div",Fl,[a(o,{trigger:"click",height:"358px",arrow:"always",interval:6e3},{default:l(()=>[(r(!0),_(S,null,C(f.value,u=>(r(),U(n,{key:u},{default:l(()=>[e("div",{class:"bannder",style:ee({"background-image":`url(${u})`})},null,4)]),_:2},1024))),128))]),_:1}),e("div",Ol,[e("div",Ql,[a(Be,{class:"home-quick-quote"})])]),a(Oe),e("div",Ul,[a(va),a(Ya),a(hl),a(Nl),a(Il)])])}}});const Wl=P(jl,[["__scopeId","data-v-7f23ee96"]]);export{Wl as default};

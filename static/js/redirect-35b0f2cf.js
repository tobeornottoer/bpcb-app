import{d as s,h as c,b as p,e as u,f as _}from"./index-61481958.js";const h=s({name:"Redirect",__name:"redirect",setup(i){const{currentRoute:r,replace:t}=c(),{params:a,query:n}=p(r),{path:e}=a,o=Array.isArray(e)?e.join("/"):e;return t({path:"/"+o,query:n}),(m,d)=>(u(),_("div"))}});export{h as default};

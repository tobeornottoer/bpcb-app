import{d as s,i as c,b as p,e as u,f as i}from"./index-02b6e309.js";const l=s({name:"Redirect",__name:"redirect",setup(_){const{currentRoute:r,replace:t}=c(),{params:a,query:n}=p(r),{path:e}=a,o=Array.isArray(e)?e.join("/"):e;return t({path:"/"+o,query:n}),(m,d)=>(u(),i("div"))}});export{l as default};

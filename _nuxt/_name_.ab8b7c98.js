import{_ as h}from"./nuxt-link.72edb6f9.js";import{_ as p,o as c,c as l,b as i,w as u,a as t,u as f,h as x,i as b,t as s,j as o,k as v}from"./entry.6f45ec19.js";import{u as w}from"./vue.f36acd1f.b66b2dfc.js";import{c as B}from"./constructions.85efaf07.js";const L={},k={class:"container mb-4 mr-8 flex justify-end"},y=t("button",{class:"btn btn-primary"},"回列表清單",-1);function H(a,r){const e=h;return c(),l("div",k,[i(e,{href:"/constructions"},{default:u(()=>[y]),_:1})])}const g=p(L,[["render",H]]),M={class:""},T={class:"flex flex-col md:flex-row"},C={class:"w-full md:w-1/3 mx-1"},N={class:"table-auto w-full"},D=t("td",null,"項目",-1),I=t("td",null,"類別",-1),$=t("td",null,"完工",-1),S=t("td",null,"經費",-1),V=t("td",null,"狀態",-1),j=t("h2",null,"計畫概要",-1),A=["innerHTML"],E={key:0},R=t("h3",{class:"bg-indigo-100 p-1 my-2"},"議員質詢",-1),q=["innerHTML"],z={class:"w-full md:w-2/3 mx-1"},F=t("h2",null,"建設詳情",-1),G=["innerHTML"],U={__name:"[name]",setup(a){const e=f().params.name;w({title:"重要建設 - "+e});const n=B.find(_=>_.Item===e);return(_,J)=>{const d=g,m=b;return c(),x(m,{name:"detailpage"},{default:u(()=>[t("div",M,[t("h2",null,s(o(n).Item)+" 詳細資料",1),t("div",T,[t("div",C,[t("table",N,[t("tr",null,[D,t("td",null,s(o(n).Item),1)]),t("tr",null,[I,t("td",null,s(o(n).Category)+" - "+s(o(n).Id),1)]),t("tr",null,[$,t("td",null,s(o(n).Due),1)]),t("tr",null,[S,t("td",null,s(o(n).Budget),1)]),t("tr",null,[V,t("td",null,s(o(n).StatusB)+" - "+s(o(n).StatusA),1)])]),j,t("p",{innerHTML:o(n).DescriptionA},null,8,A),o(n).Contribution?(c(),l("div",E,[R,t("div",{innerHTML:o(n).Contribution},null,8,q)])):v("",!0)]),t("div",z,[F,t("div",{innerHTML:o(n).DescriptionB},null,8,G)])])]),i(d)]),_:1})}}};export{U as default};

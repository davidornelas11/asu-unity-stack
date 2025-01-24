import{j as n}from"./jsx-runtime-Dtp4yoXy.js";import{c as K}from"./index-DqAnBlJf.js";import"./index-iql2cimc.js";import"./_commonjsHelpers-uqKOVeGF.js";var s=(e=>(e.UNORDERED="unordered",e.ORDERED="ordered",e.ICON="icon",e.STEP="step",e.DISPLAY="display",e))(s||{}),R=(e=>(e.UL="ul",e.OL="ol",e))(R||{}),o=(e=>(e.NONE="none",e.LIGHT="light",e.MEDIUM="medium",e.DARK="dark",e))(o||{}),f=(e=>(e.DEFAULT="default",e.PRIMARY="primary",e.SECONDARY="secondary",e))(f||{});const k=e=>{switch(e){case R.OL:case s.ORDERED:case s.STEP:return R.OL;default:return R.UL}},I=({listType:e,content:r,icon:a,nestedType:T,nestedItems:l})=>{const[d,...u]=Array.isArray(r)?r:[r];let p=null;if(l!=null&&l.length){const m=T||e,c=k(m);p=n.jsx(c,{children:l.map((F,$)=>n.jsx(I,{listType:m,...F},$))})}return n.jsxs("li",{children:[a&&n.jsx("span",{className:`fa-li ${a==null?void 0:a[0]} fa-${a==null?void 0:a[1]}`}),d," ",u.map((m,c)=>[n.jsx("br",{},`br-${c}`),n.jsx("span",{children:m},c)]),p]})};try{I.displayName="ListItem",I.__docgenInfo={description:"",displayName:"ListItem",props:{listType:{defaultValue:null,description:"",name:"listType",required:!1,type:{name:"enum",value:[{value:'"unordered"'},{value:'"ordered"'},{value:'"icon"'},{value:'"step"'},{value:'"display"'},{value:'"ul"'},{value:'"ol"'}]}},content:{defaultValue:null,description:"Content",name:"content",required:!0,type:{name:"ReactNode | ReactNode[]"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"[string, string]"}},listItemStyleColor:{defaultValue:null,description:"",name:"listItemStyleColor",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"primary"'},{value:'"secondary"'}]}},nestedType:{defaultValue:null,description:"",name:"nestedType",required:!1,type:{name:"enum",value:[{value:'"ul"'},{value:'"ol"'}]}},nestedItems:{defaultValue:null,description:"",name:"nestedItems",required:!1,type:{name:"ListItemProps[]"}}}}}catch{}const N=({listType:e=s.UNORDERED,backgroundColor:r=o.NONE,listItemStyleColor:a=f.DEFAULT,items:T})=>{const l=k(e);let d="maroon",u="maroon";r===o.DARK&&(d="gold",u="gold"),e===s.STEP&&(d="uds-steplist-maroon",u="uds-steplist-gold",r===o.DARK&&(d="uds-steplist-gold"));const p=K({"uds-list":e===s.UNORDERED||e===s.ORDERED,"uds-list fa-ul":e===s.ICON,"uds-list uds-steplist":e===s.STEP,"uds-list uds-display-list":e===s.DISPLAY,"light-smokemode":r===o.LIGHT,smokemode:r===o.MEDIUM,darkmode:r===o.DARK,[`${d}`]:a===f.PRIMARY,[` ${u}`]:a===f.SECONDARY});return n.jsx(l,{className:p||null,children:T.map((m,c)=>n.jsx(I,{listType:e,...m},c))})};try{N.displayName="List",N.__docgenInfo={description:"",displayName:"List",props:{listType:{defaultValue:{value:"ListComponentType.UNORDERED"},description:"",name:"listType",required:!1,type:{name:"enum",value:[{value:'"unordered"'},{value:'"ordered"'},{value:'"icon"'},{value:'"step"'},{value:'"display"'}]}},backgroundColor:{defaultValue:{value:"ListBackgroundColor.NONE"},description:"",name:"backgroundColor",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"light"'},{value:'"medium"'},{value:'"dark"'}]}},listItemStyleColor:{defaultValue:{value:"ItemListStyleColor.DEFAULT"},description:"",name:"listItemStyleColor",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"primary"'},{value:'"secondary"'}]}},items:{defaultValue:null,description:"",name:"items",required:!1,type:{name:"ListItemProps[]"}}}}}catch{}const v="Lorem ipsum dolor sit amet, adipiscing elit.",t={content:v},i={content:["Title",v]},G=(e,r)=>n.jsx("div",{className:"container",children:n.jsx("div",{className:"row",children:e(r.args,r)})}),Q={title:"Components/List",component:N,decorators:[G]},h=e=>n.jsx(N,{...e}),y={render:h.bind({}),args:{listType:s.UNORDERED,items:[t,t,{...t,nestedItems:[t,t,{...t,nestedItems:[t,t,{...t,nestedItems:[t,t,t]},t]},t]},t]}},D={render:h.bind({}),args:{...y.args,listType:s.ORDERED}},E={render:h.bind({}),args:{listType:s.ICON,items:[{content:v,icon:["fas","rocket"]},{content:v,icon:["fas","bus"]},{content:v,icon:["fas","car"]},{content:n.jsxs(n.Fragment,{children:['We hide icons from assistive technology in these examples, but whether to hide using aria-hidden="true" or not should be determined by the developer based on whether the icons are intended as decoration only or are intended to convey meaning. See ',n.jsx("a",{href:"https://fontawesome.com/v4.7.0/accessibility/",children:"Font Awesome Accessibility"})," for guidelines."]}),icon:["fas","bicycle"]}]}},g={render:h.bind({}),args:{listType:s.STEP,backgroundColor:o.MEDIUM,listItemStyleColor:f.SECONDARY,items:[i,i,i,i]}},L={render:h.bind({}),args:{listType:s.DISPLAY,items:[i,i,i,i,i,i]}};var b,O,S;y.parameters={...y.parameters,docs:{...(b=y.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: listTemplate.bind({}),
  args: {
    listType: ListComponentType.UNORDERED,
    items: [item, item, {
      ...item,
      nestedItems: [item, item, {
        ...item,
        nestedItems: [item, item, {
          ...item,
          nestedItems: [item, item, item]
        }, item]
      }, item]
    }, item]
  }
}`,...(S=(O=y.parameters)==null?void 0:O.docs)==null?void 0:S.source}}};var A,C,_;D.parameters={...D.parameters,docs:{...(A=D.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: listTemplate.bind({}),
  args: {
    ...UnorderedList.args,
    listType: ListComponentType.ORDERED
  }
}`,...(_=(C=D.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var x,U,j;E.parameters={...E.parameters,docs:{...(x=E.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: listTemplate.bind({}),
  args: {
    listType: ListComponentType.ICON,
    items: [{
      content: lorem,
      icon: ["fas", "rocket"]
    }, {
      content: lorem,
      icon: ["fas", "bus"]
    }, {
      content: lorem,
      icon: ["fas", "car"]
    }, {
      content: <>We hide icons from assistive technology in these examples, but whether to hide using aria-hidden="true" or not should be determined by the developer based on whether the icons are intended as decoration only or are intended to convey meaning. See <a href="https://fontawesome.com/v4.7.0/accessibility/">Font Awesome Accessibility</a> for guidelines.</>,
      icon: ["fas", "bicycle"]
    }]
  }
}`,...(j=(U=E.parameters)==null?void 0:U.docs)==null?void 0:j.source}}};var P,q,w;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: listTemplate.bind({}),
  args: {
    listType: ListComponentType.STEP,
    backgroundColor: ListBackgroundColor.MEDIUM,
    listItemStyleColor: ItemListStyleColor.SECONDARY,
    items: [item2, item2, item2, item2]
  }
}`,...(w=(q=g.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var M,V,Y;L.parameters={...L.parameters,docs:{...(M=L.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: listTemplate.bind({}),
  args: {
    listType: ListComponentType.DISPLAY,
    items: [item2, item2, item2, item2, item2, item2]
  }
}`,...(Y=(V=L.parameters)==null?void 0:V.docs)==null?void 0:Y.source}}};const X=["UnorderedList","OrderedList","IconList","StepList","DisplayList"];export{L as DisplayList,E as IconList,D as OrderedList,g as StepList,y as UnorderedList,X as __namedExportsOrder,Q as default};

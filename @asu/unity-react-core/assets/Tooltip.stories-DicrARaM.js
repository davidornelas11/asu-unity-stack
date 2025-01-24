import{j as e}from"./jsx-runtime-Dtp4yoXy.js";import{r as l,a as j}from"./index-iql2cimc.js";import{B as _}from"./ButtonIconOnly-Fel4qCTY.js";import"./_commonjsHelpers-uqKOVeGF.js";import"./index-DamiE3XO.js";import"./shared-prop-types-B6Cu974x.js";import"./GaEventWrapper-CQUQnm1l.js";import"./googleAnalytics-4Pcl4n6_.js";import"./useBaseSpecificFramework-BEiWg-hg.js";let v=0;const r=({title:t,content:b,triggerElement:y})=>{const[a]=l.useState(`tooltip-${v++}`),E=l.useRef(null);return e.jsxs("span",{className:"uds-tooltip-container",children:[j.cloneElement(y,{ref:E,"aria-describedby":a,tabindex:0}),e.jsxs("div",{role:"tooltip",className:"uds-tooltip-description",id:a,children:[t&&e.jsx("span",{className:"uds-tooltip-heading",children:t}),b]})]})};try{r.displayName="Tooltip",r.__docgenInfo={description:"",displayName:"Tooltip",props:{title:{defaultValue:null,description:"Title or heading.",name:"title",required:!1,type:{name:"string"}},content:{defaultValue:null,description:"Content",name:"content",required:!1,type:{name:"string"}},triggerElement:{defaultValue:null,description:"The element where we will position the dialog beside.",name:"triggerElement",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}}}}}catch{}const q={title:"Components/Tooltip",component:r,parameters:{docs:{description:{component:`TODO
https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tooltip_role
Keyboard interactions [Escape] should close the tooltip

alignment of tooltip assumes the trigger is icon button

probably limit the triggers to something with a visual inidicator (like button or link)`}}}},s={title:"Header",content:"Content"},x=t=>e.jsx(r,{...t}),o={render:x.bind({}),args:{...s,triggerElement:e.jsx(_,{icon:["fas","info"]})}},n={render:t=>e.jsxs("div",{children:["This is a ",e.jsx(r,{...t})," sentence."]}),args:{...s,triggerElement:e.jsx("a",{href:"javascript:void(0);",children:"Tooltiptrigger"})}},i={render:x.bind({}),args:{...s,triggerElement:e.jsx("span",{children:"Tooltiptrigger"})}};var p,c,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: tooltipTemplate.bind({}),
  args: {
    ...defaultProps,
    triggerElement: <ButtonIconOnly icon={["fas", "info"]} />
  }
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,g,u;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <div>This is a <Tooltip {...args} /> sentence.</div>,
  args: {
    ...defaultProps,
    triggerElement: <a href="javascript:void(0);">Tooltiptrigger</a>
  }
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var f,h,T;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: tooltipTemplate.bind({}),
  args: {
    ...defaultProps,
    triggerElement: <span>Tooltiptrigger</span>
  }
}`,...(T=(h=i.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};const A=["Icon","link","text"];export{o as Icon,A as __namedExportsOrder,q as default,n as link,i as text};

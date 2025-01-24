import{j as e}from"./jsx-runtime-Dtp4yoXy.js";import{c as W}from"./index-DqAnBlJf.js";import{r as F}from"./index-iql2cimc.js";import{B as O}from"./ButtonIconOnly-Fel4qCTY.js";import{u as q}from"./useBaseSpecificFramework-BEiWg-hg.js";import"./_commonjsHelpers-uqKOVeGF.js";import"./index-DamiE3XO.js";import"./shared-prop-types-B6Cu974x.js";import"./GaEventWrapper-CQUQnm1l.js";import"./googleAnalytics-4Pcl4n6_.js";var t=(s=>(s.WARNING="warning",s.INFO="info",s.SUCCESS="success",s.ERROR="error",s))(t||{});const i=({type:s,dismissable:m,children:A})=>{var p,u,h;const{isBootstrap:R,isReact:v}=q(),[B,w]=F.useState(!0),_=()=>w(!1),d={warning:{iconTitle:"Warning",iconName:"bell",alertClass:"warning"},info:{iconTitle:"Information",iconName:"info-circle",alertClass:"info"},success:{iconTitle:"Success",iconName:"check-circle",alertClass:"success"},error:{iconTitle:"Error",iconName:"exclamation-triangle",alertClass:"danger"}};return B&&e.jsxs("div",{className:W("alert",{"alert-dismissable":m,[`alert-${(p=d[s])==null?void 0:p.alertClass}`]:s}),role:"alert",children:[e.jsx("div",{className:"alert-icon",children:e.jsx("span",{title:(u=d[s])==null?void 0:u.iconTitle,className:`fa fa-icon fa-${(h=d[s])==null?void 0:h.iconName}`})}),e.jsx("div",{className:"alert-content",children:A}),m&&e.jsx("div",{className:"alert-close",children:e.jsx(O,{icon:["fas","times"],onClick:v&&_,"data-bs-dismiss":R&&"alert"})})]})};try{i.displayName="SystemAlert",i.__docgenInfo={description:"",displayName:"SystemAlert",props:{type:{defaultValue:null,description:"Type of system alert",name:"type",required:!0,type:{name:"enum",value:[{value:'"warning"'},{value:'"info"'},{value:'"success"'},{value:'"error"'}]}},children:{defaultValue:null,description:"Content of the alert",name:"children",required:!0,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>> | ReactElement<any, string | JSXElementConstructor<any>>[]"}},dismissable:{defaultValue:null,description:"If the alert can be dismissed",name:"dismissable",required:!0,type:{name:"boolean"}}}}}catch{}const H={title:"Components/SystemAlert",component:i},l={type:t.WARNING,children:"Content",dismissable:!0},c=s=>e.jsx(i,{...s}),r={render:c.bind({}),args:{...l,type:t.INFO,children:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["Information (blue): This is a info alert to confirm or notify. It is built using"," ",e.jsx("a",{href:"https://getbootstrap.com/docs/5.0/components/alerts",children:"the Bootstrap 5 .alert-info class"})]}),e.jsxs("p",{children:["Creating a dismissable alert box requires the inclusion of the"," ",e.jsx("code",{children:"alert-dismissable"})," class along with the"," ",e.jsx("code",{children:'data-bs-dismiss="alert"'})," attribute on the close button. Alert messages do not necessarily have to be dismissable."]})]})}},n={render:c.bind({}),args:{...l,type:t.WARNING,children:e.jsxs(e.Fragment,{children:[" ","Warning (orange): This is a warning alert to alert, confirm or notify. It is built using"," ",e.jsx("a",{href:"https://getbootstrap.com/docs/5.0/components/alerts",children:"the Bootstrap 5 .alert-warning class"}),"."]})}},a={render:c.bind({}),args:{...l,type:t.SUCCESS,children:e.jsxs(e.Fragment,{children:["Success (green): This is a success alert to confirm or notify. It is built using"," ",e.jsx("a",{href:"https://getbootstrap.com/docs/5.0/components/alerts",children:"the Bootstrap 5 .alert-success class"}),"."]})}},o={render:c.bind({}),args:{...l,type:t.ERROR,children:e.jsxs(e.Fragment,{children:["Error (red): This is a danger alert used specifically for errors. It is built using"," ",e.jsx("a",{href:"https://getbootstrap.com/docs/5.0/components/alerts",children:"the Bootstrap 5 .alert-danger class"}),"."]})}};var g,f,b;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: systemAlertTemplate.bind({}),
  args: {
    ...defaultProps,
    type: SystemAlertType.INFO,
    children: <>
        <p>
          Information (blue): This is a info alert to confirm or notify. It is
          built using{" "}
          <a href="https://getbootstrap.com/docs/5.0/components/alerts">
            the Bootstrap 5 .alert-info class
          </a>
        </p>
        <p>
          Creating a dismissable alert box requires the inclusion of the{" "}
          <code>alert-dismissable</code> class along with the{" "}
          <code>data-bs-dismiss=&quot;alert&quot;</code> attribute on the close
          button. Alert messages do not necessarily have to be dismissable.
        </p>
      </>
  }
}`,...(b=(f=r.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var y,S,x;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: systemAlertTemplate.bind({}),
  args: {
    ...defaultProps,
    type: SystemAlertType.WARNING,
    children: <>
        {" "}
        Warning (orange): This is a warning alert to alert, confirm or notify.
        It is built using{" "}
        <a href="https://getbootstrap.com/docs/5.0/components/alerts">
          the Bootstrap 5 .alert-warning class
        </a>
        .
      </>
  }
}`,...(x=(S=n.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var I,N,j;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: systemAlertTemplate.bind({}),
  args: {
    ...defaultProps,
    type: SystemAlertType.SUCCESS,
    children: <>
        Success (green): This is a success alert to confirm or notify. It is
        built using{" "}
        <a href="https://getbootstrap.com/docs/5.0/components/alerts">
          the Bootstrap 5 .alert-success class
        </a>
        .
      </>
  }
}`,...(j=(N=a.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var C,T,E;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: systemAlertTemplate.bind({}),
  args: {
    ...defaultProps,
    type: SystemAlertType.ERROR,
    children: <>
        Error (red): This is a danger alert used specifically for errors. It is
        built using{" "}
        <a href="https://getbootstrap.com/docs/5.0/components/alerts">
          the Bootstrap 5 .alert-danger class
        </a>
        .
      </>
  }
}`,...(E=(T=o.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};const K=["Info","Warning","Success","Error"];export{o as Error,r as Info,a as Success,n as Warning,K as __namedExportsOrder,H as default};

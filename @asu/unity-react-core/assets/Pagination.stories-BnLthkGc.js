import{j as s}from"./jsx-runtime-Dtp4yoXy.js";import{c as k}from"./index-DqAnBlJf.js";import{r as q}from"./index-iql2cimc.js";import{P as r}from"./index-DamiE3XO.js";import{t as z}from"./googleAnalytics-4Pcl4n6_.js";import"./_commonjsHelpers-uqKOVeGF.js";const L=(n,t,d)=>n?t:d,I=(n,t,d)=>{let e=n;const i=[];for(;e<t;)e>0&&e<=d&&i.push(e),e+=1;return i},o=({dataId:n,isClickeable:t,disabled:d,pageLinkIcon:e,selectedPage:i,onClick:a,ellipses:P,ariaLabel:w,children:p,ariaDisabled:j})=>s.jsx("li",{className:k("page-item",{disabled:d,active:i,elipses:P}),children:t?s.jsxs("button",{type:"button","aria-label":w,className:k("page-link",{"page-link-icon":e}),onClick:a,"data-testid":n?`pagination-${n}`:"page-link","data-id":n,"aria-current":i?"page":null,"aria-disabled":j,children:[p,i&&s.jsx("span",{className:"visually-hidden",children:"(current)"})]}):s.jsx("span",{className:"page-link","data-testid":"page-link",children:p})});o.propTypes={isClickeable:r.bool,disabled:r.bool,pageLinkIcon:r.bool,selectedPage:r.bool,dataId:r.string,onClick:r.func,children:r.node,ellipses:r.bool,ariaLabel:r.string,ariaDisabled:r.bool};o.defaultProps={isClickeable:!1,disabled:!1,pageLinkIcon:!1,selectedPage:!1,onClick:()=>{}};o.__docgenInfo={description:`Generic page item component to render each pagination item
@param {PageItemProps} props
@ignore`,methods:[],displayName:"PageItem",props:{isClickeable:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},pageLinkIcon:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},selectedPage:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},onClick:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},dataId:{description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"node"},required:!1},ellipses:{description:"",type:{name:"bool"},required:!1},ariaLabel:{description:"",type:{name:"string"},required:!1},ariaDisabled:{description:"",type:{name:"bool"},required:!1}}};const H={event:"select",action:"click",name:"onclick",type:"pagination",region:"main content"},N=({type:n,background:t,currentPage:d,totalPages:e,onChange:i})=>{const[a,P]=q.useState(null);q.useEffect(()=>{P(d)},[d]);const w=l=>{z({...H,text:`page ${l}`})},p=(l,x)=>{const m={first:1,prev:a===1?1:a-1,next:a===e?e:a+1,last:e}[x]??x;P(m),w(m),i==null||i(l,m)},j=()=>{const l=L(a===e-1,2,a===e?3:1),x=L(a===1,3,a===2?2:1),C=I(a-l,a,e),m=I(a,a+1+x,e),u=[...C,...m];return s.jsxs(s.Fragment,{children:[u[0]!==1&&s.jsx(o,{ariaLabel:`Page 1 of ${e}`,isClickeable:!0,selectedPage:a===1,onClick:c=>p(c,"first"),children:"1"}),u[0]>2&&s.jsx(o,{ellipses:!0,children:"..."}),u.map(c=>s.jsx(o,{ariaLabel:`Page ${c} of ${e}`,isClickeable:!0,selectedPage:a===c,onClick:X=>p(X,c),children:c},c)),u[u.length-1]<e-1&&s.jsx(o,{ellipses:!0,children:"..."}),u[u.length-1]!==e&&s.jsx(o,{isClickeable:!0,ariaLabel:`Page ${e} of ${e}`,selectedPage:a===e,onClick:c=>p(c,"last"),children:e})]})};return s.jsx("nav",{"aria-label":"Pagination","data-testid":"pagination",children:s.jsxs("ul",{className:k("pagination","justify-content-center","pt-2","pb-2",{border:n==="bordered","uds-bg-gray1":t==="gray1","uds-bg-gray":t==="gray2","uds-bg-dark":t==="gray7"}),children:[s.jsx(o,{dataId:"prev",isClickeable:!0,disabled:a===1,pageLinkIcon:!0,onClick:l=>p(l,"prev"),ariaDisabled:a===1,ariaLabel:"Previous Page"}),j(),s.jsx(o,{dataId:"next",isClickeable:!0,ariaDisabled:a===e,disabled:a===e,pageLinkIcon:!0,onClick:l=>p(l,"next"),ariaLabel:"Next Page"})]})})};N.propTypes={type:r.oneOf(["default","bordered"]).isRequired,background:r.oneOf(["white","gray1","gray2","gray7"]).isRequired,currentPage:r.number,totalPages:r.number,onChange:r.func.isRequired};N.defaultProps={currentPage:1,totalPages:10};N.__docgenInfo={description:`@param {PaginationProps} props
@returns {JSX.Element}`,methods:[],displayName:"Pagination",props:{currentPage:{defaultValue:{value:"1",computed:!1},description:"Current page",type:{name:"number"},required:!1},totalPages:{defaultValue:{value:"10",computed:!1},description:"Total number of pages",type:{name:"number"},required:!1},type:{description:"Type of pagination",type:{name:"enum",value:[{value:'"default"',computed:!1},{value:'"bordered"',computed:!1}]},required:!0},background:{description:"Background of pagination",type:{name:"enum",value:[{value:'"white"',computed:!1},{value:'"gray1"',computed:!1},{value:'"gray2"',computed:!1},{value:'"gray7"',computed:!1}]},required:!0},onChange:{description:"Callback fired when the page is changed.",type:{name:"func"},required:!0}}};const ee={title:"Components/Pagination",component:N,parameters:{docs:{description:{component:`The Pagintaion component can be used to generate pagination.
        ## Usage

        All props are valid options for all pagination types.
        Pagination users are responsible to meet all UDS design guidelines with their Pagination,
        including rules on the use of Call-to-Action buttons and tags.

        View component examples and source code below.
        `}}}},h=n=>s.jsx("div",{className:"container",children:s.jsx("div",{className:k("row","row-spaced","pt-2","pb-2"),children:s.jsx("div",{className:k("col","col-12","col-md-12","col-lg-12"),children:s.jsx(N,{...n})})})}),g=h.bind({});g.args={type:"default",background:"white",totalPages:4};const f=h.bind({});f.args={type:"bordered",background:"white",totalPages:45,showFirstButton:!0,showLastButton:!0};const b=h.bind({});b.args={type:"default",background:"gray1",currentPage:7};const v=h.bind({});v.args={type:"default",background:"gray2",currentPage:5,totalNumbers:5};const y=h.bind({});y.args={type:"default",background:"gray7"};var B,G,R;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`args => <div className="container">
    <div className={classNames("row", "row-spaced", "pt-2", "pb-2")}>
      <div className={classNames("col", "col-12", "col-md-12", "col-lg-12")}>
        <Pagination {...args} />
      </div>
    </div>
  </div>`,...(R=(G=g.parameters)==null?void 0:G.docs)==null?void 0:R.source}}};var S,E,V;f.parameters={...f.parameters,docs:{...(S=f.parameters)==null?void 0:S.docs,source:{originalSource:`args => <div className="container">
    <div className={classNames("row", "row-spaced", "pt-2", "pb-2")}>
      <div className={classNames("col", "col-12", "col-md-12", "col-lg-12")}>
        <Pagination {...args} />
      </div>
    </div>
  </div>`,...(V=(E=f.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var D,T,_;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`args => <div className="container">
    <div className={classNames("row", "row-spaced", "pt-2", "pb-2")}>
      <div className={classNames("col", "col-12", "col-md-12", "col-lg-12")}>
        <Pagination {...args} />
      </div>
    </div>
  </div>`,...(_=(T=b.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var $,A,O;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`args => <div className="container">
    <div className={classNames("row", "row-spaced", "pt-2", "pb-2")}>
      <div className={classNames("col", "col-12", "col-md-12", "col-lg-12")}>
        <Pagination {...args} />
      </div>
    </div>
  </div>`,...(O=(A=v.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var F,U,J;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`args => <div className="container">
    <div className={classNames("row", "row-spaced", "pt-2", "pb-2")}>
      <div className={classNames("col", "col-12", "col-md-12", "col-lg-12")}>
        <Pagination {...args} />
      </div>
    </div>
  </div>`,...(J=(U=y.parameters)==null?void 0:U.docs)==null?void 0:J.source}}};const ae=["Default","Bordered","Gray1Background","Gray2Background","Gray7Background"];export{f as Bordered,g as Default,b as Gray1Background,v as Gray2Background,y as Gray7Background,ae as __namedExportsOrder,ee as default};

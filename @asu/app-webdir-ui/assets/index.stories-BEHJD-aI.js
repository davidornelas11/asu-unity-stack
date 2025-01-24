import{j as r}from"./jsx-runtime-DeXhLmfn.js";import"./index-BjyPoJYz.js";import{W as p}from"./index-B6IKJ7xA.js";import{F as g}from"./styled-components.browser.esm-CB2jUp4m.js";import"./_commonjsHelpers-B3tUAs5q.js";import"./sort-iDlyggST.js";import"./index-nLt4fGAR.js";import"./dataConverter-Bl-d96Av.js";import"./index-DuwTw5Rq.js";const x={alphaFilter:{name:"Alphabetical Filtering",control:{type:"boolean"}}},E={title:"Organisms/Web Directory/Templates",argTypes:x,args:{alphaFilter:!1},decorators:[e=>r.jsx(g,{children:e()})]},o={defaultSort:"last_name",doNotDisplayProfiles:"",profilesPerPage:"10",usePager:"1"},D={employee:"",expertise:"",title:"",campuses:""},a=e=>r.jsx("div",{className:"uds-content-align",children:r.jsx(p,{searchType:"departments",deptIds:"1349,1353,32397,1518,1520,3534,1350,334996,1504,2000,2003,159390",API_URL:"https://test-asu-isearch.ws.asu.edu",searchApiVersion:"/api/v1/",filters:D,display:o,alphaFilter:e.alphaFilter})}),s=e=>r.jsx("div",{className:"uds-content-align",children:r.jsx(p,{searchType:"people",ids:"mcrow:454517,mdenke:1350,jagarc50:1350,lhillzev:1353",API_URL:"https://test-asu-isearch.ws.asu.edu",searchApiVersion:"/api/v1/",display:o,alphaFilter:e.alphaFilter})}),t=e=>r.jsx("div",{className:"uds-content-align",children:r.jsx(p,{searchType:"people_departments",ids:",tgrandli:1344,mcrow:1343,jcunnin8:1358,ccherrer:1358,csmudde:1358",API_URL:"https://test-asu-isearch.ws.asu.edu",searchApiVersion:"/api/v1/",display:o,alphaFilter:e.alphaFilter})});a.__docgenInfo={description:"",methods:[],displayName:"webDirectoryExampleDepartments"};s.__docgenInfo={description:"",methods:[],displayName:"webDirectoryExamplePeople"};t.__docgenInfo={description:"",methods:[],displayName:"webDirectoryExampleDepartmentsAndPeople"};var i,l,n;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  return <div className="uds-content-align">
      <WebDirectory searchType="departments" deptIds="1349,1353,32397,1518,1520,3534,1350,334996,1504,2000,2003,159390" API_URL="https://test-asu-isearch.ws.asu.edu" searchApiVersion="/api/v1/" filters={filters} display={display} alphaFilter={args.alphaFilter}
    // appPathFolder="/my/custom/path/to/component/root/example"
    />
    </div>;
}`,...(n=(l=a.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};var c,d,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  return <div className="uds-content-align">
      <WebDirectory searchType="people" ids="mcrow:454517,mdenke:1350,jagarc50:1350,lhillzev:1353" API_URL="https://test-asu-isearch.ws.asu.edu" searchApiVersion="/api/v1/" display={display} alphaFilter={args.alphaFilter}
    // appPathFolder="/my/custom/path/to/component/root/example"
    />
    </div>;
}`,...(m=(d=s.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var h,u,y;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  return <div className="uds-content-align">
      <WebDirectory searchType="people_departments" ids=",tgrandli:1344,mcrow:1343,jcunnin8:1358,ccherrer:1358,csmudde:1358" API_URL="https://test-asu-isearch.ws.asu.edu" searchApiVersion="/api/v1/" display={display} alphaFilter={args.alphaFilter}
    // appPathFolder="/my/custom/path/to/component/root/example"
    />
    </div>;
}`,...(y=(u=t.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const I=["webDirectoryExampleDepartments","webDirectoryExamplePeople","webDirectoryExampleDepartmentsAndPeople"];export{I as __namedExportsOrder,E as default,a as webDirectoryExampleDepartments,t as webDirectoryExampleDepartmentsAndPeople,s as webDirectoryExamplePeople};

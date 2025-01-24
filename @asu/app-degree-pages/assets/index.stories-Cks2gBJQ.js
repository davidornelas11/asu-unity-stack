var Lt=Object.defineProperty;var p=(a,t)=>Lt(a,"name",{value:t,configurable:!0});import{D as Et,q as w,j as e,p as g,t as v,P as n,s as C,Q as Pt,Z as _t,g as le,a as Ue,i as At,b as X,O as re,e as Nt,f as pe,c as Ft,m as Ut,v as Wt,d as Gt,h as Bt,k as R,l as z,n as oe,S as Vt,w as Ct,o as Ht,r as $t,u as Tt,x as se,y as Jt,A as Xt,z as zt,B as We,C as Yt,E as Qt,F as Zt,G as Kt,T as ea,H as ta,I as aa,J as ra,K as na,M as oa,L as sa,N as ia,R as la,U as pa,V as ca,W as Ge}from"./index-B5Q7XHPi.js";import{r as k}from"./index-JpckQOF4.js";import{g as ma}from"./_commonjsHelpers-Ii5oIDU0.js";import"./index-CB6vkw4h.js";const Be=p(a=>a.map(t=>({title:t.acadPlanDescription,url:t.academicOfficeUrl})).sort((t,r)=>t.title.localeCompare(r.title)),"formatAcceleratedConcurrentLinks"),ua=p(a=>a==null?void 0:a.map(t=>({career:{text:t.alternateTitle,url:`${Et}/career-details/${t.onetCode}`},growth:t.growth,medianSalary:t.salary.toLocaleString("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0}),brightOutlook:!!t.brightOutlook,greenOccupation:!!t.green})),"formatCareerData");function da(a,t){Promise.all(a).then(r=>{const i=r[0],o=r[1];t({accelerateData:i,concurrentData:o})}).catch(()=>{t({accelerateData:[],concurrentData:[]})})}p(da,"executePromisesAndUpdateState");const ha=w.section`
  position: relative;
  padding-top: var(--uds-dp-section-margin);
  padding-bottom: var(--uds-dp-section-margin);
`,ga=w.div`
  background-image: url("https://asu.github.io/asu-unity-stack/@asu/unity-bootstrap-theme/static/media/TopoPatternWhite.529b0b3d.png");
  background-position: center;
  background-size: contain;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  max-width: 1920px;
  height: 100%;
  z-index: -1;
`;function Mt(){return e.jsxs(ha,{className:"container",id:g.affordingCollege.targetIdName,"data-testid":"affording-college",children:[e.jsx(ga,{}),e.jsx("h2",{children:e.jsx("span",{className:"highlight-gold",children:"Affording college"})}),e.jsxs("div",{className:"mt-2 row",children:[e.jsx("div",{className:"mt-2 col-12 col-md-6 col-lg-4",children:e.jsx(v,{icon:["fas","calculator"],title:"Tuition estimator",body:"The tuition estimator shows the tuition and fee breakdown for your particular major, campus and residency status without financial aid.",buttons:[{label:"Estimate tuition and fees",ariaLabel:"Estimate tuition and fees",color:"maroon",href:"https://tuition.asu.edu/cost-calculator/tuition"}]})}),e.jsx("div",{className:"mt-2 col-12 col-md-6 col-lg-4",children:e.jsx(v,{icon:["fas","award"],title:"Scholarships",body:"Scholarships are a type of aid that does not need to be paid back. Some you apply for and some are automatic.",buttons:[{label:"Learn about scholarships",ariaLabel:"Learn about scholarships",color:"maroon",href:"https://scholarships.asu.edu/"}]})}),e.jsx("div",{className:"mt-2 col-12 col-md-6 col-lg-4",children:e.jsx(v,{icon:["fas","hand-holding-usd"],title:"Financial aid",body:"There are many financial aid options available for students. In fact, more than 80 percent of all ASU students receive some form of financial assistance every year.",buttons:[{label:"Explore financial aid",ariaLabel:"Explore financial aid",color:"maroon",href:"https://tuition.asu.edu/financial-aid"}]})})]})]})}p(Mt,"AffordingCollege");Mt.__docgenInfo={description:"",methods:[],displayName:"AffordingCollege"};var It={exports:{}};(function(a){(function(){var t={}.hasOwnProperty;function r(){for(var s="",c=0;c<arguments.length;c++){var m=arguments[c];m&&(s=o(s,i(m)))}return s}p(r,"classNames");function i(s){if(typeof s=="string"||typeof s=="number")return s;if(typeof s!="object")return"";if(Array.isArray(s))return r.apply(null,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var c="";for(var m in s)t.call(s,m)&&s[m]&&(c=o(c,m));return c}p(i,"parseValue");function o(s,c){return c?s?s+" "+c:s+c:s}p(o,"appendClass"),a.exports?(r.default=r,a.exports=r):window.classNames=r})()})(It);var fa=It.exports;const xa=ma(fa),ya=w.ul`
  display: inline-flex;
  list-style: none;
  padding: 0;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    .btn {
      width: max-content;
      margin-left: 0;
      &:not(:first-child) {
        margin-top: 1rem;
      }
    }
  }
`,ba=p(({transferRequirements:a="",additionalRequirements:t=""})=>{const r=[{label:"Freshman",href:"https://admission.asu.edu/freshman/apply"},{label:"Transfer",href:"https://admission.asu.edu/transfer/apply"},{label:"International",href:"https://admission.asu.edu/international/undergrad-apply"},{label:"Readmission",href:"https://admission.asu.edu/undergrad/readmission"}],i=[];return t!=null&&t.trim()&&i.push({content:{header:"Additional Requirements",body:t}}),a!=null&&a.trim()&&i.push({content:{header:"Transfer Admission Requirements",body:a}}),e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"All students are required to meet general university admission requirements"}),e.jsx(ya,{className:xa("",{"mb-0":i.length===0}),children:r.map(({label:o,href:s})=>e.jsx("li",{children:e.jsx(Pt,{ariaLabel:o,color:"maroon",href:s,label:o,size:"small"})},o))}),i.length>0&&e.jsx("div",{className:"mt-2 mb-4",children:e.jsx(_t,{cards:i,openedCard:1})})]})},"undergraduateTemplate");function ce({graduateRequirements:a,transferRequirements:t,isMinorOrCertificate:r,additionalRequirements:i,minorRequirements:o}){let s;return a||r?s=r?"Program requirements":"Degree requirements":s=r?"Program requirements":"Admission requirements",e.jsxs(e.Fragment,{children:[e.jsxs("section",{id:g.applicationRequirements.targetIdName,"data-testid":"application-requirements",children:[e.jsx("h2",{children:e.jsx("span",{className:"highlight-gold",children:s})}),a||r?e.jsx("div",{dangerouslySetInnerHTML:C(a||o)}):ba({transferRequirements:t,additionalRequirements:i})]}),a||r?e.jsxs("section",{id:g.degreeRequirements.targetIdName,"data-testid":"degree-requirements",children:[e.jsx("h2",{children:e.jsx("span",{className:"highlight-gold",children:"Admission requirements"})}),e.jsx("div",{dangerouslySetInnerHTML:C(i)})]}):null]})}p(ce,"ApplicationRequirements");ce.propTypes={graduateRequirements:n.string,transferRequirements:n.string,isMinorOrCertificate:n.bool,additionalRequirements:n.string,minorRequirements:n.string};ce.__docgenInfo={description:`@param {ApplicationRequirementsProps} props
@returns {JSX.Element}`,methods:[],displayName:"ApplicationRequirements",props:{graduateRequirements:{description:"",type:{name:"string"},required:!1},transferRequirements:{description:"",type:{name:"string"},required:!1},isMinorOrCertificate:{description:"",type:{name:"bool"},required:!1},additionalRequirements:{description:"",type:{name:"string"},required:!1},minorRequirements:{description:"",type:{name:"string"},required:!1}}};const D=p(({item:a,type:t})=>{const r=At("glance-"),i=p(()=>typeof a=="object"?a.map((o,s)=>{const c=["","#"].includes(o.url)?null:o.url;let m="";return s>0&&s<a.length-1&&(m=", "),s===a.length-1&&a.length>1&&(m=" or "),e.jsxs(k.Fragment,{children:[m,e.jsx("a",{href:c,rel:"noreferrer",target:"_blank",children:o.text})]},r.next().value)}):a,"renderContent");return e.jsxs("li",{children:[e.jsx("i",{className:`fas fa-${Ue[t].icon} fa-li`}),e.jsxs("strong",{children:[Ue[t].title,": "]}),i()]})},"GlanceItem");D.propTypes={item:n.oneOfType([n.arrayOf(le),n.string]),type:n.string};D.__docgenInfo={description:`@param {GlanceItemProps} param
@returns {JSX.Element}`,methods:[],displayName:"GlanceItem",props:{item:{description:"",type:{name:"union",value:[{name:"arrayOf",value:{name:"custom",raw:"glanceItemPropShape"}},{name:"string"}]},required:!1},type:{description:"",type:{name:"string"},required:!1}}};const me=p(({offeredBy:a,locations:t,firstRequirementMathCourse:r,mathIntensity:i,timeCommitment:o})=>e.jsxs("section",{id:g.atAGlance.targetIdName,"data-testid":"at-aglance",children:[e.jsx("h2",{children:e.jsx("span",{className:"highlight-gold",children:"At a glance: program details"})}),e.jsxs("ul",{className:"uds-list fa-ul maroon pt-2 pb-0 pe-0",children:[a&&e.jsx(D,{item:[a],type:"offeredBy"}),t&&e.jsx(D,{item:t,type:"locations"}),r&&e.jsx(D,{item:r,type:"firstRequirementMathCourse"}),i&&e.jsx(D,{item:i,type:"mathIntensity"}),o&&e.jsx(D,{item:o,type:"timeCommitment"})]})]}),"AtAGlance");me.propTypes={offeredBy:le.isRequired,locations:n.arrayOf(le).isRequired,firstRequirementMathCourse:n.string.isRequired,mathIntensity:n.string,timeCommitment:n.string};me.__docgenInfo={description:`@param {AtAGlanceProps} props
@returns {JSX.Element}`,methods:[],displayName:"AtAGlance",props:{offeredBy:{description:"",type:{name:"custom",raw:"glanceItemPropShape.isRequired"},required:!1},locations:{description:"",type:{name:"arrayOf",value:{name:"custom",raw:"glanceItemPropShape"}},required:!0},firstRequirementMathCourse:{description:"",type:{name:"string"},required:!0},mathIntensity:{description:"",type:{name:"string"},required:!1},timeCommitment:{description:"",type:{name:"string"},required:!1}}};const ja=`
ASU offers this program in an online format
 with multiple enrollment sessions throughout
  the year. Applicants may view the program
   description and request more information.`;function ue({image:a,learnMoreLink:t,contents:r}){const i=`linear-gradient(180deg, #19191900 0%, #191919c9 100%),url('${a.url}')`,o=At("attend-online-");return e.jsx("section",{id:g.attendOnline.targetIdName,className:"uds-card-and-image",style:{backgroundImage:i},"data-testid":"attend-online",children:e.jsx("div",{className:"uds-card-and-image-container",children:e.jsxs("div",{className:"card card-centered",children:[e.jsx("i",{className:"fas fa-wifi fa-2x card-icon-top"}),e.jsx("div",{className:"card-header",children:e.jsx("h3",{className:"card-title",children:"Attend online"})}),e.jsx("div",{className:"card-body",children:r?r.map(s=>e.jsx("p",{children:s},o.next().value)):e.jsx("p",{children:ja})}),e.jsx("div",{className:"card-button",children:e.jsx(Pt,{label:"Learn about online options",ariaLabel:"Learn about online options",href:t,color:"maroon",size:"small"})})]})})})}p(ue,"AttendOnline");ue.propTypes={learnMoreLink:n.string,image:X,contents:n.arrayOf(n.shape({text:n.string}))};ue.__docgenInfo={description:`@param {import("src/core/types/detail-page-types").AttendOnlineProps & {
 learnMoreLink: string
}} props
@returns`,methods:[],displayName:"AttendOnline",props:{learnMoreLink:{description:"",type:{name:"string"},required:!1},image:{description:"",type:{name:"shape",value:{}},required:!1},contents:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{text:{name:"string",required:!1}}}},required:!1}}};const qa=w.section`
  width: 100%;
  & a {
    word-break: break-word;
  }
`,de=p(({contents:a,image:t})=>e.jsx(qa,{id:g.careerOutlook.targetIdName,"data-testid":"career-outlook",children:e.jsx(re,{headingTag:"H2",title:g.careerOutlook.text,contents:a,image:t})}),"CareerOutlook");de.propTypes=re.propTypes;de.__docgenInfo={description:`@param {import("src/core/types/detail-page-types").GlobalOpportunityProps} props
@returns {JSX.Element}`,methods:[],displayName:"CareerOutlook",props:{headingTag:{description:"",type:{name:"string"},required:!1},title:{description:"",type:{name:"string"},required:!1},contentDirection:{description:"",type:{name:"enum",value:[{value:'"left"',computed:!1},{value:'"right"',computed:!1}]},required:!1},contents:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{text:{name:"string",required:!1}}}},required:!1},image:{description:"",type:{name:"shape",value:{}},required:!1},contentChildren:{description:"",type:{name:"element"},required:!1}}};const va=w.div`
  & p:last-of-type {
    margin-bottom: 0;
  }

  & a {
    word-break: break-word;
  }
`;function he({content:a}){return e.jsxs("section",{id:g.changeMajorRequirements.targetIdName,className:"change-your-major","data-testid":"change-your-major",children:[e.jsx("h2",{children:e.jsx("span",{className:"highlight-gold",children:"Change your major requirements for current students"})}),e.jsx(va,{dangerouslySetInnerHTML:C(a)})]})}p(he,"ChangeYourMajor");he.propTypes={content:n.string};he.__docgenInfo={description:`@param {Object} props
@returns`,methods:[],displayName:"ChangeYourMajor",props:{content:{description:"",type:{name:"string"},required:!1}}};function ge({content:a=""}){return e.jsx("div",{"data-testid":"custom-text",className:"mt-3",dangerouslySetInnerHTML:C(a)})}p(ge,"CustomText");ge.propTypes={content:n.string};ge.__docgenInfo={description:`@param {{content: string}} props
@returns {JSX.Element}`,methods:[],displayName:"CustomText",props:{content:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1}}};const Rt=`
  width: unset !important;
  min-width: unset !important;
`,kt=w.i`
  color: #fecc41;
  font-size: 1.2rem;
  ${Rt}
`,Dt=w.i`
  color: #78be21;
  ${Rt}
`;function fe({data:a}){return e.jsx("div",{className:"uds-table mb-1",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"Career"}),e.jsx("th",{scope:"col",className:"text-end",children:"Growth*"}),e.jsx("th",{scope:"col",className:"text-end",children:"Median Salary*"})]})}),e.jsx("tbody",{children:a==null?void 0:a.map(t=>e.jsxs("tr",{children:[e.jsxs("th",{scope:"row",style:{fontWeight:"normal"},children:[e.jsx("a",{href:t.career.url,target:"_blank",rel:"noreferrer",children:t.career.text}),t.greenOccupation&&e.jsx(Dt,{className:"fas fa-leaf ms-1"}),t.brightOutlook&&e.jsx(kt,{className:"fas fa-sun ms-1"})]}),e.jsxs("td",{className:"text-end",children:[+t.growth,"%"]}),e.jsx("td",{className:"text-end",children:t.medianSalary||0})]},t.career.url))})]})})}p(fe,"Table");fe.propTypes={data:n.arrayOf(Nt)};fe.__docgenInfo={description:`@param {{ data: TableProps[] }} props
@returns {JSX.Element}`,methods:[],displayName:"Table",props:{data:{description:"",type:{name:"arrayOf",value:{name:"custom",raw:"exampleCareersTableDataPropShape"}},required:!1}}};function xe({tableData:a}){return e.jsxs("section",{id:g.exampleCareers.targetIdName,className:"container","data-testid":"example-careers",children:[e.jsx("h3",{children:"Example careers"}),e.jsx("p",{children:"Example job titles and salaries listed below are not necessarily entry level, and students should take into consideration how years of experience and geographical location may affect pay scales. Some jobs also may require advanced degrees, certifications or state-specific licensure."}),e.jsxs("div",{className:"mt-4 mb-4",children:[e.jsx(fe,{data:a}),e.jsx("p",{children:e.jsx("small",{children:"* Data obtained from the Occupational Information Network (O*NET) under sponsorship of the U.S. Department of Labor/Employment and Training Administration (USDOL/ETA)."})})]}),e.jsxs("div",{className:"d-flex",children:[e.jsxs("p",{className:"me-3",children:[e.jsx(kt,{className:"fas fa-sun me-1"}),"Bright outlook"]}),e.jsxs("p",{children:[e.jsx(Dt,{className:"fas fa-leaf me-1"}),"Green occupation"]})]})]})}p(xe,"ExampleCareers");xe.propTypes={tableData:n.arrayOf(Nt)};xe.__docgenInfo={description:`@param {ExampleCareersProps} props
@returns {JSX.Element}`,methods:[],displayName:"ExampleCareers",props:{tableData:{description:"",type:{name:"arrayOf",value:{name:"custom",raw:"exampleCareersTableDataPropShape"}},required:!1}}};const Sa=w.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-height: 320px;
  li:not(:last-child) {
    margin-bottom: 1rem;
  }
  @media (max-width: 767px) {
    max-height: 100%;
  }
`,te=p(({id:a,title:t,links:r})=>e.jsxs("div",{id:a,className:"mt-4",children:[e.jsx("h3",{children:t}),e.jsx("p",{children:"This program allows students to obtain both a bachelor's and master's degree in as little as five years. It is offered as an accelerated bachelor's and master's degree with:"}),e.jsx(Sa,{className:"mt-3 mb-3",children:r.map((i,o)=>e.jsx("li",{children:e.jsx("a",{href:i.url,target:"_blank",rel:"noreferrer",children:i.title})},`${i.title}-${o}`))}),e.jsx("p",{className:"mb-0",children:"Acceptance to the graduate program requires a separate application. During their junior year, eligible students will be advised by their academic departments to apply."})]}),"ContentBlock");te.propTypes={id:n.string,title:n.string,links:pe};te.__docgenInfo={description:`@param {ContentBlockProps} props
@returns`,methods:[],displayName:"ContentBlock",props:{id:{description:"",type:{name:"string"},required:!1},title:{description:"",type:{name:"string"},required:!1},links:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{title:{name:"string",required:!1},url:{name:"string",required:!1}}}},required:!1}}};function ye({acceleratedLinks:a,concurrentLinks:t}){return e.jsxs("section",{id:g.flexibleDegreeOptions.targetIdName,className:"container","data-testid":"flexible-degree-options",children:[e.jsx("h2",{children:e.jsx("span",{className:"highlight-gold",children:"Flexible degree options"})}),!!a.length&&e.jsx(te,{id:g.flexibleDegreeOptions.acceleratedId,title:"Accelerated program options",links:a}),!!t.length&&e.jsx(te,{id:g.flexibleDegreeOptions.concurrentId,title:"Concurrent degree program",links:t})]})}p(ye,"FlexibleDegreeOptions");ye.propTypes={acceleratedLinks:pe,concurrentLinks:pe};ye.__docgenInfo={description:`@param {FlexibleDegreeOptionsProps} props
@returns`,methods:[],displayName:"FlexibleDegreeOptions",props:{acceleratedLinks:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{title:{name:"string",required:!1},url:{name:"string",required:!1}}}},required:!1},concurrentLinks:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{title:{name:"string",required:!1},url:{name:"string",required:!1}}}},required:!1}}};const wa=w.section`
  width: 100%;
  & a {
    word-break: break-word;
  }
`,be=p(({contents:a,image:t})=>e.jsx(wa,{id:g.globalOpportunity.targetIdName,"data-testid":"global-opportunity",children:e.jsx(re,{headingTag:"H2",title:g.globalOpportunity.text,contents:a,image:t})}),"GlobalOpportunity");be.propTypes=re.propTypes;be.__docgenInfo={description:`@param {import("src/core/types/detail-page-types").GlobalOpportunityProps} props
@returns {JSX.Element}`,methods:[],displayName:"GlobalOpportunity",props:{headingTag:{description:"",type:{name:"string"},required:!1},title:{description:"",type:{name:"string"},required:!1},contentDirection:{description:"",type:{name:"enum",value:[{value:'"left"',computed:!1},{value:'"right"',computed:!1}]},required:!1},contents:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{text:{name:"string",required:!1}}}},required:!1},image:{description:"",type:{name:"shape",value:{}},required:!1},contentChildren:{description:"",type:{name:"element"},required:!1}}};const je=p(({url:a,altText:t})=>e.jsx("div",{className:"uds-img pt-3 pb-3","data-testid":"intro-image",children:e.jsx("img",{src:a,className:"img-fluid",alt:t})}),"IntroImage");je.propTypes={...Ft};je.__docgenInfo={description:'@param {import("src/core/types/shared-local-types").ImageItem} props',methods:[],displayName:"IntroImage",props:{url:{description:"",type:{name:"string"},required:!1},altText:{description:"",type:{name:"string"},required:!1},cssClass:{description:"",type:{name:"arrayOf",value:{name:"string"}},required:!1}}};const Oa=p((a,t)=>{if(a!=="youtube")return t;const r=/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,i=t.match(r);return i&&i[7].length===11?`https://www.youtube.com/embed/${i[7]}`:t},"youtubeURLParser"),Pa=w.div`
  .uds-video-container {
    margin: 0;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
`,qe=p(({type:a,url:t,vttUrl:r,title:i})=>e.jsx(Pa,{"data-testid":"intro-video",children:e.jsx(Ut,{type:a,url:Oa(a,t),vttUrl:r,title:i,controls:!0})}),"IntroVideo");qe.propTypes={...Wt};qe.__docgenInfo={description:'@param {import("src/core/types/shared-local-types").VideoItem} props',methods:[],displayName:"IntroVideo",props:{type:{description:"",type:{name:"enum",value:[{value:'"video"',computed:!1},{value:'"youtube"',computed:!1}]},required:!1},url:{description:"",type:{name:"string"},required:!1},altText:{description:"",type:{name:"string"},required:!1},vttUrl:{description:"",type:{name:"string"},required:!1},title:{description:"",type:{name:"string"},required:!1}}};function ve({contents:a=[]}){return e.jsx("div",{"data-testid":"market-text",children:a.map((t,r)=>e.jsx("div",{className:`mt-3 ${Bt(t.cssClass)}`,dangerouslySetInnerHTML:C(t.text)},`content-${r+1}`))})}p(ve,"MarketText");ve.propTypes={contents:n.arrayOf(Gt)};ve.__docgenInfo={description:`@param {IntroContentProps} props
@returns {JSX.Element}`,methods:[],displayName:"MarketText",props:{contents:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"custom",raw:"contentPropShape"}},required:!1}}};function Se({cards:a,defaultCards:t}){var r,i,o,s,c,m,f,j,u,h,d,x;return e.jsxs("section",{className:"container",id:g.nextSteps.targetIdName,"data-testid":"next-steps",children:[e.jsx("h2",{children:"Next steps to attend ASU"}),e.jsxs("div",{className:"mt-2 row",children:[e.jsx("div",{className:"mt-2 col-12 col-md-6 col-lg-4",children:e.jsx(v,{icon:((r=a==null?void 0:a.learnMore)==null?void 0:r.icon)??t.learnMore.icon,title:((i=a==null?void 0:a.learnMore)==null?void 0:i.title)??t.learnMore.title,body:((o=a==null?void 0:a.learnMore)==null?void 0:o.content)??t.learnMore.content,buttons:[((s=a==null?void 0:a.learnMore)==null?void 0:s.buttonLink)??t.learnMore.buttonLink]})}),e.jsx("div",{className:"mt-2 col-12 col-md-6 col-lg-4",children:e.jsx(v,{icon:((c=a==null?void 0:a.apply)==null?void 0:c.icon)??t.apply.icon,title:((m=a==null?void 0:a.apply)==null?void 0:m.title)??t.apply.title,body:((f=a==null?void 0:a.apply)==null?void 0:f.content)??t.apply.content,buttons:[((j=a==null?void 0:a.apply)==null?void 0:j.buttonLink)??t.apply.buttonLink]})}),e.jsx("div",{className:"mt-2 col-12 col-md-6 col-lg-4",children:e.jsx(v,{icon:((u=a==null?void 0:a.visit)==null?void 0:u.icon)??t.visit.icon,title:((h=a==null?void 0:a.visit)==null?void 0:h.title)??t.visit.title,body:((d=a==null?void 0:a.visit)==null?void 0:d.content)??t.visit.content,buttons:[((x=a==null?void 0:a.visit)==null?void 0:x.buttonLink)??t.visit.buttonLink]})})]})]})}p(Se,"NextSteps");Se.propTypes={cards:n.shape({learnMore:R,apply:R,visit:R}),defaultCards:n.shape({learnMore:R,apply:R,visit:R})};Se.__docgenInfo={description:`@param {NextStepsProps} props
@returns`,methods:[],displayName:"NextSteps",props:{cards:{description:"",type:{name:"shape",value:{learnMore:{name:"custom",raw:"cardPropShape",required:!1},apply:{name:"custom",raw:"cardPropShape",required:!1},visit:{name:"custom",raw:"cardPropShape",required:!1}}},required:!1},defaultCards:{description:"",type:{name:"shape",value:{learnMore:{name:"custom",raw:"cardPropShape",required:!1},apply:{name:"custom",raw:"cardPropShape",required:!1},visit:{name:"custom",raw:"cardPropShape",required:!1}}},required:!1}}};function we({content:a=""}){return e.jsxs("section",{className:"container","data-testid":"professional-licensure",children:[e.jsx("h3",{children:"Professional licensure"}),e.jsx("p",{dangerouslySetInnerHTML:C(a)})]})}p(we,"ProfessionalLicensure");we.propTypes={content:n.node};we.__docgenInfo={description:"",methods:[],displayName:"ProfessionalLicensure",props:{content:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"node"},required:!1}}};const ie={event:"link",action:"click",name:"onclick",type:"internal link",region:"main content",section:"Program contact information"},Aa=w.ul`
  list-style: none;
  margin-left: 0rem;
  padding-left: 0rem;

  & li {
    display: flex;
    align-items: center;
    :not(:first-child) {
      display: flex;
      padding-bottom: 0.5rem;
    }

    :first-child div {
      display: flex;
    }

    :nth-of-type(2) {
      padding-bottom: 2rem;
    }

    > div {
      display: flex;
      align-items: center;
    }

    .c-icon,
    i {
      font-size: 1rem;
      margin-right: 0.5rem;
    }

    .office-loc {
      margin-left: 1.5rem;
    }
  }
`;function Oe({department:a,asuOfficeLoc:t,email:r,phone:i}){return e.jsxs("section",{id:g.programContactInfo.targetIdName,"data-testid":"program-contact-info",children:[e.jsx("h2",{children:e.jsx("span",{className:"highlight-gold",children:"Program contact information"})}),e.jsx("p",{children:"If you have questions related to admission, please fill out the request information form above and an admission specialist will contact you directly. For questions regarding faculty or courses, please use the contact information below."}),e.jsxs(Aa,{className:"text-maroon",children:[e.jsx("li",{children:e.jsxs("div",{children:[e.jsx("i",{className:"c-icon fas icon-small fa-map-marker-alt",title:"Department  Address"}),e.jsx("a",{href:a.url,onClick:p(()=>oe({...ie,text:a.text}),"onClick"),children:a.text})]})}),e.jsx("li",{children:e.jsx("div",{className:"c-icon text-dark office-loc",children:t})}),e.jsxs("li",{children:[e.jsx("i",{className:"c-icon fas icon-small fa-envelope",title:"Email"}),e.jsx("a",{href:`mailto:${r.url||r.text}`,onClick:p(()=>oe({...ie,text:r.text}),"onClick"),children:r.text})]}),e.jsxs("li",{children:[e.jsx("i",{className:"c-icon fas icon-small fa-phone",title:"Phone"}),e.jsx("a",{href:`tel:${i}`,onClick:p(()=>oe({...ie,text:i}),"onClick"),children:i})]})]})]})}p(Oe,"ProgramContactInfo");Oe.propTypes={department:z,asuOfficeLoc:n.string,email:z,phone:n.string};Oe.__docgenInfo={description:`@param {import("src/core/types/detail-page-types").ProgramContactInfoProps} props
@returns`,methods:[],displayName:"ProgramContactInfo",props:{department:{description:"",type:{name:"shape",value:{}},required:!1},asuOfficeLoc:{description:"",type:{name:"string"},required:!1},email:{description:"",type:{name:"shape",value:{}},required:!1},phone:{description:"",type:{name:"string"},required:!1}}};function ae({content:a,stemOptText:t,programNotFound:r}){return e.jsxs("div",{"data-testid":"program-description",children:[e.jsx("h2",{children:r?"Program not found":"Program description"}),e.jsx("div",{"data-testid":"program-description-body",dangerouslySetInnerHTML:C(a)}),t&&e.jsxs(e.Fragment,{children:[e.jsx("p",{children:e.jsx("strong",{children:Vt})}),e.jsx("div",{"data-testid":"stem-opt-text",dangerouslySetInnerHTML:C(t)})]})]})}p(ae,"ProgramDescription");ae.propTypes={content:n.string,stemOptText:n.string,programNotFound:n.bool};ae.__docgenInfo={description:`@param {ProgramDescriptionProps}  props
@returns`,methods:[],displayName:"ProgramDescription",props:{content:{description:"",type:{name:"string"},required:!1},stemOptText:{description:"",type:{name:"string"},required:!1},programNotFound:{description:"",type:{name:"bool"},required:!1}}};const Na="https://changemajor.apps.asu.edu/",Ca="On-campus students",Ta="Online students",Ma="View major map -",Ve="View major map";function Pe({onlineMajorMapURL:a="",majorMapOnCampusURL:t="",subPlnMajorMaps:r=[],subPlns:i=[]}){const o=p(u=>{const h=i.find(d=>d.acadSubPlanCode===u);return h?h.description:""},"getSubPlnDescription"),s=p((u,h,d)=>{u&&d.push({href:u,text:h})},"addLink"),c=[],m=[];r.forEach(u=>{const h=o(u.acadSubPlanCode),d=`${Ma} ${h}`;s(u.url,d,c)}),t&&s(t,Ve,c),a&&s(a,Ve,m);const f=p((u,h)=>e.jsxs(e.Fragment,{children:[e.jsx("h5",{children:u}),e.jsx("ul",{className:"mb-3",children:h.map(d=>e.jsx("li",{children:e.jsx("a",{href:d.href,children:d.text})},d.href))})]}),"renderLinks"),j=p(()=>e.jsxs("section",{className:"container ps-0","data-testid":"required-course",children:[e.jsx("h4",{children:"Required courses (major map)"}),c.length>0&&f(Ca,c),m.length>0&&f(Ta,m),e.jsxs("div",{className:"mt-3",children:[e.jsx("strong",{children:"What if:"})," See how your courses can be applied to another major and find out how to ",e.jsx("a",{href:Na,children:"change your major"})]})]}),"RequiredCourseSection");return!(r!=null&&r.length)&&!a&&!t?e.jsx("div",{}):j()}p(Pe,"RequiredCourse");Pe.propTypes={onlineMajorMapURL:n.string,majorMapOnCampusURL:n.string,subPlnMajorMaps:n.arrayOf(n.shape({campus:n.string,acadSubPlanCode:n.string,defaultFlag:n.bool,url:n.string})),subPlns:n.arrayOf(n.shape({acadSubPlanCode:n.string,description:n.string}))};Pe.__docgenInfo={description:`@param {RequiredCoursesProps} props
@returns`,methods:[],displayName:"RequiredCourse",props:{onlineMajorMapURL:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},majorMapOnCampusURL:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},subPlnMajorMaps:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{campus:{name:"string",required:!1},acadSubPlanCode:{name:"string",required:!1},defaultFlag:{name:"bool",required:!1},url:{name:"string",required:!1}}}},required:!1},subPlns:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{acadSubPlanCode:{name:"string",required:!1},description:{name:"string",required:!1}}}},required:!1}}};const Ae=p(({sectionIntroText:a,cards:t,defaultCards:r})=>{var i,o,s,c,m,f,j,u,h,d,x,y,S,b,N,M,Y,Q,l,Z,W,K,G,ee,q,B,V,H,$,J,I,Ce,Te,Me,Ie,Re,ke,De,Le,Ee,_e,Fe;return e.jsxs("section",{id:g.whyChooseAsu.targetIdName,className:"container","data-testid":"why-choose-asu",children:[e.jsx("h2",{children:"Why choose ASU"}),e.jsx("div",{dangerouslySetInnerHTML:C(a)}),e.jsxs("div",{className:"mt-2 row",children:[e.jsx("div",{className:"mt-2 col-12 col-md-6 col-lg-4",children:e.jsx(v,{image:((o=(i=t==null?void 0:t.faculty)==null?void 0:i.image)==null?void 0:o.url)??r.faculty.image.url,imageAltText:((c=(s=t==null?void 0:t.faculty)==null?void 0:s.image)==null?void 0:c.altText)??r.faculty.image.altText,title:((m=t==null?void 0:t.faculty)==null?void 0:m.title)??r.faculty.title,body:((f=t==null?void 0:t.faculty)==null?void 0:f.text)??r.faculty.text,buttons:[((j=t==null?void 0:t.faculty)==null?void 0:j.button)??r.faculty.button]})}),e.jsx("div",{className:"mt-2 col-12 col-md-6 col-lg-4",children:e.jsx(v,{image:((h=(u=t==null?void 0:t.programs)==null?void 0:u.image)==null?void 0:h.url)??r.programs.image.url,imageAltText:((x=(d=t==null?void 0:t.programs)==null?void 0:d.image)==null?void 0:x.altText)??r.programs.image.altText,title:((y=t==null?void 0:t.programs)==null?void 0:y.title)??r.programs.title,body:((S=t==null?void 0:t.programs)==null?void 0:S.text)??r.programs.text,buttons:[((b=t==null?void 0:t.programs)==null?void 0:b.button)??r.programs.button]})}),e.jsx("div",{className:"mt-2 col-12 col-md-6 col-lg-4",children:e.jsx(v,{image:((M=(N=t==null?void 0:t.research)==null?void 0:N.image)==null?void 0:M.url)??r.research.image.url,imageAltText:((Q=(Y=t==null?void 0:t.research)==null?void 0:Y.image)==null?void 0:Q.altText)??r.research.image.altText,title:((l=t==null?void 0:t.research)==null?void 0:l.title)??r.research.title,body:((Z=t==null?void 0:t.research)==null?void 0:Z.text)??r.research.text,buttons:[((W=t==null?void 0:t.research)==null?void 0:W.button)??r.research.button]})}),e.jsx("div",{className:"mt-2 col-12 col-md-6 col-lg-4",children:e.jsx(v,{image:((G=(K=t==null?void 0:t.inclusion)==null?void 0:K.image)==null?void 0:G.url)??r.inclusion.image.url,imageAltText:((q=(ee=t==null?void 0:t.inclusion)==null?void 0:ee.image)==null?void 0:q.altText)??r.inclusion.image.altText,title:((B=t==null?void 0:t.inclusion)==null?void 0:B.title)??r.inclusion.title,body:((V=t==null?void 0:t.inclusion)==null?void 0:V.text)??r.inclusion.text,buttons:[((H=t==null?void 0:t.inclusion)==null?void 0:H.button)??r.inclusion.button]})}),e.jsx("div",{className:"mt-2 col-12 col-md-6 col-lg-4",children:e.jsx(v,{image:((J=($=t==null?void 0:t.mentors)==null?void 0:$.image)==null?void 0:J.url)??r.mentors.image.url,imageAltText:((Ce=(I=t==null?void 0:t.mentors)==null?void 0:I.image)==null?void 0:Ce.altText)??r.mentors.image.altText,title:((Te=t==null?void 0:t.mentors)==null?void 0:Te.title)??r.mentors.title,body:((Me=t==null?void 0:t.mentors)==null?void 0:Me.text)??r.mentors.text,buttons:[((Ie=t==null?void 0:t.mentors)==null?void 0:Ie.button)??r.mentors.button]})}),e.jsx("div",{className:"mt-2 col-12 col-md-6 col-lg-4",children:e.jsx(v,{image:((ke=(Re=t==null?void 0:t.honors)==null?void 0:Re.image)==null?void 0:ke.url)??r.honors.image.url,imageAltText:((Le=(De=t==null?void 0:t.honors)==null?void 0:De.image)==null?void 0:Le.altText)??r.honors.image.altText,title:((Ee=t==null?void 0:t.honors)==null?void 0:Ee.title)??r.honors.title,body:((_e=t==null?void 0:t.honors)==null?void 0:_e.text)??r.honors.text,buttons:[((Fe=t==null?void 0:t.honors)==null?void 0:Fe.button)??r.honors.button]})})]})]})},"WhyChooseAsu");Ae.propTypes=Ct;Ae.__docgenInfo={description:`@param {WhyChooseAsuProps} props
@returns {JSX.Element}`,methods:[],displayName:"WhyChooseAsu",props:{hide:{description:"",type:{name:"bool"},required:!1},sectionIntroText:{description:"",type:{name:"string"},required:!1},cards:{description:"",type:{name:"shape",value:{faculty:{name:"custom",raw:"whyChooseAsuCardShape",required:!1},programs:{name:"custom",raw:"whyChooseAsuCardShape",required:!1},research:{name:"custom",raw:"whyChooseAsuCardShape",required:!1},inclusion:{name:"custom",raw:"whyChooseAsuCardShape",required:!1},mentors:{name:"custom",raw:"whyChooseAsuCardShape",required:!1},honors:{name:"custom",raw:"whyChooseAsuCardShape",required:!1}}},required:!1},defaultCards:{description:"",type:{name:"shape",value:{faculty:{name:"custom",raw:"whyChooseAsuCardShape",required:!1},programs:{name:"custom",raw:"whyChooseAsuCardShape",required:!1},research:{name:"custom",raw:"whyChooseAsuCardShape",required:!1},inclusion:{name:"custom",raw:"whyChooseAsuCardShape",required:!1},mentors:{name:"custom",raw:"whyChooseAsuCardShape",required:!1},honors:{name:"custom",raw:"whyChooseAsuCardShape",required:!1}}},required:!1}}};const Ne=p(({appPathFolder:a,dataSource:t,anchorMenu:r,hero:i,introContent:o,atAGlance:s,applicationRequirements:c,changeMajorRequirements:m,affordingCollege:f,flexibleDegreeOptions:j,careerOutlook:u,exampleCareers:h,globalOpportunity:d,attendOnline:x,programContactInfo:y,nextSteps:S,whyChooseAsu:b})=>{var V,H,$,J;const[{data:N,loading:M,error:Y},Q]=zt(),[l,Z]=k.useState(We({})),[W,K]=k.useState({accelerateData:[],concurrentData:[]}),G=Yt(t,ca),{defaultState:ee}=k.useContext(Qt),{detailPageDefault:q}=ee;k.useEffect(()=>{typeof window<"u"&&Zt({packageName:"app-degree-pages",component:"DetailPage",type:"NA",configuration:{dataSource:t}})},[]),k.useEffect(()=>{Q(G)},[G]),k.useEffect(()=>{if(N){const I=We(N);Z(I),I.hasConcurrentOrAccelerateDegrees()&&da([I.getAccelerateDegrees(),I.getConcurrentDegrees()],K)}},[N]);const B=Kt(r,l);return e.jsxs(e.Fragment,{children:[e.jsx(ea,{}),Y&&e.jsx(ta,{message:aa}),!(i!=null&&i.hide)&&e.jsx("section",{children:e.jsx(Tt,{image:(i==null?void 0:i.image)||q.hero.image,title:{...q.hero.title,text:l.getMajorDesc(),...i==null?void 0:i.title},contents:i==null?void 0:i.contents})}),!M&&ra(B)&&e.jsx(na,{anchorMenu:B}),e.jsxs(oa,{as:"div","data-is-loading":M,className:"main-section",children:[M&&e.jsx(sa,{}),!M&&(N!=null&&N.error?e.jsx("section",{className:"container mt-4 mb-0",children:e.jsx(ae,{content:ia,programNotFound:!0})}):e.jsxs("section",{className:"container mt-4 mb-0",children:[(o==null?void 0:o.breadcrumbs)&&e.jsx("div",{className:"row col-12",children:e.jsx(la,{breadcrumbs:o.breadcrumbs,section:i?i.title.text:l.getMajorDesc()})}),e.jsxs("div",{className:"row flex-column-reverse flex-sm-row",children:[e.jsxs("div",{className:"col col-sm-12 col-md-7 col-lg-7",children:[e.jsxs("section",{className:"intro",children:[!l.isValidActiveProgram()&&e.jsx(ge,{content:l.getAsuCustomText()}),!(o!=null&&o.hideMarketText)&&((o==null?void 0:o.contents)||l.getMarketText())&&e.jsx(ve,{contents:(o==null?void 0:o.contents)||[{text:l.getMarketText()}]}),!(o!=null&&o.hideProgramDesc)&&e.jsx(ae,{content:l.getFullDescription(),stemOptText:l.getStemOptText()})]}),!(s!=null&&s.hide)&&e.jsx(me,{offeredBy:(s==null?void 0:s.offeredBy)||{text:l.getCollegeDesc(),url:l.getCollegeUrl()},locations:(s==null?void 0:s.locations)||pa(l),firstRequirementMathCourse:(s==null?void 0:s.firstRequirementMathCourse)||l.getMinMathReq(),mathIntensity:(s==null?void 0:s.mathIntensity)||l.getMathIntensity()}),!(o!=null&&o.hideRequiredCourses)&&!l.isMinorOrCertificate()&&e.jsx(Pe,{onlineMajorMapURL:l.getOnlineMajorMapURL(),majorMapOnCampusURL:l.getGeneralDegreeMajorMap(),subPlnMajorMaps:l.getSubPlnMajorMaps(),subPlns:l.getSubPln()}),!(c!=null&&c.hide)&&e.jsx(ce,{graduateRequirements:l.isGradProgram()?l.getGraduateRequirements():null,isMinorOrCertificate:l.isMinorOrCertificate(),minorRequirements:l.getMinorCourseRequirements(),additionalRequirements:l.getAdmissionsRequirementsText(),transferRequirements:l.getTransferAdmission()}),!(m!=null&&m.hide)&&!l.isMinorOrCertificate()&&!l.isGradProgram()&&e.jsx(he,{content:l.getChangeMajor()})]}),e.jsxs("div",{className:"col col-sm-12 col-md-5 col-lg-5",children:[(o==null?void 0:o.video)&&e.jsx(qe,{type:o.video.type,url:o.video.url,vttUrl:o.video.vttUrl,title:o.video.title}),!(o!=null&&o.video)&&e.jsx(je,{url:((V=o==null?void 0:o.image)==null?void 0:V.url)||q.introContent.image.url,altText:((H=o==null?void 0:o.image)==null?void 0:H.altText)||q.introContent.image.altText})]})]}),e.jsxs("div",{className:"row",children:[!(S!=null&&S.hide)&&!l.isMinorOrCertificate()&&e.jsx(Se,{cards:S==null?void 0:S.cards,defaultCards:q.nextSteps.cards}),!(f!=null&&f.hide)&&e.jsx(Mt,{}),!(j!=null&&j.hide)&&l.hasConcurrentOrAccelerateDegrees()&&e.jsx(ye,{acceleratedLinks:Be(W.accelerateData),concurrentLinks:Be(W.concurrentData)}),!(u!=null&&u.hide)&&l.getAsuCareerOpportunity()&&e.jsx(de,{image:(u==null?void 0:u.image)||q.careerOutlook.image,contents:[{text:l.getAsuCareerOpportunity()}]}),!(h!=null&&h.hide)&&l.hasCareerData()&&e.jsx(xe,{tableData:ua(l.getCareerData())}),l.getProfessionalLicensureText()&&e.jsx(we,{content:l.getProfessionalLicensureText()}),!(d!=null&&d.hide)&&l.getGlobalExp()&&e.jsx(be,{contents:[{text:l.getGlobalExp()}],image:(d==null?void 0:d.image)||q.globalOpportunity.image}),!(b!=null&&b.hide)&&e.jsx(Ae,{sectionIntroText:(b==null?void 0:b.sectionIntroText)||q.whyChooseAsu.sectionIntroText,cards:b==null?void 0:b.cards,defaultCards:q.whyChooseAsu.cards}),!(x!=null&&x.hide)&&l.isOnline()&&e.jsx(ue,{learnMoreLink:l.getCurriculumUrl(),image:(x==null?void 0:x.image)||q.attendOnline.image})]}),!(y!=null&&y.hide)&&e.jsx("div",{className:"row",children:e.jsx("div",{className:"col col-sm-12 col-md-6 col-lg-6 ",children:e.jsx(Oe,{department:{text:l.getDepartmentName(),url:(($=y==null?void 0:y.department)==null?void 0:$.url)||l.getPlanUrl()},email:{text:l.getEmailAddress(),url:((J=y==null?void 0:y.email)==null?void 0:J.url)||l.getEmailAddress()},asuOfficeLoc:l.getAsuOfficeLoc(),phone:l.getPhone()})})})]}))]})]})},"DetailPage$1");Ne.propTypes={appPathFolder:n.string,dataSource:Ht,anchorMenu:n.shape($t),hero:n.shape(Tt.propTypes),introContent:n.shape({hideMarketText:n.bool,hideProgramDesc:n.bool,hideRequiredCourses:n.bool,breadcrumbs:se.arrayOf(z),contents:se.arrayOf(n.object),video:Jt,image:X}),atAGlance:n.shape({hide:n.bool,offeredBy:z,locations:se.arrayOf(z),firstRequirementMathCourse:n.string,mathIntensity:n.string,timeCommitment:n.string}),applicationRequirements:n.shape({hide:n.bool}),changeMajorRequirements:n.shape({hide:n.bool}),affordingCollege:n.shape({hide:n.bool}),flexibleDegreeOptions:n.shape({hide:n.bool}),careerOutlook:n.shape({hide:n.bool,image:X}),exampleCareers:n.shape({hide:n.bool}),globalOpportunity:n.shape({hide:n.bool,image:X}),attendOnline:n.shape({hide:n.bool,image:X}),programContactInfo:n.shape({hide:n.bool,department:n.string,email:n.string}),nextSteps:n.shape({hide:n.bool,cards:n.arrayOf(R)}),whyChooseAsu:n.shape(Ct)};const ne=p(a=>e.jsx(Xt,{detailPageProps:a,children:e.jsx(Ne,{...a})}),"AppComponent");ne.propTypes=Ne.propTypes;ne.__docgenInfo={description:`@param {DetailPageProps} props
@returns {JSX.Element}`,methods:[],displayName:"AppComponent",props:{appPathFolder:{description:"",type:{name:"string"},required:!1},dataSource:{description:"",type:{name:"shape",value:{id:{name:"string",required:!1},sourceType:{name:"enum",value:[{value:'"api"',computed:!1},{value:'"shared-data-source"',computed:!1},{value:'"static-json"',computed:!1}],required:!1},sharedDataSourceId:{name:"string",required:!1},data:{name:"arrayOf",value:{name:"object"},required:!1},apiUrl:{name:"string",required:!1}}},required:!1},anchorMenu:{description:"",type:{name:"shape",value:{atAGlance:{name:"bool",required:!1},applicationRequirements:{name:"bool",required:!1},changeMajorRequirements:{name:"bool",required:!1},nextSteps:{name:"bool",required:!1},affordingCollege:{name:"bool",required:!1},flexibleDegreeOptions:{name:"bool",required:!1},careerOutlook:{name:"bool",required:!1},exampleCareers:{name:"bool",required:!1},customizeYourCollegeExperience:{name:"bool",required:!1},globalOpportunity:{name:"bool",required:!1},attendOnline:{name:"bool",required:!1},whyChooseAsu:{name:"bool",required:!1},programContactInfo:{name:"bool",required:!1},externalAnchors:{name:"arrayOf",value:{name:"shape",value:{targetIdName:{name:"string",required:!1},text:{name:"string",required:!1}}},required:!1}}},required:!1},hero:{description:"",type:{name:"shape",value:"Hero.propTypes",computed:!0},required:!1},introContent:{description:"",type:{name:"shape",value:{hideMarketText:{name:"bool",required:!1},hideProgramDesc:{name:"bool",required:!1},hideRequiredCourses:{name:"bool",required:!1},breadcrumbs:{name:"arrayOf",value:{name:"custom",raw:"linkPropShape"},required:!1},contents:{name:"arrayOf",value:{name:"object"},required:!1},video:{name:"custom",raw:"videoPropShape",required:!1},image:{name:"custom",raw:"imagePropShape",required:!1}}},required:!1},atAGlance:{description:"",type:{name:"shape",value:{hide:{name:"bool",required:!1},offeredBy:{name:"custom",raw:"linkPropShape",required:!1},locations:{name:"arrayOf",value:{name:"custom",raw:"linkPropShape"},required:!1},firstRequirementMathCourse:{name:"string",required:!1},mathIntensity:{name:"string",required:!1},timeCommitment:{name:"string",required:!1}}},required:!1},applicationRequirements:{description:"",type:{name:"shape",value:{hide:{name:"bool",required:!1}}},required:!1},changeMajorRequirements:{description:"",type:{name:"shape",value:{hide:{name:"bool",required:!1}}},required:!1},affordingCollege:{description:"",type:{name:"shape",value:{hide:{name:"bool",required:!1}}},required:!1},flexibleDegreeOptions:{description:"",type:{name:"shape",value:{hide:{name:"bool",required:!1}}},required:!1},careerOutlook:{description:"",type:{name:"shape",value:{hide:{name:"bool",required:!1},image:{name:"custom",raw:"imagePropShape",required:!1}}},required:!1},exampleCareers:{description:"",type:{name:"shape",value:{hide:{name:"bool",required:!1}}},required:!1},globalOpportunity:{description:"",type:{name:"shape",value:{hide:{name:"bool",required:!1},image:{name:"custom",raw:"imagePropShape",required:!1}}},required:!1},attendOnline:{description:"",type:{name:"shape",value:{hide:{name:"bool",required:!1},image:{name:"custom",raw:"imagePropShape",required:!1}}},required:!1},programContactInfo:{description:"",type:{name:"shape",value:{hide:{name:"bool",required:!1},department:{name:"string",required:!1},email:{name:"string",required:!1}}},required:!1},nextSteps:{description:"",type:{name:"shape",value:{hide:{name:"bool",required:!1},cards:{name:"arrayOf",value:{name:"custom",raw:"cardPropShape"},required:!1}}},required:!1},whyChooseAsu:{description:"",type:{name:"shape",value:{hide:{name:"bool",required:!1},sectionIntroText:{name:"string",required:!1},cards:{name:"custom",raw:"whyChooseAsuCardsShape",required:!1},defaultCards:{name:"custom",raw:"whyChooseAsuCardsShape",required:!1}}},required:!1}}};const _a={component:ne,title:"Program Detail Page",parameters:{docs:{description:{component:"@typedef {import('../../core/types/detail-page-types').DetailPageProps} AppProps"}}}},L=p(({appPathFolder:a,dataSource:t,anchorMenu:r,introContent:i,hero:o,atAGlance:s,applicationRequirements:c,changeMajorRequirements:m,affordingCollege:f,flexibleDegreeOptions:j,careerOutlook:u,exampleCareers:h,globalOpportunity:d,programContactInfo:x,attendOnline:y,nextSteps:S,whyChooseAsu:b})=>e.jsxs(e.Fragment,{children:[e.jsx(ne,{appPathFolder:a,dataSource:t,anchorMenu:r,introContent:i,hero:o,atAGlance:s,applicationRequirements:c,changeMajorRequirements:m,affordingCollege:f,flexibleDegreeOptions:j,careerOutlook:u,exampleCareers:h,globalOpportunity:d,programContactInfo:x,attendOnline:y,nextSteps:S,whyChooseAsu:b}),e.jsx("section",{id:"my-request-form-info-id",className:"container mb-4",children:e.jsxs("div",{className:"row",children:[e.jsx("h4",{children:"This is a just a Place holder"}),e.jsx("img",{src:"./examples/assets/img/request-form-information.jpeg",alt:"",style:{opacity:"0.7",mixBlendMode:"luminosity",maxWidth:"100%",width:"100%"}})]})})]}),"Template"),Ia=new URL(window.location.href).searchParams.get("acadPlan"),A={appPathFolder:".",dataSource:{acadPlan:Ia||"TBTGMBGM"},anchorMenu:{applicationRequirements:!0,nextSteps:!0,affordingCollege:!0,careerOutlook:!0,globalOpportunity:!0,externalAnchors:[{targetIdName:"my-request-form-info-id",text:"Request Information"}]},hero:{image:{url:"examples/assets/img/ds_header_undergrad.jpg",altText:"Undergraduate Degrees",size:"medium"},title:{text:"Undergraduate Degrees",highlightColor:"gold"}},introContent:{breadcrumbs:[{text:"Academic programs",url:"#"},{text:"Undergraduate degrees",url:`${Ge()}?path=/story/program-listing-page--default`},{text:"Degree title",url:`${Ge()}?path=/story/program-detail-page--with-content`,isActive:!0}],image:{url:"https://source.unsplash.com/random/1200x750?college",altText:"Random image. REPLACE with appropriate alt text for accessibility."}},atAGlance:{offeredBy:{text:"Herberger Instite for Design and the Arts",url:"#"},locations:[{text:"Tempe campus",url:"#"},{text:"West Valley campus",url:"#"},{text:"Online",url:"#"},{text:"ASU Local@Los Angeles",url:"#"}],firstRequirementMathCourse:"MAT 142 - College Mathematics",mathIntensity:"General",timeCommitment:"120 credit hours(about 4 years)"},nextSteps:{cards:{learnMore:{icon:["fas","info-circle"],title:"Learn more about our programs",content:"Tell us what type of student you are and we'll get you the information you need.",buttonLink:{label:"Request information",ariaLabel:"Request information",color:"maroon",href:"https://admission.asu.edu/contact/request-info"}},apply:{icon:["fas","file-alt"],title:"Apply to program",content:"Arizona State University invites freshman, transfer, international, graduate and online students to apply for admission using our online application.",buttonLink:{label:"Apply now",ariaLabel:"Apply now",color:"maroon",href:"https://admission.asu.edu/apply"}},visit:{icon:["fas","map-marker-alt"],title:"Visit our campus",content:"An Experience ASU visit includes a presentation on admissions, scholarships and financial aid, student housing, getting involved on campus and much more.You will also go on a student-led walking tour of campus.",buttonLink:{label:"Schedule a visit",ariaLabel:"Schedule a visit",color:"maroon",href:"https://visit.asu.edu/"}}}},careerOutlook:{image:{url:"https://source.unsplash.com/random/1200x750?career",altText:"Random image. REPLACE with appropriate alt text for accessibility."}},globalOpportunity:{image:{url:"https://source.unsplash.com/random/1200x750?job",altText:"Random image. REPLACE with appropriate alt text for accessibility."}},whyChooseAsu:{hide:!1,sectionIntroText:"CUSTOM INTRO TEXT. ASU offers students excellent academics and unique opportunities to customize your college experience and give you an edge, including undergraduate research, internships, access to state-of-the-art facilities, and opportunities to work with world-class faculty and scientists.",cards:{faculty:{image:{url:"https://source.unsplash.com/random/600x600?career",altText:"Random image. REPLACE with appropriate alt text for accessibility."},title:"World-class faculty",text:"The ASU faculty is at the forefront nationally in advancing research and discovery. Our faculty members inspire new ways of thinking, innovating and solving problems socially, culturally and economically in our region and in the international community.",button:{label:"Faculty excellence",color:"maroon",href:"https://www.asu.edu/academics/faculty-excellence"}},programs:{image:{url:"https://source.unsplash.com/random/600x600?job",altText:"Random image. REPLACE with appropriate alt text for accessibility."},title:"Highly ranked programs",text:"A leading service ranking the excellence and innovation of the nation’s top universities, U.S. News & World Report rates many ASU programs among the top 25 in the country, including more than thirty programs ranked in the nation's top 10.",button:{label:"ASU rankings",color:"maroon",href:"https://www.asu.edu/rankings"}},research:{image:{url:"https://source.unsplash.com/random/600x600?person",altText:"Random image. REPLACE with appropriate alt text for accessibility."},title:"Research opportunities",text:"Students have the opportunity to work with mentors who are experts in their fields and establish professional connections that may last a lifetime. Engage in meaningful research and gain experience that may make you more competitive in the job market.",button:{label:"Research opportunities",color:"maroon",href:"https://provost.asu.edu/uresearch"}},inclusion:{image:{url:"https://source.unsplash.com/random/600x600?online",altText:"Random image. REPLACE with appropriate alt text for accessibility."},title:"An inclusive environment",text:"ASU defines our success not by whom we exclude, but by whom we include and how our students succeed. Our educational programs are designed to broaden access to a quality education and support our students’ success.",button:{label:"ASU Charter",color:"maroon",href:"https://www.asu.edu/about/charter-mission"}},mentors:{image:{url:"https://source.unsplash.com/random/600x600?classroom",altText:"Random image. REPLACE with appropriate alt text for accessibility."},title:"Mentor network",text:"Students have access to a powerful online network of diverse mentors. Engaging with the ASU Mentor Network can help to build connections with professionals, both locally and globally, who share career advice, networks, and their own success stories.",button:{label:"ASU Mentor network",color:"maroon",href:"https://mentorship.asu.edu"}},honors:{image:{url:"https://source.unsplash.com/random/600x600?school",altText:"Random image. REPLACE with appropriate alt text for accessibility."},title:"Global education",text:"ASU offers more than 300 Global Education programs in over 65 different countries. Whether you are interested in studying abroad, internships, research or service learning, there's a program for you!",button:{label:"Explore",color:"maroon",href:"https://goglobal.asu.edu"}}}},attendOnline:{image:{url:"https://source.unsplash.com/random/1200x750?classroom,online",altText:"Random image. REPLACE with appropriate alt text for accessibility."}},programContactInfo:{department:{text:"",url:"#"},email:{text:"",url:"#"}}},E=L.bind({});E.args={...A,hero:null,anchorMenu:null,introContent:null,atAGlance:null,applicationRequirements:null,changeMajorRequirements:null,nextSteps:null,affordingCollege:null,flexibleDegreeOptions:null,careerOutlook:null,exampleCareers:null,globalOpportunity:null,attendOnline:null,programContactInfo:null,whyChooseAsu:null};const _=L.bind({});_.args={...A,dataSource:{...A.dataSource,acadPlan:"LAAUDAUDD"}};const F=L.bind({});F.args={...A,dataSource:{...A.dataSource,acadPlan:"FAARTHBA"}};const U=L.bind({});U.args={...A,dataSource:{...A.dataSource,acadPlan:"BABUSCLBA"}};const O=L.bind({});O.args={...A};O.args.dataSource={...O.args.dataSource,acadPlan:"LSBISBIS"};O.args.introContent={...O.args.introContent,image:void 0,video:{url:"./examples/assets/video/stock-video-person-drawing.mp4",title:"",vttUrl:""}};const P=L.bind({});P.args={...A};P.args.dataSource={...P.args.dataSource,acadPlan:"LSBISBIS"};P.args.introContent={...P.args.introContent,image:void 0,video:{type:"youtube",url:"https://www.youtube.com/watch?v=aA2DCIDNxmw&list=PLuoS9aQM7Lzurd5ezsuCIlxyag7q_c-NQ"}};const T=L.bind({});T.args={...A};T.args.dataSource={...T.args.dataSource,acadPlan:"ASAPSSCERT"};var He,$e,Je,Xe,ze;E.parameters={...E.parameters,docs:{...(He=E.parameters)==null?void 0:He.docs,source:{originalSource:`({
  appPathFolder,
  dataSource,
  anchorMenu,
  introContent,
  hero,
  atAGlance,
  applicationRequirements,
  changeMajorRequirements,
  affordingCollege,
  flexibleDegreeOptions,
  careerOutlook,
  exampleCareers,
  globalOpportunity,
  programContactInfo,
  attendOnline,
  nextSteps,
  whyChooseAsu
}) => <>
    <DetailPage appPathFolder={appPathFolder} dataSource={dataSource} anchorMenu={anchorMenu} introContent={introContent} hero={hero} atAGlance={atAGlance} applicationRequirements={applicationRequirements} changeMajorRequirements={changeMajorRequirements} affordingCollege={affordingCollege} flexibleDegreeOptions={flexibleDegreeOptions} careerOutlook={careerOutlook} exampleCareers={exampleCareers} globalOpportunity={globalOpportunity} programContactInfo={programContactInfo} attendOnline={attendOnline} nextSteps={nextSteps} whyChooseAsu={whyChooseAsu} />
    <section id="my-request-form-info-id" className="container mb-4">
      <div className="row">
        <h4>This is a just a Place holder</h4>
        <img src="./examples/assets/img/request-form-information.jpeg" alt="" style={{
        opacity: "0.7",
        mixBlendMode: "luminosity",
        maxWidth: "100%",
        width: "100%"
      }} />
      </div>
    </section>
  </>`,...(Je=($e=E.parameters)==null?void 0:$e.docs)==null?void 0:Je.source},description:{story:"@type {{ args: AppProps }}",...(ze=(Xe=E.parameters)==null?void 0:Xe.docs)==null?void 0:ze.description}}};var Ye,Qe,Ze,Ke,et;_.parameters={..._.parameters,docs:{...(Ye=_.parameters)==null?void 0:Ye.docs,source:{originalSource:`({
  appPathFolder,
  dataSource,
  anchorMenu,
  introContent,
  hero,
  atAGlance,
  applicationRequirements,
  changeMajorRequirements,
  affordingCollege,
  flexibleDegreeOptions,
  careerOutlook,
  exampleCareers,
  globalOpportunity,
  programContactInfo,
  attendOnline,
  nextSteps,
  whyChooseAsu
}) => <>
    <DetailPage appPathFolder={appPathFolder} dataSource={dataSource} anchorMenu={anchorMenu} introContent={introContent} hero={hero} atAGlance={atAGlance} applicationRequirements={applicationRequirements} changeMajorRequirements={changeMajorRequirements} affordingCollege={affordingCollege} flexibleDegreeOptions={flexibleDegreeOptions} careerOutlook={careerOutlook} exampleCareers={exampleCareers} globalOpportunity={globalOpportunity} programContactInfo={programContactInfo} attendOnline={attendOnline} nextSteps={nextSteps} whyChooseAsu={whyChooseAsu} />
    <section id="my-request-form-info-id" className="container mb-4">
      <div className="row">
        <h4>This is a just a Place holder</h4>
        <img src="./examples/assets/img/request-form-information.jpeg" alt="" style={{
        opacity: "0.7",
        mixBlendMode: "luminosity",
        maxWidth: "100%",
        width: "100%"
      }} />
      </div>
    </section>
  </>`,...(Ze=(Qe=_.parameters)==null?void 0:Qe.docs)==null?void 0:Ze.source},description:{story:"@type {{ args: AppProps }}",...(et=(Ke=_.parameters)==null?void 0:Ke.docs)==null?void 0:et.description}}};var tt,at,rt,nt,ot;F.parameters={...F.parameters,docs:{...(tt=F.parameters)==null?void 0:tt.docs,source:{originalSource:`({
  appPathFolder,
  dataSource,
  anchorMenu,
  introContent,
  hero,
  atAGlance,
  applicationRequirements,
  changeMajorRequirements,
  affordingCollege,
  flexibleDegreeOptions,
  careerOutlook,
  exampleCareers,
  globalOpportunity,
  programContactInfo,
  attendOnline,
  nextSteps,
  whyChooseAsu
}) => <>
    <DetailPage appPathFolder={appPathFolder} dataSource={dataSource} anchorMenu={anchorMenu} introContent={introContent} hero={hero} atAGlance={atAGlance} applicationRequirements={applicationRequirements} changeMajorRequirements={changeMajorRequirements} affordingCollege={affordingCollege} flexibleDegreeOptions={flexibleDegreeOptions} careerOutlook={careerOutlook} exampleCareers={exampleCareers} globalOpportunity={globalOpportunity} programContactInfo={programContactInfo} attendOnline={attendOnline} nextSteps={nextSteps} whyChooseAsu={whyChooseAsu} />
    <section id="my-request-form-info-id" className="container mb-4">
      <div className="row">
        <h4>This is a just a Place holder</h4>
        <img src="./examples/assets/img/request-form-information.jpeg" alt="" style={{
        opacity: "0.7",
        mixBlendMode: "luminosity",
        maxWidth: "100%",
        width: "100%"
      }} />
      </div>
    </section>
  </>`,...(rt=(at=F.parameters)==null?void 0:at.docs)==null?void 0:rt.source},description:{story:"@type {{ args: AppProps }}",...(ot=(nt=F.parameters)==null?void 0:nt.docs)==null?void 0:ot.description}}};var st,it,lt,pt,ct;U.parameters={...U.parameters,docs:{...(st=U.parameters)==null?void 0:st.docs,source:{originalSource:`({
  appPathFolder,
  dataSource,
  anchorMenu,
  introContent,
  hero,
  atAGlance,
  applicationRequirements,
  changeMajorRequirements,
  affordingCollege,
  flexibleDegreeOptions,
  careerOutlook,
  exampleCareers,
  globalOpportunity,
  programContactInfo,
  attendOnline,
  nextSteps,
  whyChooseAsu
}) => <>
    <DetailPage appPathFolder={appPathFolder} dataSource={dataSource} anchorMenu={anchorMenu} introContent={introContent} hero={hero} atAGlance={atAGlance} applicationRequirements={applicationRequirements} changeMajorRequirements={changeMajorRequirements} affordingCollege={affordingCollege} flexibleDegreeOptions={flexibleDegreeOptions} careerOutlook={careerOutlook} exampleCareers={exampleCareers} globalOpportunity={globalOpportunity} programContactInfo={programContactInfo} attendOnline={attendOnline} nextSteps={nextSteps} whyChooseAsu={whyChooseAsu} />
    <section id="my-request-form-info-id" className="container mb-4">
      <div className="row">
        <h4>This is a just a Place holder</h4>
        <img src="./examples/assets/img/request-form-information.jpeg" alt="" style={{
        opacity: "0.7",
        mixBlendMode: "luminosity",
        maxWidth: "100%",
        width: "100%"
      }} />
      </div>
    </section>
  </>`,...(lt=(it=U.parameters)==null?void 0:it.docs)==null?void 0:lt.source},description:{story:"@type {{ args: AppProps }}",...(ct=(pt=U.parameters)==null?void 0:pt.docs)==null?void 0:ct.description}}};var mt,ut,dt,ht,gt;O.parameters={...O.parameters,docs:{...(mt=O.parameters)==null?void 0:mt.docs,source:{originalSource:`({
  appPathFolder,
  dataSource,
  anchorMenu,
  introContent,
  hero,
  atAGlance,
  applicationRequirements,
  changeMajorRequirements,
  affordingCollege,
  flexibleDegreeOptions,
  careerOutlook,
  exampleCareers,
  globalOpportunity,
  programContactInfo,
  attendOnline,
  nextSteps,
  whyChooseAsu
}) => <>
    <DetailPage appPathFolder={appPathFolder} dataSource={dataSource} anchorMenu={anchorMenu} introContent={introContent} hero={hero} atAGlance={atAGlance} applicationRequirements={applicationRequirements} changeMajorRequirements={changeMajorRequirements} affordingCollege={affordingCollege} flexibleDegreeOptions={flexibleDegreeOptions} careerOutlook={careerOutlook} exampleCareers={exampleCareers} globalOpportunity={globalOpportunity} programContactInfo={programContactInfo} attendOnline={attendOnline} nextSteps={nextSteps} whyChooseAsu={whyChooseAsu} />
    <section id="my-request-form-info-id" className="container mb-4">
      <div className="row">
        <h4>This is a just a Place holder</h4>
        <img src="./examples/assets/img/request-form-information.jpeg" alt="" style={{
        opacity: "0.7",
        mixBlendMode: "luminosity",
        maxWidth: "100%",
        width: "100%"
      }} />
      </div>
    </section>
  </>`,...(dt=(ut=O.parameters)==null?void 0:ut.docs)==null?void 0:dt.source},description:{story:"@type {{ args: AppProps }}",...(gt=(ht=O.parameters)==null?void 0:ht.docs)==null?void 0:gt.description}}};var ft,xt,yt,bt,jt;P.parameters={...P.parameters,docs:{...(ft=P.parameters)==null?void 0:ft.docs,source:{originalSource:`({
  appPathFolder,
  dataSource,
  anchorMenu,
  introContent,
  hero,
  atAGlance,
  applicationRequirements,
  changeMajorRequirements,
  affordingCollege,
  flexibleDegreeOptions,
  careerOutlook,
  exampleCareers,
  globalOpportunity,
  programContactInfo,
  attendOnline,
  nextSteps,
  whyChooseAsu
}) => <>
    <DetailPage appPathFolder={appPathFolder} dataSource={dataSource} anchorMenu={anchorMenu} introContent={introContent} hero={hero} atAGlance={atAGlance} applicationRequirements={applicationRequirements} changeMajorRequirements={changeMajorRequirements} affordingCollege={affordingCollege} flexibleDegreeOptions={flexibleDegreeOptions} careerOutlook={careerOutlook} exampleCareers={exampleCareers} globalOpportunity={globalOpportunity} programContactInfo={programContactInfo} attendOnline={attendOnline} nextSteps={nextSteps} whyChooseAsu={whyChooseAsu} />
    <section id="my-request-form-info-id" className="container mb-4">
      <div className="row">
        <h4>This is a just a Place holder</h4>
        <img src="./examples/assets/img/request-form-information.jpeg" alt="" style={{
        opacity: "0.7",
        mixBlendMode: "luminosity",
        maxWidth: "100%",
        width: "100%"
      }} />
      </div>
    </section>
  </>`,...(yt=(xt=P.parameters)==null?void 0:xt.docs)==null?void 0:yt.source},description:{story:"@type {{ args: AppProps }}",...(jt=(bt=P.parameters)==null?void 0:bt.docs)==null?void 0:jt.description}}};var qt,vt,St,wt,Ot;T.parameters={...T.parameters,docs:{...(qt=T.parameters)==null?void 0:qt.docs,source:{originalSource:`({
  appPathFolder,
  dataSource,
  anchorMenu,
  introContent,
  hero,
  atAGlance,
  applicationRequirements,
  changeMajorRequirements,
  affordingCollege,
  flexibleDegreeOptions,
  careerOutlook,
  exampleCareers,
  globalOpportunity,
  programContactInfo,
  attendOnline,
  nextSteps,
  whyChooseAsu
}) => <>
    <DetailPage appPathFolder={appPathFolder} dataSource={dataSource} anchorMenu={anchorMenu} introContent={introContent} hero={hero} atAGlance={atAGlance} applicationRequirements={applicationRequirements} changeMajorRequirements={changeMajorRequirements} affordingCollege={affordingCollege} flexibleDegreeOptions={flexibleDegreeOptions} careerOutlook={careerOutlook} exampleCareers={exampleCareers} globalOpportunity={globalOpportunity} programContactInfo={programContactInfo} attendOnline={attendOnline} nextSteps={nextSteps} whyChooseAsu={whyChooseAsu} />
    <section id="my-request-form-info-id" className="container mb-4">
      <div className="row">
        <h4>This is a just a Place holder</h4>
        <img src="./examples/assets/img/request-form-information.jpeg" alt="" style={{
        opacity: "0.7",
        mixBlendMode: "luminosity",
        maxWidth: "100%",
        width: "100%"
      }} />
      </div>
    </section>
  </>`,...(St=(vt=T.parameters)==null?void 0:vt.docs)==null?void 0:St.source},description:{story:"@type {{ args: AppProps }}",...(Ot=(wt=T.parameters)==null?void 0:wt.docs)==null?void 0:Ot.description}}};const Fa=["Default","DefaultWithGraduateDegree","WithContent","WithNotAcceptNewStudents","WithVideoAndMarketText","WithYoutubeVideo","WithNoGlobalOpportunity"];export{E as Default,_ as DefaultWithGraduateDegree,F as WithContent,T as WithNoGlobalOpportunity,U as WithNotAcceptNewStudents,O as WithVideoAndMarketText,P as WithYoutubeVideo,Fa as __namedExportsOrder,_a as default};

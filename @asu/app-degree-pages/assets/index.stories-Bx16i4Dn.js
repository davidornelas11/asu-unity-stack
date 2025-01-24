var la=Object.defineProperty;var r=(t,s)=>la(t,"name",{value:s,configurable:!0});import{p as ca,X as de,B as H,Y as da,j as e,q as F,_ as Et,P as p,$ as pa,a0 as ma,a1 as ua,Q as Gt,n as ge,i as he,v as ga,c as ha,d as Ue,a2 as fa,a3 as xa,b as ya,a4 as fe,h as K,a5 as xe,a6 as J,m as ba,O as ja,E as X,a7 as pe,Z as va,a8 as Vt,t as Sa,a9 as wa,aa as le,ab as Pa,ac as Ca,s as Wt,ad as zt,ae as La,af as Fa,ag as Kt,ah as me,u as Ht,o as qa,ai as Ia,M as Na,A as Aa,z as Ta,C as Ua,F as Da,T as ka,H as Ba,I as Oa,aj as Ra,R as Ma,L as _a,ak as $a,al as Ea,am as Ga,W as ue}from"./index-B5Q7XHPi.js";import{r as y,R as De}from"./index-JpckQOF4.js";import"./index-CB6vkw4h.js";import"./_commonjsHelpers-Ii5oIDU0.js";function Va(t,s){const a=Math.floor(t/s),n=t%s;return a+(n>0?1:0)}r(Va,"computePages");function Wa(t){return""}r(Wa,"mapTooltipLink");function za(t){return""}r(za,"accellerateDegreeTooltipLink");function Ka(){return""}r(Ka,"requestInfoLink");function Y(t,s){let a=s||"";return a=a.replaceAll("{INSTITUTION_CODE}",t.getInstitution()).replaceAll("{ACAD_PLAN_CODE}",t.getAcadPlan()),a}r(Y,"parseMajorInfoLink");function Jt(t,s){return`${Y(t,s)}#${ca.flexibleDegreeOptions.acceleratedId}`}r(Jt,"accellerateDegreeLink");function ke({programs:t=[],filters:{collegeAcadOrg:s,departmentCode:a,acceleratedConcurrent:n,locations:o=[],keyword:l,blacklistAcadPlans:i,program:m,showCerts:d}}){const u=r(g=>!s||g.getCollegeAcadOrgJoint().includes(s),"filterByCollegeAcadOrg"),f=r(g=>!a||g.getDepartmentCode().includes(a),"filterByDepartmentCode"),j=r(g=>{var h;return!o.length||((h=g.getCampusList())==null?void 0:h.some(I=>o.some(G=>G.value===I.campusCode)))},"filterByCampus"),c=r((g={})=>{var h;return!de(n)||((h=g[n.value])==null?void 0:h.length)>0},"filterByAcceleratedConcurrent"),b=r((g,h)=>h?new RegExp(h,"i").test(g.getFullDescription()):!0,"filterByKeyword"),x=r(g=>!(i!=null&&i.includes(g.getAcadPlan())),"filterByBlacklist"),S=r(g=>m==="undergrad"?!0:d==="true"&&m==="graduate"?g.isMinorOrCertificate():g.isPhdOrMasters(),"filterGraduateCerts"),w=r(g=>{const h=H(g);return u(h)&&f(h)&&j(h)&&c(g)&&b(h,l)&&x(h)&&S(h)},"applyFilters");return t.filter(w)}r(ke,"filterData");const Ha=r(t=>t.sort((a,n)=>a.acadPlanMarketingDescription.localeCompare(n.acadPlanMarketingDescription)),"sortPrograms"),Ja=r(({dataSource:t,tableView:s=[],programs:a,stateFilters:n})=>{const{collegeAcadOrg:o,departmentCode:l}=t;y.useEffect(()=>{if(!a||!da())return;const i="background:#eee; -webkit-text-stroke: 1px black; color: tomato; padding-left: 0.5rem;",m="font-size:30px;",d="font-size:24px;",u="font-size: 18px; margin-left: 0.5rem;";console.group("<< ASU Degree Page >>"),console.log("%c🏫 Listing Page Programs 📚",i+m),console.log(`%cTotal programs found: ${a.length}`,i+u),console.log("%cPrograms found",i+u),console.log(a),console.log(`%cTotal programs loaded: ${s.length}`,i+u),console.log("%cPrograms loaded",i+u),console.log(s),console.log("%cPage Filters",i+d),console.log(`%c- collegeAcadOrg:${o}`,i+u),console.log(`%c- departmentCode:${l}`,i+u),console.log("%cSearch Filters",i+d),console.log(n),console.groupEnd()})},"useListingPageLogger"),Xt=r(()=>e.jsx("div",{className:"container","data-testid":"browse-title",children:e.jsx("h2",{children:e.jsx("span",{className:"highlight-gold",children:"Browse degrees"})})}),"BrowseTitle");Xt.__docgenInfo={description:"",methods:[],displayName:"BrowseTitle"};const z=r(({id:t,label:s,selected:a,multiple:n,options:o,onChange:l})=>e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:t,children:s}),e.jsx("select",{className:"form-select",id:t,"data-testid":t,multiple:n,onChange:r(i=>l(t,i),"onChange"),value:a,children:o==null?void 0:o.map(i=>e.jsx("option",{id:i.id,value:i.value,children:i.text},i.id))})]}),"SelectFormGroup");z.__docgenInfo={description:`@param {SelectFormGroupProps} props
@returns {JSX.Element}`,methods:[],displayName:"SelectFormGroup"};const Xa=F.div`
  .hint-container {
    margin-top: -1.25rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    .hint-container {
      display: none;
    }
    .filter-action-buttons {
      & {
        * {
          margin: 0;
        }
        .btn-link {
          padding: 1rem;
        }
      }
    }
  }
`,Ya=F.button`
  font-weight: 400;
  text-decoration: underline;
`,Qa={event:"select",action:"click",name:"onclick"},Za={event:"link",action:"click",name:"onclick",type:"internal link"},M={isActive:!1,locations:[],asuLocals:[],acceleratedConcurrent:{value:"all",text:""},keyword:null,blacklistAcadPlans:[]},ce=r(t=>({id:t.id,value:t.value,text:t.text}),"getOptionProps"),er=r(t=>t.map(s=>s.text).join(", "),"formatOptions"),Be=r((t,s)=>{ge({...Qa,type:t,text:s})},"trackInputEvent"),Oe=r(t=>{ge({...Za,text:t})},"trackButtonEvent"),ye=r(({value:t,onChange:s,onApply:a,onClean:n})=>{const o=r((d,{target:{selectedOptions:u}})=>{let f=[],j=[];const c=Array.from(u,ce),{locations:b,asuLocals:x}=t;({locationsRender:r(()=>{f=c,j=x},"locationsRender"),asuLocalsRender:r(()=>{j=c,f=b},"asuLocalsRender")})[`${d}Render`](),s({...t,locations:f,asuLocals:j}),Be({locations:"location or online",asuLocals:"as local"}[d],er(c))},"changeLocationField"),l=r((d,{target:{selectedOptions:u}})=>{s({...t,[d]:ce(u[0])}),Be("accelerated/concurrent",ce(u[0]).text)},"changeAcceleratedConcurrentField"),i=r(()=>{a==null||a({...t,isActive:!0})},"applyFilters"),m=r(()=>{s(M),n==null||n()},"cleanFilters");return e.jsxs(Xa,{className:"container","data-testid":"filters",children:[e.jsx("h4",{children:"Filter your results"}),e.jsxs("form",{className:"mt-3 uds-form row",children:[e.jsx("div",{className:"col-lg-4 col-md-12",children:e.jsx(z,{multiple:!0,id:"locations",label:"Campuses or online",selected:t.locations.map(d=>d.value),options:pa,onChange:o})}),e.jsx("div",{className:"col-lg-4 col-md-12",children:e.jsx(z,{multiple:!0,id:"asuLocals",label:"ASU location, ASU Local",selected:t.asuLocals.map(d=>d.value),options:ma,onChange:o})}),e.jsx("div",{className:"col-lg-4 col-md-12",children:e.jsx(z,{id:"acceleratedConcurrent",label:"Accelerated, Concurrent",selected:t.acceleratedConcurrent.value,options:ua,onChange:l})})]}),e.jsx("div",{className:"hint-container",children:e.jsx("p",{children:e.jsx("small",{children:"*CTRL + Click to select multiple"})})}),e.jsxs("div",{className:"filter-action-buttons",children:[e.jsx(Gt,{"data-testid":"btn-apply-filter",color:"maroon",label:"Apply filters",ariaLabel:"Apply filters",size:"default",onClick:r(()=>{i(),Oe("apply filters")},"onClick")}),e.jsx(Ya,{"data-testid":"btn-clear-filters",className:"btn btn-link",onClick:r(()=>{m(),Oe("clean filters")},"onClick"),children:"Clear filters"})]})]})},"Filters");ye.propTypes={value:Et,onChange:p.func,onApply:p.func,onClean:p.func};ye.__docgenInfo={description:`@param {FilterProps} props
@returns {JSX.Element}`,methods:[],displayName:"Filters",props:{value:{description:"",type:{name:"shape",value:{locations:{name:"arrayOf",value:{name:"custom",raw:"optionItemShape"},required:!1},asuLocals:{name:"arrayOf",value:{name:"custom",raw:"optionItemShape"},required:!1},acceleratedConcurrent:{name:"custom",raw:"optionItemShape",required:!1}}},required:!1},onChange:{description:"",type:{name:"func"},required:!1},onApply:{description:"",type:{name:"func"},required:!1},onClean:{description:"",type:{name:"func"},required:!1}}};function be({value:{isActive:t,locations:s,asuLocals:a,acceleratedConcurrent:n}={},onRemove:o}){const l=he("filter-"),i=(s==null?void 0:s.length)+(a==null?void 0:a.length)+(de(n)?1:0),m=r((d,u)=>{const{text:f}=u;return e.jsxs("span",{tabIndex:-1,role:"button","aria-label":`Remove filter ${f}`,"data-filter-id":d,onKeyDown:r(()=>o(d,u),"onKeyDown"),onClick:r(()=>o(d,u),"onClick"),className:"btn btn-tag btn-tag-alt-white d-inline-flex align-items-center me-2",children:[e.jsx("span",{className:"pe-1",children:f}),e.jsx("i",{className:"fas fa-times"})]},l.next().value)},"SummaryItem");return e.jsxs("div",{"data-testid":"filters-summary",children:[e.jsx("header",{children:e.jsx("strong",{children:"Applied filters"})}),e.jsx("div",{"data-testid":"summary-filter-tags",children:!t||i===0?e.jsx("span",{children:"No filters applied"}):e.jsxs(e.Fragment,{children:[s.map(d=>m("locations",d)),a.map(d=>m("asuLocals",d)),(de(n)?[n]:[]).map(d=>m("acceleratedConcurrent",d))]})})]})}r(be,"FiltersSummary");be.propTypes={value:Et,onRemove:p.func};be.__docgenInfo={description:`@param {{
 value: import("src").FiltersState
 onRemove: (filterName: string, filter: import("src").FilterOption) => void
}} propsÎ
@returns {JSX.Element}`,methods:[],displayName:"FiltersSummary",props:{value:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"shape",value:{locations:{name:"arrayOf",value:{name:"custom",raw:"optionItemShape"},required:!1},asuLocals:{name:"arrayOf",value:{name:"custom",raw:"optionItemShape"},required:!1},acceleratedConcurrent:{name:"custom",raw:"optionItemShape",required:!1}}},required:!1},onRemove:{description:"",type:{name:"func"},required:!1}}};const tr=F.div`
  .photo-item {
    padding-bottom: 1.25rem;
  }
`,ar=F.section`
  @media (max-width: 480px) {
    .uds-img,
    .uds-video-container {
      margin: 0;
    }
  }
`;function rr({applyNowUrl:t,title:s,contents:a,photoGrid:n}){const o=fe(s);return e.jsx("section",{className:"container","data-type":"text-photo-grid","data-testid":"intro-content",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-sm-12 col-md-5",children:[e.jsx(o,{className:"mt-0",children:e.jsx("span",{className:`${K(s.cssClass)}`,children:s.text})}),e.jsx(xe,{contents:a}),e.jsx(J,{href:t})]}),e.jsx("div",{className:"col-sm-12 col-md-7 d-none d-sm-none d-md-block",children:e.jsx(tr,{className:"row",children:n.images.map((l,i)=>e.jsx("div",{className:"photo-item col-sm-12 col-md-6 col-lg-6",children:e.jsx("img",{className:`mg-fluid ${K(l.cssClass)}`,src:l.url,alt:l.altText,style:{maxWidth:"100%"}})},`img-${i+1}`))})})]})})}r(rr,"textPhotoGridTypeHtmlTemplate");function sr({applyNowUrl:t,title:s,contents:a,image:n,video:o}){const l=fe(s);return e.jsx(ar,{className:"container","data-type":"text-media","data-testid":"intro-content",children:e.jsxs("div",{className:"row gy-3",children:[e.jsxs("div",{className:"col-sm-12 col-md-5",children:[e.jsx(l,{className:"mt-0",children:e.jsx("span",{className:`${K(s.cssClass)}`,children:s.text})}),e.jsx(xe,{contents:a}),e.jsx(J,{href:t})]}),e.jsxs("div",{className:"col-sm-12 col-md-7 mt-2 mt-sm-0",children:[o&&e.jsx(ba,{type:o.type,url:o.url,vttUrl:o.vttUrl,title:o.title,className:"mt-0"}),n&&e.jsx("div",{className:"uds-img",children:e.jsx("img",{src:n.url,className:"img-fluid",alt:n.altText})})]})]})})}r(sr,"textTextMediaTypeHtmlTemplate");function or({applyNowUrl:t,title:s,contents:a,image:n}){return e.jsx("section",{className:"container","data-type":"text-image-overlay","data-testid":"intro-content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12",children:e.jsx(ja,{title:s.text,contents:a,image:n,contentDirection:"right",contentChildren:e.jsx("div",{className:"mt-2",children:e.jsx(J,{href:t})})})})})})}r(or,"textImageOverlapTypeHtmlTemplate");const nr=r(({applyNowUrl:t,title:s,contents:a})=>{const n=fe(s);return e.jsx("section",{className:"container","data-type":"text","data-testid":"intro-content",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-sm-12 col-md-5",children:e.jsx(n,{className:"mt-0",children:e.jsx("span",{className:`${K(s.cssClass)}`,children:s.text})})}),e.jsxs("div",{className:"col-sm-12 col-md-7",children:[e.jsx(xe,{contents:a}),e.jsx(J,{href:t})]})]})})},"textTypeHtmlTemplate"),je=r(({applyNowUrl:t,type:s,title:a,contents:n,image:o,video:l,photoGrid:i})=>({text:r(()=>nr({applyNowUrl:t,title:a,contents:n}),"text"),"text-media":r(()=>sr({applyNowUrl:t,title:a,contents:n,image:o,video:l}),"text-media"),"text-image-overlay":r(()=>or({applyNowUrl:t,title:a,contents:n,image:o}),"text-image-overlay"),"text-photo-grid":r(()=>rr({applyNowUrl:t,title:a,contents:n,image:o,photoGrid:i}),"text-photo-grid"),undefined:r(()=>(console.error(`the type '${s}' is not supported by the 'IntroContent' component.`),null),"undefined")})[s](),"IntroContent");je.propTypes={applyNowUrl:p.string,type:p.oneOf(["text","text-media","text-image-overlay","text-photo-grid"]).isRequired,video:p.shape({...ga}),image:p.shape({...ha}),header:Ue,title:p.shape({...fa,component:p.oneOf(xa)}),contents:p.arrayOf(Ue),photoGrid:p.shape({images:p.arrayOf(ya)})};const Q={programs:p.arrayOf(p.object),totalRows:p.number,loading:p.bool,actionUrls:p.shape({applyNowUrl:p.string,majorInfoUrl:p.string,majorInfoOnlineUrl:p.string}),degreesPerPage:p.number},ir=F.div`
  & {
    ul {
      margin-top: 1.5rem;
      margin-bottom: 0;
      list-style: none;
      padding: 0;

      li:not(:last-child) {
        margin-bottom: 1rem;
      }
    }
  }
  .accordion .card.card-foldable {
    border-bottom: 1px solid #d0d0d0;
  }
`,ve=r(({programs:t,actionUrls:s})=>{var i,m,d,u,f;const{state:a}=y.useContext(X),n=(m=(i=a==null?void 0:a.listPageProps)==null?void 0:i.programList)==null?void 0:m.settings,o=((f=(u=(d=a==null?void 0:a.listPageProps)==null?void 0:d.programList)==null?void 0:u.dataSource)==null?void 0:f.program)==="graduate",l=t.map(j=>{const c=H(j),b=r(()=>{var h;const w=c.isOnline()?c.getOnlineMajorMapURL():c.getGeneralDegreeMajorMap();let g;try{g=`<a href=${(h=new URL(w))==null?void 0:h.toString()}>${c.getRequiredCoursesLabel()} Map</a>`}catch{return""}return g},"getRequiredCourses"),x=r(()=>`<div>
        ${c.hasConcurrentDegrees()?"<div className='cell-container'>concurrent</div>":""}
        ${c.hasAccelerateDegrees()?`<div className="cell-container">
                <a href=${Jt(c,s.majorInfoUrl)}>
                  4+1 years
                </a>
              </div>`:""}
    </div>`,"getAcceleratedConcurrent");return{content:{header:c.getMajorDesc(),body:`<ul>
        <li>
          <strong>Major:</strong>
          <br />
            <a href=${Y(c,s.majorInfoUrl)}>
              ${c.getMajorDesc()}
            </a>
        </li>
        <li>
          <strong>Degree:</strong>
          <br />${c.getDegree()}
        </li>
        ${o?"":`<li>
              <strong>Required Courses:</strong>
              <br />${b()}
            </li>`}
        <li>
          <strong>Campus or location:</strong>
          <br />${c.getCampusList().map(S=>pe(S.campusCode)).join(", ")}
        </li>
        <li>
          <strong>Accelerated/Concurrent:</strong>
          <br />${x()||"-"}
        </li>
        ${n!=null&&n.hideCollegeSchool?"":` <li>
                  <strong>College/School:</strong>
                  <br />
                  <a href=${c.getCollegeUrl()}>
                    ${c.getCollegeDesc()}
                  </a>
                </li>`}
      </ul>`}}});return e.jsx(ir,{"data-testid":"accordion-view",children:e.jsx(va,{cards:l})})},"AccordionView");ve.propTypes={...Q};ve.__docgenInfo={description:`@param {import("..").GridListingProps} props
@returns {JSX.Element}`,methods:[],displayName:"AccordionView",props:{programs:{description:"",type:{name:"arrayOf",value:{name:"object"}},required:!1},totalRows:{description:"",type:{name:"number"},required:!1},loading:{description:"",type:{name:"bool"},required:!1},actionUrls:{description:"",type:{name:"shape",value:{applyNowUrl:{name:"string",required:!1},majorInfoUrl:{name:"string",required:!1},majorInfoOnlineUrl:{name:"string",required:!1}}},required:!1},degreesPerPage:{description:"",type:{name:"number"},required:!1}}};const lr=F.section`
  margin: auto;

  .card-buttons {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 1rem;
    order: 3;
    margin: 0 1rem 1rem;

    .card-button {
      column-gap: 0;
      padding: 0;
      width: fit-content;
    }
    .card-button .btn {
      margin: 0;
    }
  }
`;function Z({programs:t,loading:s,actionUrls:a}){var d,u,f,j;const{defaultState:n,state:o}=y.useContext(X),l=(j=(f=(u=(d=o==null?void 0:o.listPageProps)==null?void 0:d.programList)==null?void 0:u.settings)==null?void 0:f.cardDefaultImage)==null?void 0:j.url,i=n.detailPageDefault.hero.image.url,m=l||i;return e.jsx(lr,{id:Vt,className:"container row","data-loading":s,"data-testid":"grid-view",children:t.map(c=>{const b=H(c);return e.jsx("div",{className:"col col-sm-12 col-md-4 col-lg-3 mb-2",children:e.jsx(Sa,{type:"degree",horizontal:!1,clickable:!1,image:m,imageAltText:"An example image",title:b.getMajorDesc(),linkLabel:"View Program Details",linkUrl:Y(b,a.majorInfoUrl),buttons:[{color:"maroon",size:"small",label:"Reqeuest Info",href:Ka()},{color:"gold",size:"small",label:"Apply",href:a.applyNowUrl}]})})})})}r(Z,"GridView");Z.propTypes={...Q};Z.__docgenInfo={description:`@param {import("..").GridListingProps} props
@returns {JSX.Element}`,methods:[],displayName:"GridView",props:{programs:{description:"",type:{name:"arrayOf",value:{name:"object"}},required:!1},totalRows:{description:"",type:{name:"number"},required:!1},loading:{description:"",type:{name:"bool"},required:!1},actionUrls:{description:"",type:{name:"shape",value:{applyNowUrl:{name:"string",required:!1},majorInfoUrl:{name:"string",required:!1},majorInfoOnlineUrl:{name:"string",required:!1}}},required:!1},degreesPerPage:{description:"",type:{name:"number"},required:!1}}};const cr=[{dataKey:"Major",label:"Major",className:"major",sortable:!0,contentTemplate:r(({resolver:t,rowIndex:s,actionUrls:a,onClick:n})=>e.jsxs("div",{className:"cell-container",children:[e.jsx("a",{href:Y(t,a==null?void 0:a.majorInfoUrl),children:t.getMajorDesc()}),e.jsx(wa,{dataId:"show-row-detail",ariaLabel:`${t.getMajorDesc()} arrow`,ariaControls:`row-info-${s}`,onClick:r(o=>n(s,o),"onClick")})]}),"contentTemplate")},{dataKey:"Degree",label:"Degree",className:"degree",contentTemplate:r(({resolver:t})=>e.jsxs("div",{className:"cell-container",children:[e.jsx("span",{children:t.getDegree()}),e.jsx(le,{popover:{title:t.getDegreeDesc(),body:t.getDegreeDescLong(),withAuto:!1}})]}),"contentTemplate")},{dataKey:"RequiredCourses",label:"Required Courses",className:"required-course",contentTemplate:r(({resolver:t})=>{var o;const a=t.isOnline()?t.getOnlineMajorMapURL():t.getGeneralDegreeMajorMap();let n;try{const l=(o=new URL(a))==null?void 0:o.toString();n=e.jsxs("a",{href:l,children:[t.getRequiredCoursesLabel()," Map"]})}catch{return""}return n},"contentTemplate")},{dataKey:"Location",label:"Campus or location",className:"campus-location",sortable:!0,contentTemplate:r(({resolver:t})=>{const s=he("campus-");return e.jsx("div",{children:t.getCampusList().map((a,n,o)=>e.jsxs("div",{className:"cell-container",children:[e.jsx("span",{children:`${pe(Pa(a.campusCode))}${n<o.length-1?", ":""}`},a.campusCode),e.jsx("span",{children:e.jsx(le,{popover:{title:pe(a.campusCode),body:r(()=>fetch(Wa(a.campusCode)),"body"),withAuto:!0}})})]},s.next().value))})},"contentTemplate")},{dataKey:"AcceleratedConcurrent",label:"Accelerated/ Concurrent",className:"accelerated-concurrent",sortable:!0,contentTemplate:r(({resolver:t,actionUrls:s})=>e.jsxs("div",{children:[t.getConcurrentDegrees().then(a=>a).length>0&&e.jsx("div",{className:"cell-container",children:"concurrent"}),t.hasConcurrentOrAccelerateDegrees()&&e.jsxs("div",{className:"cell-container",children:[e.jsx("a",{href:Jt(t,s.majorInfoUrl),children:"4+1 years"}),e.jsx(le,{popover:{title:"4+1 years",body:r(()=>fetch(za(t.getAcadPlan())),"body"),withAuto:!1}})]})]}),"contentTemplate")},{dataKey:"CollegeSchool",label:"College/School",className:"college",sortable:!0,contentTemplate:r(({resolver:t})=>e.jsx("a",{href:t.getCollegeUrl(),children:t.getCollegeDesc()}),"contentTemplate")}],dr=Ca`
  @keyframes loading {
    40% {
      background-position: 100% 0;
    }
    100% {
      background-position: 100% 0;
    }
  }

  &[data-loading="true"] {
    td {
      position: relative;

      .bar {
        background-color: #e7e7e7;
        height: 14px;
        border-radius: 7px;
        width: 80%;
      }

      &:after {
        position: absolute;
        transform: translateY(-50%);
        top: 50%;
        left: 0;
        content: "";
        display: block;
        width: 100%;
        height: 24px;
        background-image: linear-gradient(
          100deg,
          rgba(255, 255, 255, 0),
          rgba(255, 255, 255, 0.5) 60%,
          rgba(255, 255, 255, 0) 80%
        );
        background-size: 200px 24px;
        background-position: -100px 0;
        background-repeat: no-repeat;
        animation: loading 1s infinite;
      }
    }
  }
`,pr=F.table`
  ${dr}
  --table-border-color: #e5e5e5;

  background-color: #fafafa;
  border: 1px solid var(--table-border-color);
  border-collapse: collapse;
  padding: 5px;

  width: 100%;
  margin: 0 auto;
  clear: both;
  border-spacing: 0;

  a {
    text-decoration: none;
  }

  thead {
    background: #d0d0d0;
    th {
      outline: none;
      :focus {
        box-shadow: 0px 0px 0px 2px #fff, 0px 0px 0px 4px #191919 !important;
      }
    }
  }

  th,
  td {
    padding: 8px 12px;
    // display: inline-block;
  }

  tr {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    flex-wrap: wrap;

    td {
      vertical-align: top;
    }

    .major {
      width: 250px;
      a {
        font-weight: 700;
      }
    }

    .degree {
      width: 75px;
    }

    .required-course {
      width: 100px;
    }

    .campus-location {
      width: 90px;
      & > div {
        width: fit-content;
      }
    }

    .accelerated-concurrent {
      width: 120px;
    }

    .college {
      width: 210px;
    }

    .compare-fav {
      // width: 180px;
    }

    .apply-info {
      width: 168px;
      & .btn {
        width: fit-content;
        :first-child {
          margin-bottom: 0.5rem;
        }
      }
    }
  }

  tbody {
    tr {
      border: 1px solid var(--table-border-color);
      border-top: 0;

      &:not(.row-info):hover {
        background-color: #e8e8e8;
      }

      .info-apply .cell-container {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 0.5rem;
      }

      td .cell-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 0.5rem;
      }
    }

    tr.row-info {
      td > div {
        position: relative;
      }

      input.togle-more-text {
        opacity: 0;
        position: absolute;
        pointer-events: none;

        &:checked + .desc-long {
          max-height: fit-content;
          overflow: auto;
        }

        &:not(:checked) + .desc-long::after {
          content: " ";
          height: 1rem;
          background: rgba(250, 250, 250, 0.9);
          box-shadow: -1px -2px 20px 15px #fafafa;
          width: 100%;
          position: absolute;
          bottom: 0;
        }

        &:checked + .desc-long + .label-more-less {
          .label-more {
            display: none;
          }
          .label-less {
            display: inline;
          }
        }

        &:not(:checked) + .desc-long + .label-more-less {
          .label-more {
            display: inline;
          }
          .label-less {
            display: none;
          }
        }
      }

      .desc-long {
        max-height: 200px;
        overflow: hidden;
        transform: max-width 0.6;
        p:last-child {
          margin-bottom: 0;
        }
      }

      label.label-more-less {
        cursor: pointer;
        line-height: normal;
        color: #8c1d40;
        text-align: right;
        border: 0;
        margin: 0;
        font-weight: 400;
        display: inline;
        position: absolute;
        bottom: 0.2rem;
        right: -2.5rem;
      }
    }

    tr.row-info {
      td:first-child {
        flex-basis: 55%;
      }

      td:last-child {
      }
    }

    tr:not([data-is-open="true"]) + tr.row-info {
      overflow: hidden;
      height: 0;
    }

    tr[data-is-open="true"] + tr.row-info {
      height: auto;
    }
  }
`,mr=r(({resolver:t,id:s})=>{const a=y.createRef(),n=r(o=>{o.key==="Enter"&&(a==null||a.current.click())},"triggerDescription");return e.jsxs("div",{children:[e.jsx("header",{children:e.jsx("strong",{children:"Program Description:"})}),e.jsx("input",{className:"togle-more-text",type:"checkbox",id:`#${s}`}),e.jsx("div",{className:"desc-long",id:s,dangerouslySetInnerHTML:Wt(t.getFullDescription())}),e.jsxs("label",{ref:a,className:"label-more-less element-focus",htmlFor:`#${s}`,role:"button",tabIndex:0,onKeyDown:n,children:[e.jsx("span",{"data-testid":"more-text",className:"label-more",children:"[...more]"}),e.jsx("span",{"data-testid":"less-text",className:"label-less",children:"[...less]"})]})]})},"renderInfo"),ur=r(({resolver:t})=>e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Additional Program Fee: "}),t.hasAsuProgramFee()?"Yes":"No"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Second Language Requirement: "}),t.hasAsuLangReqFlag()?"Yes":"No"]}),t.hasMathReqFlag()&&e.jsx("div",{children:e.jsxs("div",{children:[e.jsx("strong",{children:"First Required Math Course:"}),e.jsx("span",{children:t.getMinMathReq()}),t.getOtherMathReqCourse()&&e.jsx("span",{dangerouslySetInnerHTML:Wt(t.getOtherMathReqCourse())})]})}),t.getMathIntensity()&&e.jsxs("div",{children:[e.jsx("strong",{children:"Math Intensity:"}),t.getMathIntensity()]})]}),"renderExtraInfo"),gr=he("row-"),ee=r(({programs:t,totalRows:s,loading:a,actionUrls:n})=>{var f,j;const o=De.useRef(null),l=De.useRef(null),{state:i}=y.useContext(X),m=(j=(f=i==null?void 0:i.listPageProps)==null?void 0:f.programList)==null?void 0:j.settings;let d=cr;i.listPageProps.programList.dataSource.program==="graduate"&&(d=d.filter(c=>c.dataKey!=="RequiredCourses")),m!=null&&m.hideCollegeSchool&&(d=d.filter(c=>c.dataKey!=="CollegeSchool"));const u=r((c,b)=>{const x=l.current.children;Array.prototype.forEach.call(x,(w,g)=>g!==c&&w.setAttribute("data-is-open","false")),l.current.children[c].setAttribute("data-is-open",String(b))},"setOpenRowIndex");return e.jsx("section",{className:"container mb-4","data-testid":"list-view",children:e.jsxs(pr,{id:Vt,ref:o,"data-loading":a,title:`${s} program found`,children:[e.jsx("thead",{children:e.jsx("tr",{role:"row",children:d.map(c=>{var b;return e.jsx("th",{tabIndex:0,className:`${c.className}`,scope:"col","aria-label":c.ariaLabel,children:((b=c.headerTemplate)==null?void 0:b.call(c))||e.jsx("span",{children:c.label})},c.dataKey)})})}),e.jsxs("tbody",{ref:l,"data-testid":"program-rows",children:[t.length===0?e.jsx("tr",{role:"presentation",children:e.jsx("td",{colSpan:d.length,"aria-label":"No result found for the filters applied",children:" "})}):null,t.map((c,b)=>{const x=gr.next().value,S=b*2,w=H(c);return e.jsxs(y.Fragment,{children:[e.jsx("tr",{role:"row",children:d.map(g=>{var h;return e.jsx("td",{className:`${g.className}`,children:(h=g.contentTemplate)==null?void 0:h.call(g,{resolver:w,col:g,row:c,rowIndex:S,onClick:u,actionUrls:n})},`${x}-${g.dataKey}`)})},x),e.jsxs("tr",{id:`row-info-${S}`,className:"row-info",children:[e.jsx("td",{colSpan:3,children:mr({resolver:w,id:`${x}-more-text`})},`${x}-info`),e.jsx("td",{colSpan:2,children:ur({resolver:w})},`${x}-extra-info`)]},`${x}-row-info`)]},x)})]})]})})},"ListView");ee.propTypes={...Q};ee.__docgenInfo={description:`@param {import("..").GridListingProps} props
@returns {JSX.Element}`,methods:[],displayName:"ListView",props:{programs:{description:"",type:{name:"arrayOf",value:{name:"object"}},required:!1},totalRows:{description:"",type:{name:"number"},required:!1},loading:{description:"",type:{name:"bool"},required:!1},actionUrls:{description:"",type:{name:"shape",value:{applyNowUrl:{name:"string",required:!1},majorInfoUrl:{name:"string",required:!1},majorInfoOnlineUrl:{name:"string",required:!1}}},required:!1},degreesPerPage:{description:"",type:{name:"number"},required:!1}}};const hr=zt`

  .mobile-view {
    display: none;
  }
  [data-view-type="list-view"] {
    @media (max-width: 768px) {
      .desktop-view {
        display: none;
      }
      .mobile-view {
        display: block;
        .card-foldable .card-header h4 a {
          color: #8c1d40;
        }
      }
    }
  }
`,fr={[Kt]:Z,[me]:ee};function Se({dataViewComponent:t,loading:s,programs:a,actionUrls:n,degreesPerPage:o}){let l;o?typeof o!="number"&&(l=parseInt(o,10)):l=8;const i=o||l,m=Va(a.length,i),d=fr[t],[u,f]=y.useState([]),j=r((c,b)=>{const x=(b-1)*i,S=x+i;f(a.slice(x,S))},"onPageChange");return y.useEffect(()=>{f(a.slice(0,i))},[a]),e.jsxs("section",{"data-testid":"program-list","data-view-type":t,children:[e.jsx(hr,{}),e.jsx("div",{className:"desktop-view",children:e.jsx(d,{loading:s,programs:u,totalRows:a==null?void 0:a.length,actionUrls:n,degreesPerPage:o||l})}),e.jsx("div",{className:"mobile-view mb-2",children:e.jsx(ve,{loading:s,programs:u,totalRows:a==null?void 0:a.length,actionUrls:n,degreesPerPage:o||l})}),a.length>0?e.jsx(La,{totalNumbers:7,type:"default",background:"white",totalPages:m,onChange:j,showFirstButton:!0,showLastButton:!0}):e.jsx("section",{className:"container no-space",children:e.jsx(Fa,{message:"No result found for the filters applied"})})]})}r(Se,"ProgramList");Se.propTypes={dataViewComponent:p.string,...Q,degreesPerPage:p.number};Se.__docgenInfo={description:`@param {{
 dataViewComponent: GRID_VIEW_ID | LIST_VIEW_ID
} & GridListingProps} props`,methods:[],displayName:"ProgramList",props:{dataViewComponent:{description:"",type:{name:"string"},required:!1},programs:{description:"",type:{name:"arrayOf",value:{name:"object"}},required:!1},totalRows:{description:"",type:{name:"number"},required:!1},loading:{description:"",type:{name:"bool"},required:!1},actionUrls:{description:"",type:{name:"shape",value:{applyNowUrl:{name:"string",required:!1},majorInfoUrl:{name:"string",required:!1},majorInfoOnlineUrl:{name:"string",required:!1}}},required:!1},degreesPerPage:{description:"",type:{name:"number"},required:!1}}};Z.__docgenInfo={description:`@param {import("..").GridListingProps} props
@returns {JSX.Element}`,methods:[],displayName:"GridView",props:{programs:{description:"",type:{name:"arrayOf",value:{name:"object"}},required:!1},totalRows:{description:"",type:{name:"number"},required:!1},loading:{description:"",type:{name:"bool"},required:!1},actionUrls:{description:"",type:{name:"shape",value:{applyNowUrl:{name:"string",required:!1},majorInfoUrl:{name:"string",required:!1},majorInfoOnlineUrl:{name:"string",required:!1}}},required:!1},degreesPerPage:{description:"",type:{name:"number"},required:!1}}};ee.__docgenInfo={description:`@param {import("..").GridListingProps} props
@returns {JSX.Element}`,methods:[],displayName:"ListView",props:{programs:{description:"",type:{name:"arrayOf",value:{name:"object"}},required:!1},totalRows:{description:"",type:{name:"number"},required:!1},loading:{description:"",type:{name:"bool"},required:!1},actionUrls:{description:"",type:{name:"shape",value:{applyNowUrl:{name:"string",required:!1},majorInfoUrl:{name:"string",required:!1},majorInfoOnlineUrl:{name:"string",required:!1}}},required:!1},degreesPerPage:{description:"",type:{name:"number"},required:!1}}};const xr=F.div`
  label[for="search-field"] {
    margin-bottom: 0;
  }

  &[data-searching="true"] button {
    transform: scale(1.05);
    box-shadow: 0px 0px 0px 2px #ffffff, 0px 0px 0px 4px #191919 !important;
  }
`,we=r(({value:t,onChange:s,onSearch:a})=>{const[n,o]=y.useState(!1);let l;y.useEffect(()=>()=>clearTimeout(l),[]);const i=r(m=>{ge({event:"search",action:"type",name:"onenter",type:"search degree programs",text:m})},"trackSearchEvent");return e.jsx(xr,{className:"container mt-5","data-searching":n,"data-testid":"search-bar",children:e.jsx("form",{"data-testid":"search-bar-form",className:"uds-form p-0 col-md-6 col-sm-12",onSubmit:r(m=>{m.preventDefault(),a(),o(!0),l=setTimeout(()=>o(!1),500),clearTimeout(l)},"onSubmit"),children:e.jsxs("div",{className:"form-group mb-0 me-2",children:[e.jsx("label",{htmlFor:"search-field",children:"Search"}),e.jsxs("div",{className:"d-flex row align-items-baseline g-3",children:[e.jsx("div",{className:"col-sm-12 col-md-6 align-self-end",children:e.jsx("input",{"data-testid":"search-field",id:"search-field",value:t,type:"text",className:"form-control",placeholder:"Search degree programs",onChange:r(m=>{s(m.target.value),i(m.target.value)},"onChange")})}),e.jsx("div",{className:"col-sm-12 col-md-6 mt-2 mt-sm-0",children:e.jsx(Gt,{"data-testid":"search-button",color:"maroon",label:"Search now",ariaLabel:"Search now",size:"default",onClick:a})})]})]})})})},"SearchBar");we.propTypes={value:p.string,onChange:p.func,onSearch:p.func};we.__docgenInfo={description:`@param {SearchBarProps} props
@returns {JSX.Element}`,methods:[],displayName:"SearchBar",props:{value:{description:"",type:{name:"string"},required:!1},onChange:{description:"",type:{name:"func"},required:!1},onSearch:{description:"",type:{name:"func"},required:!1}}};const yr=F(Na)`
  .filter-switch-container {
    gap: 1rem;
  }
  @media (max-width: 768px) {
    & {
      font-size: 0.9rem;
    }
  }
`,br=zt`
  @media (max-width: 480px) {
      div[class^=uds-hero] {
        grid-template-rows: 1fr auto auto 1.5rem auto;
    }
  }
`,jr=F.div.attrs({className:"container"})`
  border-bottom: 1px solid #d0d0d0;
  margin-bottom: calc(var(--uds-dp-section-margin) / 2);
  padding-bottom: calc(var(--uds-dp-section-margin) / 2);
`,Pe=r(({appPathFolder:t,actionUrls:s,hasSearchBar:a=!0,hasFilters:n=!0,hero:o,introContent:l,programList:i,degreesPerPage:m})=>{var Te;const[{data:d,loading:u,error:f},j]=Ta(),[c,b]=y.useState(!1),[x,S]=y.useState([]),[w,g]=y.useState([]),[h,I]=y.useState(""),G=(Te=i.settings)==null?void 0:Te.defaultView,Yt=[me,Kt].includes(G)?G:me,[Qt,vr]=y.useState(Yt),ae=Ua(i.dataSource,$a),{defaultState:Zt}=y.useContext(X),{listingPageDefault:Ce}=Zt,{collegeAcadOrg:Le,departmentCode:Fe,showInactivePrograms:ea,blacklistAcadPlans:qe,program:Ie,cert:ta}=i.dataSource,[Ne,re]=y.useState({...M}),[V,Ae]=y.useState({...M});Ja({dataSource:i.dataSource,tableView:x,programs:d,stateFilters:Ne}),y.useEffect(()=>{typeof window<"u"&&Da({packageName:"app-degree-pages",component:"ListingPage",type:"NA",configuration:{programList:i,degreesPerPage:m}})},[]),y.useEffect(()=>{j(ae)},[ae]),y.useEffect(()=>{let v=Ha(d||[]);v=ke({programs:v,filters:{collegeAcadOrg:Le,departmentCode:Fe,blacklistAcadPlans:qe,program:Ie,showCerts:ta}}),g(v),S(v)},[d,m]);const se=r(async v=>{const{acceleratedConcurrent:oe,locations:W,asuLocals:ne,keyword:ie}=v;b(!0),j(ae);const ia=ke({programs:w,filters:{collegeAcadOrg:Le,departmentCode:Fe,acceleratedConcurrent:oe,locations:ne.length>0?W.concat(Ga):W,keyword:ie,showInactivePrograms:ea??!1,blacklistAcadPlans:qe,program:Ie}});re({...v}),Ae({...v}),S(ia),b(!1)},"applyFilters"),aa=r(async()=>{const v={...V,keyword:h};se(v)},"onSearchByKeyword"),ra=r(v=>{u||c||se(v)},"onFilterApply"),sa=r(async v=>{re(v)},"onFilterChange"),oa=r(()=>{re(M),Ae(M),S(w),I("")},"onFilterClean"),na=r((v,{value:oe})=>{const W=v==="acceleratedConcurrent"?Ea:V[v].filter(ie=>ie.value!==oe),ne={...V,[v]:W};se(ne)},"onFilterSummaryRemove");return e.jsxs(e.Fragment,{children:[e.jsx(ka,{}),e.jsx(br,{}),f&&e.jsx(Ba,{message:Oa}),o!=null&&o.hide?null:e.jsx("section",{"data-testid":"hero",children:e.jsx(Ht,{image:(o==null?void 0:o.image)||Ce.hero.image,title:{text:Ra(i.dataSource),highlightColor:"gold",...o==null?void 0:o.title,maxWidth:"100%"},contents:o==null?void 0:o.contents})}),e.jsxs(yr,{"data-is-loading":u,className:"main-section dg-margin-top",children:[(l==null?void 0:l.breadcrumbs)&&e.jsx("div",{className:"container mt-4 mb-0",children:e.jsx(Ma,{breadcrumbs:l.breadcrumbs,section:o?o.title.text:""})}),l?e.jsx(je,{applyNowUrl:(s==null?void 0:s.applyNowUrl)||Ce.actionUrls.applyNowUrl,type:l.type,header:l.header,title:l.title,contents:l.contents,image:l.image,video:l.video,photoGrid:l.photoGrid}):null,a||n?e.jsxs("section",{className:"no-space",children:[e.jsx(Xt,{}),a?e.jsx(we,{value:h,onChange:I,onSearch:aa}):null,n?e.jsx(ye,{value:Ne,onChange:sa,onApply:ra,onClean:oa}):null,e.jsx(jr,{})]}):null,e.jsx("section",{className:"container",children:e.jsx("div",{className:"d-flex justify-content-between filter-switch-container",children:n?e.jsx(be,{value:V,onRemove:na}):null})}),u||c?e.jsx(_a,{}):e.jsx(Se,{dataViewComponent:Qt,loading:u||c,programs:x,actionUrls:s,degreesPerPage:m})]})]})},"ListingPage$1");Pe.propTypes={appPathFolder:p.string,actionUrls:p.shape({applyNowUrl:p.string}),hasSearchBar:p.bool,hasFilters:p.bool,hero:p.shape(Ht.propTypes),introContent:p.shape(je.propTypes),programList:p.shape({dataSource:qa,settings:Ia}),degreesPerPage:p.number};const te=r(t=>e.jsx(Aa,{listPageProps:t,children:e.jsx(Pe,{...t})}),"AppComponent");te.propTypes=Pe.propTypes;te.__docgenInfo={description:`@param {ListingPageProps} props
@returns {JSX.Element}`,methods:[],displayName:"AppComponent",props:{appPathFolder:{description:"",type:{name:"string"},required:!1},actionUrls:{description:"",type:{name:"shape",value:{applyNowUrl:{name:"string",required:!1}}},required:!1},hasSearchBar:{description:"",type:{name:"bool"},required:!1},hasFilters:{description:"",type:{name:"bool"},required:!1},hero:{description:"",type:{name:"shape",value:"Hero.propTypes",computed:!0},required:!1},introContent:{description:"",type:{name:"shape",value:{applyNowUrl:{name:"string",required:!1},type:{name:"enum",value:[{value:'"text"',computed:!1},{value:'"text-media"',computed:!1},{value:'"text-image-overlay"',computed:!1},{value:'"text-photo-grid"',computed:!1}],required:!0},video:{name:"shape",value:{},required:!1},image:{name:"shape",value:{},required:!1},header:{name:"custom",raw:"contentPropShape",required:!1},title:{name:"shape",value:{component:{name:"enum",value:[{value:'"h1"',computed:!1},{value:'"h2"',computed:!1},{value:'"h3"',computed:!1},{value:'"h4"',computed:!1},{value:'"h5"',computed:!1},{value:'"h6"',computed:!1}],required:!1}},required:!1},contents:{name:"arrayOf",value:{name:"custom",raw:"contentPropShape"},required:!1},photoGrid:{name:"shape",value:{images:{name:"arrayOf",value:{name:"custom",raw:"imagePropShape"},required:!1}},required:!1}}},required:!1},programList:{description:"",type:{name:"shape",value:{dataSource:{name:"custom",raw:"dataSourcePropShape",required:!1},settings:{name:"custom",raw:"columSettingsPropShape",required:!1}}},required:!1},degreesPerPage:{description:"",type:{name:"number"},required:!1}}};const Fr={component:te,title:"Program Listing Page",parameters:{docs:{description:{component:"@typedef {import('../../core/types/listing-page-types').ListingPageProps } AppProps"}}}},P=r(({appPathFolder:t,actionUrls:s,hero:a,introContent:n,programList:o,hasFilters:l,hasSearchBar:i,...m})=>e.jsx(te,{appPathFolder:t,actionUrls:s,hero:a,introContent:n,programList:o,hasSearchBar:i,hasFilters:l,...m}),"Template"),$={applyNowUrl:"https://admission.asu.edu/apply",majorInfoUrl:`${ue()}?path=/story/program-detail-page--default&acadPlan={ACAD_PLAN_CODE}`},E={program:"undergrad"},C={appPathFolder:".",actionUrls:$,hero:null,introContent:{breadcrumbs:[{text:"Academic programs",url:"#"},{text:"Undergraduate degrees",url:`${ue()}?path=/story/program-listing-page--default`},{text:"Degree title",url:`${ue()}?path=/story/program-detail-page--with-content`,isActive:!0}],type:"text",title:{text:"This is introductory marketing copy. Lorem ipsum dolor sit amet"},contents:[{text:`<p>Lorem, <strong>ipsum</strong> dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
     </p>`},{text:`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?`}]},programList:{dataSource:E}},q=P.bind({});q.args={...C};const _=P.bind({});_.args={...C,introContent:null,programList:{...C.programList,dataSource:{...C.programList.dataSource,program:"graduate"}}};const T=P.bind({});T.args={...C,introContent:null,programList:{...C.programList,dataSource:{...C.programList.dataSource,blacklistAcadPlans:["BAACCBS","LAACTBS"]}}};const U=P.bind({});U.args={...C,degreesPerPage:2};const D=P.bind({});D.args={...C,introContent:null,programList:{...C.programList,dataSource:{...C.programList.dataSource,cert:"true",showInactivePrograms:"true"}}};const k=P.bind({});k.args={...q.args,hero:null,programList:{...q.args.programList,dataSource:{...q.args.programList.dataSource,departmentCode:"CPUBAFF",collegeAcadOrg:"CPP"}}};const B=P.bind({});B.args={actionUrls:$,hero:{image:{url:"examples/assets/img/ds_header_undergrad.jpg",altText:"Undergraduate Degrees",size:"medium"},title:{text:"Undergraduate Degrees",highlightColor:"gold"}},introContent:{type:"text",title:{text:"This is introductory marketing copy. Lorem ipsum dolor sit amet"},contents:[{text:`<b>Lorem</b>, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?`}]},programList:{dataSource:E,settings:{hideCollegeSchool:!0,cardDefaultImage:{url:"examples/assets/img/ds_header_undergrad.jpg"}}}};const O=P.bind({});O.args={actionUrls:$,hero:{image:{url:"examples/assets/img/ds_header_undergrad.jpg",size:"medium"},title:{text:"Area of study degrees",highlightColor:"gold"}},introContent:{type:"text-photo-grid",title:{text:"This is introductory marketing copy. Lorem ipsum dolor sit amet"},contents:[{text:`<b>Lorem</b>, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?`}],photoGrid:{images:[{url:"examples/assets/img/demo-phot-1.jpeg"},{url:"examples/assets/img/demo-phot-2.jpeg"},{url:"examples/assets/img/demo-phot-3.jpeg"}]}},hasFilters:!1,hasSearchBar:!1,programList:{dataSource:E}};const L=P.bind({});L.args={actionUrls:$,hero:{image:{url:"examples/assets/img/ds_header_undergrad.jpg",size:"medium"},title:{text:"Area of study degrees",highlightColor:"gold"}},introContent:{type:"text-media",title:{text:"This is introductory marketing copy. Lorem ipsum dolor sit amet"},contents:[{text:`<b>Lorem</b>, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?`}],image:{url:"https://source.unsplash.com/random/800x400?a=1"}},programList:{dataSource:E}};const N=P.bind({});N.args={...L.args};N.args.introContent={...L.args.introContent,image:void 0,video:{url:"/examples/assets/video/stock-video-person-drawing.mp4",title:"",vttUrl:""}};const A=P.bind({});A.args={...L.args};A.args.introContent={...L.args.introContent,image:void 0,video:{type:"youtube",url:"https://www.youtube.com/embed/YW2p0ctzK9c"}};const R=P.bind({});R.args={actionUrls:$,hero:{image:{url:"examples/assets/img/ds_header_undergrad.jpg",size:"medium"},title:{text:"[Subdomain] degrees in [area of study]",highlightColor:"gold"}},introContent:{type:"text-image-overlay",header:{text:"Intro Content Image Overlay"},title:{text:"This is the contents that goes in the box"},contents:[{text:`<b>Instagram</b> tour operator travel sailing flying package.
         Territory New York City group discount active lifestyle creditcard
         insurance wellness kayak guide overnight rural lonely planet.`},{text:`Train luxury Paris recommendations nature France sight seeing.
         Flexibility Amsterdam maps.
         Pacific lonely planet private jet national insurance taxi tourist attractions.
         Budget Pacific guide caravan Barcelona place to stay maps gateway diary tour operator money`}],image:{url:"https://source.unsplash.com/random/800x600?a=1"}},programList:{dataSource:E}};var Re,Me,_e,$e,Ee;q.parameters={...q.parameters,docs:{...(Re=q.parameters)==null?void 0:Re.docs,source:{originalSource:`({
  appPathFolder,
  actionUrls,
  hero,
  introContent,
  programList,
  hasFilters,
  hasSearchBar,
  ...rest
}) => <ListingPage appPathFolder={appPathFolder} actionUrls={actionUrls} hero={hero} introContent={introContent} programList={programList} hasSearchBar={hasSearchBar} hasFilters={hasFilters} {...rest} />`,...(_e=(Me=q.parameters)==null?void 0:Me.docs)==null?void 0:_e.source},description:{story:"@type {{ args: AppProps }}",...(Ee=($e=q.parameters)==null?void 0:$e.docs)==null?void 0:Ee.description}}};var Ge,Ve,We;_.parameters={..._.parameters,docs:{...(Ge=_.parameters)==null?void 0:Ge.docs,source:{originalSource:`({
  appPathFolder,
  actionUrls,
  hero,
  introContent,
  programList,
  hasFilters,
  hasSearchBar,
  ...rest
}) => <ListingPage appPathFolder={appPathFolder} actionUrls={actionUrls} hero={hero} introContent={introContent} programList={programList} hasSearchBar={hasSearchBar} hasFilters={hasFilters} {...rest} />`,...(We=(Ve=_.parameters)==null?void 0:Ve.docs)==null?void 0:We.source}}};var ze,Ke,He,Je,Xe;T.parameters={...T.parameters,docs:{...(ze=T.parameters)==null?void 0:ze.docs,source:{originalSource:`({
  appPathFolder,
  actionUrls,
  hero,
  introContent,
  programList,
  hasFilters,
  hasSearchBar,
  ...rest
}) => <ListingPage appPathFolder={appPathFolder} actionUrls={actionUrls} hero={hero} introContent={introContent} programList={programList} hasSearchBar={hasSearchBar} hasFilters={hasFilters} {...rest} />`,...(He=(Ke=T.parameters)==null?void 0:Ke.docs)==null?void 0:He.source},description:{story:"@type {{ args: AppProps }}",...(Xe=(Je=T.parameters)==null?void 0:Je.docs)==null?void 0:Xe.description}}};var Ye,Qe,Ze,et,tt;U.parameters={...U.parameters,docs:{...(Ye=U.parameters)==null?void 0:Ye.docs,source:{originalSource:`({
  appPathFolder,
  actionUrls,
  hero,
  introContent,
  programList,
  hasFilters,
  hasSearchBar,
  ...rest
}) => <ListingPage appPathFolder={appPathFolder} actionUrls={actionUrls} hero={hero} introContent={introContent} programList={programList} hasSearchBar={hasSearchBar} hasFilters={hasFilters} {...rest} />`,...(Ze=(Qe=U.parameters)==null?void 0:Qe.docs)==null?void 0:Ze.source},description:{story:"@type {{ args: AppProps }}",...(tt=(et=U.parameters)==null?void 0:et.docs)==null?void 0:tt.description}}};var at,rt,st,ot,nt;D.parameters={...D.parameters,docs:{...(at=D.parameters)==null?void 0:at.docs,source:{originalSource:`({
  appPathFolder,
  actionUrls,
  hero,
  introContent,
  programList,
  hasFilters,
  hasSearchBar,
  ...rest
}) => <ListingPage appPathFolder={appPathFolder} actionUrls={actionUrls} hero={hero} introContent={introContent} programList={programList} hasSearchBar={hasSearchBar} hasFilters={hasFilters} {...rest} />`,...(st=(rt=D.parameters)==null?void 0:rt.docs)==null?void 0:st.source},description:{story:"@type {{ args: AppProps }}",...(nt=(ot=D.parameters)==null?void 0:ot.docs)==null?void 0:nt.description}}};var it,lt,ct,dt,pt;k.parameters={...k.parameters,docs:{...(it=k.parameters)==null?void 0:it.docs,source:{originalSource:`({
  appPathFolder,
  actionUrls,
  hero,
  introContent,
  programList,
  hasFilters,
  hasSearchBar,
  ...rest
}) => <ListingPage appPathFolder={appPathFolder} actionUrls={actionUrls} hero={hero} introContent={introContent} programList={programList} hasSearchBar={hasSearchBar} hasFilters={hasFilters} {...rest} />`,...(ct=(lt=k.parameters)==null?void 0:lt.docs)==null?void 0:ct.source},description:{story:"@type {{ args: AppProps}}",...(pt=(dt=k.parameters)==null?void 0:dt.docs)==null?void 0:pt.description}}};var mt,ut,gt,ht,ft;B.parameters={...B.parameters,docs:{...(mt=B.parameters)==null?void 0:mt.docs,source:{originalSource:`({
  appPathFolder,
  actionUrls,
  hero,
  introContent,
  programList,
  hasFilters,
  hasSearchBar,
  ...rest
}) => <ListingPage appPathFolder={appPathFolder} actionUrls={actionUrls} hero={hero} introContent={introContent} programList={programList} hasSearchBar={hasSearchBar} hasFilters={hasFilters} {...rest} />`,...(gt=(ut=B.parameters)==null?void 0:ut.docs)==null?void 0:gt.source},description:{story:"@type {{ args: AppProps }}",...(ft=(ht=B.parameters)==null?void 0:ht.docs)==null?void 0:ft.description}}};var xt,yt,bt,jt,vt;O.parameters={...O.parameters,docs:{...(xt=O.parameters)==null?void 0:xt.docs,source:{originalSource:`({
  appPathFolder,
  actionUrls,
  hero,
  introContent,
  programList,
  hasFilters,
  hasSearchBar,
  ...rest
}) => <ListingPage appPathFolder={appPathFolder} actionUrls={actionUrls} hero={hero} introContent={introContent} programList={programList} hasSearchBar={hasSearchBar} hasFilters={hasFilters} {...rest} />`,...(bt=(yt=O.parameters)==null?void 0:yt.docs)==null?void 0:bt.source},description:{story:"@type {{ args: AppProps }}",...(vt=(jt=O.parameters)==null?void 0:jt.docs)==null?void 0:vt.description}}};var St,wt,Pt,Ct,Lt;L.parameters={...L.parameters,docs:{...(St=L.parameters)==null?void 0:St.docs,source:{originalSource:`({
  appPathFolder,
  actionUrls,
  hero,
  introContent,
  programList,
  hasFilters,
  hasSearchBar,
  ...rest
}) => <ListingPage appPathFolder={appPathFolder} actionUrls={actionUrls} hero={hero} introContent={introContent} programList={programList} hasSearchBar={hasSearchBar} hasFilters={hasFilters} {...rest} />`,...(Pt=(wt=L.parameters)==null?void 0:wt.docs)==null?void 0:Pt.source},description:{story:"@type {{ args: AppProps}}",...(Lt=(Ct=L.parameters)==null?void 0:Ct.docs)==null?void 0:Lt.description}}};var Ft,qt,It,Nt,At;N.parameters={...N.parameters,docs:{...(Ft=N.parameters)==null?void 0:Ft.docs,source:{originalSource:`({
  appPathFolder,
  actionUrls,
  hero,
  introContent,
  programList,
  hasFilters,
  hasSearchBar,
  ...rest
}) => <ListingPage appPathFolder={appPathFolder} actionUrls={actionUrls} hero={hero} introContent={introContent} programList={programList} hasSearchBar={hasSearchBar} hasFilters={hasFilters} {...rest} />`,...(It=(qt=N.parameters)==null?void 0:qt.docs)==null?void 0:It.source},description:{story:"@type {{ args: AppProps}}",...(At=(Nt=N.parameters)==null?void 0:Nt.docs)==null?void 0:At.description}}};var Tt,Ut,Dt,kt,Bt;A.parameters={...A.parameters,docs:{...(Tt=A.parameters)==null?void 0:Tt.docs,source:{originalSource:`({
  appPathFolder,
  actionUrls,
  hero,
  introContent,
  programList,
  hasFilters,
  hasSearchBar,
  ...rest
}) => <ListingPage appPathFolder={appPathFolder} actionUrls={actionUrls} hero={hero} introContent={introContent} programList={programList} hasSearchBar={hasSearchBar} hasFilters={hasFilters} {...rest} />`,...(Dt=(Ut=A.parameters)==null?void 0:Ut.docs)==null?void 0:Dt.source},description:{story:"@type {{ args: AppProps}}",...(Bt=(kt=A.parameters)==null?void 0:kt.docs)==null?void 0:Bt.description}}};var Ot,Rt,Mt,_t,$t;R.parameters={...R.parameters,docs:{...(Ot=R.parameters)==null?void 0:Ot.docs,source:{originalSource:`({
  appPathFolder,
  actionUrls,
  hero,
  introContent,
  programList,
  hasFilters,
  hasSearchBar,
  ...rest
}) => <ListingPage appPathFolder={appPathFolder} actionUrls={actionUrls} hero={hero} introContent={introContent} programList={programList} hasSearchBar={hasSearchBar} hasFilters={hasFilters} {...rest} />`,...(Mt=(Rt=R.parameters)==null?void 0:Rt.docs)==null?void 0:Mt.source},description:{story:`@param {AppProps} props
@returns {JSX.Element}`,...($t=(_t=R.parameters)==null?void 0:_t.docs)==null?void 0:$t.description}}};const qr=["Default","DefaultGraduate","DefaultWithBlacklistedPlanCodes","DefaultWithDegreesPerPageSet","DefaultWithCertificate","WithCollegeAcadOrgAndDepartmentCode","WithIntroText","WithIntroTextPhotoGrid","WithIntroTextMediaImage","WithIntroTextMediaVideo","WithIntroTextMediaYoutubeVideo","WithIntroTextImageOverlay"];export{q as Default,_ as DefaultGraduate,T as DefaultWithBlacklistedPlanCodes,D as DefaultWithCertificate,U as DefaultWithDegreesPerPageSet,k as WithCollegeAcadOrgAndDepartmentCode,B as WithIntroText,R as WithIntroTextImageOverlay,L as WithIntroTextMediaImage,N as WithIntroTextMediaVideo,A as WithIntroTextMediaYoutubeVideo,O as WithIntroTextPhotoGrid,qr as __namedExportsOrder,Fr as default};

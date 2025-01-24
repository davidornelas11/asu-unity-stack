import{j as t}from"./jsx-runtime-DeXhLmfn.js";import{P as e,q as I}from"./styled-components.browser.esm-CB2jUp4m.js";import{r as l}from"./index-BjyPoJYz.js";import{a as C,e as c,u as Y,d as K,A as W,S as M}from"./sort-iDlyggST.js";function V({packageName:o="",component:u="",type:d="",configuration:g={}}){if(!o||!u){console.error("trackReactComponent: Missing required arguments.");return}window.uds=window.uds||{},window.uds.package=window.uds.package||{},window.uds.package[o]={component:u,type:d,configuration:g}}const F={1:"Faculty",2:"Academic Professionals",3:"Fixed-Term Faculty and Academic Professionals"},w=({filters:o,API_URL:u,searchApiVersion:d,appPathFolder:g,deptIds:m,display:y,profileURLBase:f,searchType:n})=>{const[P,E]=l.useState({}),[i,x]=l.useState(null),[_,R]=l.useState(!0),[T,L]=l.useState({}),D=6,N="faculty_rank",r=new URL(`${u}${d}${C[c.WEB_DIRECTORY_FACULTY_RANK].url}`);r.searchParams.append("sort_by",n),r.searchParams.append("dept_ids",m),r.searchParams.append("page","1"),r.searchParams.append("size","1");const a=async s=>{var q;const p=`${r}&rank_group=${s}`,A=await(await fetch(p)).json();return{rankGroup:s,length:(q=A.results)==null?void 0:q.length}};l.useEffect(()=>{const s={...o};s.deptIds=m.split(","),E(s);const p=Object.keys(F).map(a);Promise.all(p).then(S=>{const A=S.reduce((q,{rankGroup:k,length:B})=>(B>0&&(q[k]=F[k]),q),{});L(A),R(!1)})},[m,i]);const h={filters:o,API_URL:u,searchApiVersion:d,profileURLBase:f||"https://search.asu.edu",appPathFolder:g},v={[c.WEB_DIRECTORY_FACULTY_RANK]:{...C[c.WEB_DIRECTORY_FACULTY_RANK],...h}},b={faculty_rank:c.WEB_DIRECTORY_FACULTY_RANK};return _?t.jsx("div",{children:"Loading..."}):Object.keys(T).length?t.jsx(Y,{onTabChange:x,children:Object.keys(T).map(s=>t.jsx(K,{id:`faculty-${s}`,title:F[s],children:t.jsx(W,{engine:v[b[n]],itemsPerPage:parseInt(y.profilesPerPage,10)||D,size:"large",sort:N,hidePaginator:y.usePager!=="1",filters:P,profilesToFilterOut:y.doNotDisplayProfiles,display:y,rankGroup:s.toString(),restClientTag:"asuis"})},s))}):t.jsxs("div",{children:["No faculty rank data found for department ",m]})};w.propTypes={deptIds:e.string,API_URL:e.string,searchApiVersion:e.string,searchType:e.string,profileURLBase:e.string,appPathFolder:e.string,display:e.shape({defaultSort:e.string,doNotDisplayProfiles:e.string,profilesPerPage:e.string,usePager:e.string}),filters:e.shape({employee:e.string,expertise:e.string,title:e.string,campuses:e.string})};w.__docgenInfo={description:`Prop types for FacultyRankTabPanels component.
@type {Object}
@property {string} deptIds - The department IDs.
@property {string} API_URL - The API URL.
@property {string} searchApiVersion - The search API version.
@property {string} searchType - The type of search.
@property {string} appPathFolder - The application path folder.
@property {Object} display - Display settings.
@property {string} display.defaultSort - The default sorting option.
@property {string} display.doNotDisplayProfiles - Profiles not to display.
@property {string} display.profilesPerPage - Number of profiles to display.
@property {string} display.usePager - Whether to use pagination.
@property {Object} filters - Filters for the search.
@property {string} filters.employee - Employee filter.
@property {string} filters.expertise - Expertise filter.
@property {string} filters.title - Title filter.
@property {string} filters.campuses - Campuses filter.`,methods:[],displayName:"FacultyRankTabPanels",props:{deptIds:{description:"",type:{name:"string"},required:!1},API_URL:{description:"",type:{name:"string"},required:!1},searchApiVersion:{description:"",type:{name:"string"},required:!1},searchType:{description:"",type:{name:"string"},required:!1},profileURLBase:{description:"",type:{name:"string"},required:!1},appPathFolder:{description:"",type:{name:"string"},required:!1},display:{description:"",type:{name:"shape",value:{defaultSort:{name:"string",required:!1},doNotDisplayProfiles:{name:"string",required:!1},profilesPerPage:{name:"string",required:!1},usePager:{name:"string",required:!1}}},required:!1},filters:{description:"",type:{name:"shape",value:{employee:{name:"string",required:!1},expertise:{name:"string",required:!1},title:{name:"string",required:!1},campuses:{name:"string",required:!1}}},required:!1}}};const $=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],z=I.div`
  button {
    padding: 16px 0;
    border: none;
    outline: none;
  }
`,j=({hidePrev:o,hideNext:u,clickPrev:d,clickNext:g})=>t.jsxs(z,{children:[!o&&t.jsxs("button",{className:"scroll-control-prev",type:"button",onClick:d,tabIndex:-1,children:[t.jsx("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),t.jsx("span",{className:"visually-hidden",children:"Previous"})]}),!u&&t.jsxs("button",{className:"scroll-control-next",type:"button",onClick:g,tabIndex:-1,children:[t.jsx("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),t.jsx("span",{className:"visually-hidden",children:"Next"})]})]});j.propTypes={hidePrev:e.bool,hideNext:e.bool,clickPrev:e.func.isRequired,clickNext:e.func.isRequired};j.__docgenInfo={description:"",methods:[],displayName:"NavControls",props:{hidePrev:{description:"",type:{name:"bool"},required:!1},hideNext:{description:"",type:{name:"bool"},required:!1},clickPrev:{description:"",type:{name:"func"},required:!0},clickNext:{description:"",type:{name:"func"},required:!0}}};const H=I.fieldset`
  width: 100%;
  margin: 0 0 2rem 0;

  .choices-wrapper {
    position: relative;
  }

  legend {
    font-size: 1rem;
    font-weight: bold;
  }
  .choices-container {
    display: flex;
    overflow-x: auto;
    padding: 8px 0;
    &:focus {
      outline: none !important;
      box-shadow: 0px 0px 0px 2px #ffffff, 0px 0px 0px 4px #191919 !important;
    }

    &::-webkit-scrollbar {
      display: none;
    }
    .choice {
      &:hover {
        text-decoration: none;
      }
      font-weight: bold;
      text-decoration: underline;
      border: none;
      background-color: transparent;
      color: #8c1d40;
      &:is(:first-child) {
        padding-left: 0px;
      }
      white-space: nowrap;
      margin: 0 8px;
      padding: 6px 12px;
      &.selected {
        color: white;
        z-index: 3;
        background-color: #8c1d40;
        border-radius: 300px;
      }
    }
  }
`,O=({filterLabel:o,choices:u=[],onChoose:d=()=>{},resetFilters:g=()=>{}})=>{const[m,y]=l.useState(null),[f,n]=l.useState(-1),[P,E]=l.useState(0),i=l.useRef(null),[x,_]=l.useState(0),[R,T]=l.useState(0);l.useEffect(()=>{const r=()=>{_(i.current.scrollLeft)};return i.current&&(i.current.addEventListener("scroll",r),r()),()=>{var a;return(a=i.current)==null?void 0:a.removeEventListener("scroll",r)}},[R]),l.useEffect(()=>{const r=()=>{i.current&&T(i.current.scrollWidth-i.current.offsetWidth)};return i.current&&(i.current.addEventListener("resize",r),r()),()=>{var a;return(a=i.current)==null?void 0:a.removeEventListener("resize",r)}},[]),l.useEffect(()=>{if(i.current){const r=i.current.children.length;E(r)}},[]);const L=r=>{var a;if(i.current){if(r.key==="ArrowRight"&&f+1<P){const h=(a=i.current)==null?void 0:a.children[f+1];n(f+1),h.focus()}else if(r.key==="ArrowLeft"&&f-1>=0){const h=i.current.children[f-1];n(f-1),h.focus()}}},D=r=>{y(r),d(r)},N=r=>{const a=i.current,h=a.scrollWidth-a.clientWidth;let b=a.scrollLeft+200*r;b=Math.max(0,Math.min(h,b)),a.scrollTo({left:b,behavior:"smooth"})};return t.jsxs(H,{className:"filter-container",children:[t.jsx("legend",{children:o}),t.jsxs("div",{className:"choices-wrapper",children:[t.jsx(j,{hidePrev:x<=0,hideNext:x>=R-5,clickPrev:()=>{N(-1)},clickNext:()=>{N(1)}}),t.jsxs("div",{role:"radiogroup",tabIndex:0,onKeyDown:L,className:"choices-container",ref:i,"aria-label":`${o} filter options}`,children:[g&&t.jsx("button",{role:"radio",type:"button",onClick:r=>{r.preventDefault(),D(null),g()},tabIndex:-1,"aria-label":`Reset ${o}`,"aria-checked":m===null,className:"choice",children:"All"}),u.map(r=>t.jsx("button",{role:"radio",type:"button",onClick:a=>{a.preventDefault(),D(r)},"aria-checked":m===r,className:`${m===r?"selected":""} choice`,"aria-label":`Filter by ${r}`,tabIndex:-1,children:r},r))]})]})]})};O.propTypes={filterLabel:e.string.isRequired,choices:e.arrayOf(e.string).isRequired,onChoose:e.func.isRequired,resetFilters:e.func};O.__docgenInfo={description:`Prop types for FilterComponent component.
@type {Object}
@property {string} filterLabel - The label for the filter.
@property {string[]} [choices=[]] - An array of choices for the filter.
@property {function} [onChoose=() => {}] - A callback function triggered when a choice is selected.
@property {function} [resetFilters=() => {}] - A callback function triggered to reset the filters.`,methods:[],displayName:"FilterComponent",props:{choices:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"string"}},required:!1},onChoose:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},resetFilters:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},filterLabel:{description:"",type:{name:"string"},required:!0}}};const J=I.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "filter sort"
    "results results";
  grid-column-gap: 100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "sort sort"
      "filter filter"
      "results results";
  }

  .sort {
    grid-area: sort;
  }
  .filter-container {
    grid-area: filter;
  }
  .plain-button {
    background-color: #fff;
    border: none;
    outline: none;
    color: #822141;
  }
  .plain-button:hover {
    cursor: pointer;
  }
  .results {
    grid-area: results;
  }
`,X=I.div``;function U({searchType:o,ids:u,deptIds:d,API_URL:g,searchApiVersion:m,profileURLBase:y,appPathFolder:f,display:n,filters:P,alphaFilter:E="false"}){const[i,x]=l.useState(D),[_,R]=l.useState(L),T=6;l.useEffect(()=>{typeof window<"u"&&V({packageName:"app-webdir-ui",component:"WebDirectory",type:o,configuration:{...P,...n}})},[]);function L(){const s=P?{...P}:{};return o==="departments"||o==="faculty_rank"?(s.deptIds=d.split(","),s):(s.peopleInDepts=u.split(",").filter(p=>p.includes(":")).map(p=>p.split(":")).map(p=>({asurite_id:p[0],dept_id:p[1]})),s)}function D(){const s={last_name:"last_name_asc",webdir_customized:"employee_weight",people_order:"people_order"};return Object.prototype.hasOwnProperty.call(s,n==null?void 0:n.defaultSort)?s[n==null?void 0:n.defaultSort]:"last_name_asc"}function N(s,p){var S;return s==="departments"&&((S=p==null?void 0:p.split(","))==null?void 0:S.length)<2?[{value:"default",label:"Choose Sort",disabled:!0},{value:"last_name_asc",label:"Last Name (ascending)"},{value:"last_name_desc",label:"Last Name (descending)"},{value:"employee_weight",label:"Department Defined"}]:[{value:"default",label:"Choose Sort",disabled:!0},{value:"last_name_asc",label:"Last Name (ascending)"},{value:"last_name_desc",label:"Last Name (descending)"}]}const r=N(o,d),a={filters:P,API_URL:g,searchApiVersion:m,profileURLBase:y||"https://search.asu.edu",appPathFolder:f},h={[c.WEB_DIRECTORY_DEPARTMENTS]:{...C[c.WEB_DIRECTORY_DEPARTMENTS],...a},[c.WEB_DIRECTORY_PEOPLE_AND_DEPS]:{...C[c.WEB_DIRECTORY_PEOPLE_AND_DEPS],...a},[c.WEB_DIRECTORY_PEOPLE_AND_DEPS]:{...C[c.WEB_DIRECTORY_PEOPLE_AND_DEPS],...a},[c.WEB_DIRECTORY_FACULTY_RANK]:{...C[c.WEB_DIRECTORY_FACULTY__RANK],...a,deptIds:d,display:n,searchType:o}},v=s=>{x(s)},b={departments:c.WEB_DIRECTORY_DEPARTMENTS,people:c.WEB_DIRECTORY_PEOPLE_AND_DEPS,people_departments:c.WEB_DIRECTORY_PEOPLE_AND_DEPS,faculty_rank:c.WEB_DIRECTORY_FACULTY_RANK};return o!=="faculty_rank"?t.jsx(t.Fragment,{children:t.jsxs(J,{children:[E==="true"&&t.jsx(O,{filterLabel:"Filter By Last Initial",choices:$,onChoose:s=>R({..._,lastInit:s}),resetFilters:()=>R({..._,lastInit:""})}),t.jsx("div",{className:"sort",children:t.jsx(M,{customSortOptions:r,sort:i,onChange:s=>v(s)})}),t.jsx("div",{className:"results",children:t.jsx(W,{engine:h[b[o]],itemsPerPage:parseInt(n==null?void 0:n.profilesPerPage,10)||T,sort:i,hidePaginator:(n==null?void 0:n.usePager)!=="1",filters:_,profilesToFilterOut:n==null?void 0:n.doNotDisplayProfiles,display:n,appPathFolder:f,restClientTag:"webdir"})})]})}):t.jsx(X,{children:t.jsx(w,{...h[b[o]],alphaFilter:E,filters:_})})}U.propTypes={deptIds:e.string,API_URL:e.string,searchApiVersion:e.string,searchType:e.string,ids:e.string,profileURLBase:e.string,appPathFolder:e.string,display:e.shape({defaultSort:e.string,doNotDisplayProfiles:e.string,profilesPerPage:e.string,usePager:e.string}),filters:e.shape({employee:e.string,expertise:e.string,title:e.string,campuses:e.string}),alphaFilter:e.string};U.__docgenInfo={description:`React component for displaying web directory search results.

@param {Object} props - The props for configuring the WebDirectory component.
@param {"departments" | "faculty_rank" | "people" | "people_departments"} props.searchType - The type of web directory search (e.g., 'departments', 'people').
@param {string} props.ids - The IDs used for searching (e.g., department IDs, ASURITE IDs).
@param {string} props.deptIds - The department IDs for searching.
@param {string} props.API_URL - The API URL for performing the search.
@param {string} props.searchApiVersion - The version of the search API to use.
@param {string} props.profileURLBase - The base URL for profile links.
@param {string} props.appPathFolder - The base path for the application folder.
@param {object} props.display - Display options for the search results.
@param {Object} props.filters - Filters for the search.
@param {string} props.alphaFilter - Indicates whether to enable alpha filtering.
@returns {JSX.Element} The WebDirectory component.`,methods:[],displayName:"WebDirectory",props:{alphaFilter:{defaultValue:{value:'"false"',computed:!1},description:"",type:{name:"string"},required:!1},deptIds:{description:"",type:{name:"string"},required:!1},API_URL:{description:"",type:{name:"string"},required:!1},searchApiVersion:{description:"",type:{name:"string"},required:!1},searchType:{description:"",type:{name:"string"},required:!1},ids:{description:"",type:{name:"string"},required:!1},profileURLBase:{description:"",type:{name:"string"},required:!1},appPathFolder:{description:"",type:{name:"string"},required:!1},display:{description:"",type:{name:"shape",value:{defaultSort:{name:"string",required:!1},doNotDisplayProfiles:{name:"string",required:!1},profilesPerPage:{name:"string",required:!1},usePager:{name:"string",required:!1}}},required:!1},filters:{description:"",type:{name:"shape",value:{employee:{name:"string",required:!1},expertise:{name:"string",required:!1},title:{name:"string",required:!1},campuses:{name:"string",required:!1}}},required:!1}}};export{U as W};

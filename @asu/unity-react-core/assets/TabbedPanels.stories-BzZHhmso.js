import{j as e}from"./jsx-runtime-Dtp4yoXy.js";import{r,a as A}from"./index-iql2cimc.js";import{P as a}from"./index-DamiE3XO.js";import{u as V}from"./useBaseSpecificFramework-BEiWg-hg.js";import{G as E}from"./GaEventWrapper-CQUQnm1l.js";import{q as B}from"./styled-components.browser.esm-Cua4idQ2.js";import{M as z}from"./index-B56RiGoX.js";import"./_commonjsHelpers-uqKOVeGF.js";import"./googleAnalytics-4Pcl4n6_.js";const F=B.div`
  button {
    padding: 16px 0;
    border: none;
    outline: none;
  }
`,D=({gaData:n,hidePrev:m,hideNext:i,slideNav:o})=>e.jsxs(F,{children:[!m&&e.jsx(E,{gaData:{...n,text:"left chevron"},children:e.jsxs("button",{className:"scroll-control-prev",type:"button",onClick:()=>o(-1),tabIndex:-1,children:[e.jsx("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),e.jsx("span",{className:"visually-hidden",children:"Previous"})]})}),!i&&e.jsx(E,{gaData:{...n,text:"right chevron"},children:e.jsxs("button",{className:"scroll-control-next",type:"button",onClick:()=>o(1),tabIndex:-1,children:[e.jsx("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),e.jsx("span",{className:"visually-hidden",children:"Next"})]})})]});D.propTypes={gaData:a.object,hidePrev:a.bool,hideNext:a.bool,slideNav:a.func.isRequired};D.__docgenInfo={description:`@typedef {Object} NavControlsProps
@property {import("../../GaEventWrapper/GaEventWrapper").GaEventType} gaData
@property {boolean} hidePrev
@property {boolean} hideNext
@property {() => void} slideNav`,methods:[],displayName:"NavControls",props:{gaData:{description:"",type:{name:"object"},required:!1},hidePrev:{description:"",type:{name:"bool"},required:!1},hideNext:{description:"",type:{name:"bool"},required:!1},slideNav:{description:"",type:{name:"func"},required:!0}}};const C=r.forwardRef(function(m,i){const{id:o,selected:c,title:g,selectTab:h,leftKeyPressed:y,rightKeyPressed:d,icon:p,gaData:R}=m,l=r.useRef(null);r.useImperativeHandle(i,()=>({focus(){l.current.focus()},scrollIntoView(){var j,f,T,k,w,N,q;const u=((j=l.current)==null?void 0:j.offsetWidth)/2+l.current.offsetLeft,x=((T=(f=l.current)==null?void 0:f.offsetParent)==null?void 0:T.scrollLeft)+((w=(k=l.current)==null?void 0:k.offsetParent)==null?void 0:w.offsetWidth)/2;(q=(N=l.current)==null?void 0:N.offsetParent)==null||q.scrollBy({left:u-x})}}),[]);const H=u=>{u.keyCode===37?(u.preventDefault(),y()):u.keyCode===39&&(u.preventDefault(),d())};return e.jsx(E,{gaData:{...R,text:g},children:e.jsxs("a",{ref:l,className:`nav-item nav-link ${c?"active":""}`,id:o,href:`#nav-${o}`,role:"tab","aria-controls":`nav-${o}`,"aria-selected":c,onClick:u=>h(u,o,g),onKeyDown:H,tabIndex:c?"":"-1",children:[g," ",p&&e.jsx("i",{className:`${p==null?void 0:p[0]} fa-${p==null?void 0:p[1]} me-1`})]})})});C.propTypes={gaData:a.object,id:a.string.isRequired,selected:a.bool.isRequired,title:a.string.isRequired,selectTab:a.func.isRequired,leftKeyPressed:a.func.isRequired,rightKeyPressed:a.func.isRequired,icon:a.arrayOf(a.string)};C.__docgenInfo={description:`@typedef {Object} TabHeaderProps
@property {import("../../GaEventWrapper/GaEventWrapper").GaEventType} gaData
@property {boolean} hidePrev
@property {boolean} hideNext
@property {() => void} slideNav`,methods:[{name:"focus",docblock:null,modifiers:[],params:[],returns:null},{name:"scrollIntoView",docblock:null,modifiers:[],params:[],returns:null}],displayName:"TabHeader",props:{gaData:{description:"",type:{name:"object"},required:!1},id:{description:"",type:{name:"string"},required:!0},selected:{description:"",type:{name:"bool"},required:!0},title:{description:"",type:{name:"string"},required:!0},selectTab:{description:"",type:{name:"func"},required:!0},leftKeyPressed:{description:"",type:{name:"func"},required:!0},rightKeyPressed:{description:"",type:{name:"func"},required:!0},icon:{description:"",type:{name:"arrayOf",value:{name:"string"}},required:!1}}};function J(){const n=r.useRef({}),m=r.useCallback(i=>o=>{n.current[i]=o},[]);return[n,m]}const b=({id:n,bgColor:m,selected:i,children:o})=>i&&e.jsx("div",{className:`tab-pane fade show ${i?"show active":""} ${m==="bg-dark"?"text-white":""}`,id:`nav-${n}`,role:"tabpanel","aria-labelledby":`nav-${n}-tab`,children:o});b.propTypes={id:a.string.isRequired,bgColor:a.string,selected:a.bool,children:a.oneOfType([a.array,a.element])};const S=({initialTab:n="",children:m,bgColor:i="",onTabChange:o=c=>{}})=>{const c=A.Children.toArray(m),g=r.useRef(!1),[h,y]=r.useState(n&&n!=="null"?n:c[0].props.id),d=r.useRef(null),[p,R]=J(),{isReact:l,isBootstrap:H}=V(),u=t=>{var s;o(t),(s=p.current[t])==null||s.focus(),y(t)},[x,j]=r.useState(0),[f,T]=r.useState();r.useEffect(()=>{const t=()=>{j(d.current.scrollLeft)};return d.current.addEventListener("scroll",t),t(),()=>{d.current&&d.current.removeEventListener("scroll",t)}},[f]),r.useEffect(()=>{const t=()=>{T(d.current.scrollWidth-d.current.offsetWidth)};return window.addEventListener("resize",t),t(),()=>{d.current&&window.removeEventListener("resize",t)}},[]),r.useEffect(()=>{var t;(t=p.current[h])==null||t.scrollIntoView()},[h]),r.useEffect(()=>{g.current&&n&&n!=="null"&&h!==n&&y(n)},[n]),r.useEffect(()=>{g.current=!0},[]);const k={event:"select",action:"click",name:"onclick",type:"carousel",region:"main content",text:""},w={event:"link",action:"click",name:"onclick",type:"internal link",text:""},N=c.map(t=>A.cloneElement(t,{bgColor:i,selected:h===t.props.id})),q=t=>{const s=d.current,P=s.scrollWidth-s.clientWidth;let v=s.scrollLeft+200*t;v=Math.max(0,Math.min(P,v)),s.scrollTo({left:v,behavior:"smooth"})},M=(t,s,P)=>{t.preventDefault(),u(s)},I=(t=!0)=>{const s=c.length,P=t?1:-1,_=c.findIndex(O=>O.props.id===h),v=c[(s+_+P)%s].props.id;u(v)};let W="uds-tabbed-panels";return i==="bg-dark"&&(W+=" uds-tabbed-panels-dark"),e.jsxs("div",{className:i,children:[e.jsxs("nav",{className:W,children:[e.jsx("div",{className:"nav nav-tabs",role:"tablist",ref:d,children:c.map((t,s)=>e.jsx(C,{ref:R(t.props.id),id:t.props.id,title:t.props.title,selected:h===t.props.id,gaData:w,selectTab:l&&M,leftKeyPressed:l&&(()=>I(!1)),rightKeyPressed:l&&(()=>I()),icon:t.props.icon,index:s},t.props.id))}),e.jsx(D,{hidePrev:x<=0,hideNext:x>=f,gaData:k,slideNav:l&&q})]}),e.jsx("div",{className:"tab-content",tabIndex:0,role:"tabpanel",id:"nav-tabContent",children:N})]})};S.propTypes={initialTab:a.string,children:a.arrayOf(a.element).isRequired,bgColor:a.string,onTabChange:a.func};S.__docgenInfo={description:"",methods:[],displayName:"TabbedPanels",props:{initialTab:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},bgColor:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},onTabChange:{defaultValue:{value:"_ => {}",computed:!1},description:"",type:{name:"func"},required:!1},children:{description:"",type:{name:"arrayOf",value:{name:"element"}},required:!0}}};b.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{id:{description:"",type:{name:"string"},required:!0},bgColor:{description:"",type:{name:"string"},required:!1},selected:{description:"",type:{name:"bool"},required:!1},children:{description:"",type:{name:"union",value:[{name:"array"},{name:"element"}]},required:!1}}};const se={title:"Components/TabbedPanels",component:S},Q=()=>e.jsx(z,{children:e.jsx("div",{className:"row no-gutters",children:e.jsx("div",{className:"col uds-full-width",children:e.jsxs(S,{children:[e.jsx(b,{id:"home",title:"Home long tab",children:e.jsxs("div",{children:["1 - Home long tab - This is an ordinary paragraph that is long enough to to to wrap to multiple lines so that you can see how spacing eos et accusam et justo duo dolores et ea rebu.",e.jsx("br",{}),"Stet clita kasd gubergren, no sea takimata sanctus est Lorem."]})}),e.jsx(b,{id:"profile",title:"Profile long tab",children:e.jsxs("div",{children:["2 - Home long tab - This is an ordinary paragraph that is long enough to to to wrap to multiple lines so that you can see how spacing eos et accusam et justo duo dolores et ea rebu.",e.jsx("br",{}),"Stet clita kasd gubergren, no sea takimata sanctus est Lorem."]})}),e.jsx(b,{id:"contact",title:"Contact us is a long tab",children:e.jsxs("div",{children:["3 - Home long tab - This is an ordinary paragraph that is long enough to to to wrap to multiple lines so that you can see how spacing eos et accusam et justo duo dolores et ea rebu.",e.jsx("br",{}),"Stet clita kasd gubergren, no sea takimata sanctus est Lorem."]})}),e.jsx(b,{id:"another",title:"Another tab, long tab",children:e.jsxs("div",{children:["4 - Home long tab - This is an ordinary paragraph that is long enough to to to wrap to multiple lines so that you can see how spacing eos et accusam et justo duo dolores et ea rebu.",e.jsx("br",{}),"Stet clita kasd gubergren, no sea takimata sanctus est Lorem."]})}),e.jsx(b,{id:"another-2",title:"Another tab, long tab",children:e.jsxs("div",{children:["5 - Home long tab - This is an ordinary paragraph that is long enough to to to wrap to multiple lines so that you can see how spacing eos et accusam et justo duo dolores et ea rebu.",e.jsx("br",{}),"Stet clita kasd gubergren, no sea takimata sanctus est Lorem."]})}),e.jsx(b,{id:"another-3",title:"Another tab, long tab",children:e.jsxs("div",{children:["6 - Home long tab - This is an ordinary paragraph that is long enough to to to wrap to multiple lines so that you can see how spacing eos et accusam et justo duo dolores et ea rebu.",e.jsx("br",{}),"Stet clita kasd gubergren, no sea takimata sanctus est Lorem."]})})]})})})}),L=Q.bind({});var K,$,G;L.parameters={...L.parameters,docs:{...(K=L.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  return <MemoryRouter>
      <div className="row no-gutters">
        <div className="col uds-full-width">
          <TabbedPanels>
            <Tab id="home" title="Home long tab">
              <div>
                1 - Home long tab - This is an ordinary paragraph that is long
                enough to to to wrap to multiple lines so that you can see how
                spacing eos et accusam et justo duo dolores et ea rebu.
                <br />
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem.
              </div>
            </Tab>
            <Tab id="profile" title="Profile long tab">
              <div>
                2 - Home long tab - This is an ordinary paragraph that is long
                enough to to to wrap to multiple lines so that you can see how
                spacing eos et accusam et justo duo dolores et ea rebu.
                <br />
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem.
              </div>
            </Tab>
            <Tab id="contact" title="Contact us is a long tab">
              <div>
                3 - Home long tab - This is an ordinary paragraph that is long
                enough to to to wrap to multiple lines so that you can see how
                spacing eos et accusam et justo duo dolores et ea rebu.
                <br />
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem.
              </div>
            </Tab>
            <Tab id="another" title="Another tab, long tab">
              <div>
                4 - Home long tab - This is an ordinary paragraph that is long
                enough to to to wrap to multiple lines so that you can see how
                spacing eos et accusam et justo duo dolores et ea rebu.
                <br />
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem.
              </div>
            </Tab>
            <Tab id="another-2" title="Another tab, long tab">
              <div>
                5 - Home long tab - This is an ordinary paragraph that is long
                enough to to to wrap to multiple lines so that you can see how
                spacing eos et accusam et justo duo dolores et ea rebu.
                <br />
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem.
              </div>
            </Tab>
            <Tab id="another-3" title="Another tab, long tab">
              <div>
                6 - Home long tab - This is an ordinary paragraph that is long
                enough to to to wrap to multiple lines so that you can see how
                spacing eos et accusam et justo duo dolores et ea rebu.
                <br />
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem.
              </div>
            </Tab>
          </TabbedPanels>
        </div>
      </div>
    </MemoryRouter>;
}`,...(G=($=L.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};const oe=["Default"];export{L as Default,oe as __namedExportsOrder,se as default};

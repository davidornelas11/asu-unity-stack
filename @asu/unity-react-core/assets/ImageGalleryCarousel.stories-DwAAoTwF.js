import{j as e}from"./jsx-runtime-Dtp4yoXy.js";import{r as x}from"./index-iql2cimc.js";import{a as I}from"./props-mock-BEu3Oh0p.js";import{P as n}from"./index-DamiE3XO.js";import{B as E,a as $,P as O,I as V,N as z}from"./index-y0ncVmWI.js";import"./_commonjsHelpers-uqKOVeGF.js";import"./index-CIAU3GD8.js";import"./GaEventWrapper-CQUQnm1l.js";import"./googleAnalytics-4Pcl4n6_.js";import"./useBaseSpecificFramework-BEiWg-hg.js";const H=(a,t)=>{if(!a)return 0;const s=(a.match(/<br/g)||[]).length,r=t/6;return(parseInt(`${a.length/r}`,10)+s)*20},h={imageItems:n.arrayOf(n.shape({id:n.number,imageSource:n.string,thumbnailSource:n.string,imageAltText:n.string,content:n.oneOfType([n.string,n.element])})),hasContent:n.bool},R=({id:a,imageSource:t,imageAltText:s})=>({id:a,item:e.jsx("div",{className:"uds-img",children:e.jsx("img",{src:t,className:"uds-img figure-img img-fluid",alt:s,loading:"lazy",decoding:"async"})})}),L=({instanceName:a,imageItems:t,hasContent:s})=>{const r="data-current-index",[i,C]=x.useState(t[0].title),[l,f]=x.useState(t[0].content),W=o=>{const u=t[o];C(u.title),f(u.content)};x.useEffect(()=>{const o=document.querySelector(".image-gallery figcaption .uds-caption-text div");if(o){const y=parseInt(window.getComputedStyle(o,null).getPropertyValue("width").split("px")[0],10),g=t.reduce((j,M)=>{const N=H(M.content,y);return N>j?N:j},0);o.style.height=`${g}px`}const u=document.querySelector(`#${a}`);function P(y){for(const g of y)if(g&&g.attributeName===r)return W(+u.getAttribute(r));return null}new MutationObserver(P).observe(u,{attributes:!0})},[a]);const D=t.map(o=>o.imageSource);return e.jsxs("div",{className:"image-gallery-action-area","data-has-content":s,children:[e.jsx("div",{className:"image-navigator",children:e.jsxs($,{children:[e.jsx(O,{}),e.jsx("div",{className:"image-navigator-images",children:e.jsx("div",{className:"navigation-slider",children:e.jsx(V,{imageItems:D,onItemClick:o=>W(o)})})}),e.jsx(z,{})]})}),s&&(i||l)?e.jsx("figcaption",{id:"caption",className:"figure-caption uds-figure-caption","data-testid":"image-gallery-content-container",children:e.jsxs("div",{className:"uds-caption-text",children:[i?e.jsx("h3",{children:i}):null,e.jsx("div",{dangerouslySetInnerHTML:{__html:l}})]})}):null]})};L.propTypes={instanceName:n.string,imageItems:h.imageItems,hasContent:h.hasContent};const m=({width:a,maxWidth:t,imageItems:s,hasContent:r=!1,imageAutoSize:i=!0})=>{const C=s.map(R),l=s.length>1;return e.jsx(E,{perView:1,maxWidth:t,width:a,carouselItems:C,cssClass:"image-gallery",role:"figure",ariaLabelledBy:r?"caption":null,isFullWidth:!0,imageAutoSize:i,hasPeek:!1,CustomNavComponent:({instanceName:f})=>e.jsx(L,{instanceName:f,hasContent:r,imageItems:s}),removeSideBackground:s.length<=1,hasPositionIndicators:l,hasNavButtons:l,isDraggable:l,hasShadow:!0})};m.propTypes={imageItems:h.imageItems.isRequired,hasContent:h.hasContent,width:n.string,maxWidth:n.string,imageAutoSize:n.bool};m.__docgenInfo={description:`@param {ImageGalleryCarouselType} props
@returns { JSX.Element }`,methods:[],displayName:"ImageGalleryCarousel",props:{hasContent:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},imageAutoSize:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},imageItems:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{id:{name:"number",required:!1},imageSource:{name:"string",required:!1},thumbnailSource:{name:"string",required:!1},imageAltText:{name:"string",required:!1},content:{name:"union",value:[{name:"string"},{name:"element"}],required:!1}}}},required:!1},width:{description:"",type:{name:"string"},required:!1},maxWidth:{description:"",type:{name:"string"},required:!1}}};const X=()=>I.map((a,t)=>{const s=t===2?`
    Content ${t+1}

    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
      commodo ligula eget dolor. Aenean massa. Cum sociis natoque
      penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      Donec quam felis, ultricies nec, pellentesque eu, pretium,
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
      commodo ligula eget dolor. Aenean massa. Cum sociis natoque
      penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      Donec quam felis, ultricies nec, pellentesque eu, pretium,
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
      commodo ligula eget dolor. Aenean massa. Cum sociis natoque
      penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      Donec quam felis, ultricies nec, pellentesque eu, pretium
  `:`
  Content ${t+1}
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
      commodo ligula eget dolor. Aenean massa. Cum sociis natoque
      penatibus et magnis dis parturient montes, nascetur ridiculus mus.
  `;return{...a,content:s}}),F=()=>{const a=`Body copy goes <span style="font-weight: bold; display: inline;">here in bold!</span>. Then there's a <a href="https://google.com">link!!!!</a>
  Limit to 5 lines max`,t=`
  <div>
    <p>
      <strong>Lorem ipsum is </strong>
    </p>
    <br />
    <p>
      <strong>p</strong>laceholder text commonly used in the graphic,
      print, and publishing industries for previewing layouts and visual
      mockups. Lorem ipsum is placeholder text commonly used in the graphic,
      print, and publishing industries for previewing layouts and visual
      mockups. Lorem ipsum is placeholder text commonly used in the graphic,
      print, and publishing industries for previewing layouts and visual
      mockups.&nbsp;<a href="https://packagist.org/packages/asuwebplatforms/webspark-module-webspark_blocks">
      https://packagist.org/packages/asuwebplatforms/webspark-module-webspark_blocks</a></p>
  </div>
  `;return I.map((s,r)=>({...s,title:`Content ${r+1}`,content:r%2===1?a:t}))},oe={title:"Components/Image Gallery Carousel",component:m,parameters:{controls:{disable:!0}}},b="996px",J="600px",v=({children:a=null})=>e.jsx("div",{className:"container",style:{display:"flex",maxHeight:J},children:a}),c=()=>e.jsx(v,{children:e.jsx(m,{maxWidth:b,imageItems:I})}),p=()=>e.jsx(v,{children:e.jsx(m,{maxWidth:b,imageItems:X(),hasContent:!0})}),d=()=>e.jsx(v,{children:e.jsx(m,{maxWidth:b,imageItems:F(),hasContent:!0})});c.__docgenInfo={description:"",methods:[],displayName:"ImageGalleryCarouselDefault"};p.__docgenInfo={description:"",methods:[],displayName:"ImageGalleryCarouselWithContent"};d.__docgenInfo={description:"",methods:[],displayName:"ImageCarouselWithMoreContent"};var q,k,S;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`() => <Wrapper>
    <ImageGalleryCarousel maxWidth={maxWidth} imageItems={imageGalleryCarouselItems} />
  </Wrapper>`,...(S=(k=c.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var w,G,A;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`() => <Wrapper>
    <ImageGalleryCarousel maxWidth={maxWidth} imageItems={mockItemWithContent()} hasContent />
  </Wrapper>`,...(A=(G=p.parameters)==null?void 0:G.docs)==null?void 0:A.source}}};var _,T,B;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`() => <Wrapper>
    <ImageGalleryCarousel maxWidth={maxWidth} imageItems={mockItemWithMoreContent()} hasContent />
  </Wrapper>`,...(B=(T=d.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};const ie=["ImageGalleryCarouselDefault","ImageGalleryCarouselWithContent","ImageCarouselWithMoreContent"];export{d as ImageCarouselWithMoreContent,c as ImageGalleryCarouselDefault,p as ImageGalleryCarouselWithContent,ie as __namedExportsOrder,oe as default};

import{j as e}from"./jsx-runtime-Dtp4yoXy.js";import"./index-iql2cimc.js";import{i as c}from"./props-mock-BEu3Oh0p.js";import{P as s}from"./index-DamiE3XO.js";import{B as j}from"./index-y0ncVmWI.js";import"./_commonjsHelpers-uqKOVeGF.js";import"./index-CIAU3GD8.js";import"./GaEventWrapper-CQUQnm1l.js";import"./googleAnalytics-4Pcl4n6_.js";import"./useBaseSpecificFramework-BEiWg-hg.js";const W=({id:t,imageSource:a,imageAltText:u,title:i,content:r})=>({id:t,item:e.jsx("div",{className:"uds-img",children:e.jsxs("figure",{className:"figure uds-figure",children:[e.jsx("img",{src:a,className:"uds-img figure-img img-fluid",alt:u,loading:"lazy",decoding:"async"}),(i||r)&&e.jsx("figcaption",{className:"figure-caption uds-figure-caption","data-testid":"image-content-container",children:e.jsx("div",{className:"uds-caption-text",children:i?e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:i}),e.jsx("div",{dangerouslySetInnerHTML:{__html:r}})]}):e.jsx("div",{dangerouslySetInnerHTML:{__html:r}})})})]})})}),d=({perView:t=0,imageItems:a,width:u=void 0,maxWidth:i=void 0,imageAutoSize:r=!0})=>{const l=parseInt(`${t}`,10),b=a.map(W),p=a.length>l;return e.jsx(j,{perView:+l,maxWidth:i,width:u,cssClass:"image-carousel aligned-carousel",carouselItems:b,imageAutoSize:r,removeSideBackground:a.length<=l,hasPositionIndicators:p,hasNavButtons:p,isDraggable:p,hasShadow:!0})};d.propTypes={perView:s.number.isRequired,imageItems:s.arrayOf(s.object).isRequired,width:s.string,maxWidth:s.string,imageAutoSize:s.bool};d.__docgenInfo={description:`@param {ImageCarouselType} props
@returns { JSX.Element }`,methods:[],displayName:"ImageCarousel",props:{perView:{defaultValue:{value:"0",computed:!1},description:"",type:{name:"number"},required:!1},width:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},maxWidth:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},imageAutoSize:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},imageItems:{description:"",type:{name:"arrayOf",value:{name:"object"}},required:!0}}};const q=()=>c.map(t=>({...t,content:`
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
      commodo ligula eget dolor. Aenean massa. Cum sociis natoque
      penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      Donec quam felis, ultricies nec, pellentesque eu, pretium …
  `})),H=()=>c.map((t,a)=>({...t,title:`Content ${a+1}`,content:`<p>Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet,
    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua eiusmod tempo.</p>
    <p>Another line of content</p>`})),B={title:"Components/Image Carousel",component:d,args:{imageItems:[],perView:1},argTypes:{imageItems:{table:{disable:!0}},perView:{control:{type:"range",min:1,max:3,step:1}}}},S="800px",g=({imageItems:t,perView:a})=>e.jsx("div",{style:{},children:e.jsx(d,{perView:a,maxWidth:S,imageItems:t})}),o=g.bind({});o.args={imageItems:c};const m=g.bind({});m.args={imageItems:q()};const n=g.bind({});n.args={imageItems:H()};var h,x,f;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`({
  imageItems,
  perView
}) => <div style={{
  // setting display flex the 'maxHeight' gets applied but the carousel squashes
  // display: "flex",
  // maxHeight: text("Max Height", maxHeight, GROUP_STYLE),
}}>
    <ImageCarousel perView={perView} maxWidth={maxWidth} imageItems={imageItems} />
  </div>`,...(f=(x=o.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var I,y,C;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`({
  imageItems,
  perView
}) => <div style={{
  // setting display flex the 'maxHeight' gets applied but the carousel squashes
  // display: "flex",
  // maxHeight: text("Max Height", maxHeight, GROUP_STYLE),
}}>
    <ImageCarousel perView={perView} maxWidth={maxWidth} imageItems={imageItems} />
  </div>`,...(C=(y=m.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var v,V,w;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`({
  imageItems,
  perView
}) => <div style={{
  // setting display flex the 'maxHeight' gets applied but the carousel squashes
  // display: "flex",
  // maxHeight: text("Max Height", maxHeight, GROUP_STYLE),
}}>
    <ImageCarousel perView={perView} maxWidth={maxWidth} imageItems={imageItems} />
  </div>`,...(w=(V=n.parameters)==null?void 0:V.docs)==null?void 0:w.source}}};const D=["ImageCarouselDefault","ImageCarouselWithCaption","ImageCarouselWithMoreCaptionContent"];export{o as ImageCarouselDefault,m as ImageCarouselWithCaption,n as ImageCarouselWithMoreCaptionContent,D as __namedExportsOrder,B as default};

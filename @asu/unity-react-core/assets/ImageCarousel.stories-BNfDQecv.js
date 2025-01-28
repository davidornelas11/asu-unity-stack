import{j as r}from"./jsx-runtime-Dtp4yoXy.js";import"./index-iql2cimc.js";import{i as m}from"./props-mock-BXQRJ45J.js";import{I}from"./ImageCarousel-tIxd05Lf.js";import"./_commonjsHelpers-uqKOVeGF.js";import"./index-8TXC-oMP.js";import"./index-DamiE3XO.js";import"./index-ByxEkjOu.js";import"./GaEventWrapper-BygyXjtG.js";import"./googleAnalytics-4Pcl4n6_.js";const C=()=>m.map(e=>({...e,content:`
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
      commodo ligula eget dolor. Aenean massa. Cum sociis natoque
      penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      Donec quam felis, ultricies nec, pellentesque eu, pretium …
  `})),f=()=>m.map((e,i)=>({...e,title:`Content ${i+1}`,content:`<p>Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet,
    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua eiusmod tempo.</p>
    <p>Another line of content</p>`})),_={title:"Components/Image Carousel",component:I,args:{imageItems:[],perView:1},argTypes:{imageItems:{table:{disable:!0}},perView:{control:{type:"range",min:1,max:3,step:1}}}},y="800px",o=({imageItems:e,perView:i})=>r.jsx("div",{style:{},children:r.jsx(I,{perView:i,maxWidth:y,imageItems:e})}),t=o.bind({});t.args={imageItems:m};const a=o.bind({});a.args={imageItems:C()};const s=o.bind({});s.args={imageItems:f()};var n,p,l;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`({
  imageItems,
  perView
}) => <div style={{
  // setting display flex the 'maxHeight' gets applied but the carousel squashes
  // display: "flex",
  // maxHeight: text("Max Height", maxHeight, GROUP_STYLE),
}}>
    <ImageCarousel perView={perView} maxWidth={maxWidth} imageItems={imageItems} />
  </div>`,...(l=(p=t.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var g,u,d;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`({
  imageItems,
  perView
}) => <div style={{
  // setting display flex the 'maxHeight' gets applied but the carousel squashes
  // display: "flex",
  // maxHeight: text("Max Height", maxHeight, GROUP_STYLE),
}}>
    <ImageCarousel perView={perView} maxWidth={maxWidth} imageItems={imageItems} />
  </div>`,...(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var c,h,x;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`({
  imageItems,
  perView
}) => <div style={{
  // setting display flex the 'maxHeight' gets applied but the carousel squashes
  // display: "flex",
  // maxHeight: text("Max Height", maxHeight, GROUP_STYLE),
}}>
    <ImageCarousel perView={perView} maxWidth={maxWidth} imageItems={imageItems} />
  </div>`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const E=["ImageCarouselDefault","ImageCarouselWithCaption","ImageCarouselWithMoreCaptionContent"];export{t as ImageCarouselDefault,a as ImageCarouselWithCaption,s as ImageCarouselWithMoreCaptionContent,E as __namedExportsOrder,_ as default};

import{j as e}from"./jsx-runtime-Dtp4yoXy.js";import{c as d}from"./index-DqAnBlJf.js";import"./index-iql2cimc.js";import{C as p}from"./Card-CXaPIvpV.js";import"./_commonjsHelpers-uqKOVeGF.js";import"./index-DamiE3XO.js";import"./html-utils-C9gsfPJL.js";import"./googleAnalytics-4Pcl4n6_.js";import"./Button-BXxRNlJD.js";import"./shared-prop-types-B6Cu974x.js";import"./GaEventWrapper-CQUQnm1l.js";import"./useBaseSpecificFramework-BEiWg-hg.js";import"./ButtonTag-9-fdZ3Nt.js";import"./Image-BlESYrhS.js";import"./styled-components.browser.esm-Cua4idQ2.js";const $={title:"Components/Card",component:p,parameters:{docs:{description:{component:`The Card component can be used to generate UDS-compliant default, degree, story, news and event cards.

## Usage

Most props are valid options for all card types, except for the event-specific props.
Card users are responsible to meet all UDS design guidelines with their Cards,
including rules on the use of Call-to-Action buttons and tags.

View component examples and source code below.
        `}}}},o=c=>e.jsx("div",{className:"container",children:e.jsx("div",{className:d("row","row-spaced","pt-2","pb-2"),children:e.jsx("div",{className:d("col","col-12"),children:e.jsx(p,{...c})})})}),O=c=>e.jsx("div",{className:"container",children:e.jsx("div",{className:d("row","row-spaced","pt-2","pb-2"),children:e.jsx("div",{className:d("col","col-12","col-md-12","col-lg-6"),children:e.jsx(p,{...c})})})}),a=o.bind({});a.args={type:"default",horizontal:!1,image:"https://source.unsplash.com/WLUHO9A_xik/300x200",imageAltText:"An example image",title:"Default title",body:"<span style='font-weight: bold;'>(Bold!) Body copy goes here.</span> Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.",buttons:[{color:"maroon",size:"default",label:"CTA button"},{color:"gold",size:"small",label:"Link Button",href:"/",target:"_top"}],tags:[{color:"gray",label:"tag1",href:"/#example-link"},{color:"gray",label:"tag2",href:"/#example-link"},{color:"gray",label:"tag3",href:"/#example-link"}],showBorders:!0};const t=o.bind({});t.args={...a.args,title:"Default card - borderless",showBorders:!1};t.storyName="Default (borderless)";const m=o.bind({});m.args={type:"default",horizontal:!1,title:"Default title",body:"<span style='font-weight: bold;'>(Bold!) Body copy goes here.</span> Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.",buttons:[{color:"maroon",size:"default",label:"Button text"}],icon:["fas","newspaper"]};const s=o.bind({});s.args={type:"degree",horizontal:!1,image:"https://source.unsplash.com/WLUHO9A_xik/300x200",imageAltText:"An example image",title:"Default title",body:"<span style='font-weight: bold;'>(Bold!) Body copy goes here.</span> Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo."};s.parameters={docs:{description:{story:`

    <Card
        body="<span style='font-weight: bold;'>(Bold!) Body copy goes here.</span> Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo."
        image="https://source.unsplash.com/WLUHO9A_xik/300x200"
        imageAltText="An example image"
        title="Default title"
        type="degree"
      />`}}};const r=o.bind({});r.args={type:"event",horizontal:!1,image:"https://source.unsplash.com/WLUHO9A_xik/300x200",imageAltText:"An example image",title:"Event title Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore exercitationem ad voluptatem dolore dolores nulla ipsam quo distinctio expedita doloribus nisi similique obcaecati velit illo autem numquam iusto, rem nesciunt repellendus laborum. Rerum quisquam, soluta aspernatur a harum dolor ducimus nulla. Itaque aliquam cum fugiat error esse ipsam rerum consectetur!",cardLink:"#example-link",body:"<span style='font-weight: bold;'>(Bold!) Body copy goes here.</span> Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.",eventFormat:"stack",eventTime:"Wed, November 21st, 2021<br />11:30 a.m - 12:30 p.m.",eventLocation:"Downtown Phoenix campus",buttons:[{color:"maroon",size:"default",label:"CTA button"}]};r.parameters={docs:{description:{story:`
The event props, \`eventLocation\` and \`eventTime\` are allowed to contain basic HTML formatting, primarily \`<br>\` for line breaks.


    <Card
        body="<span style='font-weight: bold;'>(Bold!) Body copy goes here.</span> Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo."
        buttons={[
          {
            color: 'maroon',
            label: 'CTA button',
            size: 'default'
          }
        ]}
        eventFormat="stack"
        eventLocation="Downtown Phoenix campus"
        eventTime="Wed, November 21st, 2021<br>11:30 a.m - 12:30 p.m."
        image="https://source.unsplash.com/WLUHO9A_xik/300x200"
        imageAltText="An example image"
        title="Event title"
        type="event"
      />`}}};const i=o.bind({});i.args={type:"story",horizontal:!1,image:"https://source.unsplash.com/WLUHO9A_xik/300x200",imageAltText:"An example image",title:"Story title",body:"<span style='font-weight: bold;'>(Bold!) Body copy goes here.</span> Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.",buttons:[{color:"maroon",size:"default",label:"CTA button",href:"https://google.com",target:"_blank"}],linkLabel:"Default link",linkUrl:"https://google.com",tags:[{color:"gray",label:"tag1",href:"/#example-link"},{color:"gray",label:"tag2",href:"/#example-link"},{color:"gray",label:"tag3",href:"/#example-link"}]};i.parameters={docs:{description:{story:`

    <Card
        body="<span style='font-weight: bold;'>(Bold!) Body copy goes here.</span> Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo."
        buttons={[
          {
            color: 'maroon',
            label: 'CTA button',
            size: 'default'
          }
        ]}
        image="https://source.unsplash.com/WLUHO9A_xik/300x200"
        imageAltText="An example image"
        linkLabel="Default link"
        linkUrl="http://google.com"
        tags={[
          {
            color: 'gray',
            href: '/#example-link',
            label: 'tag1'
          },
          {
            color: 'gray',
            href: '/#example-link',
            label: 'tag2'
          },
          {
            color: 'gray',
            href: '/#example-link',
            label: 'tag3'
          }
        ]}
        title="Story title"
        type="story"
      />`}}};const l=O.bind({});l.args={type:"story",horizontal:!0,image:"https://source.unsplash.com/WLUHO9A_xik/300x200",imageAltText:"An example image",title:"Horizontal story",body:"<span style='font-weight: bold;'>(Bold!) Body copy goes here.</span> Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.",tags:[{color:"gray",label:"tag1",href:"/#example-link"},{color:"gray",label:"tag2",href:"/#example-link"},{color:"gray",label:"tag3",href:"/#example-link"}]};l.parameters={docs:{description:{story:`

    <Card
        body="<span style='font-weight: bold;'>(Bold!) Body copy goes here.</span> Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo."
        horizontal
        image="https://source.unsplash.com/WLUHO9A_xik/300x200"
        imageAltText="An example image"
        tags={[
          {
            color: 'gray',
            href: '/#example-link',
            label: 'tag1'
          },
          {
            color: 'gray',
            href: '/#example-link',
            label: 'tag2'
          },
          {
            color: 'gray',
            href: '/#example-link',
            label: 'tag3'
          }
        ]}
        title="Horizontal story"
        type="story"
      />`}}};const n=o.bind({});n.args={type:"story",horizontal:!1,image:"https://source.unsplash.com/WLUHO9A_xik/300x200",imageAltText:"An example image",title:"ASU News Story title",body:"<span style='font-weight: bold;'>(Bold!) Body copy goes here.</span> Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.",buttons:[{color:"maroon",size:"default",label:"Read at ASU News"}]};n.parameters={docs:{description:{story:`

    <Card
        body="<span style='font-weight: bold;'>(Bold!) Body copy goes here.</span> Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo."
        buttons={[
          {
            color: 'maroon',
            label: 'Read at ASU News',
            size: 'default'
          }
        ]}
        image="https://source.unsplash.com/WLUHO9A_xik/300x200"
        imageAltText="An example image"
        title="ASU News Story title"
        type="story"
      />`}}};var u,g,b;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`args => <div className="container">
    <div className={classNames("row", "row-spaced", "pt-2", "pb-2")}>
      <div className={classNames("col", "col-12")}>
        <Card {...args} />
      </div>
    </div>
  </div>`,...(b=(g=a.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var y,h,x;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`args => <div className="container">
    <div className={classNames("row", "row-spaced", "pt-2", "pb-2")}>
      <div className={classNames("col", "col-12")}>
        <Card {...args} />
      </div>
    </div>
  </div>`,...(x=(h=t.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var v,f,N;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`args => <div className="container">
    <div className={classNames("row", "row-spaced", "pt-2", "pb-2")}>
      <div className={classNames("col", "col-12")}>
        <Card {...args} />
      </div>
    </div>
  </div>`,...(N=(f=m.parameters)==null?void 0:f.docs)==null?void 0:N.source}}};var w,A,L;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`args => <div className="container">
    <div className={classNames("row", "row-spaced", "pt-2", "pb-2")}>
      <div className={classNames("col", "col-12")}>
        <Card {...args} />
      </div>
    </div>
  </div>`,...(L=(A=s.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var k,B,C;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`args => <div className="container">
    <div className={classNames("row", "row-spaced", "pt-2", "pb-2")}>
      <div className={classNames("col", "col-12")}>
        <Card {...args} />
      </div>
    </div>
  </div>`,...(C=(B=r.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var T,S,z;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`args => <div className="container">
    <div className={classNames("row", "row-spaced", "pt-2", "pb-2")}>
      <div className={classNames("col", "col-12")}>
        <Card {...args} />
      </div>
    </div>
  </div>`,...(z=(S=i.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var U,q,D;l.parameters={...l.parameters,docs:{...(U=l.parameters)==null?void 0:U.docs,source:{originalSource:`args => <div className="container">
    <div className={classNames("row", "row-spaced", "pt-2", "pb-2")}>
      <div className={classNames("col", "col-12", "col-md-12", "col-lg-6")}>
        <Card {...args} />
      </div>
    </div>
  </div>`,...(D=(q=l.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var H,_,W;n.parameters={...n.parameters,docs:{...(H=n.parameters)==null?void 0:H.docs,source:{originalSource:`args => <div className="container">
    <div className={classNames("row", "row-spaced", "pt-2", "pb-2")}>
      <div className={classNames("col", "col-12")}>
        <Card {...args} />
      </div>
    </div>
  </div>`,...(W=(_=n.parameters)==null?void 0:_.docs)==null?void 0:W.source}}};const ee=["Default","DefaultBorderless","Icon","Degree","Event","Story","HorizontalStoryCard","AsuNewsStory"];export{n as AsuNewsStory,a as Default,t as DefaultBorderless,s as Degree,r as Event,l as HorizontalStoryCard,m as Icon,i as Story,ee as __namedExportsOrder,$ as default};

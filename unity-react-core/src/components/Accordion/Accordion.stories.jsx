import React from 'react';
import { Accordion } from './Accordion';

export default {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'vertical',
  },
};

const Template = (args) => <Accordion {...args} />;

export const Default = Template.bind({});
Default.args = {
  heading: 'Accordion Title',
  children: 'Accordion content goes here...',
};

export const Open = Template.bind({});
Open.args = {
  heading: 'Accordion Title',
  children: 'Accordion content goes here...',
  open: true,
};

export const WithCustomHeadingLevel = Template.bind({});
WithCustomHeadingLevel.args = {
  heading: 'Accordion Title',
  children: 'Accordion content goes here...',
  headingLevel: 'h3',
};

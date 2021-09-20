import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js';
import { initQuoteWithAnimation } from './quote-with-animation';

export default createComponent('Quote With Animation', 'ASUCMS');

export const defaultQuote = createStory(
  <div class="container">
    <h1>Scroll down to see the animated quote.</h1>
    <div class="space-for-scrolling">
      <div>
        <h4>The ASU difference:</h4>
      </div>
      <div>
        <h1>
          We are measured not by whom we{' '}
          <span class="highlight-on-scroll-text">exclude,</span> but by whom we{' '}
          <span class="highlight-on-scroll-text">include</span> and how they{' '}
          <span class="highlight-on-scroll-text delayed">succeed</span>
        </h1>
      </div>
      <div>
        <span>—</span>
        <span>Excerpt from ASU charter</span>
      </div>
    </div>
  </div>,
  initQuoteWithAnimation
);

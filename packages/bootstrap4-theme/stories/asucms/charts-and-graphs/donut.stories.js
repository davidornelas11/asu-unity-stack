import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js';
import { initDonut } from './donut';

export default createComponent('Charts And Graphs', 'ASUCMS');

export const donut = createStory(
  <div class="container p-5 chart-container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-4">
        <div class="uds-charts-and-graphs-container">
          <div class="uds-charts-and-graphs-overlay">
            <h4 id="percentage-display"></h4>
            <span>Fact goes here</span>
          </div>
          <canvas id="uds-donut"></canvas>
        </div>
      </div>
    </div>
  </div>,
  initDonut
);

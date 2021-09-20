import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js';
import { initCarousel } from './rankings-carousel';

export default createComponent('Rankings Carousel', 'ASUCMS');

export const rankingsCarousel = createStory(
  <div class="image-carousel">
    <div id="rankings-carousel" class="glide rankings-carousel">
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
          <li class="glide__slide">
            <div class="asucms-image">
              <img
                src="https://ux-annual-report.ws.asu.edu/sites/all/libraries/Prototype/images/210211-ASURankings-1Innovation%20(1).png"
                alt="Replace with appropriate alt text"
              />
            </div>
          </li>
          <li class="glide__slide">
            <div class="asucms-image">
              <img
                src="https://ux-annual-report.ws.asu.edu/sites/all/libraries/Prototype/images/210211-ASURankings-_BestBachelors.png"
                alt="Replace with appropriate alt text"
              />
            </div>
          </li>
          <li class="glide__slide">
            <div class="asucms-image">
              <img
                src="https://ux-annual-report.ws.asu.edu/sites/all/libraries/Prototype/images/210211-ASURankings-_Excellence.png"
                alt="Replace with appropriate alt text"
              />
            </div>
          </li>
          <li class="glide__slide">
            <div class="asucms-image">
              <img
                src="https://ux-annual-report.ws.asu.edu/sites/all/libraries/Prototype/images/210211-ASURankings-_Top10International.png"
                alt="Replace with appropriate alt text"
              />
            </div>
          </li>
          <li class="glide__slide">
            <div class="asucms-image">
              <img
                src="https://ux-annual-report.ws.asu.edu/sites/all/libraries/Prototype/images/210211-ASURankings-_Top25MBA.png"
                alt="Replace with appropriate alt text"
              />
            </div>
          </li>
        </ul>
      </div>

      <div class="glide__arrows" data-glide-el="controls">
        <button
          class="glide__arrow glide__arrow--left"
          data-glide-dir="<"
          data-ga-event="select"
          data-ga-type="carousel"
          data-ga="left chevron"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="chevron-left"
            className="svg-inline--fa fa-chevron-left fa-w-10"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <path
              fill="currentColor"
              d="M 50,0 L 60,10 L 20,50 L 60,90 L 50,100 L 0,50 Z"
              class="arrow"
              transform="translate(15,0)"
            ></path>
          </svg>
        </button>
        <button
          class="glide__arrow glide__arrow--right"
          data-glide-dir=">"
          data-ga-event="select"
          data-ga-type="carousel"
          data-ga="right chevron"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="chevron-right"
            className="svg-inline--fa fa-chevron-right fa-w-10"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <path
              fill="currentColor"
              d="M 50,0 L 60,10 L 20,50 L 60,90 L 50,100 L 0,50 Z"
              class="arrow"
              transform="translate(85,100) rotate(180)"
            ></path>
          </svg>
        </button>
      </div>
      <div class="link-section">
        <a
          href="example.com"
          data-ga-event="link"
          data-ga-type="internal link"
          data-ga="view all rankings"
        >
          View all rankings
        </a>
      </div>
    </div>
  </div>,
  initCarousel
);

import Glide from './glide-3-4-1';

export const initCarousel = () => {
  const arrowDisabler = (Glide, Components, Events) => {
    return {
      mount() {
        // Only in effect when rewinding is disabled
        if (Glide.settings.rewind) {
          return;
        }

        Glide.on(['mount.after', 'run'], () => {
          // Filter out arrows_control
          for (let controlItem of Components.Controls.items) {
            if (controlItem.className !== 'glide__arrows') {
              continue;
            }

            // Set left arrow state
            var left = controlItem.querySelector('.glide__arrow--left');
            if (left) {
              if (Glide.index === 0) {
                left.classList.add('glide__arrow--disabled');
                //left.setAttribute('disabled', '') // Disable on first slide
              } else {
                left.classList.remove('glide__arrow--disabled');
                //left.removeAttribute('disabled') // Enable on other slides
              }
            }

            // Set right arrow state
            var right = controlItem.querySelector('.glide__arrow--right');
            if (right) {
              if (
                Glide.index ===
                Components.Sizes.length - Glide.settings.perView
              ) {
                right.classList.add('glide__arrow--disabled');
                //right.setAttribute('disabled', '') // Disable on last slide
              } else {
                right.classList.remove('glide__arrow--disabled');
                //right.removeAttribute('disabled') // Disable on other slides
              }
            }
          }
        });
      },
    };
  };

  const pushImageCarouselGAEvent = (args) => {
    const { dataLayer } = window;
    const event = {
      action: 'click',
      name: 'onclick',
      region: 'main content',
      ...args,
    };
    if (dataLayer) dataLayer.push(event);
  };

  const elements = document.querySelectorAll('[data-ga-image-carousel]');
  elements.forEach((element) =>
    element.addEventListener('click', () => {
      const event = element
        .getAttribute('data-ga-image-carousel-event')
        .toLowerCase();
      const type = element
        .getAttribute('data-ga-image-carousel-type')
        .toLowerCase();
      const section = element
        .getAttribute('data-ga-image-carousel-section')
        .toLowerCase();
      const text = element.getAttribute('data-ga-image-carousel').toLowerCase();
      const component = element.getAttribute(
        'data-ga-image-carousel-component'
      );
      const args = {
        event,
        type,
        section,
        text,
        ...(component && {
          component: component.toLowerCase(),
        }),
      };
      pushImageCarouselGAEvent(args);
    })
  );

  const viewPortWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  const headerGap = (viewPortWidth - 1200) / 2;
  console.log({headerGap});
  new Glide('#one-university-carousel', {
    type: 'slider', // No wrap-around.
    focusAt: 0,
    bound: true, // Only if type slider with focusAt 0
    rewind: false, // Only if type slider
    gap: 16, // Space between slides... may be impacted by viewport size.
    keyboard: true, // Left/Right arrow key support for slides - true is default. Accessible?
    startAt: 0,
    swipeThreshold: 80, // Distance required for swipe to change slide.
    dragThreshold: 120, // Distance for mouse drag to change slide.
    perTouch: 1, // Number of slides that can be moved per each swipe/drag.
    peek: headerGap,
    perView: 1,
    breakpoints: {
      1260: {
        peek: 32,
      },
    },
  }).mount({ arrowDisabler });
};

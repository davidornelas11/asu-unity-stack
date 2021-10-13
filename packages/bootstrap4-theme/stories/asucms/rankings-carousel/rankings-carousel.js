import Glide from '../image-carousel/glide-3-4-1';

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

  const pushRankingsCarouselGAEvent = (args) => {
    const { dataLayer } = window;
    const event = {
      action: 'click',
      name: 'onclick',
      region: 'main content',
      section: 'rankings',
      ...args,
    };
    if (dataLayer) dataLayer.push(event);
  };

  const elements = document.querySelectorAll('[data-ga-rankings-carousel]');
  elements.forEach((element) =>
    element.addEventListener('click', () => {
      const args = {
        event: element
          .getAttribute('data-ga-rankings-carousel-event')
          .toLowerCase(),
        type: element
          .getAttribute('data-ga-rankings-carousel-type')
          .toLowerCase(),
        text: element.getAttribute('data-ga-rankings-carousel').toLowerCase(),
      };
      pushRankingsCarouselGAEvent(args);
    })
  );

  new Glide('#rankings-carousel', {
    type: 'slider', // No wrap-around.
    focusAt: 0,
    bound: true, // Only if type slider with focusAt 0
    rewind: false, // Only if type slider
    keyboard: true, // Left/Right arrow key support for slides - true is default. Accessible?
    startAt: 0,
    swipeThreshold: 80, // Distance required for swipe to change slide.
    dragThreshold: 120, // Distance for mouse drag to change slide.
    perTouch: 1, // Number of slides that can be moved per each swipe/drag.
    peek: 0,
    gap: 0,
    perView: 1,
    autoplay: 5000, //Change this to change time between scroll. Time is in miliseconds(5 seconds on this example)
  }).mount({ arrowDisabler });
};

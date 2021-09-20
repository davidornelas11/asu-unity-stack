export const initQuoteWithAnimation = () => {
  document.querySelectorAll('.highlight-on-scroll-text').forEach((elem) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-bg-in-scroll');
        }
      });
    });
    observer.observe(elem);
  });
};

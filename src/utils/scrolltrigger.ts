export const scrollTrigger = (selector: string, options: object = {}) => {
  const els = document.querySelectorAll(selector);
  const nodesToArray = Array.from(els);
  nodesToArray.forEach((el: Element) => {
    addObserver(el as HTMLElement, options);
  });
};

const addObserver = (el: HTMLElement, options) => {
  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, options); // Passing the options object to the observer
  observer.observe(el);
};

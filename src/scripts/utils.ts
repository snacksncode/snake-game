//scrollTo as Promise
export function scrollTo(offset: number): Promise<void> {
  return new Promise((resolve, _reject) => {
    const fixedOffset = offset.toFixed(),
      onScroll = function () {
        if (window.pageYOffset.toFixed() === fixedOffset) {
          window.removeEventListener("scroll", onScroll);
          resolve();
        }
      };

    window.addEventListener("scroll", onScroll);
    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });
  });
}

//My custom "animation" funciton
export function addAnimationClasses(
  element: HTMLElement,
  classBase: string,
  transitionDuration: number
): Promise<void> {
  return new Promise((resolve, _reject) => {
    element.classList.add(`${classBase}--started`);
    /*
      Browsers don't update all the styles at the same time.
      Before computing new styles (after a new class addition)
      browser waits for a bit in case we'll add more
      requestAnimationFrame() forces browser to update styles
      and putting setTimeout of 0ms puts --ongoing class addition
      to the next cycle
      
      ! I might be wrong but I think this is a good explanation
    */
    requestAnimationFrame(() => {
      window.setTimeout(() => {
        element.classList.add(`${classBase}--ongoing`);
      }, 0);
      window.setTimeout(() => {
        element.classList.add(`${classBase}--finished`);
        resolve();
      }, transitionDuration);
    });
  });
}

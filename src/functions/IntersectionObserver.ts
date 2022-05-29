const showContentsObserver = (classname: string, threshold: number, rootMargin: string) => {
  const showContents = (entries: any) => {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  };
  const observer = new IntersectionObserver(showContents, {
    rootMargin: rootMargin,
    threshold: threshold,
  });

  const items = document.querySelectorAll(`.${classname}`);
  items.forEach((item: any) => {
    observer.observe(item);
  });
}

export default showContentsObserver;
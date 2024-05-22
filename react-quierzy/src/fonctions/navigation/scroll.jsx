const scroll = () => {
    const sections = document.querySelectorAll('section');
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.history.replaceState(null, null, `#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.5 }
    );
  
    sections.forEach((section) => observer.observe(section));

};
  
export default scroll;
  
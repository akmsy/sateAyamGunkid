document.addEventListener("DOMContentLoaded", () => {
  const sr = ScrollReveal({
    distance: "24px",
    duration: 800,
    easing: "ease-out",
    opacity: 0,
    reset: false
  });

  document.querySelectorAll("[data-reveal]").forEach((el) => {
    sr.reveal(el, {
      origin: el.dataset.from || "bottom",
      delay: el.dataset.delay || 0
    });
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add("show");
        } 
        
        // else {
        // entry.target.classList.remove("show");
        // }
    });
    }, { threshold: 0.2 });

    document.querySelectorAll(".pop-in").forEach(el => observer.observe(el));
});

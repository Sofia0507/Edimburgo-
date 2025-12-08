document.addEventListener("DOMContentLoaded", function() {
  const items = document.querySelectorAll(".historia-item");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        entry.target.classList.remove("oculto");
      }
    });
  }, { threshold: 0.2 }); // 20% visible para activar

  items.forEach(item => {
    item.classList.add("oculto"); // aseguramos que empiecen ocultos
    observer.observe(item);
  });
});
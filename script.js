const items = document.querySelectorAll('.oculto');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');   // aparece
      entry.target.classList.remove('oculto'); // deja de estar oculto
    }
  });
}, {
  threshold: 0.2 // porcentaje de visibilidad para activar (20%)
});

// Observamos cada item
items.forEach(item => {
  observer.observe(item);
});


function toggleInfo(id) {
  const info = document.getElementById('info-' + id);
  info.classList.toggle('visible');
}
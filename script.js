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




// Pagina2

const cards = document.querySelectorAll(".card");
let activeIndex = 3;

function update(){
  cards.forEach((card, i) => {
    card.style.setProperty("--i", i - activeIndex);
    card.classList.toggle("active", i === activeIndex);
  });
}

document.querySelector(".next").onclick = () => {
  activeIndex = (activeIndex + 1) % cards.length;
  update();
};

document.querySelector(".prev").onclick = () => {
  activeIndex = (activeIndex - 1 + cards.length) % cards.length;
  update();
};



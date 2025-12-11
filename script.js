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



const card = document.querySelectorAll('.carousel .card');
const infoCards = document.querySelectorAll('.info-card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    // Quita active de todas las info
    infoCards.forEach(info => info.classList.remove('active'));
    // Detecta el título de la card clicada
    const title = card.querySelector('h1').textContent;

    // Busca el bloque correspondiente
    if (title.includes("Hadas")) {
      document.getElementById("info-hadas").classList.add("active");
    } else if (title.includes("Hume")) {
      document.getElementById("info-hume").classList.add("active");
    } else if (title.includes("Harry Potter")) {
      document.getElementById("info-hp").classList.add("active");
    } else if (title.includes("cementerios")) {
      document.getElementById("info-cementerio").classList.add("active");
    } else if (title.includes("Bobby")) {
      document.getElementById("info-bobby").classList.add("active");
    }
  });
});



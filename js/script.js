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

const cardss = document.querySelectorAll(".card");
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

document.addEventListener("DOMContentLoaded", () => {
  const elementosAnimados = document.querySelectorAll('.animado');

  const animObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Para que no se quite al salir de pantalla:
        animObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  elementosAnimados.forEach(el => animObserver.observe(el));
});



function toggleDetalles(id, btn) {
  const panel = document.getElementById(id);
  const abierto = btn.getAttribute('aria-expanded') === 'true';

  btn.setAttribute('aria-expanded', !abierto);
  panel.hidden = abierto; // si estaba abierto, oculta; si no, muestra

  // Gestión de foco: al abrir, enviar foco al primer elemento del panel
  if (!abierto) {
    const focusable = panel.querySelector('a, button, input, [tabindex]:not([tabindex="-1"])');
    if (focusable) focusable.focus();
  }
}

const config = {
  type: 'bubble',
  data: data,
  options: {}
};

const data = {
  datasets: [{
    label: 'First Dataset',
    data: [{
      x: 20,
      y: 30,
      r: 15
    }, {
      x: 40,
      y: 10,
      r: 10
    }],
    backgroundColor: 'rgb(255, 99, 132)'
  }]
};

const cards = document.querySelectorAll(".card");
const titulo = document.getElementById("detalle-titulo");
const descripcion = document.getElementById("detalle-descripcion");

function actualizarTextoDesdeActiva() {
  const activa = document.querySelector(".card.active");
  if (!activa) return;

  const h1 = activa.querySelector(".overlay h1");
  const p = activa.querySelector(".overlay p");

  titulo.textContent = h1.textContent;
  descripcion.textContent = p.textContent;
}

// Llamar al cargar
actualizarTextoDesdeActiva();

// Si usas botones para mover el carrusel, añade esto:
document.querySelector(".nav.next").addEventListener("click", () => {
  moverCarrusel(1);
});
document.querySelector(".nav.prev").addEventListener("click", () => {
  moverCarrusel(-1);
});

function moverCarrusel(direccion) {
  const activa = document.querySelector(".card.active");
  let index = Array.from(cards).indexOf(activa);
  activa.classList.remove("active");

  index = (index + direccion + cards.length) % cards.length;
  cards[index].classList.add("active");

  actualizarTextoDesdeActiva();
}



const botones = document.querySelectorAll(".filtro");
const tarjetas = document.querySelectorAll(".card-alojamiento");

botones.forEach(boton => {
  boton.addEventListener("click", () => {
    // Activar botón
    botones.forEach(b => b.classList.remove("activo"));
    boton.classList.add("activo");

    const categoria = boton.dataset.categoria;

    tarjetas.forEach(card => {
      if (categoria === "todos" || card.dataset.categoria === categoria) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
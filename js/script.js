const cards = document.querySelectorAll(".card");
let activeIndex = 0; // índice inicial

function update() {
  cards.forEach((card, i) => {
    card.style.setProperty("--i", i - activeIndex);
    card.classList.toggle("active", i === activeIndex);
  });
}

// Botón siguiente
document.querySelector(".next").onclick = () => {
  activeIndex = (activeIndex + 1) % cards.length;
  update();
};

// Botón anterior
document.querySelector(".prev").onclick = () => {
  activeIndex = (activeIndex - 1 + cards.length) % cards.length;
  update();
};

// Bloque detalle
const detalleTitulo = document.getElementById("detalle-titulo");
const detalleDescripcion = document.getElementById("detalle-descripcion"); // Para tarjetas principales

// Al hacer clic en una tarjeta
cards.forEach(card => {
  card.addEventListener("click", () => {
    // Actualiza índice activo
    activeIndex = [...cards].indexOf(card);
    update();

    // Extrae título y descripción
    const titulo = card.querySelector("h1").textContent;
    const descripcion = card.querySelector("p").textContent;

    // Actualiza bloque detalle
    detalleTitulo.textContent = titulo;
    detalleDescripcion.textContent = descripcion;
  });
});

// Inicializa carrusel
update();


    const elementosAnimados = document.querySelectorAll('.animado');
    const animObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          animObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

elementosAnimados.forEach(el => animObserver.observe(el));


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

    actualizarTextoDesdeActiva();

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


// --- FILTRO ALOJAMIENTO ---
const botones = document.querySelectorAll(".filtro");
const tarjetas = document.querySelectorAll(".card-alojamiento");

botones.forEach(boton => {
  boton.addEventListener("click", () => {
    botones.forEach(b => b.classList.remove("activo"));
    boton.classList.add("activo");

    const categoria = boton.dataset.categoria;

    tarjetas.forEach(card => {
      const cardCategoria = card.dataset.categoria;

      if (categoria === "todos" || categoria === cardCategoria) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }); 
});  

    


const detalleImg = document.getElementById('detalleImg');
const detalleTituloAloj = document.getElementById('detalleTitulo');
const detalleDescripcionAloj = document.getElementById('detalleDescripcion');

document.querySelectorAll('.categoria').forEach(plato => {
  plato.addEventListener('click', () => {
    detalleImg.src = plato.getAttribute('data-img');
    detalleTituloAloj.textContent = plato.getAttribute('data-titulo');
    detalleDescripcionAloj.textContent = plato.getAttribute('data-descripcion');
  });
});


// botones trasportes



// Chartjs


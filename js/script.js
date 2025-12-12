$(document).ready(function(){
  $(".menu-toggle").click(function(){
    $("nav ul").slideToggle();
  });
})

const cards = document.querySelectorAll(".card");
let activeIndex = 0;

const detalleTitulo = document.getElementById("detalle-titulo");
const detalleDescripcion = document.getElementById("detalle-descripcion");

function updateCarrusel() {
    cards.forEach((card, i) => {
        card.style.setProperty("--i", i - activeIndex);
        card.classList.toggle("active", i === activeIndex);
    });
    actualizarDetalle();
}

function actualizarDetalle() {
    const activa = document.querySelector(".card.active");
    if (!activa) return;
    const h1 = activa.querySelector("h1");
    const p = activa.querySelector("p");
    if (h1 && p) {
        detalleTitulo.textContent = h1.textContent;
        detalleDescripcion.textContent = p.textContent;
    }
}

// Botones siguiente / anterior
$(".next").click(() => {
    activeIndex = (activeIndex + 1) % cards.length;
    updateCarrusel();
});

$(".prev").click(() => {
    activeIndex = (activeIndex - 1 + cards.length) % cards.length;
    updateCarrusel();
});

// Click en tarjeta también actualiza detalle
cards.forEach((card, i) => {
    card.addEventListener("click", () => {
        activeIndex = i;
        updateCarrusel();
    });
});

// Inicializar
updateCarrusel();


// ========================
// ANIMACIONES CON INTERSECTION OBSERVER
// ========================
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

// FILTRO ALOJAMIENTO
// ========================
const botonesFiltro = document.querySelectorAll(".filtro");
const tarjetasAlojamiento = document.querySelectorAll(".card-alojamiento");

botonesFiltro.forEach(boton => {
    boton.addEventListener("click", () => {
        botonesFiltro.forEach(b => b.classList.remove("activo"));
        boton.classList.add("activo");

        const categoria = boton.dataset.categoria;

        tarjetasAlojamiento.forEach(card => {
            const cardCategoria = card.dataset.categoria;
            card.style.display = (categoria === "todos" || categoria === cardCategoria) ? "block" : "none";
        });
    });
});



document.addEventListener("DOMContentLoaded", () => {
    // Seleccionamos botones de filtro y tarjetas
    const botonesFiltro = document.querySelectorAll(".filtro");
    const tarjetasAlojamiento = document.querySelectorAll(".card-alojamiento");

    // Seleccionamos elementos donde se mostrarán los detalles
    const detalleImg = document.getElementById('detalleImg');
    const detalleTituloAloj = document.getElementById('detalleTitulo');
    const detalleDescripcionAloj = document.getElementById('detalleDescripcion');

    // --- FILTROS ---
    botonesFiltro.forEach(boton => {
        boton.addEventListener("click", () => {
            // Quitar clase activo de todos y añadir al clicado
            botonesFiltro.forEach(b => b.classList.remove("activo"));
            boton.classList.add("activo");

            const categoria = boton.dataset.categoria;

            tarjetasAlojamiento.forEach(card => {
                const cardCategoria = card.dataset.categoria;
                // Mostrar solo las que coinciden con la categoría
                card.style.display = (categoria === "todos" || cardCategoria === categoria) ? "" : "none";
            });
        });
    });

    // --- DETALLES ---
    tarjetasAlojamiento.forEach(card => {
        card.addEventListener("click", () => {
            // Usamos data-attributes si existen, si no usamos el contenido de la tarjeta
            detalleImg.src = card.dataset.img || card.querySelector("img").src;
            detalleTituloAloj.textContent = card.dataset.titulo || card.querySelector("h3").textContent;
            detalleDescripcionAloj.textContent = card.dataset.descripcion || card.querySelector("p:nth-of-type(2)").textContent;
        });
    });
});


// MODALES
// ========================
function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.style.display = "flex";
}

function closeModal(event, id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    if (event.target.classList.contains("modal") || event.target.classList.contains("close")) {
        modal.style.display = "none";
    }
}

// CHART.JS con jQuery
// ========================
$(document).ready(function () {
    var ctx = $("#linea")[0].getContext("2d");

    var datos = {
        labels: ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],
        datasets: [{
            label: "Turistas por mes en Edimburgo (2024)",
            data: [280000,300000,350000,420000,500000,620000,800000,850000,700000,550000,400000,320000],
            borderColor: "#D81E5B",
            backgroundColor: "rgba(216,30,91,0.2)",
            borderWidth: 3,
            tension: 0.3,
            fill: true
        }]
    };

    var config = {
        type: "line",
        data: datos
    };

    new Chart(ctx, config);
});


document.querySelectorAll(".btn-detalles").forEach(btn => {
    btn.addEventListener("click", () => {
        const targetId = btn.getAttribute("aria-controls");
        const detalles = document.getElementById(targetId);
        if (!detalles) return;

        // Alterna el atributo hidden
        const isHidden = detalles.hasAttribute("hidden");
        if (isHidden) {
            detalles.removeAttribute("hidden");
            btn.setAttribute("aria-expanded", "true");
        } else {
            detalles.setAttribute("hidden", "");
            btn.setAttribute("aria-expanded", "false");
        }
    });
});


// abrir/cerrar menu
$(document).ready(function(){
    $('.menu-toggle').click(function(){
        $('.menu').toggleClass('show');
    });

    // cerrar al pulsar un enlace
    $('.menu li a').click(function(){
        if($('.menu').hasClass('show')){
            $('.menu').removeClass('show');
        }
    });
});
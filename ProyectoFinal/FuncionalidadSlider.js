const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let currentSlide = 0;

// Función para mostrar la diapositiva actual
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
    slide.style.transform = `translateX(${(i - index) * 100}%)`;
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

// Navegación siguiente
document.querySelector(".next").addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

// Navegación anterior
document.querySelector(".prev").addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

// Navegación con indicadores
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSlide = index;
    showSlide(currentSlide);
  });
});

// Inicializar la posición de las diapositivas
showSlide(currentSlide);
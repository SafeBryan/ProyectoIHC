// Selección de elementos clave
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");
let currentSlide = 0;

// Verificación básica
if (slides.length === 0 || dots.length === 0) {
  console.error("No se encontraron elementos de diapositivas o indicadores en el DOM.");
} else {
  // Función para mostrar la diapositiva actual
  function showSlide(index) {
    slides.forEach((slide, i) => {
      // Posiciona las diapositivas y agrega clase "active" solo a la actual
      slide.style.transform = `translateX(${(i - index) * 100}%)`;
      slide.classList.toggle("active", i === index);
    });

    dots.forEach((dot, i) => {
      // Actualiza los indicadores
      dot.classList.toggle("active", i === index);
    });
  }

  // Función para avanzar a la siguiente diapositiva
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  // Función para retroceder a la diapositiva anterior
  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  // Configurar eventos
  nextButton?.addEventListener("click", nextSlide);
  prevButton?.addEventListener("click", prevSlide);

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentSlide = index;
      showSlide(currentSlide);
    });
  });

  // Agregar funcionalidad de teclado
  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") nextSlide();
    if (event.key === "ArrowLeft") prevSlide();
  });

  // Inicializar la posición de las diapositivas
  showSlide(currentSlide);

  // Configurar reproducción automática opcional (desactivable si no es necesario)
  let autoPlay = true;
  let autoPlayInterval = 5000; // 5 segundos

  if (autoPlay) {
    setInterval(nextSlide, autoPlayInterval);
  }
}

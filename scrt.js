function scrollToSection() {
  // Находим целевую секцию по ее id
  const targetSection = document.getElementById("targetSection");

  // Вычисляем вертикальное положение целевой секции на странице
  const targetPosition = targetSection.offsetTop;

  // Прокручиваем страницу к верху целевой секции с плавной анимацией
  window.scrollTo({
    top: targetPosition,
    behavior: "smooth",
  });
}

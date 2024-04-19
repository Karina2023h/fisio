// Отримати бургер-меню та контент меню
const burgerMenu = document.querySelector(".burger-menu");
const menuContent = document.querySelector(".menu-content");

// Додати обробник події для кліку на бургер-меню
burgerMenu.addEventListener("click", () => {
  // Змінити відображення контенту меню
  menuContent.style.display =
    menuContent.style.display === "block" ? "none" : "block";
});

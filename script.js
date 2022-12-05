const hamburgerBtn = document.querySelector(".hamburger")
const hamburgerCloseBtn = document.querySelector(".hamburger-close-button")
const mobileMenu = document.querySelector(".mobile-menu")

hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.add("display-none")
  hamburgerCloseBtn.classList.remove("display-none")
  mobileMenu.classList.remove("opacity-zero")
  mobileMenu.classList.add("mobile-menu-translateY")
})

hamburgerCloseBtn.addEventListener("click", () => {
  hamburgerBtn.classList.remove("display-none")
  hamburgerCloseBtn.classList.add("display-none")
  mobileMenu.classList.add("opacity-zero")
  mobileMenu.classList.remove("mobile-menu-translateY")
})
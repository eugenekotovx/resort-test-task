const menuBtn = document.querySelector('.js-navigation-header__toggle');
const menu = document.querySelector('.js-navigation')

const toggleMenu = () => {
  menu.classList.toggle('navigation--open')
  menuBtn.classList.toggle('navigation-header__toggle_open')
  menuBtn.classList.toggle('navigation-header__toggle_close')
}

menuBtn.addEventListener('click', () => {
  toggleMenu()
})

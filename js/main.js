const menu_button = document.getElementById('menu-button');
// const close_menu = document.getElementById('menu-close-button');
const mobile_menu = document.getElementById('mobile-menu');

const toggleMenu = () => {
	mobile_menu.classList.toggle('hidden');
	mobile_menu.classList.toggle('flex');
}
menu_button.addEventListener('click', toggleMenu);
mobile_menu.addEventListener('click', toggleMenu);
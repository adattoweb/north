const menuBtn = document.querySelector('.menu-button');
const menu = document.querySelector('.adaptive-menu')

menuBtn.addEventListener('click', function () {
	menu.classList.toggle('active');
	menuBtn.classList.toggle('active');
})
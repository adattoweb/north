const galleryBtn = document.querySelector('.block1-text-button');
const zona = document.querySelector('.card-zona')
const close = document.querySelector('.card-close-img')

galleryBtn.addEventListener('click', function () {
	zona.classList.toggle('active');
	galleryBtn.classList.toggle('active');
})
close.addEventListener('click', function () {
	zona.classList.toggle('active');
	galleryBtn.classList.toggle('active');
})
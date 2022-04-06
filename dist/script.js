// target the burger button
const burgerBtn = document.querySelector('.burger-btn');

burgerBtn.addEventListener('click', function () {
	const hamburger = document.getElementById('hamburger');
	const sideNav = document.getElementById('side-nav');

	hamburger.classList.toggle('open');
	sideNav.classList.toggle('show');
});

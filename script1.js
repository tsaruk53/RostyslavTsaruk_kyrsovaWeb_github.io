const burger = document.querySelector('.burger');
const navList = document.querySelector('.nav ul');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  navList.classList.toggle('open');
});

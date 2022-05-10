const openNav = document.querySelector('.open-nav'),
      closeNav = document.querySelector('.close-nav'),
      navList = document.querySelector('.nav-links');

openNav.addEventListener('pointerdown', () => {
    navList.style.display = 'flex';
    setTimeout(() => navList.classList.add('shown'), 0);
});
closeNav.addEventListener('pointerdown', () => {
    navList.style.display = '';
    navList.classList.remove('shown');
});
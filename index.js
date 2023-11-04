const buttonMenu = document.querySelector('.navigation__button--menu');
const menuItems = document.querySelector('.navigation__adaptive');
const menuAllItem = document.querySelectorAll('.navigation__button--adaptive');
const menuNavigation = document.querySelector('.navigation');

buttonMenu.addEventListener('click', (event) => {
  buttonMenu.style.display = 'none';
  menuItems.style.display = 'block';
  menuNavigation.style.display = 'none';
});

menuAllItem.forEach((item) => {
  item.addEventListener('click', (event) => {
    buttonMenu.style.display = 'flex';
    menuItems.style.display = 'none';
    menuNavigation.style.display = 'none';
  });
});

const chandeWidth = function (width) {
  let newWigth = Number(width.replace('px', ''));

  if (newWigth < 1000) {
    buttonMenu.style.display = 'flex';
    menuNavigation.style.display = 'none';
  } else {
    buttonMenu.style.display = 'none';
    menuNavigation.style.display = 'flex';
  }
};

window.addEventListener('resize', (event) => {
  const screenWidth = getComputedStyle(
    document.querySelector('.container')
  ).width;
  chandeWidth(screenWidth);
});

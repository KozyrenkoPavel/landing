const buttonMenu = document.querySelector('.navigation__button--menu');
const menuItems = document.querySelector('.navigation__adaptive');
const menuAllItem = document.querySelectorAll('.navigation__button--adaptive');
const menuNavigation = document.querySelector('.navigation');
const applicationButton = document.querySelector(
  '.navigation__adaptive--application'
);

menuItems.style.display = 'none';

buttonMenu.addEventListener('click', (event) => {
  if (menuItems.style.display === 'none') {
    menuItems.style.display = 'block';
  } else {
    menuItems.style.display = 'none';
  }

  menuNavigation.style.display = 'none';
});

menuAllItem.forEach((item) => {
  item.addEventListener('click', (event) => {
    menuItems.style.display = 'none';
    menuNavigation.style.display = 'none';
    console.log(menuAllItem.length);
  });
});

applicationButton.addEventListener('click', (event) => {
  menuItems.style.display = 'none';
  menuNavigation.style.display = 'none';
});

const chandeWidth = function (width) {
  let newWigth = Number(width.replace('px', ''));

  if (newWigth < 1000) {
    menuNavigation.style.display = 'none';
  } else {
    menuNavigation.style.display = 'flex';
    menuItems.style.display = 'none';
  }
};

window.addEventListener('resize', (event) => {
  const screenWidth = getComputedStyle(
    document.querySelector('.container')
  ).width;
  chandeWidth(screenWidth);
});

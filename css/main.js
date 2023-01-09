const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
OpenMenu()
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
CloseMenu()
  }
});
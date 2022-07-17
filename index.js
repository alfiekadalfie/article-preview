const share = document.querySelector('#share');
const anywhereElse = document.querySelector('.container');
const icons = document.querySelector('.sharing-icons');

share.addEventListener('click', () => {
  icons.classList.toggle('sharing-icons');
});

anywhereElse.addEventListener('click', () => {
  icons.classList.toggle('sharing-icons');
});
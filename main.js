let menu = document.getElementById ('menu');
let action = document.getElementById ('action');

menu.addEventListener ('click', () => {
  hundleMenu ();
});

function hundleMenu () {
  menu.classList.toggle ('is-active');
  action.classList.toggle ('is-active');
}

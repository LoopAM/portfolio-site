import './style.css';

// Mobile menu button function
function toggleMobileMenu(e) {
  const menu = document.getElementById('mobile-toggle');
  menu.classList.toggle('mobile-visible');
}

// Event listener for mobile menu button
const button = document.getElementById('menu-btn');
button.addEventListener('click', toggleMobileMenu);

const mobileLinks = Array.from(document.getElementsByClassName('mobile-link'));
mobileLinks.forEach( element => {
  element.addEventListener('click', toggleMobileMenu);
});

// Home section functionality to change background image
// on text selection
function changeHome(e) {
  const target = e.target;
  const id = target.id;

  // Element ids for #Home, these will change on target click
  const home = document.getElementById('home');
  const text = Array.from(document.getElementsByClassName('description-text'));
  const emphasisText = Array.from(document.getElementsByClassName('emphasis'));

  if (id === 'name-text') {
    home.style.background = '';
    text.forEach( element => {
      element.style.color = '';
    });
    emphasisText.forEach( element => {
      element.style.color = '';
    });
  }

  if (id === 'web-dev-text') {
    home.style.background = 'url(./assets/dark-code-bg.jpg) no-repeat center';
    text.forEach( element => {
      element.style.color = 'white';
    });
    emphasisText.forEach( element => {
      element.style.color = 'white';
    });
  }

  if (id === 'woodworker-text') {
    home.style.background = 'url(./assets/brown-workshop-bg.jpg) no-repeat center';
    text.forEach( element => {
      element.style.color = 'white';
    });
    emphasisText.forEach( element => {
      element.style.color = 'white';
    });
  }
}

const nameElement = document.getElementById('name-text');
nameElement.addEventListener('click', changeHome);

const webDevElement = document.getElementById('web-dev-text');
webDevElement.addEventListener('click', changeHome);

const woodworkerElement = document.getElementById('woodworker-text');
woodworkerElement.addEventListener('click', changeHome);




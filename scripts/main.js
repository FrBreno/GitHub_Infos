import Home from './home.js';
import activateMenuAtCurrentDiv from './utils/animatedNav.js';

const btnsSearchUser = document.querySelectorAll('#btn-search-user');
const infoContainer = document.querySelector('main section div.user-infos div.infos');

btnsSearchUser.forEach((btn, index) => btn.addEventListener('click', (event) => {
    event.preventDefault();

    const loginsUsername = document.querySelectorAll('input.username-input');
    Home(loginsUsername[index].value);
}));

infoContainer.addEventListener('scroll', () => activateMenuAtCurrentDiv());
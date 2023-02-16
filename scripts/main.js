import Home from './home.js';
import activateMenuAtCurrentDiv from './utils/animatedNav.js';
import { graphic } from './utils/graphic.js';

const btnSearchUser = document.querySelector('#btn-search-user');
const infoContainer = document.querySelector('main section div.user-infos div.infos')

btnSearchUser.addEventListener('click', (event) => {
    event.preventDefault();

    const loginUsername = document.querySelector('input.username-input');
    Home(loginUsername.value);
});

graphic();
infoContainer.addEventListener('scroll', () => activateMenuAtCurrentDiv());
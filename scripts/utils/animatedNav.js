const divs = document.querySelectorAll('main section div.user-infos div.infos div[id]');
const infosContainer = document.querySelector('main section div.user-infos div.infos');

export default function activateMenuAtCurrentDiv() {
    const checkpoint = infosContainer.scrollTop + 85;
    
    for (const div of divs) {
        const divId = div.getAttribute('id');
        const checkpointStart = checkpoint >= div.offsetTop;
        const checkpointEnd = checkpoint <= (div.offsetTop + div.offsetHeight + 15);

        if (checkpointStart && checkpointEnd) {
            document
                .querySelector('nav ul li a[href*=' + divId + ']')
                .classList.add('active')
        } else {
            document
                .querySelector('nav ul li a[href*=' + divId + ']')
                .classList.remove('active')
        }
    }
}
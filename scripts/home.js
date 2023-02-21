import getMostUsedLanguage from './utils/getMostUsedLanguage.js';

export default function Home(username) {
    const searchInterface = document.querySelector('div.user-input');
    const informationInterface = document.querySelector('div.user-infos');

    fetch(`https://api.github.com/users/${username}`)
        .then(async res => {
            if(res.ok) {
                let data = await res.json();
                
                const createdAt = data.created_at.split(/-|T/)
                const formattedDate = createdAt[2] + '-' + createdAt[1] + '-' + createdAt[0]

                const githubInfosValues = [data.followers, data.following, data.location, data.public_repos, formattedDate];
                const githubInfosTopicLinks = ['followers', 'following', 'repositories'];

                if (window.getComputedStyle(searchInterface).getPropertyValue('display') == 'block') {
                    searchInterface.style.display = 'none';
                    informationInterface.style.display = 'block';    
                }

                // Infos-Profile:
                document
                    .querySelector('div.user-img')
                    .innerHTML = `<img src="${data.avatar_url}" alt="profile picture">`;

                document
                    .querySelector('div.name-description')
                    .innerHTML = `<h4>${data.name}</h4> <p>${data.bio ?? 'Sem Bio :/'}</p>`;

                document
                    .querySelectorAll('div.github-infos div p#github-infos-values')
                    .forEach((elem, index) => elem.innerHTML = `${githubInfosValues[index]}`);

                document
                    .querySelectorAll('div.github-infos div a')
                    .forEach((elem, index) => elem.href = `https://github.com/${username}?tab=${githubInfosTopicLinks[index]}`)

                // Infos-Language-Graphic:
                document
                    .querySelector('div.language-graphic')
                    .innerHTML = `<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&theme=transparent&hide_title=true&text_color=fff&hide_border=true&card_width=450&locale=pt-br" />`;
                
                document
                    .querySelector('div.most-used-language p')
                    .innerHTML = await getMostUsedLanguage(username);
            } else {
                alert('Usuário não encontrado :/');
            }
        })
        .catch(error => {
            console.log(error);
        });
}
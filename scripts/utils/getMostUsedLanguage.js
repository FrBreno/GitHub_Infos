import getRepositories from './getRepositories.js';

export default async function getMostUsedLanguage(username) {
    let page = 1;
    const languages = {};
    let mostUsedLanguageValue = -Infinity;
    let languageKey;

    while(true) {
        let repositories = await getRepositories(username, page);

        if(repositories.length == 0) {
            break;
        }
        
        page++;
        repositories.forEach(elem => {
            let languageName = elem.language;
        
            if(languageName) {
                if (languages.hasOwnProperty(languageName)) {
                    languages[languageName] += 1;
                } else {
                    languages[languageName] = 1;
                }
            }
        });
    }

    for (const prop in languages) {
        if (languages.hasOwnProperty(prop)) {
            if (languages[prop] > mostUsedLanguageValue) {
                mostUsedLanguageValue = languages[prop];
                languageKey = prop;
            }
        }
    }

    return languageKey;
}
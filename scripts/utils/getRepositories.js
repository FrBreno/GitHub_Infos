export default async function getRepositories(username, page) {
    const repositories = await fetch(`https://api.github.com/users/${username}/repos?page=${page}`)
                                .then(async res => {
                                    return await res.json();
                                })
                                .catch(error => console.log(error));
    return repositories;
}
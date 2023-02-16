export default function Home(username) {
    fetch(`https://api.github.com/users/${username}`)
        .then(async res => {
            if(res.ok) {
                let data = await res.json();
                console.log(data);
            } else {
                alert('Usuário não encontrado :/');
            }
        })
        .catch(error => {
            console.log(error);
        });
}
const root = document.querySelector('body');

fetch('https://jsonplaceholder.typicode.com/users').then(function(resposta) {
    const promiseBody = resposta.json();  

    promiseBody.then(function(body)
    {
        body.forEach(function(user)
        {
            const div = document.createElement('div');
            div.classList.add('user');

            const name = document.createElement('h1');
            name.textContent = user.name;

            const username = document.createElement('p');
            username.textContent = user.username;

            const website = document.createElement('p');
            website.textContent = user.website;

            div.append(name,username,website);// metodo append faz aparecer em tela.
            root.append(div);

        })
    });
});

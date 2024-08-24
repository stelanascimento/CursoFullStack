const users = document.querySelectorAll('.user');


fetch('https://jsonplaceholder.typicode.com/users').then(function(resposta){
    const promiseBody = resposta.json();  

    promiseBody.then(function(body) {
        users.forEach(function(user,index){
            const name = user.querySelector('h1');
            const username = user.querySelector('p');

            name.textContent = body[index].name;
            username.textContent = body[index].username;

            //console.log(body[index]);
            
            // console.log(user,index);
        })
    })
});
const root = document.querySelector('body');


fetch('https://jsonplaceholder.typicode.com/albums/1/photos').then(function(resposta) {
    const promiseBody = resposta.json();  

    promiseBody.then(function(body){
        body.forEach(function(photo){
            const div = document.createElement('div');
            div.classList.add('photo');


            const img = document.createElement('img');
            img.src = photo.url;
            
            const paragrafo = document.createElement('p');
            paragrafo.textContent = photo.title;

            div.append(img, paragrafo);
            root.append(div);

        })
    })






})
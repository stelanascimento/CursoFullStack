const namePokeInput = document.querySelector('#poke');
const nome = document.querySelector('.nome');
const img = document.querySelector('.img');

namePokeInput.addEventListener('change',function(){
    if(!namePokeInput.value){
        return;
    }

    const promiseResposta = fetch('https://pokeapi.co/api/v2/pokemon/' + namePokeInput.value);

    promiseResposta.then(function(resposta){
        if(!resposta.ok){
            console.log('ERRO');
            return;
        }

        const promiseBody = resposta.json();

        promiseBody.then(function(body){
        
            nome.textContent = body.name;
            img.src = body.sprites.front_default;
            img.alt = body.name;

        })
    
    
    
    })

})
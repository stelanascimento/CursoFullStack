// const input = document.querySelector('input');
const inputs = document.querySelectorAll('input');
const frutas = document.querySelectorAll('li');

inputs.forEach(input => {
    input.addEventListener('keydown',function(event){ // funcao anonima
        if(!teclouEnter(event.code)){
            return;
        }
   filtrarLista(frutas,event.target.value);
})

    input.addEventListener('keydown',function(event){
        if(!teclouEnter(event.code)){
            return;
        } 
        limparInput(event.target);
    })
})

function teclouEnter(tecla){
    return tecla === 'Enter';
}

function filtrarLista(lista,filtro){
    frutas.forEach(item => {
        item.classList.remove('escondido');
        if((filtro !== '') && (item.textContent !== filtro)){
            item.classList.add('escondido');
        }
    });

}

function limparInput(input){
    input.value = '';


}
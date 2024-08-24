//quero que quando digite no input e seja a resposta correta , 
//que eu pare de checar se a pessoa digitou coreeto ou nao .
const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('change',function(event){  //evento change

        const inputModificado = event.target;
        
        if(inputModificado.dataset.resposta === inputModificado.value){
            inputModificado.classList.add('acertou');
        }
    })
});
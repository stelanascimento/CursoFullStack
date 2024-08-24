const botaoInscrever = document.querySelector('.btn');
const modal = document.querySelector('.modal');
const botoesModal = document.querySelectorAll('.modal button')
const botaoConfirmar = document.querySelector('.confirmar');

botaoInscrever.addEventListener('click',inscrever);

botoesModal.forEach(botao => {
    botao.addEventListener('click',function(){
        modal.classList.add('escondido');
    })
})

botaoConfirmar.addEventListener('click',function(){
    
    botaoInscrever.textContent = 'INSCREVER-SE';
    botaoInscrever.classList.remove('inscrito');

    botaoInscrever.addEventListener('click',inscrever);

})


function inscrever(event){
    console.log('Inscrito!');

    const botaoclicado = event.target;

    botaoclicado.textContent = 'INSCRITO';
    botaoclicado.classList.add('inscrito');

    botaoclicado.removeEventListener('click',inscrever)
    botaoclicado.addEventListener('click',function(){
        modal.classList.remove('escondido');
    })
}
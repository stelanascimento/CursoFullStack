const input = document.querySelector('input');
const tarefas = document.querySelector('ul');

input.addEventListener('keydown', function(event) {
    if(event.key !== 'Enter' || input.value === '') return;

    const tarefa = document.createElement('li');
    const descricao = document.createElement('span');
    descricao.textContent = input.value;
    descricao.addEventListener('click', function(){
        descricao.classList.toggle('completa');
    })


    const botao = document.createElement('button');
    botao.textContent = 'X';
    botao.addEventListener('click', function(){
        tarefa.remove();
    })



    tarefa.append(descricao,botao); // uma li sendo criada e eu coloco um span dentro dela.
    tarefas.append(tarefa);

    input.value = '';  //limpar o valor do input


})
const input = document.querySelector('input');
const tarefas = document.querySelector('ul');

input.addEventListener('keydown', function(event) {
    if(event.key !== 'Enter' || input.value === '') return;

    const toDo = document.createElement('li');
    toDo.textContent = input.value;

    toDo.addEventListener('click',function(){
        toDo.remove();
    })




    tarefas.append(toDo);


    input.value = '';
})
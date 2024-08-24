const body = document.querySelector('body');
const themeButton = document.querySelector('.light');

// body.style.setProperty('--cor-de-fundo','#FFF');
//body.style.setProperty('--cor-de-texto','#000');



themeButton.addEventListener('click',function(){
    themeButton.textContent = themeButton.textContent === 'X' ? '?' : 'X';

    const novaCorDeFundo = body.style.getPropertyValue('--cor-de-fundo') === '#000' ? '#FFF' : '#000';
    body.style.setProperty('--cor-de-fundo',novaCorDeFundo);

    const novaCorDeTexto = body.style.getPropertyValue('--cor-de-texto') === '#FFF' ? '#000' : '#FFF';
    body.style.setProperty('--cor-de-texto',novaCorDeTexto);

})
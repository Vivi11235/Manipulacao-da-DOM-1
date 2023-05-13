let botao = document.getElementById('botao');

botao.addEventListener('click', () => {
    let nomeUsuario = prompt('Digite seu nome:');

    alert(`E aí ${nomeUsuario}, você está deixando seu site dinâmico!`);
})


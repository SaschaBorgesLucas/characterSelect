const personagens = document.querySelectorAll('.personagem');
personagens.forEach((personagem)=>{
    personagem.addEventListener('mouseenter',()=>{
        const idPersonagemSelecionado = personagem.attributes.id.value;
        if(idPersonagemSelecionado === 'ultron') return;
        const personagemSelecionado = document.querySelector('.selecionadoP1');
        personagemSelecionado.classList.remove('selecionadoP1');
        personagem.classList.add('selecionadoP1'); 
        const imagemJogador1 = document.getElementById('personagem-jogador-1');
        imagemJogador1.src = `./src/images/${idPersonagemSelecionado}.png`;
        const nomePersonagem = document.getElementById("nome-personagem");
        const nomePersonagemSelecionado = personagem.getAttribute('data-name')
        nomePersonagem.innerHTML = nomePersonagemSelecionado;
        
    });
});
// homemDeFerro.addEventListener('mouseenter',()=>{
//     homemDeFerro.classList.add('selecionadoP1');
// });


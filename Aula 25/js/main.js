const navLinkGatos = document.getElementById('nav-link-gatos');

navLinkGatos.style.cursor = "pointer";

navLinkGatos.addEventListener('mouseover', () => {
    navLinkGatos.classList.add('navbar-hover');
});

navLinkGatos.addEventListener('mouseleave', () => {
    navLinkGatos.classList.remove('navbar-hover');
});

navLinkGatos.addEventListener('click', function () {
    const sectionGatos = document.getElementById('section-gatos');
    sectionGatos.scrollIntoView();
});

const navLinkCachorros = document.getElementById('nav-link-cachorros');

navLinkCachorros.style.cursor = "pointer";

navLinkCachorros.addEventListener('mouseover', () => {
    navLinkCachorros.classList.add('navbar-hover');
});

navLinkCachorros.addEventListener('mouseleave', () => {
    navLinkCachorros.classList.remove('navbar-hover');
});

navLinkCachorros.addEventListener('click', function () {
    const sectionCachorros = document.getElementById('section-cachorros');
    sectionCachorros.scrollIntoView();
});

const navLinkBanner = document.getElementById('nav-link-banner');

navLinkBanner.style.cursor = "pointer";

navLinkBanner.addEventListener('mouseover', () => {
    navLinkBanner.classList.add('navbar-hover');
});

navLinkBanner.addEventListener('mouseleave', () => {
    navLinkBanner.classList.remove('navbar-hover');
});

navLinkBanner.addEventListener('click', function () {
    const banner = document.getElementById('banner');
    banner.scrollIntoView();
});

const navLinkFaleConosco = document.getElementById('nav-link-fale-conosco');

navLinkFaleConosco.style.cursor = "pointer";

navLinkFaleConosco.addEventListener('mouseover', () => {
    navLinkFaleConosco.classList.add('navbar-hover');
});

navLinkFaleConosco.addEventListener('mouseleave', () => {
    navLinkFaleConosco.classList.remove('navbar-hover');
});

const sectionFaleConosco = document.getElementById('section-fale-conosco');
sectionFaleConosco.classList.remove('d-none');

navLinkFaleConosco.addEventListener('click', function () {
    sectionFaleConosco.scrollIntoView();
});

const botaoSubmit = document.getElementById('botao-submit');

botaoSubmit.addEventListener('click', function (event) {
    event.preventDefault();

    const email = document.getElementById('input-email');
    const nome = document.getElementById('input-nome');

    if (nome.value === "") {
        alert('O nome é obrigatório!');
        return;
    }

    console.log('Email >>', email.value);
    console.log('Nome >>', nome.value);

    alert('Eu funciono (ou quase)!! Será que eu escondo algum segredo?');

    // document.getElementById('section-secreta').style.display = 'block';
    // Aqui você mostra a seção secreta

    document.getElementById('section-secreta-titulo').innerHTML = `Oi, ${nome.value}! Você encontrou a sessão secreta!!`
});

const botaoSecreto = document.getElementById('botao-secreto');

botaoSecreto.addEventListener('click', function (event) {
    event.preventDefault();

    const inputSecreto = document.getElementById('input-secreto');
    const mensagemErro = document.getElementById('mensagem-erro');

    if (inputSecreto.value.toLowerCase() === String.fromCodePoint(97, 117, 114, 111, 114, 97)) {
        mensagemErro.innerHTML = "";

        const confettiSettings = { target: 'my-canvas' };
        const confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();

        const conteudoSecreto = document.getElementById('conteudo-secreto');
        conteudoSecreto.innerHTML = `<div class="card-pet"><div class="image-container"><img src="./assets/cat.jpeg" alt="Gata preta"></div><h3>${String.fromCodePoint(65, 117, 114, 111, 114, 97)}</h3><p>Oi! Você conseguiu me encontrar! Eu sou a ${String.fromCodePoint(65, 117, 114, 111, 114, 97)}, estagiária da Isa!</p><p>Esperamos que essa aula tenha te ajudado, e desejamos sorte no seu Checkpoint!</p><p>Se precisar de ajuda, conte com a gente! &hearts;</p></div>`;
    } else {
        mensagemErro.innerHTML = "Resposta errada :(";
    }
});
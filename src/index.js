document.addEventListener('DOMContentLoaded', function() {
    // Configurar carrossel para rodar automaticamente a cada 5 segundos
    $('.carousel').carousel({
        interval: 5000
    });

    // Validação do formulário de cadastro
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let isValid = true;

        // Validação dos campos
        const nomeCliente = document.getElementById('nomeCliente');
        const email = document.getElementById('email');
        const nomePet = document.getElementById('nomePet');
        const dataServico = document.getElementById('dataServico');

        if (nomeCliente.value.trim() === '') {
            isValid = false;
            alert('Por favor, preencha o nome do cliente.');
        }

        if (email.value.trim() === '') {
            isValid = false;
            alert('Por favor, preencha o e-mail.');
        }

        if (nomePet.value.trim() === '') {
            isValid = false;
            alert('Por favor, preencha o nome do pet.');
        }

        if (dataServico.value === '') {
            isValid = false;
            alert('Por favor, escolha a data do serviço.');
        }

        if (isValid) {
            alert('Cadastro realizado com sucesso!');
            form.submit(); // Enviar o formulário se todos os campos estiverem válidos
        }
    });

    // Tornar o menu de navegação responsivo
    const navbar = document.querySelector('.navbar');
    window.addEventListener('resize', function() {
        if (window.innerWidth < 768) {
            navbar.classList.remove('navbar-expand-lg');
            navbar.classList.add('navbar-collapse');
        } else {
            navbar.classList.add('navbar-expand-lg');
            navbar.classList.remove('navbar-collapse');
        }
    });
});

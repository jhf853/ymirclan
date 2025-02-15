document.getElementById('joinForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Simulação de envio do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Exibe mensagem de sucesso
    document.getElementById('formMessage').textContent = `Obrigado, ${name}! Sua inscrição foi enviada.`;

    // Limpa o formulário
    document.getElementById('joinForm').reset();
});
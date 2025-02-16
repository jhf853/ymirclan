// Função para trocar o idioma
function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(element => {
        if (element.getAttribute('data-lang') === lang) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });
}

// Evento para trocar o idioma ao selecionar
document.getElementById('language').addEventListener('change', function () {
    const selectedLang = this.value;
    changeLanguage(selectedLang);
});

// Abrir modal
document.getElementById('openModal').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('modal').style.display = 'flex';
});

// Fechar modal
document.getElementById('closeModal').addEventListener('click', function () {
    document.getElementById('modal').style.display = 'none';
});

// Fechar modal ao clicar fora
window.addEventListener('click', function (e) {
    if (e.target === document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
});
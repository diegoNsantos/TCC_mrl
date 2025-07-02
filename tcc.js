// Função para abrir/fechar o menu mobile ao clicar no botão
document.getElementById('nav-toggle').addEventListener('click', function () {
  const menu = document.getElementById('nav-menu');
  const expanded = this.getAttribute('aria-expanded') === 'true';

  menu.classList.toggle('show');
  this.setAttribute('aria-expanded', String(!expanded));
});

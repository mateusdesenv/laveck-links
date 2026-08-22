const toast = document.querySelector('#toast');
const showToast = (message) => {
  toast.textContent = message;
  toast.classList.add('show');
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove('show'), 2200);
};

document.querySelector('#year').textContent = new Date().getFullYear();

document.querySelectorAll('[data-link]').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    showToast(`Link de ${link.dataset.link} pronto para receber a URL real.`);
  });
});

document.querySelector('#shareButton').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(window.location.href);
    showToast('Link copiado para a área de transferência!');
  } catch {
    showToast('Copie o endereço desta página para compartilhar.');
  }
});

document.querySelector('#themeButton').addEventListener('click', () => {
  document.querySelector('.world').classList.toggle('night');
  showToast('Clima do cenário alternado.');
});

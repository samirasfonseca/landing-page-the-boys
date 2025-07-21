
  const toggleBtn = document.getElementById('toggle-theme');
  const body = document.body;

  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-theme');

    // Troca o ícone do botão
    if (body.classList.contains('dark-theme')) {
      toggleBtn.textContent = '☀️'; // modo claro
    } else {
      toggleBtn.textContent = '🌙'; // modo escuro
    }
  });


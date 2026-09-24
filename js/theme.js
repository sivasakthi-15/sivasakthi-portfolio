(() => {
  const root = document.documentElement;
  const button = document.querySelector('.theme-toggle');
  const saved = localStorage.getItem('sr-theme') || 'light';

  function setTheme(theme) {
    root.dataset.theme = theme;
    button.querySelector('i').className = theme === 'dark' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
    button.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
  }

  setTheme(saved);
  button.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('sr-theme', next);
    setTheme(next);
  });
})();

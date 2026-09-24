document.addEventListener('DOMContentLoaded', () => {
  AOS.init({ once: true, duration: 650, offset: 70, easing: 'ease-out-cubic' });

  const roles = ['AI & Data Science Engineer', 'AI Engineer', 'AI/ML Developer', 'Full Stack Developer', 'Software Engineer'];
  let i = 0;
  const role = document.getElementById('dynamic-role');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  role.textContent = roles[i];

  if (!reducedMotion) {
    setInterval(() => {
      role.classList.add('role-leaving');
      setTimeout(() => {
        i = (i + 1) % roles.length;
        role.textContent = roles[i];
        role.classList.remove('role-leaving');
        role.classList.add('role-entering');
        requestAnimationFrame(() => role.classList.remove('role-entering'));
      }, 220);
    }, 2800);
  }

  const loader = document.getElementById('loader');
  setTimeout(() => loader.classList.add('out'), 900);
  document.getElementById('year').textContent = new Date().getFullYear();

  document.querySelectorAll('img[data-fallback]').forEach((img) => {
    const media = img.closest('[data-media]');
    const showFallback = () => {
      img.removeAttribute('src');
      media?.classList.add('is-fallback');
    };
    const showImage = () => media?.classList.remove('is-fallback');

    img.addEventListener('error', showFallback);
    img.addEventListener('load', showImage);
    if (img.complete) {
      if (!img.naturalWidth) showFallback();
      else showImage();
    }
  });

  const viewer = document.querySelector('.resume-viewer');
  if (viewer) {
    const src = viewer.dataset.src;
    const markAvailable = () => viewer.classList.add('has-file');
    fetch(src, { method: 'HEAD' })
      .then((res) => { if (res.ok) markAvailable(); })
      .catch(() => {
        if (location.protocol === 'file:') markAvailable();
      });
  }

  const links = [...document.querySelectorAll('.navbar-nav a')];
  const sections = links.map((a) => document.querySelector(a.hash)).filter(Boolean);
  const nav = document.querySelector('.navbar');

  const update = () => {
    const y = scrollY;
    const max = document.documentElement.scrollHeight - innerHeight;
    document.getElementById('progress').style.width = `${max > 0 ? (y / max) * 100 : 0}%`;
    nav.classList.toggle('scrolled', y > 30);
    let current = sections[0]?.id;
    sections.forEach((s) => { if (y >= s.offsetTop - 160) current = s.id; });
    links.forEach((a) => a.classList.toggle('active', a.hash === `#${current}`));
  };

  addEventListener('scroll', update, { passive: true });
  update();

  links.forEach((a) => a.addEventListener('click', () => {
    const menu = document.getElementById('menu');
    if (menu.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(menu).hide();
  }));

  document.querySelectorAll('.magnetic').forEach((b) => {
    b.addEventListener('mousemove', (e) => {
      if (innerWidth < 768 || reducedMotion) return;
      const r = b.getBoundingClientRect();
      b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.12}px,${(e.clientY - r.top - r.height / 2) * 0.12}px)`;
    });
    b.addEventListener('mouseleave', () => { b.style.transform = ''; });
  });
});

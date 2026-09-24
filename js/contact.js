(() => {
  const EMAILJS_PUBLIC_KEY = 'YOUR_EMAILJS_PUBLIC_KEY';
  const EMAILJS_SERVICE_ID = 'YOUR_EMAILJS_SERVICE_ID';
  const EMAILJS_TEMPLATE_ID = 'YOUR_EMAILJS_TEMPLATE_ID';
  const configured = EMAILJS_PUBLIC_KEY !== 'YOUR_EMAILJS_PUBLIC_KEY';
  const EMAIL = 'sivasakthiramasamy03@gmail.com';

  if (configured) emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });

  const form = document.getElementById('contact-form');
  const status = form.querySelector('.form-status');
  const button = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    status.className = 'form-status';
    status.textContent = '';

    if (form.website.value) {
      status.textContent = 'Unable to send message.';
      status.classList.add('error');
      return;
    }

    if (!form.checkValidity()) {
      form.reportValidity();
      status.textContent = 'Please complete the required fields.';
      status.classList.add('error');
      return;
    }

    if (!configured) {
      const subject = encodeURIComponent(form.subject.value);
      const body = encodeURIComponent(`${form.message.value}\n\n— ${form.from_name.value}`);
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
      status.textContent = `Opening your email app. If nothing appears, write to ${EMAIL}.`;
      status.classList.add('success');
      return;
    }

    button.disabled = true;
    button.innerHTML = 'Sending…';

    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form);
      status.textContent = 'Thank you — your message has been sent.';
      status.classList.add('success');
      form.reset();
    } catch {
      status.textContent = `Something went wrong. Please email ${EMAIL} directly.`;
      status.classList.add('error');
    } finally {
      button.disabled = false;
      button.innerHTML = 'Send Message <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>';
    }
  });
})();

(() => {
  const EMAILJS_PUBLIC_KEY = '-QS9sU_CILZe6pm7T';
  const EMAILJS_SERVICE_ID = 'service_1tk4nb8';
  const EMAILJS_TEMPLATE_ID = 'template_q0u0d56';
  const configured = true;

  if (configured) {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
  }

  const form = document.getElementById('contact-form');
  const status = form.querySelector('.form-status');
  const button = form.querySelector('button[type="submit"]');
  const originalButtonHTML = button.innerHTML;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    status.className = 'form-status';
    status.textContent = '';

    // Validate required fields and email
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // Check honeypot
    if (form.website && form.website.value) {
      status.textContent = 'Unable to send message.';
      status.classList.add('error');
      return;
    }

    // Disable button and change text
    button.disabled = true;
    button.textContent = 'Sending...';

    if (!configured) {
      // If no credentials, fallback or just notify for easy insertion
      console.warn('EmailJS credentials are not configured. Please update js/contact.js.');
      status.textContent = 'EmailJS not configured. Please update credentials or email me directly.';
      status.classList.add('error');
      button.disabled = false;
      button.innerHTML = originalButtonHTML;
      return;
    }

    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form);
      status.textContent = "Message sent successfully. I'll get back to you soon.";
      status.classList.add('success');
      form.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      status.textContent = "Unable to send the message right now. Please try again or email me directly.";
      status.classList.add('error');
    } finally {
      // Re-enable button and restore text
      button.disabled = false;
      button.innerHTML = originalButtonHTML;
    }
  });
})();

(function () {
  'use strict';

  const menuButton = document.querySelector('[data-menu-button]');
  const nav = document.querySelector('[data-nav-links]');

  if (menuButton && nav) {
    const closeMenu = () => {
      menuButton.setAttribute('aria-expanded', 'false');
      nav.classList.remove('open');
      document.body.classList.remove('menu-open');
    };

    menuButton.addEventListener('click', () => {
      const open = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('open', !open);
      document.body.classList.toggle('menu-open', !open);
    });

    nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
    window.addEventListener('resize', () => {
      if (window.innerWidth > 900) closeMenu();
    });
  }

  document.querySelectorAll('[data-faq-button]').forEach((button) => {
    button.addEventListener('click', () => {
      const panel = document.getElementById(button.getAttribute('aria-controls'));
      const expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!expanded));
      if (panel) panel.hidden = expanded;
    });
  });

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealItems.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -5%', threshold: 0.08 });
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('in-view'));
  }

  const routeInputs = document.querySelectorAll('input[name="inquiry_route"]');
  const contactForm = document.querySelector('[data-contact-form]');
  const monitoringExit = document.querySelector('[data-monitoring-exit]');
  const formRoute = document.querySelector('[data-form-route]');
  const formRegarding = document.querySelector('[data-form-regarding]');
  const formRole = document.querySelector('[data-role-select]');

  if (formRegarding) {
    formRegarding.value = new URLSearchParams(window.location.search).get('regarding') || '';
  }

  if (routeInputs.length) {
    const requestedRoute = new URLSearchParams(window.location.search).get('route');
    const requestedInput = Array.from(routeInputs).find((input) => input.value === requestedRoute);
    if (requestedInput) requestedInput.checked = true;
  }

  function updateRoute() {
    const selected = document.querySelector('input[name="inquiry_route"]:checked');
    if (!selected || !contactForm || !monitoringExit) return;

    const monitoring = selected.value === 'monitoring';
    contactForm.hidden = monitoring;
    monitoringExit.hidden = !monitoring;
    if (formRoute) formRoute.value = selected.value;

    if (formRole && selected.value === 'attorney') {
      formRole.value = 'attorney';
    } else if (formRole && selected.value === 'owner') {
      formRole.value = 'ip_owner';
    }
  }

  routeInputs.forEach((input) => input.addEventListener('change', updateRoute));
  if (routeInputs.length) updateRoute();

  const message = document.querySelector('[data-message]');
  const counter = document.querySelector('[data-char-count]');
  if (message && counter) {
    const updateCount = () => {
      counter.textContent = `${message.value.length} / ${message.maxLength}`;
    };
    message.addEventListener('input', updateCount);
    updateCount();
  }

  if (contactForm) {
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const status = contactForm.querySelector('[data-form-status]');
    const captchaField = contactForm.querySelector('[data-captcha-field]');

    const captchaApi = () => window.grecaptcha && window.grecaptcha.enterprise;

    const resetCaptcha = () => {
      const api = captchaApi();
      if (api && typeof api.reset === 'function') api.reset();
    };

    contactForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      status.className = 'form-status';
      status.textContent = '';

      const formData = new FormData(contactForm);
      let firstInvalid = null;

      Array.from(contactForm.elements).forEach((field) => {
        if (!(field instanceof HTMLInputElement || field instanceof HTMLSelectElement || field instanceof HTMLTextAreaElement)) return;
        if (!field.willValidate) return;
        const invalid = !field.validity.valid;
        field.setAttribute('aria-invalid', String(invalid));
        if (invalid && !firstInvalid) firstInvalid = field;
      });

      if (firstInvalid) {
        status.classList.add('error');
        status.textContent = firstInvalid.type === 'email'
          ? 'Enter a valid email address.'
          : 'Please complete the required fields.';
        firstInvalid.focus();
        return;
      }

      const api = captchaApi();
      const recaptchaToken = api && typeof api.getResponse === 'function'
        ? api.getResponse()
        : '';

      if (!recaptchaToken) {
        status.classList.add('error');
        status.textContent = api
          ? 'Complete the verification before sending.'
          : 'Verification is still loading. Please wait a moment and try again.';
        if (captchaField) captchaField.focus();
        return;
      }

      submitButton.disabled = true;
      submitButton.textContent = 'Sending…';
      status.textContent = 'Sending your inquiry securely…';

      const route = String(formData.get('inquiry_route') || 'unknown');
      const regarding = String(formData.get('regarding') || '').trim();
      const company = String(formData.get('company') || '').trim();
      const role = String(formData.get('role') || '').trim();
      const jurisdiction = String(formData.get('jurisdiction') || '').trim();
      const registrations = String(formData.get('registrations') || '').trim();
      const messageText = String(formData.get('message') || '').trim();
      const pageSource = `${window.location.pathname}${window.location.search}`;

      const context = [
        company ? `Firm / company: ${company}` : '',
        role ? `Role: ${role}` : '',
        jurisdiction ? `Jurisdiction: ${jurisdiction}` : '',
        registrations ? `Public patent / registration numbers: ${registrations}` : '',
        regarding ? `Regarding: ${regarding}` : '',
        `Page source: ${pageSource}`,
        '',
        messageText,
      ].filter(Boolean).join('\n');

      const payload = {
        name: String(formData.get('name') || '').trim(),
        email: String(formData.get('email') || '').trim(),
        phone: '',
        type: route === 'attorney' ? 'Attorney referral or collaboration' : 'IP owner — active matter',
        message: context.slice(0, 2000),
        website: String(formData.get('website') || ''),
        recaptchaToken,
      };

      try {
        const response = await fetch('/api/submitContact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        if (response.status === 429) {
          throw new Error('rate_limited');
        }
        if (response.status === 400 || response.status === 403) {
          const errorBody = await response.json().catch(() => ({}));
          if (errorBody.error === 'captcha_required' || errorBody.error === 'captcha_failed') {
            throw new Error('captcha_failed');
          }
        }
        if (!response.ok) {
          throw new Error('service_error');
        }

        contactForm.reset();
        resetCaptcha();
        if (formRoute) formRoute.value = route;
        if (formRegarding) formRegarding.value = regarding;
        if (message && counter) counter.textContent = `0 / ${message.maxLength}`;
        status.classList.add('success');
        status.textContent = 'Request received. Nick will review it after the conflicts check.';
        submitButton.textContent = 'Request received';
      } catch (error) {
        resetCaptcha();
        status.classList.add('error');
        status.textContent = error.message === 'rate_limited'
          ? 'Too many requests were sent from this connection. Please try again later.'
          : error.message === 'captcha_failed'
            ? 'Verification expired or could not be confirmed. Please try again.'
            : 'The request could not be sent. Please email nslee@nslegal-ip.com.';
        submitButton.disabled = false;
        submitButton.textContent = 'Send inquiry';
      }
    });
  }
})();

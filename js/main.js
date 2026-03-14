/* =============================================
   WAYFINDER TECHNOLOGY PARTNERS — main.js
   Minimal vanilla JS — no dependencies.
   ============================================= */

(function () {
  'use strict';

  /* ------------------------------------------
     Mobile Navigation Toggle
  ------------------------------------------ */
  const toggle = document.querySelector('.nav-toggle');
  const drawer = document.querySelector('.nav-drawer');

  if (toggle && drawer) {
    toggle.addEventListener('click', function () {
      const isOpen = drawer.classList.toggle('open');
      toggle.classList.toggle('open', isOpen);
      toggle.setAttribute('aria-expanded', isOpen);
    });

    // Close drawer when a link is clicked
    drawer.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        drawer.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', false);
      });
    });

    // Close drawer on outside click
    document.addEventListener('click', function (e) {
      if (!toggle.contains(e.target) && !drawer.contains(e.target)) {
        drawer.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', false);
      }
    });
  }

  /* ------------------------------------------
     Active Nav Link Highlighting
  ------------------------------------------ */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-drawer a').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ------------------------------------------
     Contact Form — basic client-side feedback
     (Formspree handles actual submission)
  ------------------------------------------ */
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      // Formspree handles the POST; we just intercept to show success UI
      // Remove this block if you want default Formspree redirect behavior
      e.preventDefault();

      const btn = contactForm.querySelector('button[type="submit"]');
      btn.disabled = true;
      btn.textContent = 'Sending…';

      fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { 'Accept': 'application/json' }
      })
        .then(function (res) {
          if (res.ok) {
            contactForm.style.display = 'none';
            if (formSuccess) formSuccess.style.display = 'block';
          } else {
            btn.disabled = false;
            btn.textContent = 'Send Message';
            alert('Something went wrong. Please try again or email us directly.');
          }
        })
        .catch(function () {
          btn.disabled = false;
          btn.textContent = 'Send Message';
          alert('Network error. Please check your connection and try again.');
        });
    });
  }

})();

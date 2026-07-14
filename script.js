(() => {
  // Scroll reveal: fade-in + rise, staggered
  const revealEls = Array.from(document.querySelectorAll('[data-reveal]'));
  const seen = new WeakSet();
  const io = new IntersectionObserver((entries) => {
    let stagger = 0;
    entries.forEach((entry) => {
      if (entry.isIntersecting && !seen.has(entry.target)) {
        seen.add(entry.target);
        const el = entry.target;
        setTimeout(() => el.classList.add('is-visible'), stagger);
        stagger += 110;
        io.unobserve(el);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach((el) => io.observe(el));

  // Subtle 3D tilt on service cards
  document.querySelectorAll('[data-tilt]').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(800px) rotateX(${(-y * 6).toFixed(2)}deg) rotateY(${(x * 6).toFixed(2)}deg) translateY(-4px)`;
      card.style.boxShadow = '0 18px 40px rgba(20,10,38,.5)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.boxShadow = '';
    });
  });

  // FAQ accordion — one open at a time
  document.querySelectorAll('.faq-item').forEach((item) => {
    const button = item.querySelector('.faq-question');
    const mark = item.querySelector('.faq-mark');
    button.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');
      document.querySelectorAll('.faq-item.is-open').forEach((open) => {
        open.classList.remove('is-open');
        open.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        open.querySelector('.faq-mark').textContent = '+';
      });
      if (!isOpen) {
        item.classList.add('is-open');
        button.setAttribute('aria-expanded', 'true');
        mark.textContent = '−';
      }
    });
  });
})();

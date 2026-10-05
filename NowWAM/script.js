const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const sampling = document.querySelector('.noise-sampling');
if (sampling) {
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  let visible = false;
  function syncSampling() {
    sampling.dataset.running = String(visible && !document.hidden && !preference.matches);
  }
  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    syncSampling();
  }, { threshold: .1 }).observe(sampling);
  document.addEventListener('visibilitychange', syncSampling);
  preference.addEventListener('change', syncSampling);
}

if (!reducedMotion) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
}

const copyButton = document.querySelector('#copyBib');
copyButton?.addEventListener('click', async () => {
  const text = document.querySelector('#bibtex').textContent;
  await navigator.clipboard.writeText(text);
  copyButton.textContent = 'Copied';
  setTimeout(() => { copyButton.textContent = 'Copy'; }, 1600);
});

const lightbox = document.querySelector('#lightbox');
const lightboxImage = lightbox.querySelector('img');
document.querySelectorAll('.teaser img, .method-card img').forEach((img) => {
  img.addEventListener('click', () => {
    lightboxImage.src = img.src;
    lightboxImage.alt = img.alt;
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
  });
});

function closeLightbox() {
  lightbox.hidden = true;
  lightboxImage.removeAttribute('src');
  document.body.style.overflow = '';
}

lightbox.querySelector('button').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !lightbox.hidden) closeLightbox();
});

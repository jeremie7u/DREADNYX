(() => {
  const zoomables = document.querySelectorAll('.zoomable');
  const closeOthers = (current) => zoomables.forEach((element) => {
    if (element !== current) element.classList.remove('is-zoomed');
  });

  zoomables.forEach((element) => {
    const toggle = () => {
      closeOthers(element);
      element.classList.toggle('is-zoomed');
      element.setAttribute('aria-pressed', element.classList.contains('is-zoomed') ? 'true' : 'false');
    };
    element.addEventListener('click', toggle);
    element.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggle();
      }
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      zoomables.forEach((element) => {
        element.classList.remove('is-zoomed');
        element.setAttribute('aria-pressed', 'false');
      });
    }
  });
})();

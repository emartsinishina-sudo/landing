document.querySelector('#lead-form').addEventListener('submit', (event) => {
  event.preventDefault();
  event.currentTarget.querySelector('.form-note').hidden = false;
});

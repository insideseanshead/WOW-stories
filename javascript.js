const formEl = document.querySelector('.form');

formEl.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(formEl);
  const data = Object.fromEntries(formData);

  console.log(formEl.id);
  localStorage.setItem(`${formEl.id}`, JSON.stringify(data));
});

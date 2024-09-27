const formEl = document.querySelector('.form');

formEl.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(formEl);
  const data = Object.fromEntries(formData);

  console.log(formEl.id);
  localStorage.setItem(`${formEl.id}`, JSON.stringify(data));

  nextPage();
});

const nextPage = function () {
  const currentURL = window.location.href;
  let questionNumber = Number(currentURL.charAt(currentURL.length - 6));

  if (questionNumber < 8) {
    window.location = `./thank-you.html`;
    console.log(questionNumber + 1);

    window.location = `./question-${questionNumber + 1}.html`;
  } else {
    window.location = `./thank-you.html`;
  }
};

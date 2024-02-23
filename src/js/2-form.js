const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

function readFormData(form) {
  const message = form.message.value;
  const email = form.email.value;

  return {
    message,
    email,
  };
}

form.addEventListener('input', event => {
  const data = readFormData(event.currentTarget);
  const jsonData = JSON.stringify(data);

  localStorage.setItem(STORAGE_KEY, jsonData);
});

const storageData = localStorage.getItem(STORAGE_KEY);

if (storageData) {
  const data = JSON.parse(storageData);
  form.message.value = data.message;
  form.email.value = data.email;
}

form.addEventListener('submit', event => {
  event.preventDefault();

  const data = readFormData(event.currentTarget);
  form.reset();
  localStorage.clear();

  console.log(data);
});

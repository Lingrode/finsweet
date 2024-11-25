const form = document.querySelector('.footer__subscribe-form');
const formInput = document.querySelector('.footer__subscribe-input');
const errorMessage = document.querySelector('.footer__subscribe-error');
const successIcon = document.querySelector('.icon-success');

const onSubmit = event => {
  console.log(event);

  event.preventDefault();

  if (!formValidate()) {
    errorMessage.textContent = 'Enter valid email';
    return;
  }

  errorMessage.classList.add('visible');
  errorMessage.textContent = 'Success!';
  successIcon.classList.remove('visible');

  const submitButton = event.submitter;
  submitButton.textContent = 'Success!';

  form.reset();

  setTimeout(() => {
    successIcon.classList.remove('visible');
    errorMessage.classList.remove('visible');
    event.submitter.textContent = 'Subscribe';
  }, 3000);
};

const formValidate = () => {
  const isValid = formInput.validity.valid && formInput.value.trim() !== '';

  if (isValid) {
    errorMessage.classList.remove('visible');
    successIcon.classList.add('visible');
  } else {
    errorMessage.classList.add('visible');
    successIcon.classList.remove('visible');
  }

  return isValid;
};

formInput.addEventListener('input', formValidate);
form.addEventListener('submit', onSubmit);

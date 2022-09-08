const refs = {
  form: document.querySelector('.login-form'),
};

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const mail = formElements.email.value;
  const password = formElements.password.value;

  if (formElements.password.value === '' || formElements.email.value === '') {
    alert(' Заповніть всі поля');
  } else if (
    formElements.password.value !== '' ||
    formElements.email.value !== ''
  ) {
    refs.form.reset();
  }
  const formData = {
    mail,
    password,
  };
  console.log(formData);

  // const formData = new FormData(event.currentTarget);

  // formData.forEach((value, name) => {
  //   console.log(name);
  //   console.log(value);
  // });
}

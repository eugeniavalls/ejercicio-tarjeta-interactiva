const cardNumber = document.getElementById('card__number');
const cardName = document.getElementById('card__name');
const cardMonth = document.getElementById('card__month');
const cardYear = document.getElementById('card__year');
const cardCvc = document.getElementById('card__cvc');
const formElement = document.getElementById('form');
const formName = document.getElementById('form__name');
const formNumber = document.getElementById('form__number');
const formMonth = document.getElementById('form__month');
const formYear = document.getElementById('form__year');
const formCvc = document.getElementById('form__cvc');
const formConfirm = document.getElementById('form__confirm');

formName.addEventListener('input', event => {
  if (formName.value === '') {
    cardName.textContent = 'JANE APPLESEED';
  } else {
    cardName.textContent = formName.value;
  }
});

formNumber.addEventListener('input', event => {
  if (formNumber.value === '') {
    cardNumber.textContent = '0000 0000 0000 0000';
  } else {
    cardNumber.textContent = formNumber.value;
  }
});

formMonth.addEventListener('input', event => {
  if (formMonth.value === '') {
    cardMonth.textContent = '00';
  } else {
    cardMonth.textContent = formMonth.value;
  }
});

formYear.addEventListener('input', event => {
  if (formYear.value === '') {
    cardYear.textContent = '00';
  } else {
    cardYear.textContent = formYear.value;
  }
});

formCvc.addEventListener('input', event => {
  if (formCvc.value === '') {
    cardCvc.textContent = '000';
  } else {
    cardCvc.textContent = formCvc.value;
  }
});

formElement.addEventListener('submit', event => {
  event.preventDefault();
  let errors = false;
  if (formName.value === '') {
    errors = true;
    console.log('Te falta rellenar el nombre');
  }
  if (formNumber.value === '') {
    errors = true;
    console.log('Te falta rellenar el número de tarjeta');
  }
  if (formMonth.value === '') {
    errors = true;
    console.log('Te falta rellenar el mes');
  }
  if (formYear.value === '') {
    errors = true;
    console.log('Te falta rellenar el año');
  }
  if (formCvc.value === '') {
    errors = true;
    console.log('Te falta rellenar el CVC');
  }

  if (!errors) {
    console.log('Listo!');
  }
});

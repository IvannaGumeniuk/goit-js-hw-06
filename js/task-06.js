const textInput = document.querySelector('#validation-input');
textInput.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  if ((event.currentTarget.value.length) > textInput.dataset.length) {
    textInput.classList.add("invalid");
  }

  else {
    textInput.classList.add("valid");
  }
}



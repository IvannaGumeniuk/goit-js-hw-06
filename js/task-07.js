const inputScrollControl = document.querySelector('#font-size-control');
const textAfterInput = document.querySelector('#text');

inputScrollControl.addEventListener("input", fontSizeChage);
textAfterInput.style.fontSize = `${inputScrollControl.value}px`;

function fontSizeChage(event) {
    const size = event.currentTarget.value;
    textAfterInput.style.fontSize = `${size}px`;
};
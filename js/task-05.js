const inputName = document.querySelector('#name-input');
const chachName = document.querySelector('#name-output');

inputName.addEventListener("input", (event) => {
    chachName.textContent = event.currentTarget.value.trim();

    if (!event.currentTarget.value) {
        chachName.innerHTML = 'Anonymous';
    }
});

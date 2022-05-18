const inputValue = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const newDivBoxes = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function destroyBoxes(coutDiv) {
   const arrayDiv = newDivBoxes.querySelectorAll('div');
   for (let i = coutDiv; i > inputValue.value; i -= 1) {
      newDivBoxes[i-1].remove();
   }
}

createBtn.addEventListener('click', () => {
  let divElAll = newDivBoxes.querySelectorAll('div').length;
  
   if (divElAll <= inputValue.value) {
      for (let i = divElAll; i < inputValue.value; i += 1) {
        let divEl = document.createElement('div');
        divEl.style.width = 30 + i * 10 + 'px';
        divEl.style.height = 30 + i * 10 + 'px';
        divEl.style.backgroundColor = getRandomHexColor();
        newDivBoxes.append(divEl);
      }
     
   } else {
      destroyBoxes(divElAll);
   }
});

destroyBtn.addEventListener('click', () => {
   newDivBoxes.innerHTML = '';
});


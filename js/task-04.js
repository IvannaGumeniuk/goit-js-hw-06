const counterBtns = document.querySelector("#counter");
const counterSpanValue = document.querySelector('#value');
let counterValue = 0;

counterBtns.addEventListener('click', determinesValueCounter);

function determinesValueCounter(event) {
  if (event.target.closest('button')) {
    if (event.target.closest('button').dataset.action === 'increment') {
      counterValue += 1;
      counterSpanValue.innerHTML = counterValue;
    }

    else if (event.target.closest('button').dataset.action === 'decrement') {
      counterValue -= 1;
      counterSpanValue.innerHTML = counterValue;
    }
  }
}
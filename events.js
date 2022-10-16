// Your code here
addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded');
  const redInput = document.querySelector('#red-input');
  const addItem = document.querySelector('#add-item');
  const ul = document.querySelector('ul');
  const listAdd = document.querySelector('#list-add');
  const section3 = document.querySelector('#section-3');
  const colorSelect = document.querySelector('#color-select');
  const removeListeners = document.querySelector('#remove-listeners');

  function addLi() {
    const li = document.createElement('li');
    li.textContent = listAdd.value;
    ul.appendChild(li);
  }

  function changeBackgroundColor(e) {
    if (e.target.value.indexOf('red') > -1) {
      redInput.style.setProperty('background', 'red');
    } else {
      redInput.style.setProperty('background', '');
    }
  }

  function useColorSelect(e) {
    section3.style.backgroundColor = e.target.value;
  }

  redInput.addEventListener('change', e => changeBackgroundColor(e));
  listAdd.addEventListener('change', e => {
    console.log(e.target.value);
  });
  addItem.addEventListener('click', addLi);
  colorSelect.addEventListener('change', e => useColorSelect(e));

  removeListeners.addEventListener('click', () => {
    console.log('remove event listeners');
    // https://stackoverflow.com/questions/4386300/javascript-dom-how-to-remove-all-event-listeners-of-a-dom-object
    document.querySelector('body').outerHTML =
      document.querySelector('body').outerHTML;
    // redInput.removeEventListener('change', changeBackgroundColor);
    // addItem.removeEventListener('click', addLi);
    // colorSelect.removeEventListener('change', useColorSelect);
  });
});

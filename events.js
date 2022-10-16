// Your code here
addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded');
  const redInput = document.querySelector('#red-input');
  const addItem = document.querySelector('#add-item');
  const ul = document.querySelector('ul');
  const listAdd = document.querySelector('#list-add');

  //   debugger;
  redInput.addEventListener('change', e => {
    console.log(e.target.value);
    if (e.target.value.indexOf('red') > -1) {
      redInput.style.setProperty('background', 'red');
    } else {
      redInput.style.setProperty('background', '');
    }
  });
  listAdd.addEventListener('change', e => {
    console.log(e.target.value);
  });
  addItem.addEventListener('click', () => {
    const li = document.createElement('li');

    li.textContent = listAdd.value;
    ul.appendChild(li);
  });
});

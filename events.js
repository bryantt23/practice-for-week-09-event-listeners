// Your code here
addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded');
  const redInput = document.querySelector('#red-input');
  //   debugger;
  redInput.addEventListener('change', e => {
    console.log(e.target.value);
    if (e.target.value.indexOf('red') > -1) {
      redInput.style.setProperty('background', 'red');
    } else {
      redInput.style.setProperty('background', '');
    }
  });
});

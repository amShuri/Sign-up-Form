const input = document.querySelectorAll('.input');

// Remove styles from empty invalid/valid inputs
input.forEach((item) => {
  if(item.value === '') {
    item.className = '';
  }
})
for(let i = 0; i < input.length; i++) {
  input[i].addEventListener('input', () => {
    if(input[i].value !== '') {
      input[i].className = 'input';
    } else {
      input[i].className = '';
    }
  })
}
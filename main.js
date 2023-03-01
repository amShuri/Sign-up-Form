const form = document.querySelector('form');
const input = document.querySelectorAll('.input');
const password = document.querySelectorAll('input[type="password"]');
const passwordMatch = document.querySelector('#confirm-password + .output-msg > .valid-msg');
const passwordMismatch = document.querySelector('#confirm-password + .output-msg > .invalid-msg');

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

for(let i = 0; i < password.length; i++) {
  password[i].addEventListener('input', () => {
    if(password[0].value === password[1].value && password[1].value.length >= 1) {
      passwordMismatch.style.display = 'none';
      passwordMatch.style.display = 'block';
      password[1].className = 'input password-match';
    } else if(password[0].value !== password[1].value && password[1].value.length >= 1) {
      passwordMatch.style.display = 'none';
      passwordMismatch.style.display = 'block';
      password[1].className = 'input password-mismatch';
    }
    if(password[0].value === '' || password[1].value === '') {
      passwordMatch.style.display = 'none';
      passwordMismatch.style.display = 'none';
      password[1].className = '';
    }
  })
}

form.addEventListener('submit', (e) => {
  if(password[0].value !== password[1].value) {
    e.preventDefault();
    password[1].focus();
    password[1].style.animationName = 'passwordMatch';
    setTimeout(() => {
      password[1].style.animationName = '';
    }, 1000);
  }
})
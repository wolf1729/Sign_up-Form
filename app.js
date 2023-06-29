var passwordInput = document.getElementById('pass');
var confirmPasswordInput = document.getElementById('conpass');

passwordInput.addEventListener('input', validatePasswords);
confirmPasswordInput.addEventListener('input', validatePasswords);

function validatePasswords() {
  var passwordValue = passwordInput.value;
  var confirmPasswordValue = confirmPasswordInput.value;

  if (passwordValue === confirmPasswordValue) {
    passwordInput.style.borderColor = 'green';
    confirmPasswordInput.style.borderColor = 'green';
  } else {
    passwordInput.style.borderColor = 'red';
    confirmPasswordInput.style.borderColor = 'red';
  }
}

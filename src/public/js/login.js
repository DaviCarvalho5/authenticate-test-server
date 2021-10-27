const loginForm = document.getElementById('login-form');
import cookie from './cookies.js';

loginForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const email = document.getElementById('login-input-email').value
  const password = document.getElementById('login-input-password').value

  const body = { email, password };

  callLoginPost('http://127.0.0.1:3000/login', body);
});

async function callLoginPost(url, body) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  const data = await response.json();

  if (data.error) {
    return alert(`Error!\n\n${data.error}`);
  }

  const token = data.token;

  cookie.setCookie('token', token, 1);
  localStorage.setItem('loged', true);
  localStorage.setItem('name', data.user.name);
  localStorage.setItem('email', data.user.email);

  return;
}

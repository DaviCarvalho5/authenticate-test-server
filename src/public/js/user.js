import cookie from './cookies.js';

const userStateDisplay = document.getElementById('user-state-display');
const userNameDisplay = document.getElementById('user-name-display');
const userEmailDisplay = document.getElementById('user-email-display');
const userInfoDisplay = document.getElementById('user-info-display');
const logoutButtom = document.getElementById('logout-btn');

if (localStorage.getItem('loged')) {
  userStateDisplay.setAttribute('style', 'display: none; visibility: hidden;');
  userInfoDisplay.setAttribute('style', 'display: inline; visibility: visibility;');
  logoutButtom.setAttribute('style', 'display: inline; visibility: visibility;');

  userNameDisplay.innerHTML = localStorage.getItem('name');
  userEmailDisplay.innerHTML = localStorage.getItem('email');
}

logoutButtom.onclick = () => {
  cookie.deleteCookie('token');
  localStorage.removeItem('loged');
  localStorage.removeItem('name');
  localStorage.removeItem('email');
  window.location.replace('/');
}
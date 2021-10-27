const userStateDisplay = document.getElementById('user-state-display');

if (localStorage.getItem('loged')) {
  userStateDisplay.innerHTML = `Hello, ${localStorage.getItem('name')}!`;
}
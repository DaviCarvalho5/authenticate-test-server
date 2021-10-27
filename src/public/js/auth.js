var date = new Date();
import cookie from './cookies.js';

window.onload = () => {
  if (localStorage.getItem('loged')) {
    // getUserDate();
    authView();
  }
}

// async function getUserDate() {
//   const token = cookie.getCookie('token');

//   if (!token) {
//     return console.log(`Token does not exist`);
//   }

//   const body = {
//     token: `Bearer ${token}`
//   };

//   const response = await fetch('http://127.0.0.1:3000/users', {
//     method: 'GET',
//     headers: {
//       'Authorization': JSON.stringify(body),
//       'Content-Type': 'application/json',
//     },
//   }).catch((err) => {
//     return console.log(`Error!\n\n${err}`);
//   })

//   const data = await response.json();

//   if (data.error) {
//     return console.log(`Error!\n\n${data.error}`);
//   }
// }


function authView() {
  const menuLogin = document.getElementById('menu-login');
  const menuRegister = document.getElementById('menu-register');
  const menuUser = document.getElementById('menu-user');

  menuLogin.setAttribute('style', 'display: none; visibility: hidden;')
  menuRegister.setAttribute('style', 'display: none; visibility: hidden;')
  menuUser.setAttribute('style', 'display: inline; visibility: visibility;')
}

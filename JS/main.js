let userLogin = document.getElementById('exampleInputUser1')
let emailLogin = document.getElementById('exampleInputEmail1')
let passwordLogin = document.getElementById('exampleInputPassword1')
let buttonSubmit = document.getElementById('submit')

const usersLoginInput = () => {
    userLogin.value
    emailLogin.value
    passwordLogin.value
    let users = JSON.parse(localStorage.getItem('users')) || []
    let user = users.find(user => user.email === emailLogin && user.password === passwordLogin
        )
        if (userLogin === user.name && 
            emailLogin === user.email && 
            passwordLogin === user.password) {
                window.location.href = './testWorkFinal/VIEWS/index.html'
                } else {
                    alert('Invalid email or password')
                    }
                    console.log(users);
}

// import { createNavbar } from "./modules/components.js";
/*let token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTmVzdG9yIENoYXBhcnJvIiwiZW1haWwiOiJ6b25pY25lc3NAaG90bWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMyJ9._PXPwmX32RxsSCN4MVJBRxCykAEyfmdRuDocSV930iA*/

    /*
const isLogged = () => {
  let token = localStorage.getItem("token");
  return token ? true : false;
};

/*createNavbar("navbar-wrapper", isLogged());*/

/*
if (isLogged()) {
  window.open("./index.html", "_self");
} else {
  window.open("./VIEWS/loginPage.html", "_self");
}
*/
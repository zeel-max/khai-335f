const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener('click', () =>{
container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', () =>{
  container.classList.remove("sign-up-mode");
  });

  let btnopen = document.querySelector('#signup');
  btnopen.addEventListener('click', () =>{
    window.open('index.html','_blank')
  });

  let loginopen = document.querySelector('#login');
  loginopen.addEventListener('click', () =>{
    window.open('index.html','_blank')
  });
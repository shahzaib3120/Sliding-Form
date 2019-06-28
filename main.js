var signupbtn = document.getElementById('signUp');
var signinbtn = document.getElementById('signIn');
var container = document.getElementById('container');

signupbtn.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signinbtn.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});
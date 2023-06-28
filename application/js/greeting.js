const loginForm=document.querySelector("#login-form");
// document.getElementById("login-form");

const loginInput=loginForm.querySelector("input");
const greeting=document.querySelector("#greeting");

const HIDDEN_CLASSNAME="hidden";
const USERNAME_KEY="username";

function LoginSubmit(event){    
    event.preventDefault();
    const username=loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    console.log(username);
    localStorage.setItem(USERNAME_KEY, username);
    paintingGreeings(username);    
}

function paintingGreeings(username){
    greeting.innerText=`Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
const savedUsername=localStorage.getItem(USERNAME_KEY);
if(savedUsername == null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", LoginSubmit);
}
else{
    paintingGreeings(savedUsername);
}

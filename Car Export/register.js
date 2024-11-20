//login card
// const signInBtn = document.querySelector(".sign-btn");
// const loginCloseBtn = document.querySelector("#login-close-btn");
const loginForm = document.querySelector("#login-form");

loginForm.addEventListener("click", (event) => {
    event.preventDefault(); 
    console.log(event);
})

function displayLogin(){
    const loginModal = document.getElementById("login-modal");
    const loginCard = document.getElementById("login-card");

    loginModal.classList.toggle("render");
    loginCard.classList.toggle("pop-up");
}

// function closeLogin(){
//     const loginModal = document.getElementById("login-modal");
//     const loginCard = document.getElementById("login-card");

//     loginModal.classList.toggle("render");
//     loginCard.classList.toggle("pop-up");
// }

// signInBtn.addEventListener("click", (event) => {
//     const loginModal = document.getElementById("login-modal");
//     const loginCard = document.getElementById("login-card");

//     loginModal.classList.toggle("render");
//     loginCard.classList.toggle("pop-up");
// });

// loginCloseBtn.addEventListener("click", () => {
//     const loginModal = document.getElementById("login-modal");
//     const loginCard = document.getElementById("login-card");

//     loginModal.classList.remove("render");
//     loginCard.classList.remove("pop-up");
// });

const email = document.getElementById("username");
const invalidEmail = document.getElementById("invalid-mail");
const loginBtn = document.querySelector(".login-btn");

loginBtn.addEventListener("click", () => {
    if (email.value == "") {
        invalidEmail.style.display = "block";
    }}
);
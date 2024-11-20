const loginForm = document.querySelector('#login-card');

loginForm.addEventListener('submit',function(e){
    let emailInput = document.getElementById('username').value;
    let passwordInput = document.getElementById('password').value;
    let invalidMail = document.getElementById('invalid-mail');

    if(emailInput == ''){
        e.preventDefault();
        alert("Email is null");
        invalidMail.innerText = "Enter enter a valid email";
    } else if( /\S+@\S+\.\S+/.test(emailInput) == false){
        e.preventDefault();
        alert("It's not an email type");
    } else if(passwordInput ==''){
        e.preventDefault();
        alert("Password is null");
    } else if(passwordInput.length < 12){
        e.preventDefault();
        alert("Include at least 12 letters");
    } else if(/[A-Z]/.test(passwordInput) == false){
        e.preventDefault();
        alert("Include at least 1 uppercase");
    } else if(/[0-9]/.test(passwordInput) == false){
        e.preventDefault();
        alert("Include at least 1 number");
    } else {
        window.location.href = "index.html";    
    }
});

//mobile navigation menu
const toggleBtn = document.querySelector(".toggle-btn");
const toggleBtnIcon = document.querySelector(".toggle-btn i");
const dropDown = document.querySelector(".dropdown-menu");

toggleBtn.addEventListener("click", () => {
    dropDown.classList.toggle("open");

    const isOpen = dropDown.classList.contains("open");

    toggleBtnIcon.classList = isOpen 
    ? "fa-solid fa-xmark" 
    : "fa-solid fa-bars";
});

//bug report card
const floatingBtn = document.querySelector(".floating-btn");
const cardCloseBtn = document.querySelector("#report-close-btn");

floatingBtn.addEventListener("click", () => {
    const reportBug = document.getElementById("report-bug");
    const reportCard = document.getElementById("report-card");

    reportBug.classList.toggle("active");
    reportCard.classList.toggle("open");
});

cardCloseBtn.addEventListener("click", () => {
    const reportBug = document.getElementById("report-bug");
    const reportCard = document.getElementById("report-card");

    reportBug.classList.remove("active");
    reportCard.classList.remove("open");
});



let email = document.getElementById('email');
let userName = document.getElementById('nm');
let pw = document.getElementById('pw');
let cnfrm = document.getElementById('cnfrm');
let messege = document.getElementById('messege');
let asd = false;


function store() {
    if (email.value.length > 0 && userName.value.length > 0 && pw.value.length > 0 && email.value.includes("@")) {
                
        if (pw.value == cnfrm.value) {
            asd
            localStorage.setItem('email', email.value);
            localStorage.setItem('userName', userName.value);
            localStorage.setItem('pw', pw.value);
            window.location.href = "login.html";
        } else {
            messege.innerHTML = `<div class="redWords">Incorrectly entered email</div>`;
        }
    } else {
        messege.innerHTML = `<div class="redWords">Please enter your email!</div>`;
    }

    // if (userName.value != "") {
    //     asd = true;
    // } else {
    //     asd = false;
    //     messege.innerHTML = `<div class="redWords">Please enter your name!</div>`;
    // }

    // if (pw.value != "") {
    //     asd = true;
    // } else {
    //     asd = false;
    //     messege.innerHTML = `<div class="redWords">Please enter your password!</div>`;
    // }

    // if (pw.value === cnfrm.value) {
    //     asd = true;
    // } else {
    //     asd = false;
    //     messege.innerHTML = `<div class="redWords">The entered passwords do not match!</div>`;
    // }
    // if (email.value.includes("@")) {
    //     asd = true;
    // } else {
    //     asd = false;
    //     messege.innerHTML = `<div class="redWords">Incorrectly entered email</div>`;
    // // }
    // if (asd) {
    //     localStorage.setItem('email', email.value);
    //     localStorage.setItem('userName', userName.value);
    //     localStorage.setItem('pw', pw.value);
    //     // window.location.href = "login.html";
    //     console.log("o e");
    // }
}

function registered(){
    location.href = "login.html";
}
function check() {
    let storedEmail = localStorage.getItem('email');
    let storedPw = localStorage.getItem('pw');
    let storedUN = localStorage.getItem('userName');

    // entered data from the login-form
    let userEmail = document.getElementById('userEmail');
    let userPw = document.getElementById('userPw'); 
    let userName = document.getElementById('userName');

    // check if stored data from register-form is equal to data from login form
    if (userEmail.value !== storedEmail || userPw.value !== storedPw || userName.value !== storedUN) {
        alert('ERROR');
    } else {
        window.location.href = "main.html";
    }
} 
function DidntReg(){
    location.href = "index.html";
}
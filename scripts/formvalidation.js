const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const feedback = document.querySelector("#feedback");
const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);
confirmPassword.addEventListener("focusout", checkSame);

function checkSame(){

    
    if(password.value !== confirmPassword.value){
        feedback.textContent = "The passwords don't match!";
        feedback.style.display = "show";
        feedback.style.backgroundColor = "#fff0f3";
        password.value = "";
        confirmPassword.value = "";
        password.focus();



    }
    else{
        feedback.style.display = "none";
        
    }
}
function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}
// creating a log in page that redirects to new page

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "cool" && password === "password") {
        alert("You have successfully logged in.");
        location.replace("addgrade.html");
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})


// creating add grade page

function append_to_div(div_name, data){
    document.getElementById(div_name).innerText += data;
}

document.getElementById("my_button")
    .addEventListener('click', function() {

        var user_name = document.getElementById("name");
        var value = user_name.value.trim();

        if(!value)
            alert("Name Cannot be empty!");
        else
            append_to_div("my_div", value+"\n");

        user_name.value = "";
    });







// creating grade view page that saves data
const addGrade = document.getElementById("addgrade");


addGrade.addEventListener("click", (e) => {
    e.preventDefault();
    location.assign("addgrade.html")

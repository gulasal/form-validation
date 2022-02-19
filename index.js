var form = document.getElementById("form");

var error = [];
var success = [];

form.addEventListener('submit', function(e){
    e.preventDefault();
    // alert(" submit");
    var username = document.getElementById("username");
    var surname = document.getElementById("surname")
    var email = document.getElementById("email")
    var password = document.getElementById("password")
    if(username.value == ""){
        // alert("please fill")
        error.push("Please fill the rows!");
    };
    if(surname.value == ""){
        // alert("please fill")
        error.push("Please fill the rows!");
    };
    if(email.value == ""){
        // alert("please fill")
        error.push("Please fill the rows!");
    };
    if(password.value == ""){
        error.push("Please enter the password!");
    };

    alert("Successfully submitted!")

    var message = document.getElementById("message");
    message.innerText = error
})

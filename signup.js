function validate() {
    let studentId = document.getElementById("user").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if (studentId.length < 4 ) {
    alert("Invalid Id");
    return false;
    } else if (email.length < 9 ) {
    alert("Invalid email");
    return false;
    } else if (password.length < 5 ) {
    alert("Password should be aleast 5 characters");
    return false;
    } else {
        alert("You are successfully registered to Mob")
    return true;
    }
    }

    function registrationForm() {
    let userEmail = document.getElementById("email").value;
    let userPassword = document.getElementById("password").value;
    let studentId = document.getElementById("user").value;
    let email = ["brenda@gmail.com","molly@gmail.com"];
    let password = ["12345", "67891"];
    let studentId = ["2345", "6789"];
    for(let i = 0; i < email.length; i++) {
    if (userEmail == email[i] && userPassword == password[i]) {
    alert("Welcome back to Mob");
    return true;
    } else {
    alert("Invalid email or password");
    return false;
    }
    }
}
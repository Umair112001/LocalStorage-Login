document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let userData = { username, email, password };
    localStorage.setItem("userData", JSON.stringify(userData));
    alert("Signup successful!");
    window.location.href = "login.html";
    this.reset();
});

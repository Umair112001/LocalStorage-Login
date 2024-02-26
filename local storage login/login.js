document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let loginUsername = document.getElementById("loginUsername").value;
    let loginPassword = document.getElementById("loginPassword").value;

    let savedData = localStorage.getItem("userData");
    if (savedData) {
        let userData = JSON.parse(savedData);
        if ((loginUsername === userData.username || loginUsername === userData.email) && loginPassword === userData.password) {
            alert("Login successful!");
            window.location.href = "home.html";
        } else {
            alert("Invalid username/email or password!");
        }
    } else {
        alert("No user found. Please signup first.");
    }
    this.reset();
});

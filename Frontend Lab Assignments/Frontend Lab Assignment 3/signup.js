
const form = document.getElementById("signupForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword =
        document.getElementById("confirmPassword").value;

    document.querySelectorAll(".error").forEach(function(error) {
        error.textContent = "";
    });

    message.textContent = "";
    message.style.color = "red";

    let valid = true;

    if (name.length < 2) {
        document.getElementById("nameError").textContent =
            "Name must contain at least 2 characters.";
        valid = false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById("emailError").textContent =
            "Enter a valid email address.";
        valid = false;
    }

    if (password.length < 8) {
        document.getElementById("passwordError").textContent =
            "Password must contain at least 8 characters.";
        valid = false;
    }

    if (password !== confirmPassword) {
        document.getElementById("confirmError").textContent =
            "Passwords do not match.";
        valid = false;
    }

    if (valid) {
        message.textContent = "Signup validation successful!";
        message.style.color = "green";
        form.reset();
    }
});

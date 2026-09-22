// Registration Form
const registrationForm = document.getElementById("registrationForm");

if (registrationForm) {

    registrationForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        document.getElementById("message").textContent =
            "Registration successful! Welcome " + name;

        console.log("Name:", name);
        console.log("Email:", email);

    });
}


// Login Form
const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        if (email === "admin@gmail.com" && password === "12345") {

            document.getElementById("loginMessage").textContent =
                "Login successful!";

        } else {

            document.getElementById("loginMessage").textContent =
                "Invalid email or password.";

        }

    });
}
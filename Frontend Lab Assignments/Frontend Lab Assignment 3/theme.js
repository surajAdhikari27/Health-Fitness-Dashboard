
const button = document.getElementById("themeButton");
const label = document.getElementById("themeLabel");

button.addEventListener("click", function() {
    const isDark = document.body.classList.toggle("dark");

    if (isDark) {
        button.textContent = "Switch to Light Theme";
        label.textContent = "Current theme: Dark";
    } else {
        button.textContent = "Switch to Dark Theme";
        label.textContent = "Current theme: Light";
    }
});

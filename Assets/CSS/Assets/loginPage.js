
// Functionallity for sending an error message in password. 

const passwordInput = document.getElementById("password");
const passwordError = document.getElementById("password-error");

passwordInput.addEventListener("input", () => {
    if (passwordInput.value.length > 8) {
        passwordError.classList.remove("hidden");
    } else {
        passwordError.classList.add("hidden");
    }
});
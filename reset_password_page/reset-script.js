function togglePassword(id) {
    let input = document.getElementById(id);
    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }
}

document.getElementById("resetForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (password === confirmPassword) {
        alert("Password reset successful!");
    } else {
        alert("Passwords do not match!");
    }
});

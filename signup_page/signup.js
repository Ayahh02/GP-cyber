document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirmPassword");
    let userType = document.getElementById("userType");

    let nameRegex = /^[A-Za-z]+$/;
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/;
    let phoneRegex = /^00\d{1,13}$/;
    let passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    function showError(input, message) {
        let errorSpan = input.nextElementSibling;
        if (!errorSpan || !errorSpan.classList.contains("error-message")) {
            errorSpan = document.createElement("span");
            errorSpan.classList.add("error-message");
            input.parentNode.insertBefore(errorSpan, input.nextSibling);
        }
        errorSpan.textContent = message;
        errorSpan.style.color = "red";
    }

    function clearErrors() {
        document.querySelectorAll(".error-message").forEach(el => el.textContent = "");
    }

    clearErrors(); 
    let valid = true;

    if (!nameRegex.test(firstName.value)) {
        showError(firstName, "First name must contain only letters.");
        valid = false;
    }

    if (!nameRegex.test(lastName.value)) {
        showError(lastName, "Last name must contain only letters.");
        valid = false;
    }

    if (!emailRegex.test(email.value)) {
        showError(email, "Invalid email format. Must contain '@' and end with '.com'");
        valid = false;
    }

    if (!phoneRegex.test(phone.value)) {
        showError(phone, "Phone number must start with '00' and be up to 15 digits.");
        valid = false;
    }

    if (!passwordRegex.test(password.value)) {
        showError(password, "Password must be at least 8 characters, contain one uppercase letter, one number, and one special character.");
        valid = false;
    }

    if (password.value !== confirmPassword.value) {
        showError(confirmPassword, "Passwords do not match.");
        valid = false;
    }

    if (userType.value === "") {
        showError(userType, "Please select a user type.");
        valid = false;
    }

    if (valid) {
        if (userType.value === "specialist") {
            window.location.href = "../signup2_page/signup2.html"; 
        } else {
            if (userType.value === "student") {
                window.location.href = "../freelancer1/freelancerMarket.html"; 
        
        }
    }
    }
});

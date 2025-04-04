function addCertificate() {
    const container = document.getElementById('certificateList');
    const div = document.createElement('div');
    div.classList.add('certificate-entry');
    div.innerHTML = `<input type='text' class='certificate-name' placeholder='Certificate Name'>
                     <input type='date' class='certificate-date'>`;
    container.appendChild(div);
}

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let birthday = document.getElementById('birthday').value;
    let about = document.getElementById('about').value;
    let terms = document.getElementById('terms').checked;
    let birthdayRegex = /^\d{2}\/\d{2}\/\d{4}$/;
    let valid = true;

    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
    
    if (!birthdayRegex.test(birthday)) {
        document.getElementById('birthday').nextElementSibling.textContent = 'Invalid format. Use DD/MM/YYYY';
        valid = false;
    }

    if (about.split(' ').length < 100) {
        document.getElementById('about').nextElementSibling.textContent = 'Must be at least 100 words';
        valid = false;
    }

    if (!terms) {
        document.getElementById('terms').nextElementSibling.textContent = 'You must accept the Privacy Policy';
        valid = false;
    }

    let certificateInputs = document.querySelectorAll('.certificate-name, .certificate-date');
    certificateInputs.forEach(input => {
        if (!input.value.trim()) {
            let errorSpan = document.createElement('span');
            errorSpan.classList.add('error-message');
            errorSpan.textContent = 'This field is required';
            input.parentNode.appendChild(errorSpan);
            valid = false;
        }
    });

    if (valid) {
        window.location.href = "../home_page/main.html"; 
    }else{
        alert('Signup Unsuccessful!');
    }
});

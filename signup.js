document.addEventListener('DOMContentLoaded', function() {
    var signupForm = document.getElementById('signupForm');
    var passwordInput = document.getElementById('password');

    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();

        if (!signupForm.checkValidity()) {
            e.stopPropagation();
            signupForm.classList.add('was-validated');
        } else {

            console.log('Skapar konto för:', username.value, email.value, fullname.value);
        }
    });

    passwordInput.addEventListener('input', function(e) {
        var value = e.target.value;
        var strength = 0;
        if (value.length >= 8) strength++;
        if (/[A-Z]/.test(value)) strength++;
        if (/[0-9]/.test(value)) strength++;
        if (/[^A-Za-z0-9]/.test(value)) strength++;

        document.querySelectorAll('.password-strength-meter > div').forEach(div => {
            div.style.width = 0 + '%';
        });

        if (strength > 0) {
            document.querySelector('.strength-' + (strength - 1)).style.width = 25 * strength + '%';
        }
    });
});

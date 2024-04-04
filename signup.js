document.addEventListener('DOMContentLoaded', function () {
    var signupForm = document.getElementById('signupForm');
    var usernameInput = document.getElementById('username');
    var emailInput = document.getElementById('email');
    var fullnameInput = document.getElementById('fullname');
    var passwordInput = document.getElementById('password');

    signupForm.addEventListener('submit', function (e) {
        e.preventDefault();

        if (signupForm.checkValidity()) {
            const email = emailInput.value;
            localStorage.setItem('userEmail', email);

        } else {
            signupForm.classList.add('was-validated');
        }
    });


    passwordInput.addEventListener('input', function (e) {
        var value = e.target.value;
        var strength = 0;
        if (value.length >= 8) strength++;
        if (/[A-Z]/.test(value)) strength++;
        if (/[0-9]/.test(value)) strength++;
        if (/[^A-Za-z0-9]/.test(value)) strength++;

        var meter = document.querySelector('.password-strength-meter > div');
        meter.style.width = (strength * 25) + '%';
        meter.style.backgroundColor = strengthColor(strength);
    });

    function strengthColor(strength) {
        var color = '';
        if (strength === 0) {
            color = 'transparent';
        } else if (strength <= 2) {
            color = '#ff3e36';
        } else if (strength === 3) {
            color = '#ffda36';
        } else if (strength === 4) {
            color = '#0be881';
        }
        return color;
    }
});

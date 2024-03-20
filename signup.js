document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Förhindra formulärets standardinlämningsbeteende

    // Hämta värden från formuläret
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const fullname = document.getElementById('fullname').value;
    const password = document.getElementById('password').value;

    // Enkel validering (exempelvis kan du utöka med mer avancerad logik här)
    if (password.length < 8) {
        alert('Lösenordet måste vara minst 8 tecken långt.');
        return;
    }

    console.log('Skapar konto för:', username, email, fullname);
    // Här skulle du normalt skicka data till servern
});

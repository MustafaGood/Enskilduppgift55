document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    // Hämta värden från formuläret
    const username = document.getElementById('usernameLogin').value;
    const password = document.getElementById('passwordLogin').value;

    console.log('Loggar in användaren:', username);
});

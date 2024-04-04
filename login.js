document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('usernameLogin').value;
    const password = document.getElementById('passwordLogin').value;

    console.log('Loggar in användaren:', username);

    localStorage.setItem('username', username);
    window.location.href = 'profile.html';
});

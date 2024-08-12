document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const userData = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
    };

    const response = await fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    });

    const result = await response.json();
    if (response.ok) {
        document.cookie = `token=${result.token}`;
        window.location.href = 'user.html';
    } else {
        alert(result.message);
    }
});

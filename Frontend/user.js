document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('/user', {
        headers: {
            'Authorization': `Bearer ${getCookie('token')}`
        }
    });

    if (response.ok) {
        const user = await response.json();
        document.getElementById('user-name').innerText = user.name;
        document.getElementById('user-bio').innerText = user.bio;
    } else {
        window.location.href = 'login.html';
    }
});

document.getElementById('logout').addEventListener('click', () => {
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    window.location.href = 'login.html';
});

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

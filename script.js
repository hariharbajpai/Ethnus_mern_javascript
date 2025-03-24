document.getElementById('registerForm')?.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const contact = document.getElementById('contact').value;
    const address = document.getElementById('address').value;

    const user = { name, email, contact, address };
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    alert('User registered successfully!');
    document.getElementById('registerForm').reset();
});

document.addEventListener('DOMContentLoaded', function() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userTableBody = document.getElementById('userTableBody');

    if (userTableBody) {
        users.forEach(user => {
            const row = `<tr>
                            <td>${user.name}</td>
                            <td>${user.email}</td>
                            <td>${user.contact}</td>
                            <td>${user.address}</td>
                        </tr>`;
            userTableBody.innerHTML += row;
        });
    }
});
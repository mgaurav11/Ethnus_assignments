document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
    const userTableBody = document.getElementById("userTableBody");

    // Save user data to localStorage
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const contact = document.getElementById("contact").value.trim();
            const address = document.getElementById("address").value.trim();

            if (!name || !email || !contact || !address) {
                alert("All fields are required!");
                return;
            }

            let users = JSON.parse(localStorage.getItem("users")) || [];

            users.push({ name, email, contact, address });

            localStorage.setItem("users", JSON.stringify(users));

            alert("User registered successfully!");
            form.reset();
            displayUsers();
        });
    }

    // Retrieve and display user data
    function displayUsers() {
        if (userTableBody) {
            userTableBody.innerHTML = "";
            let users = JSON.parse(localStorage.getItem("users")) || [];

            users.forEach(user => {
                let row = document.createElement("tr");
                row.innerHTML = `<td>${user.name}</td><td>${user.email}</td><td>${user.contact}</td><td>${user.address}</td>`;
                userTableBody.appendChild(row);
            });
        }
    }

    // Display users when the page loads
    displayUsers();
});

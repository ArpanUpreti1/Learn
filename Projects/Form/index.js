document.addEventListener('DOMContentLoaded', function() {
    const userInfoForm = document.getElementById('userInfoForm');
    const message = document.getElementById('message');

    userInfoForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting the traditional way

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const contact = document.getElementById('contact').value;
        const address = document.getElementById('address').value;

        // Create an object to store the data
        const userData = {
            name: name,
            email: email,
            contact: contact,
            address: address
        };

        // Store the data in localStorage
        localStorage.setItem('userData', JSON.stringify(userData));

        // Display a message to the user
        message.innerHTML = '<p>Data saved successfully!</p>';

        // Optionally, clear the form
        userInfoForm.reset();
    });

    // Optionally, you can retrieve and display the stored data when the page loads
    const storedData = localStorage.getItem('userData');
    if (storedData) {
        const userData = JSON.parse(storedData);
        message.innerHTML = `<p>Stored Data: ${JSON.stringify(userData)}</p>`;
    }
});

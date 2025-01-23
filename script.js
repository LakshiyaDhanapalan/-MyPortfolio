const sendBtn = document.querySelector('.send-btn');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

sendBtn.addEventListener('click', () => {
    // Get input values
    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;

    // Perform validation (optional)

    // Send data to server (replace with your actual server-side logic)
    fetch('/send-contact-data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
    })
    .then(response => {
        // Handle success (e.g., show a success message)
        console.log('Contact data sent successfully!');
        // Optionally clear input fields
        nameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';
    })
    .catch(error => {
        // Handle errors (e.g., show an error message)
        console.error('Error sending contact data:', error);
    });
});
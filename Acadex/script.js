document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation logic
    if (username === 'admin' && password === 'password') {
        document.getElementById('message').textContent = 'Login successful!';
        document.getElementById('message').style.color = 'green';
    } else {
        document.getElementById('message').textContent = 'Invalid username or password.';
    }
});

async function sendMessage() {
    const input = document.querySelector('.chat-footer input[type="text"]');
    const message = input.value;
    if (!message) return;

    // Display the user's message
    const chatBody = document.querySelector('.chat-body');
    const userMessage = document.createElement('p');
    userMessage.textContent = `You: ${message}`;
    chatBody.appendChild(userMessage);

    // Clear the input
    input.value = '';

    // Call the Perplexity AI API
    try {
        const response = await fetch('https://api.perplexity.ai/your-endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer YOUR_API_KEY'
            },
            body: JSON.stringify({ query: message })
        });

        const data = await response.json();
        const botMessage = document.createElement('p');
        botMessage.textContent = `Bot: ${data.response}`;
        chatBody.appendChild(botMessage);
    } catch (error) {
        console.error('Error:', error);
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Bot: Sorry, something went wrong.';
        chatBody.appendChild(errorMessage);
    }
}

function toggleChat() {
    const chatWindow = document.getElementById('chatWindow');
    if (chatWindow.style.display === 'none' || chatWindow.style.display === '') {
        chatWindow.style.display = 'block';
    } else {
        chatWindow.style.display = 'none';
    }
}

document.querySelector('.chat-footer button').addEventListener('click', sendMessage); 
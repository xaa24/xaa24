document.getElementById('send-btn').addEventListener('click', function() {
  const message = document.getElementById('chat-box').value;
  if (message.trim()) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message');
    messageElement.textContent = message;
    document.getElementById('messages').appendChild(messageElement);
    document.getElementById('chat-box').value = ''; // Clear input field
  }
});
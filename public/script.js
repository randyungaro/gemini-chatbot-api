const form = document.getElementById('chat-form');
const input = document.getElementById('user-input');
const chatBox = document.getElementById('chat-box');

form.addEventListener('submit', async function (e) { 
  e.preventDefault();

  const userMessage = input.value.trim();
  if (!userMessage) return;

  appendMessage('user', userMessage);
  input.value = '';

  
  const thinkingMessageElement = appendMessage('bot', 'Gemini is thinking...');

  try {
    
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: userMessage }) 
    });

    if (!response.ok) {
      
      const errorData = await response.json();
      throw new Error(errorData.reply || `HTTP error! status: ${response.status}`);
    }

    const data = await response.json(); 
    const botResponse = data.reply; 

   
    thinkingMessageElement.textContent = botResponse;
    thinkingMessageElement.classList.remove('thinking'); 

  } catch (error) {
    console.error('Error:', error);
    // Display an error message to the user
    thinkingMessageElement.textContent = `Error: ${error.message || 'Failed to get a response.'}`;
    thinkingMessageElement.style.color = 'red'; 
  } finally {
    chatBox.scrollTop = chatBox.scrollHeight; 
  }
});

function appendMessage(sender, text) {
  const msg = document.createElement('div');
  msg.classList.add('message', sender);
  if (sender === 'bot' && text === 'Gemini is thinking...') {
    msg.classList.add('thinking');
  }
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
  return msg;
}
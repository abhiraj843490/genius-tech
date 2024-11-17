import React, { useState } from 'react';
import './chatbox.css'; 

const ChatBox = ({ onClose }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (input.trim() !== '') {
      // Simulate sending the message and receiving a response
      setMessages([...messages, { text: input, fromUser: true }]);
      setInput('');

    // Simulated response (replace with actual API call for GenAI)
    //   setTimeout(() => {
    //     setMessages((prevMessages) => [
    //       ...prevMessages,
    //       { text: `Response: ${input}`, fromUser: false },
    //     ]);
    //   }, 1000);

    try {
        const response = await fetch('http://localhost:5000/ask', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ question: input }),
        });

        const data = await response.json();
        const botMessage = data.response;

        setMessages((prevMessages) => [
          ...prevMessages,
          { text: botMessage, fromUser: false },
        ]);
      } catch (error) {
        console.error('Error fetching AI response:', error);
      }

    }
  };

  return (
    <div className="chatbox">
      <div className="chatbox-header">
        <h3>ASK US</h3>
        <button onClick={onClose} className="close-btn">X</button>
      </div>
      <div className="chatbox-messages">
        {messages.map((msg, index) => (
          <div key={index} className={msg.fromUser ? 'user-msg' : 'bot-msg'}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chatbox-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatBox;

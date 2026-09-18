 function ChatInput() {
      return (
        <>
          <input placeholder="Enter a message" />
          <button>Send</button>
        </>
      )
    }

    function ChatMessage({ msg, sender }) {
      return (
        <div class="chat-message">
          {
            sender === 'bot'
            &&
            <img class="image" src="images/messi.jpg" width="50 " />
          }
          <p class="chat">
            {msg}
          </p>
          {
            sender === 'user'
            &&
            <img class="image" src="images/luffy.jpg" width="50 " />
          }
        </div>
      )
    }

    function App() {
      return (
        <>
          <ChatInput />
          <ChatMessage
            msg="Hello Chatbot"
            sender="user"
          />
          <ChatMessage
            msg="Hello how can I help you?"
            sender="bot"
          />
          <ChatMessage
            msg="Can you tell me more about yourself?"
            sender="user"
          />
          <ChatMessage
            msg="I'm a chatbot, I'm here to help you!"
            sender="bot"
          />
        </>
      )

    }

    const container = document.querySelector('.js-container');
    ReactDOM.createRoot(container).render(<App />);
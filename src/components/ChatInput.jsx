// components/ChatInput.jsx
function ChatInput({ onSend, message, setMessage }) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') onSend();
  };

  return (
    <div className="p-3 border-t flex items-center gap-2">
      <input
        className="flex-1 rounded-full border px-4 py-2"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        onClick={onSend}
        className="bg-indigo-600 text-white px-4 py-2 rounded-full"
      >
        Send
      </button>
    </div>
  );
}

export default ChatInput;

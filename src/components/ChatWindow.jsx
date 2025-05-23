import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GiNightSleep } from "react-icons/gi";
import { BsThreeDots } from "react-icons/bs";
function ChatWindow({ selectedUser, messages, onSendMessage, setCopilotOpen }) {
  const [newMessage, setNewMessage] = useState('');

  if (!selectedUser) {
    return (
      <div className="flex-1 flex items-center justify-center text-gray-400">
        Select a user to start chatting
      </div>
    );
  }

  const handleSend = () => {
    if (!newMessage.trim()) return;
    onSendMessage(newMessage);
    setNewMessage('');
  };

  return (
    <div className="flex-1 flex flex-col justify-between max-h-[100vh] bg-white">
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-white">
        <div className="font-semibold min-w-0 text-gray-800">{selectedUser.name}</div>
        <div className="flex items-center gap-2 space-x-3 mt-2 sm:mt-0">
          <button className="hover:bg-gray-100 p-1 rounded">
            <BsThreeDots />
          </button>
          <button className="hover:bg-gray-100 p-1 rounded" aria-label="Sleep Mode">
            <GiNightSleep />
          </button>
          <button className="flex items-center gap-1 px-3 py-1.5 bg-black text-white rounded-md text-sm hover:bg-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            Close
          </button>

          <button
            onClick={() => setCopilotOpen(true)}
            className="md:hidden absolute top-4 right-4 z-50 bg-white p-2 rounded shadow"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

        </div>
      </div>
      <div className="flex-1 overflow-auto px-2 sm:px-4 py-2 space-y-3 sm:space-y-4">
        <AnimatePresence initial={false}>
          {messages.map((msg, idx) => {
            const isMe = msg.from === 'me';
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className={`flex items-end ${isMe ? 'justify-end' : 'justify-start'}`}
              >
                {!isMe && (
                  <img
                    src={`https://api.dicebear.com/6.x/personas/svg?seed=${selectedUser.name}`}
                    className="w-8 h-8 rounded-full mr-2"
                    alt="avatar"
                  />
                )}

                <div
                  className={`max-w-xs px-4 py-2 rounded-lg text-sm ${isMe
                    ? 'bg-blue-100 text-blue-900 rounded-br-none'
                    : 'bg-gray-100 text-gray-800 rounded-bl-none'
                    }`}
                >
                  {msg.text}
                </div>

                {isMe && (
                  <img
                    src="https://api.dicebear.com/6.x/personas/svg?seed=me"
                    className="w-8 h-8 rounded-full ml-2"
                    alt="avatar"
                  />
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <div className="p-4 bg-white space-y-2 ">
        <div className="relative border border-gray-300 rounded-md px-4 pt-3 pb-6">
          <div className="flex items-center gap-1 text-sm font-semibold text-black">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h6m5 4H5l-1 4 4-4h12a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12" />
            </svg>
            Chat
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Use XX for shortcuts"
            className="w-full text-sm focus:outline-none pb-8"
          />

          <div className="absolute bottom-1 left-3 flex space-x-3 text-black">
            <button type="button" className="hover:text-blue-600" aria-label="Smart Actions">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </button>
            <button type="button" className="hover:text-blue-600" aria-label="Bookmark">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5v14l7-7 7 7V5a2 2 0 00-2-2H7a2 2 0 00-2 2z" />
              </svg>
            </button>
            <button type="button" className="hover:text-blue-600" aria-label="Emoji">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12s4.477 10 10 10 10-4.484 10-10S17.523 2 12 2zM8 9a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm8 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-8.5 5a6.985 6.985 0 0013 0h-13z" />
              </svg>
            </button>
          </div>
          <div className="absolute right-3 bottom-1 flex items-center space-x-2">
            <button
              onClick={handleSend}
              className="text-gray-400 font-semibold text-sm"
              aria-label="Send"
            >
              Send
            </button>
            <button
              type="button"
              className="text-gray-400"
              aria-label="More options"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatWindow;

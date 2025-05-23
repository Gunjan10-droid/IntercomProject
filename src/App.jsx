import { useState } from 'react';
import UserList from './components/UserList';
import ChatWindow from './components/ChatWindow';
import CopilotPanel from './components/CopilotPanel';
import './App.css';

function App() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [conversations, setConversations] = useState({});

  const handleSendMessage = (userId, message) => {
    if (!message.trim()) return;
    const updated = [...(conversations[userId] || []), { from: 'me', text: message }];
    setConversations((prev) => ({ ...prev, [userId]: updated }));
    setTimeout(() => {
      const reply = { from: 'user', text: 'Thanks for reaching out!' };
      setConversations((prev) => ({
        ...prev,
        [userId]: [...(prev[userId] || []), { from: 'me', text: message }, reply],
      }));
    }, 1200);
  };

  return (
    <div className="flex h-screen">
      <UserList onSelectUser={setSelectedUser} selectedUser={selectedUser} />
      <ChatWindow
        selectedUser={selectedUser}
        messages={selectedUser ? conversations[selectedUser.id] || [] : []}
        onSendMessage={(msg) => handleSendMessage(selectedUser.id, msg)}
      />
      <CopilotPanel
        selectedUser={selectedUser}
        latestMessage={
          selectedUser && conversations[selectedUser.id]?.slice(-1)[0]
        }
      />
    </div>
  );
}

export default App;
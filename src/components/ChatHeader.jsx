// components/ChatHeader.jsx
function ChatHeader({ user }) {
  return (
    <div className="flex justify-between items-center p-4 border-b bg-white">
      <div className="font-semibold text-lg">{user?.name || 'No user selected'}</div>
      <div className="space-x-2">
        <button className="text-sm text-gray-500">Close</button>
        <button className="text-sm font-medium text-indigo-600">AI Copilot</button>
        <button className="text-sm text-gray-500">Details</button>
      </div>
    </div>
  );
}

export default ChatHeader;

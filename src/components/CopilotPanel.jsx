import { useState } from 'react';
import { BotIcon, InfoIcon } from 'lucide-react';
import { ArrowUpIcon } from 'lucide-react';
import { Menu } from "lucide-react";
function CopilotPanel({ selectedUser, latestMessage, onBack }) {
  const [activeTab, setActiveTab] = useState('copilot');
  const [input, setInput] = useState('');

  return (
    <div className="w-full h-full overflow-y-auto md:w-1/3 flex flex-col justify-between bg-gradient-to-tl from-pink-100 via-purple-50 to-purple-100 p-6">

      <div className="flex border-b border-gray-300 shadow-sm">
        <button
          onClick={() => setActiveTab('copilot')}
          className={`flex-1 py-2 text-sm font-medium border-b-2 ${activeTab === 'copilot'
            ? 'border-blue-500 text-blue-600 '
            : 'border-transparent text-gray-500 hover:text-blue-500'
            }`}
        >
          AI Copilot
        </button>
        <button
          onClick={() => setActiveTab('details')}
          className={`flex-1 py-2 text-sm font-medium border-b-2 ${activeTab === 'details'
            ? 'border-blue-500 text-blue-600 '
            : 'border-transparent text-gray-500 hover:text-blue-500'
            }`}
        >
          Details
        </button>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center px-6">
        <div className="p-6 text-center max-w-xs w-full">
          {activeTab === 'copilot' ? (
            <>
              <BotIcon className="w-10 h-10 text-blue-400 mx-auto mb-3" />
              <h2 className="font-semibold text-lg mb-1">Hi, I’m Fin, your AI Copilot</h2>
              <p className="text-sm text-gray-600">
                Ask me anything about this conversation
              </p>
            </>
          ) : (
            <>
              <InfoIcon className="w-10 h-10 text-blue-400 mx-auto mb-3" />
              <h2 className="font-semibold text-lg mb-1">Conversation Details</h2>
              <p className="text-sm text-gray-600">
                Info about this chat will appear here.
              </p>
            </>
          )}
        </div>
      </div>

      <div className="bg-white p-1 rounded-md">
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Ask something..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            className="p-2 rounded-md bg-white text-gray-500  transition"
            aria-label="Send"
          >
            <ArrowUpIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CopilotPanel;

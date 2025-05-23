import React from "react";
import { ChevronDown } from "lucide-react";

const users = [
  {
    id: 1,
    name: "Luis",
    source: "Github",
    lastMessage: "Hey! I have a question...",
    time: "45m",
    active: false,
  },
  {
    id: 2,
    name: "Ivan",
    source: "Nike",
    lastMessage: "Hi there, I have a qu...",
    time: "3min",
    active: true,
  },
  {
    id: 3,
    name: "Lead from New York",
    source: "",
    lastMessage: "Good morning, let me...",
    time: "40m",
    active: false,
  },
  {
    id: 4,
    name: "Booking API problems",
    source: "Bug report",
    lastMessage: "Luis - Small Crafts",
    time: "45m",
    active: false,
  },
  {
    id: 5,
    name: "Miracle",
    source: "Exemplary Bank",
    lastMessage: "Hey there, I'm here to...",
    time: "45m",
    active: false,
  },
];

function UserList({ onSelectUser, selectedUser }) {
  return (
    <div className="w-full md:w-1/4 h-full flex flex-col bg-white">
      <div className="px-4 py-3 border-b border-gray-100">
        <h2 className="text-xl font-bold pb-1">Your inbox</h2>
      </div>
      <div className="flex justify-between text-sm text-black font-bold px-5 mt-1">
        <div className="flex items-center gap-1 cursor-pointer hover:underline">
          <span>5 Open</span>
          <ChevronDown size={12} />
        </div>
        <div className="flex items-center gap-1 cursor-pointer hover:underline">
          <span>Waiting longest</span>
          <ChevronDown size={12} />
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        {users.map((user) => {
          const isActive = selectedUser?.id === user.id;
          return (
            <div
              key={user.id}
              onClick={() => onSelectUser(user)}
              className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition duration-200 ${isActive ? "bg-gray-100" : "hover:bg-gray-50"
                }`}
            >

              <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-sm font-medium">
                {user.name.charAt(0)}
              </div>

              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium truncate">
                  {user.source ? `${user.name} - ${user.source}` : user.name}
                </div>
                <div className="text-xs text-gray-500 truncate">{user.lastMessage}</div>
              </div>

              <div className="text-xs whitespace-nowrap">
                {user.active ? (
                  <span className="text-black bg-amber-100 px-1 rounded-full font-semibold">3min</span>
                ) : (
                  <span className="text-gray-400">{user.time}</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UserList;

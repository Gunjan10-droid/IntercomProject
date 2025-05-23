![image](https://github.com/user-attachments/assets/c9286878-14bd-4b6c-b823-8f0b69cecb51)# Intercom Clone


Deploy Link: intercom-project.vercel.app
** Features ** 
🧑‍🤝‍🧑 User List
Displays a curated list of users with avatars, last messages, timestamps, and active status badges.

Clickable users to select and view chat history.

Clean, minimal design with hover and active states for better user interaction.

Filter UI elements are visually prepared (e.g., “5 Open,” “Waiting Longest”) but not functionally active yet.

💬 Chat Window
Shows conversation history between the current user ("me") and the selected user.

Animated message transitions using framer-motion for smooth appearance and exit effects.

User avatars generated dynamically via DiceBear API.

Input box supports sending messages via the Send button or pressing Enter.

Chat header includes user info, action buttons for options like menu, night mode toggle, and closing chat (UI-only).

🤖 AI Copilot Panel
Two tabs: “AI Copilot” and “Details” with intuitive tab switching.

Friendly AI introduction with a bot icon, encouraging users to ask questions about the chat.

Details tab placeholder for conversation info (expandable for future functionality).

Input box designed for asking AI questions (UI-only, no backend AI integration yet).

Tech Stack
React with functional components and hooks for state management.

framer-motion for animations.

lucide-react and react-icons for modern SVG icons.

Tailwind CSS for rapid, responsive styling (note: responsiveness is limited in the current version).

DiceBear API for generating unique avatars based on user names.

** Project Structure **
App.js — Main container handling user selection, conversation state, and message flow.

components/UserList.js — Displays the user sidebar with clickable contacts.

components/ChatWindow.js — Main chat area with messages, input, and header.

components/CopilotPanel.js — Right sidebar for AI assistant with tabbed UI.

App.css — Global styles including custom overrides.



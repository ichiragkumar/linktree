import { useState } from "react";

const users = [
  {
    id: 1,
    username: "JohnDoe",
    email: "john@example.com",
    avatar: "https://i.pravatar.cc/150?img=1",
    links: ["https://github.com/JohnDoe", "https://twitter.com/JohnDoe"],
  },
  {
    id: 2,
    username: "JaneSmith",
    email: "jane@example.com",
    avatar: "https://i.pravatar.cc/150?img=2",
    links: ["https://linkedin.com/in/JaneSmith", "https://dribbble.com/JaneSmith"],
  },
  {
    id: 3,
    username: "BobJones",
    email: "bob@example.com",
    avatar: "https://i.pravatar.cc/150?img=3",
    links: ["https://facebook.com/BobJones", "https://instagram.com/BobJones"],
  },
  {
    id: 4,
    username: "AliceWilliams",
    email: "alice@example.com",
    avatar: "https://i.pravatar.cc/150?img=4",
    links: ["https://twitter.com/AliceWilliams", "https://dribbble.com/AliceWilliams"],
  },
];

interface SidebarProps {
  onSelectUser: (user: typeof users[0]) => void;
}

const Sidebar = ({ onSelectUser }: SidebarProps) => {
  const [hoveredUser, setHoveredUser] = useState<number | null>(null);

  return (
    <div className="w-64 h-screen bg-gray-950 text-gray-300 overflow-y-auto p-4">
      {users.map((user) => (
        <div
          key={user.id}
          onMouseEnter={() => setHoveredUser(user.id)}
          onMouseLeave={() => setHoveredUser(null)}
          onClick={() => onSelectUser(user)}
          className="cursor-pointer mb-4 p-3 hover:bg-gray-800 rounded-xl transition-all duration-300 relative"
        >
          <span className="font-medium">@{user.username}</span>

          {hoveredUser === user.id && (
            <div className="absolute -top-24 left-0 bg-gray-800 text-white p-4 rounded-2xl shadow-lg w-64 transition-all duration-300 z-50">
              <div className="absolute left-4 top-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gray-800" />
              <img
                src={user.avatar}
                alt="Avatar"
                className="w-16 h-16 rounded-full mb-3 mx-auto"
              />
              <p className="text-center text-lg font-semibold">{user.username}</p>
              <p className="text-center text-sm text-gray-400">{user.email}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;

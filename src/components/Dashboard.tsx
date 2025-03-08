import { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import UserProfile from './UserProfile';

interface User {
  id: number;
  username: string;
  email: string;
  avatar: string;
  links: string[];
}

interface DashboardProps {
  user: {
    username: string;
    links: string[];
  } | null;
}

const Dashboard = ({ user }: DashboardProps) => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleSelectUser = (user: User) => {
    setSelectedUser(user);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      <Topbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar onSelectUser={handleSelectUser} />
        <main className="flex-1 overflow-y-auto">
          {selectedUser ? (
            <UserProfile user={selectedUser} />
          ) : (
            <div className="flex-1 p-4 flex flex-col items-center justify-center">
              <h2 className="text-2xl font-bold mb-4">Welcome, {user?.username}</h2>
              <p className="text-gray-400">Select a user from the sidebar to view their links</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import UserProfile from "./components/UserProfile";

function App() {
  const [selectedUser, setSelectedUser] = useState<{
    username: string;
    links: string[];
  } | null>(null);

  return (
    <div className="flex h-screen">
      <Sidebar onSelectUser={(user) => setSelectedUser(user)} />
      <div className="flex flex-col flex-1">
        <Topbar />
        <UserProfile user={selectedUser} />
      </div>
    </div>
  );
}

export default App;

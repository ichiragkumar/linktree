import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import UserProfile from './components/UserProfile';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const [selectedUser, setSelectedUser] = useState<{
    username: string;
    links: string[];
  } | null>(null);

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  return (
    <Routes>
      {/* Protected Route */}
      {isAuthenticated ? (
        <Route
          path="/"
          element={
            <div className="flex h-screen">
              <Sidebar onSelectUser={(user) => setSelectedUser(user)} />
              <div className="flex flex-col flex-1">
                <Topbar />
                <UserProfile user={selectedUser} />
              </div>
            </div>
          }
        />
      ) : (
        <Route path="/" element={<Navigate to="/landing" />} />
      )}

      {/* Public Routes */}
      <Route path="/landing" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;

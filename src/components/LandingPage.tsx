import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: 'john@example.com',
          password: 'password123',
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.msg || 'Failed to log in');
      }

      localStorage.setItem('token', data.token);
      navigate('/');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6">Welcome to Linktree</h1>
      <div className="space-x-4">
        <button
          onClick={handleLogin}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition"
        >
          Log In
        </button>
        <button
          onClick={() => navigate('/signup')}
          className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-6 rounded-lg transition"
        >
          Create Account
        </button>
      </div>
      {error && <p className="text-red-400 mt-4">{error}</p>}
    </div>
  );
};

export default LandingPage;

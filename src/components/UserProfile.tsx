interface UserProfileProps {
    user: {
      username: string;
      links: string[];
    } | null;
  }
  
  const UserProfile = ({ user }: UserProfileProps) => {
    if (!user) {
      return <div className="flex-1 p-4 text-gray-500">Select a user to view links</div>;
    }
  
    return (
      <div className="flex-1 p-4">
        <h2 className="text-2xl font-bold mb-4">{user.username}'s Links</h2>
        <ul>
          {user.links.map((link, index) => (
            <li key={index} className="mb-2">
              <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default UserProfile;
  
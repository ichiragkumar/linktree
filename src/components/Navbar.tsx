export const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-8 py-4 bg-white shadow-sm">
      {/* Logo */}
      <div className="text-2xl font-bold text-purple-600">
        Linktree
      </div>

      {/* Center Menu */}
      <div className="flex gap-8 text-gray-700 font-medium">
        <div className="hover:text-purple-600 cursor-pointer">Products</div>
        <div className="hover:text-purple-600 cursor-pointer">Templates</div>
        <div className="hover:text-purple-600 cursor-pointer">Marketplace</div>
        <div className="hover:text-purple-600 cursor-pointer">Learn</div>
        <div className="hover:text-purple-600 cursor-pointer">Pricing</div>
      </div>

      {/* Right Buttons */}
      <div className="flex items-center gap-4">
        <button className="text-gray-700 hover:text-purple-600 font-medium">
          Log in
        </button>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition">
          Sign up
        </button>
      </div>
    </div>
  );
};

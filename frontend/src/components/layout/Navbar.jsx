import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          
          {/* LEFT: LOGO */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
              📚
            </div>
            <span className="font-semibold text-lg text-gray-800">
              City Library
            </span>
          </div>

          {/* CENTER: LINKS */}
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>
            <Link to="/catalog" className="hover:text-blue-600">
              Catalog
            </Link>
            <Link to="/about" className="hover:text-blue-600">
              About
            </Link>
            <Link to="/contact" className="hover:text-blue-600">
              Contact
            </Link>
          </div>

          {/* RIGHT: ACTIONS */}
          <div className="flex items-center gap-4">
            <Link
              to="/login"
              className="text-sm text-gray-600 hover:text-blue-600"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700"
            >
              Join
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

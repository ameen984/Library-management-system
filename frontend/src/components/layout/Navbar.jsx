import { Link } from "react-router-dom";
import { useGetMeQuery, useLogoutMutation } from "../../services/authApi";

const Navbar = () => {
  const { data, isLoading } = useGetMeQuery();
  const [logout] = useLogoutMutation();

  const user = data?.user;

  const handleLogout = async () => {
    await logout();
    window.location.href = "/login"; // force refresh
  };

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
            <Link to="/" className="hover:text-blue-600">
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

            {/* LOADING STATE */}
            {isLoading && (
              <p className="text-gray-500 text-sm">Loading...</p>
            )}

            {/* IF LOGGED OUT */}
            {!isLoading && !user && (
              <>
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
              </>
            )}

            {/* IF LOGGED IN */}
            {!isLoading && user && (
              <>
                <span className="text-gray-700 text-sm">
                  Hi, {user.name}
                </span>

                {/* Role-based dashboard link */}
                {user.role === "admin" && (
                  <Link
                    to="/admin/dashboard"
                    className="text-sm bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                  >
                    Admin Panel
                  </Link>
                )}

                {user.role === "librarian" && (
                  <Link
                    to="/librarian/dashboard"
                    className="text-sm bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                  >
                    Librarian Panel
                  </Link>
                )}

                {/* Logout */}
                <button
                  onClick={handleLogout}
                  className="text-sm text-red-500 hover:text-red-600"
                >
                  Logout
                </button>
              </>
            )}

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

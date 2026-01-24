import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="px-8 py-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;

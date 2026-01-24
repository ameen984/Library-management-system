import Navbar from "../components/layout/Navbar";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <main className="px-8 py-6 min-h-screen bg-gray-50">
        <Outlet />
      </main>
    </>
  );
};

export default PublicLayout;

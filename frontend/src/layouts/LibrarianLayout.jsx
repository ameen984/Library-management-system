import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";

const LibrarianLayout = () => {
  return (
    <>
      <Navbar />
      <main className="px-8 py-6 min-h-screen bg-gray-50">
        <Outlet />
      </main>
    </>
  );
};

export default LibrarianLayout;

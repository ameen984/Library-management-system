import React from "react";
import PublicLayout from "./layouts/PublicLayout";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import PublicCatalog from "./pages/PublicCatalog";
import LibrarianLayout from "./layouts/LibrarianLayout";
import LibrarianDashboard from "./pages/librarian/LibrarianDashboard";
import AdminLayout from "./layouts/AdminLayout";
import Login from "./pages/Login";
import AdminDashboard from "./pages/admin/AdminDashboard";
const App = () => {
  return (
    <Routes>
        <Route path="/login" element={<Login />} />
      {/* PUBLIC ROUTES */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<PublicCatalog />} />
      </Route>

      {/* LIBRARIAN ROUTES */}
      <Route element={<LibrarianLayout />}>
        <Route path="/librarian/dashboard" element={<LibrarianDashboard />} />
      </Route>

      <Route element={<AdminLayout />}>
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Route>
    </Routes>
  );
};

export default App;

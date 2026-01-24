import AdminStats from "../../components/admin/AdminStats";
import RecentActivity from "../../components/admin/RecentActivity";
import UserTable from "../../components/admin/UserTable";

const AdminDashboard = () => {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-semibold text-gray-800">
          Admin Dashboard
        </h1>
        <p className="text-gray-500">
          System overview and management
        </p>
      </div>

      <AdminStats />

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <UserTable />
        </div>
        <RecentActivity />
      </div>
    </div>
  );
};

export default AdminDashboard;

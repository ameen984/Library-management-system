import QuickActions from "../../components/librarian/QuickActions";
import IssuedBooksTable from "../../components/librarian/IssuedBooksTable";
import PendingReturnsTable from "../../components/librarian/PendingReturnsTable";
import LibrarianStats from "../../components/librarian/LibrarianStats";

const LibrarianDashboard = () => {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-semibold text-gray-800">
          Librarian Dashboard
        </h1>
        <p className="text-gray-500">Manage daily library operations</p>
      </div>

      {/* Stats */}
      <LibrarianStats />

      {/* Quick Actions */}
      <QuickActions />

      {/* Tables */}
      <IssuedBooksTable />
      <PendingReturnsTable />
    </div>
  );
};

export default LibrarianDashboard;

const RecentActivity = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="font-semibold text-lg mb-4">Recent Activity</h3>

      <ul className="space-y-3 text-sm text-gray-600">
        <li>Admin added new librarian</li>
        <li>Book "Clean Code" removed</li>
        <li>User role updated</li>
      </ul>
    </div>
  );
};

export default RecentActivity;

const UserTable = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="font-semibold text-lg mb-4">User Management</h3>

      <table className="w-full text-left">
        <thead className="border-b text-gray-500">
          <tr>
            <th>User</th>
            <th>Role</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td>Emma Johnson</td>
            <td>Admin</td>
            <td className="text-green-600">Active</td>
          </tr>
          <tr>
            <td>Phil Adams</td>
            <td>Librarian</td>
            <td className="text-green-600">Active</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;

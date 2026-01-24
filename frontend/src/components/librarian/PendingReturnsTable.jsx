const PendingReturnsTable = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="font-semibold text-lg mb-4">Pending Returns</h3>

      <table className="w-full text-left">
        <thead className="text-gray-500 border-b">
          <tr>
            <th>Book</th>
            <th>User</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td>The Pragmatic Programmer</td>
            <td>Sarah Brown</td>
            <td>
              <button className="bg-orange-500 text-white px-4 py-1 rounded">
                Return
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PendingReturnsTable;

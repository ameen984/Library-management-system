const IssuedBooksTable = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="font-semibold text-lg mb-4">Today’s Issued Books</h3>

      <table className="w-full text-left">
        <thead className="text-gray-500 border-b">
          <tr>
            <th>Book</th>
            <th>User</th>
            <th>Due Date</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td>Clean Code</td>
            <td>Phil Adams</td>
            <td>14 days</td>
          </tr>
          <tr>
            <td>Atomic Habits</td>
            <td>Sarah Brown</td>
            <td>10 days</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default IssuedBooksTable;

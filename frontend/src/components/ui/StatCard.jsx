const StatCard = ({ title, value, color = "white" }) => {
  const bg =
    color === "white" ? "bg-white" : `bg-${color}-50`;

  return (
    <div className={`rounded-xl p-6 shadow-sm ${bg}`}>
      <p className="text-gray-600 text-sm">{title}</p>
      <h2 className="text-2xl font-semibold mt-2">{value}</h2>
    </div>
  );
};

export default StatCard;

import StatCard from "./StatCard";

const StatsPanel = ({ stats }) => {
  return (
    <div className="grid grid-cols-4 gap-6">
      {stats.map((stat) => (
        <StatCard
          key={stat.title}
          title={stat.title}
          value={stat.value}
          color={stat.color}
        />
      ))}
    </div>
  );
};

export default StatsPanel;

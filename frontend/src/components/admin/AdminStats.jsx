import StatsPanel from "../ui/StatsPanel";

const AdminStats = () => {
  const adminStats = [
    {
      title: "Total Books",
      value: 1280,
    },
    {
      title: "Books Issued",
      value: 955,
    },
    {
      title: "Active Users",
      value: 578,
    },
    {
      title: "Librarians",
      value: 6,
    },
  ];

  return <StatsPanel stats={adminStats} />;
};

export default AdminStats;

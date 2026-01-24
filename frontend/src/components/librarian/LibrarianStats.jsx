import StatsPanel from "../ui/StatsPanel";

const LibrarianStats = () => {
  const librarianStats = [
    {
      title: "Total Books",
      value: 1280,
      color: "blue",
    },
    {
      title: "Available Books",
      value: 325,
      color: "green",
    },
    {
      title: "Issued Today",
      value: 54,
      color: "yellow",
    },
    {
      title: "Pending Returns",
      value: 12,
      color: "red",
    },
  ];

  return <StatsPanel stats={librarianStats} />;
};

export default LibrarianStats;

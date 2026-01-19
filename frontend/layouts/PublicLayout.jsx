import Navbar from "../src/components/layout/Navbar";



const PublicLayout = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>
      <main className="px-8 py-6 min-h-screen bg-gray-50">
        {children}
      </main>
     
    </>
  );
};

export default PublicLayout;

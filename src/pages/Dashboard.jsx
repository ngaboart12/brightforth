// src/pages/Dashboard.jsx
import React from "react";
import TableOfAplicant from "../components/Dashboard/TableOfAplicant";
// ...

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 p-4 bg-gray-800 text-white">
        <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
        <nav>
          <a href="#" className="block py-2 px-4 hover:bg-gray-700">
            Link 1
          </a>
          <a href="#" className="block py-2 px-4 hover:bg-gray-700">
            Link 2
          </a>
          {/* Add more navigation links as needed */}
        </nav>
      </aside>

      <main className="flex-1 p-8 overflow-hidden">
        <h2 className="text-2xl font-semibold mb-4">
          Welcome to the Dashboard
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
          {/* Add your dashboard components here */}
          <div className="bg-white p-4 rounded shadow-md">
            <h3 className="text-lg font-semibold mb-2">Component 1</h3>
            <TableOfAplicant />
          </div>

          {/* Add more components as needed */}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

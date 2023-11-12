import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const TableOfAplicant = () => {
  const [formDataList, setFormDataList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "formData"));
        const formDataArray = [];
        querySnapshot.forEach((doc) => {
          formDataArray.push(doc.data());
        });
        setFormDataList(formDataArray);
      } catch (error) {
        console.error("Error fetching documents: ", error);
      }
    };

    // Call fetchData when the component mounts
    fetchData();
  }, []);

  const downloadData = () => {
    const jsonData = JSON.stringify(formDataList, null, 2);

    const blob = new Blob([jsonData], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "formData.json";
    link.click();
  };

  return (
    <main className="flex-1 p-8 overflow-hidden">
      <h2 className="text-2xl font-semibold mb-4">Welcome to the Dashboard</h2>

      {/* Table of applying people */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Applying People</h3>
        <table className="min-w-full bg-white border border-gray-300">
          {/* ... Table structure remains the same ... */}
        </table>
      </div>

      {/* File Upload Section */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Upload Diploma Files</h3>
        <input type="file" className="mb-4" />
        <button className="bg-blue-500 text-white py-2 px-4 rounded">
          Upload
        </button>
      </div>

      {/* Download All Data Section */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Download All Data</h3>
        <button
          onClick={downloadData}
          className="bg-green-500 text-white py-2 px-4 rounded"
        >
          Download All Data
        </button>
      </div>
    </main>
  );
};

export default TableOfAplicant;

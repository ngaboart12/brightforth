import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const TableOfApplicant = () => {
  const [formDataList, setFormDataList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "formData"));
        const formDataArray = [];
        querySnapshot.forEach((doc) => {
          formDataArray.push({ id: doc.id, ...doc.data() });
        });
        setFormDataList(formDataArray);
      } catch (error) {
        console.error("Error fetching documents: ", error);
        setError("An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    // Call fetchData when the component mounts
    fetchData();
  }, []);

  const downloadRowData = (rowData) => {
    const jsonData = JSON.stringify(rowData, null, 2);

    const blob = new Blob([jsonData], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `formData_${rowData.stage1.firstName}.json`;
    link.click();
  };

  return (
    <main className="flex-1 p-8 overflow-hidden">
      <h2 className="text-2xl font-semibold mb-4">Welcome to the Dashboard</h2>

      {/* Table of applying people */}
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Applying People</h3>
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">First Name</th>
                <th className="py-2 px-4 border-b">Last Name</th>
                <th className="py-2 px-4 border-b">Country</th>
                <th className="py-2 px-4 border-b">Parent Name</th>
                <th className="py-2 px-4 border-b">Download</th>
              </tr>
            </thead>
            <tbody>
              {formDataList.map((applicant) => (
                <tr key={applicant.id}>
                  <td className="py-2 px-4 border-b">
                    {applicant.stage1.firstName}
                  </td>
                  <td className="py-2 px-4 border-b">
                    {applicant.stage1.lastName}
                  </td>
                  <td className="py-2 px-4 border-b">
                    {applicant.stage1.country}
                  </td>
                  <td className="py-2 px-4 border-b">
                    {applicant.stage3.parentName}
                  </td>
                  <td className="py-2 px-4 border-b">
                    <button
                      onClick={() => downloadRowData(applicant)}
                      className="bg-green-500 text-white py-2 px-4 rounded"
                    >
                      Export Data
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* File Upload Section */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Upload Diploma Files</h3>
        <input type="file" className="mb-4" />
        <button className="bg-blue-500 text-white py-2 px-4 rounded">
          Upload
        </button>
      </div>
    </main>
  );
};

export default TableOfApplicant;

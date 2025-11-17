import React, { useState } from "react";
import axios from "axios";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [showList, setShowList] = useState(false);

  const fetchStudents = async () => {
    try {
      const res = await axios.get("http://localhost:8080/students");
      setStudents(res.data);
      setShowList(true);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  return (
    <div className="p-6">
      <button
        onClick={fetchStudents}
        className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Show Student List
      </button>

      {showList && (
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-3">Student List</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">ID</th>
                <th className="border p-2">Name</th>
                <th className="border p-2">University Eamil</th>
                <th className="border p-2">Regd No</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s) => (
                <tr key={s.id} className="text-center">
                  <td className="border p-2">{s.id}</td>
                  <td className="border p-2">{s.full_name}</td>
                  <td className="border p-2">{s.university_mail}</td>
                   <td className="border p-2">{s.redg_no}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default StudentList;

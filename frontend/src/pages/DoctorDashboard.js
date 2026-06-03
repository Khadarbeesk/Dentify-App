import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import API from "../config";

export default function DoctorDashboard() {

  const role = localStorage.getItem("role");
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API}/api/appointments/doctor`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    })
      .then(res => res.json())
      .then(data => {
        setAppointments(data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (role !== "doctor") {
    return <Navigate to="/" />;
  }
const updateStatus = async (id, status) => {
  try {

    await fetch(
      `fetch(${API}/api/appointments/doctor/${id}/status`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer " + localStorage.getItem("token")
        },
        body: JSON.stringify({ status })
      }
    );

    setAppointments(prev =>
      prev.map(a =>
        a._id === id
          ? { ...a, status }
          : a
      )
    );

  } catch (err) {
    console.log(err);
  }
};
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">

      {/* HEADER */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        👨‍⚕️ Doctor Dashboard
      </h1>

      {/* LOADING */}
      {loading && (
        <div className="flex justify-center mt-10">
          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* EMPTY STATE */}
      {!loading && appointments.length === 0 && (
        <div className="bg-white p-10 rounded-xl shadow text-center">
          <h2 className="text-xl text-gray-600 font-medium">
            No appointments yet 📭
          </h2>
          <p className="text-gray-400 mt-2">
            Once patients book, they will appear here.
          </p>
        </div>
      )}

      {/* TABLE */}
      {!loading && appointments.length > 0 && (
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">

          {/* TABLE HEADER */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 font-semibold">
            Appointment Details
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-center">

              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="p-3">Patient</th>
                  <th className="p-3">Age</th>
                  <th className="p-3">Gender</th>
                  <th className="p-3">Date</th>
                  <th className="p-3">Time</th>
                  <th className="p-3">Clinic</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>

              <tbody>
                {appointments.map((a, i) => (
                  <tr key={i} className="border-t hover:bg-gray-50 transition">

                    <td className="p-3 font-medium">{a.patientName}</td>

                    <td className="p-3">{a.age}</td>

                    <td className="p-3">
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        a.gender?.toLowerCase() === "female"
                          ? "bg-pink-100 text-pink-600"
                          : "bg-blue-100 text-blue-600"
                      }`}>
                        {a.gender}
                      </span>
                    </td>

                    <td className="p-3">
                      {new Date(a.date).toLocaleDateString()}
                    </td>

                    <td className="p-3">
                      <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm font-medium">
                        {a.time}
                      </span>
                    </td>

                    <td className="p-3">{a.clinicName}</td>
              <td className="p-3">
  {a.status === "Cancelled By User" ? (
    <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full">
      Cancelled By User
    </span>
  ) : a.status === "Cancelled By Doctor" ? (
    <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full">
      Cancelled By Doctor
    </span>
  ) : (
    <select
      value={a.status}
      onChange={(e) =>
        updateStatus(a._id, e.target.value)
      }
      className="border rounded-lg px-2 py-1"
    >
      <option value="Booked">Booked</option>
      <option value="Confirmed">Confirmed</option>
      <option value="Completed">Completed</option>
      <option value="Cancelled By Doctor">
        Cancelled By Doctor
      </option>
    </select>
  )}
</td>

                  </tr>
                ))}
              </tbody>

            </table>
          </div>

        </div>
      )}

    </div>
  );
}
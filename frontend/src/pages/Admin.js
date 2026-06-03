import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminCharts from "../components/AdminCharts";
import API from "../config";


export default function Admin() {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const role = localStorage.getItem("role");

    // ❌ BLOCK NON-ADMIN
    if (role !== "admin") {
     
      alert("Access denied");
      navigate("/");
      return;
    }

    fetch(`${API}/api/appointments`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    })
      .then(res => {
        // 🔍 debug

        if (!res.ok) {
          throw new Error("Failed to fetch appointments");
        }

        return res.json();
      })
      .then(data => {
       // 🔍 debug
        setAppointments(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error:", err);
        setLoading(false);
      });
  }, [navigate]);

  // ✅ STATS
  const total = appointments.length;
  const females = appointments.filter(
    a => a.gender?.toLowerCase() === "female"
  ).length;
  const males = appointments.filter(
    a => a.gender?.toLowerCase() === "male"
  ).length;

  return (
    
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen">

      {/* HEADER */}
      <div className="mb-8">
  <h1 className="text-4xl font-bold text-gray-900">
    📊 Admin Analytics Dashboard
  </h1>

  <p className="text-gray-500 mt-2">
    Monitor appointments, patient trends and clinic performance.
  </p>
</div>

      {/* STATS CARDS */}
{!loading && (
  <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-8">

    <div className="bg-white rounded-2xl shadow-lg p-6 border border-blue-100">
      <p className="text-gray-500 text-sm">
        Total Appointments
      </p>
      <h2 className="text-4xl font-bold text-blue-600 mt-2">
        {total}
      </h2>
    </div>

    <div className="bg-white rounded-2xl shadow-lg p-6 border border-green-100">
      <p className="text-gray-500 text-sm">
        Confirmed
      </p>
      <h2 className="text-4xl font-bold text-green-600 mt-2">
        {
          appointments.filter(
            a => a.status === "Confirmed"
          ).length
        }
      </h2>
    </div>

    <div className="bg-white rounded-2xl shadow-lg p-6 border border-purple-100">
      <p className="text-gray-500 text-sm">
        Completed
      </p>
      <h2 className="text-4xl font-bold text-purple-600 mt-2">
        {
          appointments.filter(
            a => a.status === "Completed"
          ).length
        }
      </h2>
    </div>

    <div className="bg-white rounded-2xl shadow-lg p-6 border border-red-100">
      <p className="text-gray-500 text-sm">
        Cancelled
      </p>
      <h2 className="text-4xl font-bold text-red-600 mt-2">
        {
          appointments.filter(
            a =>
              a.status === "Cancelled By User" ||
              a.status === "Cancelled By Doctor"
          ).length
        }
      </h2>
    </div>

    <div className="bg-white rounded-2xl shadow-lg p-6 border border-pink-100">
      <p className="text-gray-500 text-sm">
        Female Patients
      </p>
      <h2 className="text-4xl font-bold text-pink-600 mt-2">
        {females}
      </h2>
    </div>

  </div>
)}
      {/* LOADING */}
      {loading && (
        <div className="flex justify-center mt-10">
          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* EMPTY */}
      {!loading && appointments.length === 0 && (
        <p className="text-center text-gray-500 mt-10 text-lg">
          No appointments found
        </p>
      )}

      {/* TABLE */}
      {!loading && appointments.length > 0 && (
        <div className="bg-white shadow-xl rounded-xl overflow-hidden">

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
                  <th className="p-3">Dentist</th>
                 <th className="p-3">Clinic</th>
<th className="p-3">Status</th>
                </tr>
              </thead>

              <tbody>
                {appointments.map((a, i) => (
                  <tr key={i} className="border-t hover:bg-gray-50 transition">

                    <td className="p-3 font-medium">{a.patientName}</td>
                    <td className="p-3">{a.age}</td>

                    {/* GENDER */}
                    <td className="p-3">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          a.gender?.toLowerCase() === "female"
                            ? "bg-pink-100 text-pink-600"
                            : "bg-blue-100 text-blue-600"
                        }`}
                      >
                        {a.gender}
                      </span>
                    </td>

                    {/* DATE */}
                    <td className="p-3">
                      {a.date
                        ? new Date(a.date).toLocaleDateString()
                        : "N/A"}
                    </td>

                    {/* TIME */}
                    <td className="p-3">
                      <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm font-medium">
                        {a.time || "N/A"}
                      </span>
                    </td>

                    <td className="p-3">{a.dentistName}</td>
                    <td className="p-3">{a.clinicName}</td>
<td className="p-3">
  <span
    className={`px-3 py-1 rounded-full text-sm font-medium ${
      a.status === "Booked"
        ? "bg-blue-100 text-blue-600"
        : a.status === "Confirmed"
        ? "bg-green-100 text-green-600"
        : a.status === "Completed"
        ? "bg-purple-100 text-purple-600"
        : "bg-red-100 text-red-600"
    }`}
  >
    {a.status || "Booked"}
  </span>
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
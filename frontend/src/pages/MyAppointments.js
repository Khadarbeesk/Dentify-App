import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import API from "../config";

export default function MyAppointments() {

  const role = localStorage.getItem("role");
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const token = localStorage.getItem("token");

 // 🔥 debug

  // ❌ if no token → stop API call
  if (!token || token === "null" || token === "undefined") {
   
    setLoading(false);
    return;
  }

  fetch(`${API}/api/appointments/my`, {
    headers: {
      Authorization: `Bearer ${token}` // ✅ correct format
    }
  })
    .then(res => {
       // 🔥 debug
      return res.json();
    })
    .then(data => {
   
      setAppointments(data);
      setLoading(false);
    })
    .catch(err => {
      console.log(err);
      setLoading(false);
    });
}, []);

  if (role !== "user") {
    return <Navigate to="/" />;
  }
 const cancelAppointment = async (id) => {
  try {

    const res = await fetch(
      `${API}/api/appointments/cancel/${id}`,
      {
        method: "PUT",
        headers: {
          Authorization:
            "Bearer " + localStorage.getItem("token")
        }
      }
    );

    const data = await res.json();

    alert(data.msg);

    if (res.ok) {
      setAppointments(prev =>
        prev.map(a =>
          a._id === id
            ? {
                ...a,
                status: "Cancelled By User"
              }
            : a
        )
      );
    }

  } catch (err) {
    console.log(err);
  }
};

  return (
    <div className="p-6 min-h-screen bg-gray-50">

      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        📅 My Appointments
      </h1>

      {loading && <p>Loading...</p>}

      {!loading && appointments.length === 0 && (
        <div className="bg-white p-6 rounded-xl shadow text-center">
          No bookings yet
        </div>
      )}

      {!loading && appointments.length > 0 && (
        <div className="bg-white rounded-xl shadow overflow-hidden">

          <table className="w-full text-center">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3">Doctor</th>
                <th className="p-3">Date</th>
                <th className="p-3">Time</th>
                <th className="p-3">Clinic</th>
                <th className="p-3">Status</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>

            <tbody>
              {appointments.map((a, i) => (
                <tr key={i} className="border-t">
                  <td className="p-3">{a.dentistName}</td>
                  <td className="p-3">
                    {new Date(a.date).toLocaleDateString()}
                  </td>
                  <td className="p-3">{a.time}</td>
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
  {a.status}
</span>
</td>
<td className="p-3">
 {a.status === "Booked" ? (
  <button
    onClick={() => cancelAppointment(a._id)}
    className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
  >
    Cancel
  </button>
) : (
  "-"
)}
</td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      )}

    </div>
  );
}
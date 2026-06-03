import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid
} from "recharts";
import { Legend } from "recharts";
export default function AdminCharts({ appointments }) {

  const statusData = [
    {
      name: "Booked",
      value: appointments.filter(
        a => a.status === "Booked"
      ).length
    },
    {
      name: "Confirmed",
      value: appointments.filter(
        a => a.status === "Confirmed"
      ).length
    },
    {
      name: "Completed",
      value: appointments.filter(
        a => a.status === "Completed"
      ).length
    },
    {
      name: "Cancelled",
      value: appointments.filter(
        a =>
          a.status === "Cancelled By User" ||
          a.status === "Cancelled By Doctor"
      ).length
    }
  ];

  const genderData = [
    {
      name: "Male",
      value: appointments.filter(
        a => a.gender?.toLowerCase() === "male"
      ).length
    },
    {
      name: "Female",
      value: appointments.filter(
        a => a.gender?.toLowerCase() === "female"
      ).length
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6 mb-8">

      <div className="bg-white p-5 rounded-xl shadow">
        <h3 className="font-bold mb-4">
          Appointment Status
        </h3>

        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
           <Pie
  data={statusData}
  dataKey="value"
  innerRadius={70}
  outerRadius={110}
  label
>
              <Cell fill="#3B82F6" />
              <Cell fill="#22C55E" />
              <Cell fill="#A855F7" />
              <Cell fill="#EF4444" />
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white p-5 rounded-xl shadow">
        <h3 className="font-bold mb-4">
          Gender Distribution
        </h3>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={genderData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" />
          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}
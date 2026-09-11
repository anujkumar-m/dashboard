import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts"

function RevenueChart() {

  const data = [
    { month: "Jan", revenue: 40000 },
    { month: "Feb", revenue: 50000 },
    { month: "Mar", revenue: 45000 },
    { month: "Apr", revenue: 60000 },
    { month: "May", revenue: 75000 },
    { month: "Jun", revenue: 85000 }
  ]

  return (
    <div className="chart-card">

      <h2>Revenue Overview</h2>

      <ResponsiveContainer width="100%" height={300}>

        <LineChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="revenue"
            strokeWidth={3}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  )
}

export default RevenueChart
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from "recharts"

function UserStatusChart() {

  const data = [
    {
      name: "Active",
      value: 300
    },
    {
      name: "Inactive",
      value: 80
    }
  ]

  return (
    <div className="chart-card">

      <h2>User Status</h2>

      <ResponsiveContainer width="100%" height={300}>

        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} />
            ))}
          </Pie>

          <Tooltip />

        </PieChart>

      </ResponsiveContainer>

    </div>
  )
}

export default UserStatusChart
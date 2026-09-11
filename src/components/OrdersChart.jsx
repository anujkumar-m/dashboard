import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts"


function OrdersChart() {

  const data = [
    {
      month: "Jan",
      orders: 80
    },
    {
      month: "Feb",
      orders: 120
    },
    {
      month: "Mar",
      orders: 100
    },
    {
      month: "Apr",
      orders: 150
    },
    {
      month: "May",
      orders: 180
    },
    {
      month: "Jun",
      orders: 210
    }
  ]


  return (

    <div className="chart-card">

      <h2>
        Orders Overview
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >

        <BarChart data={data}>

          <CartesianGrid
            strokeDasharray="3 3"
          />

          <XAxis
            dataKey="month"
          />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="orders"
          />

        </BarChart>

      </ResponsiveContainer>

    </div>
  )
}

export default OrdersChart
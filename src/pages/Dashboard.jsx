import DashboardCard from "../components/DashboardCard"

function Dashboard() {

  const cards = [
    {
      title: "Total Users",
      value: "1,250",
      change: "+12%"
    },
    {
      title: "Total Products",
      value: "320",
      change: "+8%"
    },
    {
      title: "Revenue",
      value: "₹85,000",
      change: "+15%"
    },
    {
      title: "Orders",
      value: "540",
      change: "+10%"
    }
  ]

  return (
    <div className="dashboard">

      <h1>Dashboard</h1>

      <p>
        Welcome to your professional dashboard.
      </p>

      <div className="dashboard-cards">

        {cards.map((card) => (

          <DashboardCard
            key={card.title}
            title={card.title}
            value={card.value}
            change={card.change}
          />

        ))}

      </div>

    </div>
  )
}

export default Dashboard
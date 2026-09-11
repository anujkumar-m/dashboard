import RevenueChart from "../components/RevenueChart"
import UserStatusChart from "../components/UserStatusChart"
import OrdersChart from "../components/OrdersChart"

function Analytics() {

  const analyticsCards = [
    {
      title: "Total Revenue",
      value: "₹4,85,000",
      change: "+18.5%"
    },
    {
      title: "Total Users",
      value: "1,250",
      change: "+12.4%"
    },
    {
      title: "Total Orders",
      value: "540",
      change: "+9.8%"
    },
    {
      title: "Conversion Rate",
      value: "6.8%",
      change: "+2.1%"
    }
  ]


  return (
    <div className="analytics-page">

      <h1>Analytics</h1>

      <p className="page-description">
        Monitor your business performance and analytics.
      </p>


      {/* ANALYTICS CARDS */}

      <div className="dashboard-cards">

        {analyticsCards.map((card) => (

          <div
            className="dashboard-card"
            key={card.title}
          >

            <h3>
              {card.title}
            </h3>

            <h2>
              {card.value}
            </h2>

            <p>
              {card.change} from last month
            </p>

          </div>

        ))}

      </div>


      {/* CHARTS */}

      <div className="charts-grid">

        <RevenueChart />

        <UserStatusChart />
        <OrdersChart />

      </div>

    </div>
  )
}

export default Analytics
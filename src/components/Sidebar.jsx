import { NavLink } from "react-router-dom"

function Sidebar({ sidebarOpen, setSidebarOpen }) {

  const menuItems = [
    {
      name: "Dashboard",
      path: "/",
      icon: "🏠"
    },
    {
      name: "Users",
      path: "/users",
      icon: "👥"
    },
    {
      name: "Products",
      path: "/products",
      icon: "📦"
    },
    {
      name: "Analytics",
      path: "/analytics",
      icon: "📊"
    },
    {
      name: "Reports",
      path: "/reports",
      icon: "📄"
    },
    {
      name: "Settings",
      path: "/settings",
      icon: "⚙️"
    }
  ]

  return (
    <aside
      className={`sidebar ${
        sidebarOpen ? "open" : ""
      }`}
    >

      <div className="sidebar-logo">

        <h2>My Admin Panel</h2>

        <button
          className="sidebar-close"
          onClick={() => setSidebarOpen(false)}
        >
          ✕
        </button>

      </div>

      <nav className="sidebar-menu">

        {menuItems.map((item) => (

          <NavLink
            key={item.path}
            to={item.path}
            onClick={() => setSidebarOpen(false)}
          >

            <span className="menu-icon">
              {item.icon}
            </span>

            <span className="menu-text">
              {item.name}
            </span>

          </NavLink>

        ))}

      </nav>

    </aside>
  )
}

export default Sidebar
import { NavLink } from "react-router-dom"

function Sidebar({ sidebarOpen, setSidebarOpen }) {

  return (
    <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>

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

        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/analytics">Analytics</NavLink>
        <NavLink to="/reports">Reports</NavLink>
        <NavLink to="/settings">Settings</NavLink>

      </nav>

    </aside>
  )
}

export default Sidebar
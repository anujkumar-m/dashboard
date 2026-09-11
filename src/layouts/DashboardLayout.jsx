import { useState } from "react"

import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"

function DashboardLayout({ children }) {

  const [sidebarOpen, setSidebarOpen] = useState(false)

  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  return (
    <div
      className={`dashboard-layout ${
        sidebarCollapsed ? "sidebar-collapsed" : ""
      }`}
    >

      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="main-section">

        <Navbar
          onMenuClick={() => setSidebarOpen(true)}
          onCollapseClick={() =>
            setSidebarCollapsed(!sidebarCollapsed)
          }
        />

        <main className="main-content">
          {children}
        </main>

      </div>

    </div>
  )
}

export default DashboardLayout
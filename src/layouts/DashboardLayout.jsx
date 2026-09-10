import { useState } from "react"

import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"

function DashboardLayout({ children }) {

  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="dashboard-layout">

      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="main-section">

        <Navbar
          onMenuClick={() => setSidebarOpen(true)}
        />

        <main className="main-content">
          {children}
        </main>

      </div>

    </div>
  )
}

export default DashboardLayout
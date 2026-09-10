import { BrowserRouter, Routes, Route } from "react-router-dom"

import DashboardLayout from "./layouts/DashboardLayout"

import Dashboard from "./pages/Dashboard"
import Users from "./pages/Users"
import Products from "./pages/Products"
import Analytics from "./pages/Analytics"
import Reports from "./pages/Reports"
import Settings from "./pages/Settings"

function App() {
  return (
    <BrowserRouter>

      <DashboardLayout>

        <Routes>

          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/products" element={<Products />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />

        </Routes>

      </DashboardLayout>

    </BrowserRouter>
  )
}

export default App
import { useState } from "react"
import DataTable from "../components/DataTable"

function Users() {

  const [search, setSearch] = useState("")
  const [status, setStatus] = useState("All")

  const users = [
    {
      id: 1,
      name: "Anuj",
      email: "anuj@gmail.com",
      status: "Active"
    },
    {
      id: 2,
      name: "Rahul",
      email: "rahul@gmail.com",
      status: "Active"
    },
    {
      id: 3,
      name: "Arun",
      email: "arun@gmail.com",
      status: "Inactive"
    },
    {
      id: 4,
      name: "Kumar",
      email: "kumar@gmail.com",
      status: "Active"
    }
  ]

  const filteredUsers = users.filter((user) => {

  const matchesSearch =
    user.name.toLowerCase().includes(search.toLowerCase())

  const matchesStatus =
    status === "All" || user.status === status

  return matchesSearch && matchesStatus
})

  return (
    <div>

      <h1>Users</h1>

      <p>Manage all users here.</p>

      <div className="table-controls">

        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        >
        <option value="All">All</option>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
        </select>

      </div>

      <div className="table-container">

        <DataTable data={filteredUsers} />

      </div>

    </div>
  )
}

export default Users
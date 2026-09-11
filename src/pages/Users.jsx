import { useEffect, useState } from "react"
import DataTable from "../components/DataTable"

function Users() {

  const [users, setUsers] = useState([])

  const [search, setSearch] = useState("")
  const [status, setStatus] = useState("All")

  const [sortBy, setSortBy] = useState("id")

  const [currentPage, setCurrentPage] = useState(1)

  const [loading, setLoading] = useState(true)

  const [error, setError] = useState("")

  const usersPerPage = 5




  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")

      .then((response) => {

        if (!response.ok) {
          throw new Error("Failed to fetch users")
        }

        return response.json()
      })

      .then((data) => {

        const formattedUsers = data.map((user) => ({
          id: user.id,
          name: user.name,
          email: user.email,
          status: user.id % 2 === 0
            ? "Active"
            : "Inactive"
        }))

        setUsers(formattedUsers)

        setLoading(false)
      })

      .catch((error) => {

        console.error(error)

        setError("Unable to load users")

        setLoading(false)
      })

  }, [])



  const filteredUsers = users.filter((user) => {

    const matchesSearch =
      user.name
        .toLowerCase()
        .includes(search.toLowerCase())

    const matchesStatus =
      status === "All" ||
      user.status === status

    return matchesSearch && matchesStatus
  })



  const sortedUsers = [...filteredUsers].sort((a, b) => {

    if (sortBy === "name") {
      return a.name.localeCompare(b.name)
    }

    if (sortBy === "status") {
      return a.status.localeCompare(b.status)
    }

    return a.id - b.id
  })



  const totalPages = Math.ceil(
    sortedUsers.length / usersPerPage
  )

  const startIndex =
    (currentPage - 1) * usersPerPage

  const paginatedUsers = sortedUsers.slice(
    startIndex,
    startIndex + usersPerPage
  )



  if (loading) {
    return <h2>Loading users...</h2>
  }



  if (error) {
    return <h2>{error}</h2>
  }


  return (

    <div>

      <h1>Users</h1>

      <p>
        Manage all users here.
      </p>



      <div className="table-controls">

        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value)
            setCurrentPage(1)
          }}
        />


        <select
          value={status}
          onChange={(e) => {
            setStatus(e.target.value)
            setCurrentPage(1)
          }}
        >

          <option value="All">
            All
          </option>

          <option value="Active">
            Active
          </option>

          <option value="Inactive">
            Inactive
          </option>

        </select>


        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value)
          }
        >

          <option value="id">
            Sort by ID
          </option>

          <option value="name">
            Sort by Name
          </option>

          <option value="status">
            Sort by Status
          </option>

        </select>

      </div>



      <div className="table-container">

        <DataTable data={paginatedUsers} />

      </div>



      <div className="pagination">

        <button
          onClick={() =>
            setCurrentPage(currentPage - 1)
          }
          disabled={currentPage === 1}
        >
          Previous
        </button>


        <span>
          Page {currentPage} of {totalPages}
        </span>


        <button
          onClick={() =>
            setCurrentPage(currentPage + 1)
          }
          disabled={
            currentPage === totalPages
          }
        >
          Next
        </button>

      </div>

    </div>
  )
}

export default Users
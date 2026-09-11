import { useState } from "react"

function Reports() {

  const [search, setSearch] = useState("")
  const [type, setType] = useState("All")
  const [status, setStatus] = useState("All")
  const [sortBy, setSortBy] = useState("id")
  const [currentPage, setCurrentPage] = useState(1)

  const reportsPerPage = 5

  const reports = [
    {
      id: 1,
      name: "Monthly Sales Report",
      type: "Sales",
      date: "2026-09-01",
      status: "Completed"
    },
    {
      id: 2,
      name: "User Activity Report",
      type: "Users",
      date: "2026-09-02",
      status: "Completed"
    },
    {
      id: 3,
      name: "Product Inventory Report",
      type: "Inventory",
      date: "2026-09-03",
      status: "Pending"
    },
    {
      id: 4,
      name: "Revenue Analysis Report",
      type: "Finance",
      date: "2026-09-04",
      status: "Completed"
    },
    {
      id: 5,
      name: "Order Summary Report",
      type: "Sales",
      date: "2026-09-05",
      status: "Completed"
    },
    {
      id: 6,
      name: "Customer Report",
      type: "Users",
      date: "2026-09-06",
      status: "Pending"
    },
    {
      id: 7,
      name: "Stock Analysis Report",
      type: "Inventory",
      date: "2026-09-07",
      status: "Completed"
    }
  ]

  // Search and filtering
  const filteredReports = reports.filter((report) => {

    const matchesSearch =
      report.name
        .toLowerCase()
        .includes(search.toLowerCase())

    const matchesType =
      type === "All" || report.type === type

    const matchesStatus =
      status === "All" || report.status === status

    return matchesSearch && matchesType && matchesStatus
  })

  // Sorting
  const sortedReports = [...filteredReports].sort((a, b) => {

    if (sortBy === "name") {
      return a.name.localeCompare(b.name)
    }

    if (sortBy === "date") {
      return new Date(b.date) - new Date(a.date)
    }

    return a.id - b.id
  })

  // Pagination
  const totalPages = Math.ceil(
    sortedReports.length / reportsPerPage
  )

  const startIndex =
    (currentPage - 1) * reportsPerPage

  const paginatedReports = sortedReports.slice(
    startIndex,
    startIndex + reportsPerPage
  )

  // Download button
  const handleDownload = (report) => {
  const csvContent =
    "ID,Report Name,Type,Generated Date,Status\n" +
    `${report.id},"${report.name}",${report.type},${report.date},${report.status}`

  const blob = new Blob([csvContent], {
    type: "text/csv;charset=utf-8;"
  })

  const url = URL.createObjectURL(blob)

  const link = document.createElement("a")

  link.href = url
  link.download = `${report.name}.csv`

  document.body.appendChild(link)

  link.click()

  document.body.removeChild(link)

  URL.revokeObjectURL(url)
}

  return (
    <div>

      <h1>Reports</h1>

      <p className="page-description">
        View, manage and download generated reports.
      </p>

      {/* Filters */}

      <div className="table-controls">

        <input
          type="text"
          placeholder="Search reports..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value)
            setCurrentPage(1)
          }}
        />

        <select
          value={type}
          onChange={(e) => {
            setType(e.target.value)
            setCurrentPage(1)
          }}
        >
          <option value="All">All Types</option>
          <option value="Sales">Sales</option>
          <option value="Users">Users</option>
          <option value="Inventory">Inventory</option>
          <option value="Finance">Finance</option>
        </select>

        <select
          value={status}
          onChange={(e) => {
            setStatus(e.target.value)
            setCurrentPage(1)
          }}
        >
          <option value="All">All Status</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="id">Sort by ID</option>
          <option value="name">Sort by Name</option>
          <option value="date">Sort by Date</option>
        </select>

      </div>

      {/* Reports Table */}

      <div className="table-container">

        <table className="data-table">

          <thead>

            <tr>
              <th>ID</th>
              <th>Report Name</th>
              <th>Type</th>
              <th>Generated Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>

          </thead>

          <tbody>

            {paginatedReports.map((report) => (

              <tr key={report.id}>

                <td>{report.id}</td>

                <td>{report.name}</td>

                <td>{report.type}</td>

                <td>{report.date}</td>

                <td>

                  <span
                    className={`status-badge ${
                      report.status === "Completed"
                        ? "active"
                        : "inactive"
                    }`}
                  >
                    {report.status}
                  </span>

                </td>

                <td>

                  <button
                    className="download-button"
                    onClick={() =>
                    handleDownload(report)
}
                  >
                    Download
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* Pagination */}

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
          disabled={currentPage === totalPages}
        >
          Next
        </button>

      </div>

    </div>
  )
}

export default Reports
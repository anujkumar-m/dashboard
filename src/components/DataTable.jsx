function DataTable({ data }) {

  return (
    <table className="data-table">

      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>

        {data.map((user) => (

          <tr key={user.id}>

            <td>{user.id}</td>

            <td>{user.name}</td>

            <td>{user.email}</td>

            <td>
              <span
                className={`status-badge ${
                  user.status.toLowerCase()
                }`}
              >
                {user.status}
              </span>
            </td>

          </tr>

        ))}

      </tbody>

    </table>
  )
}

export default DataTable
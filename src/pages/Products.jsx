import { useState } from "react"

function Products() {

  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All")
  const [sortBy, setSortBy] = useState("id")
  const [currentPage, setCurrentPage] = useState(1)

  const productsPerPage = 5

  const products = [
    {
      id: 1,
      name: "Laptop",
      category: "Electronics",
      price: 65000,
      stock: 25,
      status: "Available"
    },
    {
      id: 2,
      name: "Keyboard",
      category: "Electronics",
      price: 2500,
      stock: 50,
      status: "Available"
    },
    {
      id: 3,
      name: "Office Chair",
      category: "Furniture",
      price: 8500,
      stock: 12,
      status: "Available"
    },
    {
      id: 4,
      name: "Notebook",
      category: "Stationery",
      price: 120,
      stock: 100,
      status: "Available"
    },
    {
      id: 5,
      name: "Mouse",
      category: "Electronics",
      price: 1200,
      stock: 0,
      status: "Out of Stock"
    },
    {
      id: 6,
      name: "Desk",
      category: "Furniture",
      price: 12000,
      stock: 8,
      status: "Available"
    },
    {
      id: 7,
      name: "Pen",
      category: "Stationery",
      price: 50,
      stock: 200,
      status: "Available"
    },
    {
      id: 8,
      name: "Monitor",
      category: "Electronics",
      price: 18000,
      stock: 15,
      status: "Available"
    }
  ]


  /* =========================
     FILTER
  ========================= */

  const filteredProducts = products.filter((product) => {

    const matchesSearch =
      product.name
        .toLowerCase()
        .includes(search.toLowerCase())

    const matchesCategory =
      category === "All" ||
      product.category === category

    return matchesSearch && matchesCategory
  })


  /* =========================
     SORT
  ========================= */

  const sortedProducts = [...filteredProducts].sort(
    (a, b) => {

      if (sortBy === "name") {
        return a.name.localeCompare(b.name)
      }

      if (sortBy === "price") {
        return a.price - b.price
      }

      if (sortBy === "stock") {
        return a.stock - b.stock
      }

      return a.id - b.id
    }
  )


  /* =========================
     PAGINATION
  ========================= */

  const totalPages = Math.ceil(
    sortedProducts.length / productsPerPage
  )

  const startIndex =
    (currentPage - 1) * productsPerPage

  const paginatedProducts =
    sortedProducts.slice(
      startIndex,
      startIndex + productsPerPage
    )


  return (
    <div>

      <h1>Products</h1>

      <p>
        Manage all products here.
      </p>


      {/* CONTROLS */}

      <div className="table-controls">

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value)
            setCurrentPage(1)
          }}
        />


        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value)
            setCurrentPage(1)
          }}
        >

          <option value="All">
            All Categories
          </option>

          <option value="Electronics">
            Electronics
          </option>

          <option value="Furniture">
            Furniture
          </option>

          <option value="Stationery">
            Stationery
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

          <option value="price">
            Sort by Price
          </option>

          <option value="stock">
            Sort by Stock
          </option>

        </select>

      </div>


      {/* PRODUCT TABLE */}

      <div className="table-container">

        <table className="data-table">

          <thead>

            <tr>
              <th>ID</th>
              <th>Product</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Status</th>
            </tr>

          </thead>


          <tbody>

            {paginatedProducts.map((product) => (

              <tr key={product.id}>

                <td>
                  {product.id}
                </td>

                <td>
                  {product.name}
                </td>

                <td>
                  {product.category}
                </td>

                <td>
                  ₹{product.price.toLocaleString("en-IN")}
                </td>

                <td>
                  {product.stock}
                </td>

                <td>

                  <span
                    className={`status-badge ${
                      product.status === "Available"
                        ? "active"
                        : "inactive"
                    }`}
                  >
                    {product.status}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>


      {/* PAGINATION */}

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

export default Products
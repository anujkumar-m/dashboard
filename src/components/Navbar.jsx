function Navbar({ onMenuClick }) {

  return (
    <header className="navbar">

      <div className="navbar-left">

        <button
          className="menu-button"
          onClick={onMenuClick}
        >
          ☰
        </button>

        <h2>Welcome Back</h2>

      </div>

      <div className="navbar-user">
        <span>Admin</span>
      </div>

    </header>
  )
}

export default Navbar
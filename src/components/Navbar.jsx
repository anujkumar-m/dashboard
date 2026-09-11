function Navbar({ onMenuClick, onCollapseClick }) {

  return (
    <header className="navbar">

      <div className="navbar-left">

        <button
          className="menu-button mobile-menu"
          onClick={onMenuClick}
        >
          ☰
        </button>

        <button
          className="menu-button desktop-menu"
          onClick={onCollapseClick}
        >
          ☰
        </button>

        <h2>Welcome Back</h2>

      </div>

      <div className="navbar-user">
        <div className="user-avatar">
          A
        </div>

        <span>Admin</span>
      </div>

    </header>
  )
}

export default Navbar
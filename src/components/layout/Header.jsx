function Header({ onMenuClick }) {
  return (
    <header className="header">
      <div className="logo">424 PORTFOLIO</div>
      <button
        className="hamburger-btn"
        type="button"
        onClick={onMenuClick}
        aria-label="Open menu"
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  )
}

export default Header

import { Link, useLocation } from 'react-router-dom'

const menuItems = [
  { label: 'HOME', path: '/' },
  { label: 'ABOUT', path: '/about' },
  { label: 'WORK', path: '/work' },
  { label: 'PORTFOLIO', path: '/portfolio' },
  { label: 'CONTACTS', path: '/contacts' },
]

function SideMenu({ isOpen, onClose }) {
  const location = useLocation()

  return (
    <aside className={`side-menu ${isOpen ? 'open' : ''}`}>
      <nav>
        <ul>
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={location.pathname === item.path ? 'active' : ''}
                onClick={onClose}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default SideMenu

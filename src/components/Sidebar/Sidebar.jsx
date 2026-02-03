import { NAV_ITEMS } from '../../constants';

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav className="nav-menu">
        {NAV_ITEMS.map((item, index) => (
          <a key={index} href="#" className={`nav-item ${item.isActive ? 'active' : ''}`}>
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-text">{item.text}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;

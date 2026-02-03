import { APP_TITLE, USER_INFO } from '../constants';

function Header() {
  return (
    <header className="dashboard-header">
      <div className="header-left">
        <h1 className="app-title">{APP_TITLE}</h1>
      </div>
      <div className="header-center">
        <div className="search-container">
          <input type="text" placeholder="Search stocks..." className="search-input" />
          <button className="search-btn">🔍</button>
        </div>
      </div>
      <div className="header-right">
        <div className="user-profile">
          <span className="user-name">{USER_INFO.name}</span>
          <div className="avatar">{USER_INFO.initials}</div>
        </div>
      </div>
    </header>
  );
}

export default Header;

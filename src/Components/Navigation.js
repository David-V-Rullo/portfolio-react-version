const Navigation = () => {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand mb-0 h1" href="#">
          DVR
        </a>
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;

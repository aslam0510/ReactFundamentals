import React from 'react';
import { Link } from 'react-router-dom';
function Header({ title }) {
  return (
    <header
      className="mb-4 py-4"
      style={{ backgroundColor: 'light', textAlign: 'start' }}
    >
      <div className="container">
        <h3 className="pt-3 d-inline mr-5">{title}</h3>
        <Link className="pr-3" to="/">
          <h5 className="d-inline">Grocery List</h5>
        </Link>
        <Link className="pr-3" to="/color">
          <h5 className="d-inline">Color box</h5>
        </Link>
        
      </div>
    </header>
  );
}

Header.defaultProps = {
  title: 'default Title',
};
export default Header;

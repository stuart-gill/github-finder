import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// using react-router-dom "Link" rather than a href because Link preserves state between pages, where a href would reset

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon}></i>
        {title}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Campsite Finder',
  icon: 'fas fa-campground',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;

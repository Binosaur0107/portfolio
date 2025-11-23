import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px 20px', backgroundColor: '#f8f9fa', display: 'flex', justifyContent: 'center', gap: '20px' }}>
      <Link to="/" style={{ textDecoration: 'none', color: '#333' }}>Home</Link>
      <Link to="/about" style={{ textDecoration: 'none', color: '#333' }}>About</Link>
      <Link to="/projects" style={{ textDecoration: 'none', color: '#333' }}>Projects</Link>
      <Link to="/contact" style={{ textDecoration: 'none', color: '#333' }}>Contact</Link>
    </nav>
  );
}

export default Navbar;


import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-navy-dark border-b border-white/10 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="lg:text-2xl font-display font-bold text-gold">
          <Link to="/">DhanRaksha</Link>
        </div>
        <nav className="hidden md:block">
          <ul className="flex  space-x-1">
            <li>
              <Link to="/" className={`nav-item lg:text-lg  ${isActive('/') ? 'nav-item-active' : ''}`}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/authentication" className={`nav-item lg:text-lg ${isActive('/authentication') ? 'nav-item-active' : ''}`}>
                Authentication
              </Link>
            </li>
            <li>
              <Link to="/security" className={`nav-item lg:text-lg ${isActive('/security') ? 'nav-item-active' : ''}`}>
                Security
              </Link>
            </li>
            <li>
              <Link to="/payments" className={`nav-item lg:text-lg ${isActive('/payments') ? 'nav-item-active' : ''}`}>
                Payments
              </Link>
            </li>
            <li>
              <Link to="/transactions" className={`nav-item lg:text-lg ${isActive('/transactions') ? 'nav-item-active' : ''}`}>
                Transactions
              </Link>
            </li>
            <li>
              <Link to="/identity" className={`nav-item lg:text-lg ${isActive('/identity') ? 'nav-item-active' : ''}`}>
                Identity
              </Link>
            </li>
            <li>
              <Link to="/storage" className={`nav-item lg:text-lg ${isActive('/storage') ? 'nav-item-active' : ''}`}>
                Storage
              </Link>
            </li>
          </ul>
        </nav>
        <div className="md:hidden">
          <button className="text-foreground/70 hover:text-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

// src/components/Navbar.js
import Link from 'next/link';
import './Navbar.css'; // Make sure to import the CSS file for styling

const Navbar = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <Link href="/">
            <img src="/logo.png" alt="Logo" /> {/* Add your logo */}
          </Link>
        </div>
        <ul className="navList">
          <li className="navItem">
            <Link href="/" className="navLink">Home</Link>
          </li>
          <li className="navItem">
            <Link href="/about" className="navLink">About</Link>
          </li>
          {/* Add more nav items as needed */}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-slate-50 fixed top-0 left-0 right-0 p-4 lg:flex lg:justify-between md:flex">
      <div className="flex justify-between items-center">
        <a className="font-secondary italic text-xl">
          <Link to="/">Ulil</Link>
        </a>
        <button className="md:hidden" onClick={toggleNavbar}>
          <i className={`bx ${isOpen ? "bx-x" : "bx-menu"}`}></i>
        </button>
      </div>
      <div className={`md:flex ${isOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col items-center md:flex-row md:gap-5 md:space-x-4 mt-2 md:mt-0">
          <li>
            <a href="#" className="hover:underline">
              <Link to="/">Design</Link>
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              <Link to="/about">About</Link>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/muhammad-ulil-albab-68786528a/" className="hover:underline">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1XpMVb3G_3-clTlOS8lgRFNR7SOJsUt3U/view?usp=drive_link" className="hover:underline">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

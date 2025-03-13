import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-slate-50 fixed top-0 left-0 right-0 p-4 lg:flex md:flex">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className='font-secondary italic text-xl'>Ulil</a>
        <button
          className="md:hidden"
          onClick={toggleNavbar}
        >
          <i className={`bx ${isOpen ? 'bx-x' : 'bx-menu'}`}></i>
        </button>
      </div>
      <div className={`md:flex ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col items-center md:flex-row md:gap-5 md:space-x-4 mt-2 md:mt-0">
          <li>
            <a href="#" className="hover:underline"><Link to="/">Design</Link></a>
          </li>
          <li>
            <a href="#" className="hover:underline"><Link to="/about">About</Link></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/muhammad-ulil-albab-68786528a/" className="hover:underline">LinkedIn</a>
          </li>
          <li>
            <a href="#" className="hover:underline">Resume</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
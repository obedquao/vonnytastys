import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-10  transition-[background-color,box-shadow,transform,opacity] duration-700 ease-in

        ${
          scrolled
            ? "bg-white/10 backdrop-blur-md shadow-md text-black p-3 md:py-1 md:px-3  md:rounded-full w-full md:w-6xl md:h-14 md:m-4 md:left-19 md:top-0 md:hover:bg-white"
            : "bg-transparent text-white p-6 w-full"
        }
      `}
    >
      <div className="flex items-center justify-between max-w-6xl mx-auto ">
        {/* Logo */}
        <div>
          <img
            src="/logo.png"
            alt="Vonny Tastys Logo"
            className="h-12 md:h-10 w-auto"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 px-4 py-2 rounded-full text-xs font-bold">
          <li className="hover:text-pink-500">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-pink-500">
            <a href="#aboutus">About Us</a>
          </li>
          <li className="hover:text-pink-500">
            <a href="#menu">Menu</a>
          </li>
          <li className="hover:text-pink-500">
            <a href="#training">OurUpcomingClass</a>
          </li>
          <li className="hover:text-pink-500">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Desktop Button */}
        <a
          href="#"
          className="hidden md:block text-white bg-pink-500 rounded-xl py-1.5 px-3 hover:text-black"
        >
          About Us
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 bg-white text-black rounded-xl shadow-lg mx-4 p-4">
          <ul className="flex flex-col gap-4 text-sm font-bold">
            <li>
              <a href="#home" onClick={() => setMenuOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#aboutus" onClick={() => setMenuOpen(false)}>
                About Us
              </a>
            </li>
            <li>
              <a href="#menu" onClick={() => setMenuOpen(false)}>
                Menu
              </a>
            </li>
            <li>
              <a href="#training" onClick={() => setMenuOpen(false)}>
                Our Upcoming Class
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </li>
            <a
              href="#"
              className="mt-2 text-center bg-pink-500 text-white rounded-lg p-3"
            >
              About Us
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
}

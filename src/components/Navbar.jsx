import { NavLink } from "react-router-dom";
import { FaBars, FaDribbble, FaFacebookF, FaTwitter } from "react-icons/fa6";
const Navbar = () => {
  const navItems = [
    { path: "/services", link: "Services" },
    { path: "/about", link: "About" },
    { path: "/blogs", link: "Blogs" },
    { path: "/contact", link: "Contact" },
  ];
  return (
    <header className="bg-black text-white">
      <nav className="px-4 py-2 max-w-7xl flex mx-auto justify-between">
        <a href="/" className="text-xl font-bold text-blue-800">
          BLOGG<span className="text-blue-500">ZZZ</span>
        </a>
        <ul className="md:flex gap-12 text-lg hidden">
          {navItems.map(({ path, link }) => (
            <li key={path} className="text-blue-200">
              <NavLink to={path}>{link}</NavLink>
            </li>
          ))}
        </ul>
        {/* menu icons */}
        <div className="text-blue-100 lg:flex gap-4 items-center hidden">
          <a href="/" className="hover:text-blue-800"><FaFacebookF /></a>
          <a href="/" className="hover:text-green-600"><FaDribbble /></a>
          <a href="/" className="hover:text-blue-400"><FaTwitter /></a>
          <button className="bg-blue-600 px-3 py-1 font-medium rounded hover:bg-transparent hover:text-blue-300 transition-all duration-200 ease-in" >Log in</button>
        </div>
        {/* mobile menu */}
        <div className="md:hidden"><button className="cursor-pointerr"><FaBars className="w-5 h-5"/></button></div>
      </nav>
    </header>
  );
};

export default Navbar;

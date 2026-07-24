import { useState } from "react";
import logo from "../../assets/logo.svg";
import Button from "../ui/Button";
import { Menu, X } from "lucide-react";

const navLinks = [
  {
    title: "About",
    link: "#about",
  },
  {
    title: "Services",
    link: "#services",
  },
  {
    title: "Our Work",
    link: "#work",
  },
];

const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  return (
    <div className="w-full px-4 md:px-28 py-5">
      <nav className="max-w-304 mx-auto flex gap-8 justify-between items-center">
        <div className="">
          <img src={logo} alt="logo" />
        </div>
        <div className="w-full flex items-center justify-end md:hidden">
          <button
            type="button"
            className="mr-0"
            onClick={() => {
              setOpenNavbar((prev) => !prev);
            }}
          >
            {openNavbar ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <div className="flex gap-8 justify-center items-center">
          <ul
            className={
              openNavbar
                ? "flex items-center w-full mt-16 gap-8 text-xl h-screen flex-col absolute top-0 left-0 bg-white z-40 p-4 border"
                : "hidden md:flex gap-8"
            }
          >
            {navLinks.map((item) => (
              <li
                key={item.link}
                onClick={() => setOpenNavbar(false)}
                className="font-semibold text-[14px] leading-[171%] uppercase text-neutral-1"
              >
                <a href={item.link}>{item.title}</a>
              </li>
            ))}
          </ul>
          <div className="hidden md:block">
            <Button />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

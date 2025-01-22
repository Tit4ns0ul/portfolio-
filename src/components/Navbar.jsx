import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  // NavLinks
  const links = [
    {
      id: 1,
      name: "home",
      url: "/",
    },
    {
      id: 2,
      name: "about",
    },
    {
      id: 3,
      name: "projects",
      url: "https://github.com/Tit4ns0ul?tab=repositories",
    },
    {
      id: 4,
      name: "resume",
      url: "/resume",
    },
    {
      id: 5,
      name: "contact",
    },
  ];

  return (
    <header className="flex items-center justify-between bg-[#1F1F1F]">
      {!isActive && (
        <div className="flex items-center justify-between w-screen md:px-4 px-2 py-2">
          <div className="logo">
            <a
              href="/"
              className="text-xl font-bold hover:text-[#FDC563] text-white duration-300 2xl:text-2xl"
            >
              Kamal Singh Bisht 😎
            </a>
          </div>

          <div className="hidden md:block">
            <div className="navLinks">
              <ul className="md:flex items-center justify-center gap-4">
                {links.map(({ id, name, url }) => {
                  return url ? (
                    <NavLink
                      key={id}
                      to={url}
                      rel="noopener noreferrer"
                      className="text-lg 2xl:text-2xl hover:text-[#FDC563] duration-300 cursor-pointer capitalize"
                    >
                      {name}
                    </NavLink>
                  ) : (
                    <Link
                      key={id}
                      to={name}
                      smooth
                      duration={700}
                      className="text-lg 2xl:text-2xl hover:text-[#FDC563] duration-300 cursor-pointer capitalize"
                    >
                      {name}
                    </Link>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      )}

      <div className="navIcon block md:hidden">
        {isActive ? (
          <span className="md:pr-4 pr-2">
            <FontAwesomeIcon
              icon={faX}
              className="absolute right-2 top-4"
              onClick={toggleMenu}
            />
            <ul className="resNav w-screen h-screen flex flex-col items-center justify-center gap-6 text-4xl font-semibold bg-gradient-to-b from-[#1f1f1f] to-[#0f0f0f]">
              {links.map(({ id, name, url }) => {
                return url ? (
                  <NavLink
                    key={id}
                    to={url}
                    rel="noopener noreferrer"
                    className="text-lg hover:text-[#FDC563] duration-300 cursor-pointer capitalize"
                    onClick={() => setIsActive(false)}
                  >
                    {name}
                  </NavLink>
                ) : (
                  <Link
                    key={id}
                    to={name}
                    duration={700}
                    smooth
                    className="text-lg hover:text-[#FDC563] duration-300 cursor-pointer capitalize"
                    onClick={() => setIsActive(false)}
                  >
                    {name}
                  </Link>
                );
              })}
            </ul>
          </span>
        ) : (
          <span className="md:pr-4 pr-2">
            <FontAwesomeIcon icon={faBars} onClick={toggleMenu} />
          </span>
        )}
      </div>
    </header>
  );
};

export default Navbar;

"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


const NavMenu = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/about",
    name: "About",
  },
  {
    path: "/services",
    name: "Services",
  },
  {
    path: "/blog",
    name: "Blog",
  },
  {
    path: "/contact",
    name: "Contact",
  },
];

const Navbar = () => {
  const pathName = usePathname();
  const session = useSession();



  const user = session?.data?.user

  return (
    <header className="header">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {NavMenu.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className={`nav__link ${
                      pathName === item.path ? "text-primary" : "text-slate-400"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Link href="/">
            <Image
              src="/assets/logo.svg"
              alt="car dotor pro logo"
              width={1000}
              height={1000}
              className="logo"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="nav__list">
            {NavMenu.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className={`nav__link ${
                    pathName === item.path ? "text-primary" : "text-slate-400"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center gap-1">
              <a className="header__btn">Appointment</a>
              <button className="header__btn" onClick={() => signOut()}>Log Out</button>
            </div>
          ) : (
            <Link href="/login" className="header__btn">
              Sign IN
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;

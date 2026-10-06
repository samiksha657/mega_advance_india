
import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { SITE } from "../data";
import Footer from "./Footer";

const NAV = [
  ["/", "Home"],
  ["/courses", "Courses"],
  ["/contact", "Contact"]
];

export function usePageTitle(title) {
  useEffect(() => {
    document.title = title
      ? `${title} | ${SITE.name}`
      : `${SITE.name} | Computer courses & placement support`;
  }, [title]);
}

const navClass = ({ isActive }) =>
  `border-b-2 py-1.5 font-semibold transition-colors ${isActive
    ? "border-sky text-white"
    : "border-transparent text-white hover:text-sky"
  }`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b border-ink/10 bg-ink backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <Link to="/" aria-label="Mega Advance India home" className="flex items-center">
            <img
              src="https://app.growthbharat.com/assets/growthbhartlogo-icon.png"
              alt="Mega Advance India"
              className="h-10 w-auto object-contain"
            />
            <span className="ml-4 text-lg font-bold text-white">
              Mega Advance India
            </span>
          </Link>
          <nav
            className="hidden items-center gap-8 md:flex"
            aria-label="Main"
          >
            {NAV.map(([to, label]) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={navClass}
              >
                {label}
              </NavLink>
            ))}
            <Link to="/contact" className="rounded-lg bg-sky px-5 py-2.5 font-semibold text-ink hover:bg-white">
              Enquire now
            </Link>
          </nav>

          <button
            className="rounded-lg p-2 text-white md:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {open && (
          <nav
            className="flex flex-col gap-4 border-t border-white/10 bg-ink px-5 py-5 md:hidden"
            aria-label="Mobile"
          >
            {NAV.map(([to, label]) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={navClass}
              >
                {label}
              </NavLink>
            ))}
            <Link to="/contact" className="rounded-lg bg-sky px-5 py-3 text-center font-semibold text-ink">
              Enquire now
            </Link>
          </nav>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}



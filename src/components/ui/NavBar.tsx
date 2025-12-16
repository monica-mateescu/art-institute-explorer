import { NavLink } from "react-router";
import { menuList } from "../../utils";

const NavBar = () => {
  return (
    <div className="navbar shadow-sm w-full">
      <div className="flex-none lg:hidden">
        <label
          htmlFor="my-drawer-2"
          aria-label="open sidebar"
          className="btn btn-square btn-ghost"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-6 w-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <div className="mx-2 flex-1 px-2 font-semibold text-xl text-shadow-sm">
        <NavLink to="/">Art Institute Explorer</NavLink>
      </div>
      <div className="hidden flex-none lg:block">
        <ul className="menu menu-horizontal">
          {menuList.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "text-neutral-500" : ""
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;

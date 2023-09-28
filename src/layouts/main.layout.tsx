import { NavLink, Outlet } from "react-router-dom";
import { routes } from "../routes";
import logo from "/logo.png";
import { RiMenu4Fill } from "react-icons/ri";

const MainLayout = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content bg-base-200 ">
        <div className="navbar bg-base-100 lg:hidden">
          <div className="flex-1">
            <a className="btn btn-ghost">
              <img className="w-28 h-auto float-left " src={logo} alt="logo" />
            </a>
          </div>
          <div className="flex-none">
            <label
              className="btn btn-square btn-ghost drawer-button"
              htmlFor="my-drawer-2"
            >
              <RiMenu4Fill size={25} />
            </label>
          </div>
        </div>
        <div className="p-5 md:p-10 lg:p-14">
          {/* Page content here */}
          <Outlet />
        </div>
      </div>

      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-100 text-base-content text-center">
          {/* Sidebar content here */}
          <div className=" py-14 px-5">
            {" "}
            <img className="w-full" src={logo} alt="logo" />
          </div>
          {routes[1].routes.map((route) => {
            const Icon = route.icon;

            return (
              <li className="text-center mb-5 ">
                {/* <Icon /> */}

                <NavLink to={route.path} className="text-center gap-3 flex">
                  <Icon size={30} /> {route.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MainLayout;

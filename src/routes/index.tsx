// Layouts
import AnonymousLayout from "../layouts/auth.layout";
import MainLayout from "../layouts/main.layout";

// Pages
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";
import Home from "../pages/home";
import Referral from "../pages/referral";
import Settings from "../pages/settings";
import { IRoute, renderRoutes } from "./generate-routes";
import { RiDashboardFill, RiSettings4Fill, RiShareFill } from "react-icons/ri";

export const routes: Array<IRoute> = [
  {
    layout: AnonymousLayout,
    routes: [
      {
        name: "login",
        title: "Login page",
        icon: RiDashboardFill,
        component: Login,
        path: "/login",
        isPublic: true,
      },
      {
        name: "register",
        title: "Register page",
        icon: RiDashboardFill,
        component: Register,
        path: "/register",
        isPublic: true,
      },
    ],
  },
  {
    layout: MainLayout,
    routes: [
      {
        name: "Dashboard",
        title: "Home page",
        icon: RiDashboardFill,
        component: Home,
        path: "/home",
      },

      {
        name: "Settings",
        title: "Settings page",
        icon: RiSettings4Fill,
        component: Settings,
        path: "/settings",
      },
      {
        name: "Referral Code",
        title: "Referral page",
        icon: RiShareFill,
        component: Referral,
        path: "/referral",
      },

      //   this is example of nested route

      //   {
      //     name: 'users',
      //     title: 'Users',
      //     hasSiderLink: true,
      //     routes: [
      //       {
      //         name: 'list-users',
      //         title: 'List of users',
      //         hasSiderLink: true,
      //         component: ListUsers,
      //         path: '/users'
      //       },
      //       {
      //         name: 'create-user',
      //         title: 'Add user',
      //         hasSiderLink: true,
      //         component: CreateUser,
      //         path: '/users/new'
      //       }
      //     ]
      //   }
    ],
  },
];

export const Routes = renderRoutes(routes);

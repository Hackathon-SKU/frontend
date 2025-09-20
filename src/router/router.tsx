import { createBrowserRouter, type RouteObject } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout";
import Welcome from "../pages/Welcome";
import Main from "../pages/Main/Main";
import Report from "../pages/Main/Report";
import Location from "../pages/Main/Location";
import Chat from "../pages/Main/Chat";
import Info from "../pages/Main/Info";
import ProfileHeader from "../components/Main/details/ProfileHeader";

const publicLayout: RouteObject[] = [
  {
    path: "/",
    element: <BaseLayout protectedRoutes={false} />,
    children: [
      { index: true, element: <Welcome /> },
      {
        path: "main",
        children: [
          { index: true, element: <Main /> },
          {
            path: "profile/:id",
            element: <ProfileHeader />,
          },
          {
            path: "report",
            element: <Report />,
          },
          {
            path: "location",
            element: <Location />,
          },
          {
            path: "chat",
            element: <Chat />,
          },
          {
            path: "info",
            element: <Info />,
          },
        ],
      },
    ],
  },
];

const privateLayout: RouteObject[] = [
  {
    path: "/main",
    element: <BaseLayout protectedRoutes={true} />,
    children: [{ index: true, element: <Main /> }],
  },
];

const router = createBrowserRouter([...publicLayout, ...privateLayout]);

export default router;

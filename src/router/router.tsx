import { createBrowserRouter, type RouteObject } from "react-router-dom";
import BaseLayout from "../layouts/baseLayouts";
import Home from "../pages/Home";

const publicLayout: RouteObject[] = [
  {
    path: "/",
    element: <BaseLayout protectedRoutes={false} />,
    children: [{ index: true, element: <Home /> }],
  },
];

const privateLayout: RouteObject[] = [
  {
    path: "",
    element: <BaseLayout protectedRoutes={true} />,
  },
];

const router = createBrowserRouter([...publicLayout, ...privateLayout]);

export default router;

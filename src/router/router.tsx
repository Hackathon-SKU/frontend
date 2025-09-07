import { createBrowserRouter, type RouteObject } from "react-router-dom";
import BaseLayout from "../layouts/baseLayouts";

const publicLayout: RouteObject[] = [
  {
    path: "/",
    element: <BaseLayout protectedRoutes={false} />,
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

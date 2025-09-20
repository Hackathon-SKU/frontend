import { createBrowserRouter, type RouteObject } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout";
import MainHome from "../pages/MainHome";

const publicLayout: RouteObject[] = [
  {
    path: "/",
    element: <BaseLayout protectedRoutes={false} />,
    children: [{ index: true, element: <MainHome /> }],
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

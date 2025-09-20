import { createBrowserRouter, type RouteObject } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout";
import RegisterType from "../pages/signIn/registerType";
import RegisterEmail from "../pages/signIn/registerEmail";
import RegisterPW from "../pages/signIn/registerPassword";
import { Navigate } from "react-router-dom";

const publicLayout: RouteObject[] = [
  {
    path: "/",
    element: <BaseLayout protectedRoutes={false} />,
    children: [
      { index: true, element: <Navigate to="/register-type" replace /> },
      { path: "register-type", element: <RegisterType /> },
      { path: "register-email", element: <RegisterEmail /> },
      { path: "register-password", element: <RegisterPW /> },
    ],
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

import { createBrowserRouter, type RouteObject } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout";
import RegisterType from "../pages/signIn/registerType";
import RegisterEmail from "../pages/signIn/registerEmail";
import RegisterPW from "../pages/signIn/registerPassword";
import RegisterInfo from "../pages/signIn/registerInfo";
import DisabledRegist from "../pages/signIn/disabledRegist.tsx";
// import CaregiverRegist from "../pages/signIn/caregiverRegist";
import { Navigate } from "react-router-dom";
import RegisterEnd from "../pages/signIn/registerEnd";

const publicLayout: RouteObject[] = [
  {
    path: "/",
    element: <BaseLayout protectedRoutes={false} />,
    children: [
      { index: true, element: <Navigate to="/register-type" replace /> },
      { path: "register-type", element: <RegisterType /> },
      { path: "register-email", element: <RegisterEmail /> },
      { path: "register-password", element: <RegisterPW /> },
      { path: "register-info", element: <RegisterInfo /> },
      { path: "disabledRegist", element: <DisabledRegist /> },
      { path: "register-end", element: <RegisterEnd /> },
      // { path: "caregiverRegist", element: <CaregiverRegist /> },
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

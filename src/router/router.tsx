import { createBrowserRouter, type RouteObject } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout";
import Welcome from "../pages/Welcome";
import Main from "../pages/Main/Main";
import Report from "../pages/Main/Report";
import Location from "../pages/Main/Location";
import Chat from "../pages/Main/Chat";
import Info from "../pages/Main/Info";
import ProfileHeader from "../components/Main/details/ProfileHeader";
import RegisterType from "../pages/signIn/registerType";
import RegisterEmail from "../pages/signIn/registerEmail";
import RegisterPW from "../pages/signIn/registerPassword";
import RegisterInfo from "../pages/signIn/registerInfo";
import DisabledRegist from "../pages/signIn/disabledRegist";
import RegisterEnd from "../pages/signIn/registerEnd";

const publicLayout: RouteObject[] = [
  {
    path: "/",
    element: <BaseLayout protectedRoutes={false} />,
    children: [
      { index: true, element: <Welcome /> },
      { path: "register-type", element: <RegisterType /> },
      { path: "register-email", element: <RegisterEmail /> },
      { path: "register-password", element: <RegisterPW /> },
      { path: "register-info", element: <RegisterInfo /> },
      { path: "disabledRegist", element: <DisabledRegist /> },
      { path: "register-end", element: <RegisterEnd /> },
      {
        path: "main",
        children: [
          { index: true, element: <Main /> },
          // { path: "detail", element: <Details /> }, // Details import 및 라우트 제거
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
import { createBrowserRouter, type RouteObject } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout";
import Welcome from "../pages/Welcome";
import Main from "../pages/Main/Main";
import Report from "../pages/Main/Report";
import Location from "../pages/Main/Location";
import Chat from "../pages/Main/Chat";
import Info from "../pages/Main/Info";
import RegisterType from "../pages/signIn/registerType";
import RegisterEmail from "../pages/signIn/registerEmail";
import RegisterPW from "../pages/signIn/registerPassword";
import RegisterInfo from "../pages/signIn/registerInfo";
import DisabledRegist from "../pages/signIn/disabledRegist";
import RegisterEnd from "../pages/signIn/registerEnd";
import ProfilePage from "../pages/Main/Profile/Profile";
import UploadPost from "../pages/uploadPost/upload";
import Login from "../pages/logIn/login";
import RegisterLicense from "../pages/signIn/registerLicense";
import RegisterPhoto from "../pages/signIn/registerPhoto";

const publicLayout: RouteObject[] = [
  {
    path: "/",
    element: <BaseLayout protectedRoutes={false} />,
    children: [
      { index: true, element: <Welcome /> },
      { path: "login", element: <Login /> },
      { path: "register-type", element: <RegisterType /> },
      { path: "register-email", element: <RegisterEmail /> },
      { path: "register-password", element: <RegisterPW /> },
      { path: "register-info", element: <RegisterInfo /> },
      { path: "disabledRegist", element: <DisabledRegist /> },
      { path: "registerLicense", element: <RegisterLicense /> },
      { path: "register-end", element: <RegisterEnd /> },
      { path: "register-photo", element: <RegisterPhoto /> },
    ],
  },
];

const privateLayout: RouteObject[] = [
  {
    path: "/main",
    element: <BaseLayout protectedRoutes={true} />,
    children: [
      { index: true, element: <Main /> },
      // { path: "detail", element: <Details /> }, // Details import 및 라우트 제거
      {
        path: "profile/:id",
        element: <ProfilePage />,
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
      {
        path: "upload",
        element: <UploadPost />,
      },
    ],
  },
];

const router = createBrowserRouter([...publicLayout, ...privateLayout]);

export default router;
import { Outlet } from "react-router-dom";
import Navbar from "../components/Public/Navbar";
interface BaseLayoutProps {
  protectedRoutes: boolean;
}

const BaseLayout = ({ protectedRoute }: BaseLayoutProps) => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default BaseLayout;

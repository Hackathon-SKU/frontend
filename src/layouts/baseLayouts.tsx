import { Outlet } from "react-router-dom";

interface BaseLayoutProps {
  protectedRoutes: boolean;
}

const BaseLayout = ({ protectedRoute }: BaseLayoutProps) => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default BaseLayout;

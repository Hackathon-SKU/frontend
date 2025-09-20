import { Navigate, Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
interface BaseLayoutProps {
  protectedRoutes: boolean;
}

const BaseLayout = ({ protectedRoutes }: BaseLayoutProps) => {
  const location = useLocation();
  const isMainPage = location.pathname.startsWith("/main");

  // 로그인 안되있으면 로그인으로 돌아오기
  // if (protectedRoutes && !isLoggedIn) {
  //   const fromPath = `${location.pathname}${location.search ?? ""}`;
  //   return <Navigate to="/login" state={{ from: fromPath }} replace />;
  // }

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Outlet />
        {isMainPage && <Footer />}
      </div>
    </>
  );
};

export default BaseLayout;

import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import toast from "react-hot-toast";
interface BaseLayoutProps {
  protectedRoutes: boolean;
}

const BaseLayout = ({ protectedRoutes }: BaseLayoutProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isMainPage =
    location.pathname.startsWith("/main") ||
    location.pathname.startsWith("/disabledMain");
  const noFooterPaths = ["/main/disabled", "/main/chat"];
  const shouldShowFooter =
    isMainPage &&
    !noFooterPaths.some((path) => location.pathname.startsWith(path));

  // 로그인 안되있으면 로그인으로 돌아오기
  const isLoggedIn = () => {
    const accessToken = sessionStorage.getItem("accessToken");
    if (!accessToken) {
      toast.error("로그인 후 이용 가능합니다.");
      navigate("/login");
    }
  };
  if (protectedRoutes && !isLoggedIn) {
    const fromPath = `${location.pathname}${location.search ?? ""}`;
    return <Navigate to="/login" state={{ from: fromPath }} replace />;
  }

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Outlet />
        {shouldShowFooter && <Footer />}
      </div>
    </>
  );
};

export default BaseLayout;

import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
interface BaseLayoutProps {
  protectedRoutes: boolean;
}

const BaseLayout = ({ protectedRoutes }: BaseLayoutProps) => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default BaseLayout;

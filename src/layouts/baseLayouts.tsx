import { Outlet } from "react-router-dom";
import Navbar from "../components/Public/Navbar";
interface BaseLayoutProps {
  protectedRoutes: boolean;
}

const BaseLayout = ({ protectedRoute }: BaseLayoutProps) => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 mt-[176px]">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default BaseLayout;

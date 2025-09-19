import { Outlet } from "react-router-dom";
interface BaseLayoutProps {
  protectedRoutes: boolean;
}

const BaseLayout = ({ protectedRoutes }: BaseLayoutProps) => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <main className="flex-1 mt-[176px]">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default BaseLayout;

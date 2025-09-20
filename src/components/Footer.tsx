import { Link, useLocation } from "react-router-dom";
import { footerItem } from "../mocks/footMenu";

const Footer = () => {
  const location = useLocation();
  return (
    <>
      <footer className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200">
        <nav className="flex justify-around items-center w-[393px] h-[73px] mx-auto">
          {footerItem.map((item) => {
            const isActive =
              item.path === "/main"
                ? location.pathname === "/main"
                : location.pathname.startsWith(item.path);
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex flex-col items-center ${
                  isActive ? "text-black" : "text-[#8A8A8A]"
                }`}
              >
                <img
                  src={isActive ? item.activeIcon : item.icon}
                  alt={item.name}
                  className={`w-[24px] h-[26px] ${
                    item.name === "홈" && "w-[26px] h-[27px]"
                  }`}
                />
                <span className="text-xs mt-1">{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </footer>
    </>
  );
};

export default Footer;

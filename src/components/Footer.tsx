import { Link, useLocation } from "react-router-dom";
import { footerItem } from "../mocks/footMenu";

interface FooterProps {
  variant?: "open" | "close";
}

const Footer = ({ variant = "close" }: FooterProps) => {
  const location = useLocation();
  return (
    <>
      {variant === "close" && (
        <footer className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200">
          <nav className="flex justify-around items-center w-[393px] h-[73px] mx-auto">
            {footerItem.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex flex-col items-center ${
                    isActive ? "text-black" : "text-gray-500"
                  }`}
                >
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-[24px] h-[26px]"
                  />
                  <span className="text-xs mt-1">{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </footer>
      )}
    </>
  );
};

export default Footer;

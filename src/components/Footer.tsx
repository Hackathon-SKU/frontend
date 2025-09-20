import { useState } from "react";

interface FooterProps {
  variant?: "open" | "close";
}

const FooterItem = ["홈", "돌봄 기록", "내 근처", "채팅", "내 정보"];

const Footer = ({ variant = "close" }: FooterProps) => {
  const [category, setCategory] = useState<string>("home");

  return (
    <>
      {variant === "close" ? (
        <footer className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200">
          <nav className="flex justify-around items-center w-[393px] h-[94px]">
            {/* 홈 */}
            <button className="flex flex-col items-center text-black">
              {/* 아이콘 넣는 곳 */}
              <img src="/footer/home.svg" alt="홈" className="w-7" />
              <span className="text-xs mt-1">홈</span>
            </button>

            {/* 돌봄 기록 */}
            <button className="flex flex-col items-center text-gray-500">
              <img src="/footer/report.svg" alt="돌봄 기록" className="w-7" />
              <span className="text-xs mt-1">돌봄 기록</span>
            </button>

            {/* 내 근처 */}
            <button className="flex flex-col items-center text-gray-500">
              <img src="/footer/location.svg" alt="내 근처" className="w-7" />
              <span className="text-xs mt-1">내 근처</span>
            </button>

            {/* 채팅 */}
            <div className="relative flex flex-col items-center text-gray-500">
              <img src="/footer/chatting.svg" alt="채팅" className="w-7" />
              {/* 알림 뱃지 */}
              <span className="absolute -top-1.5 -right-1.5 bg-[#FF0000] text-white text-[8px] px-1 py-[3px] rounded-full">
                12
              </span>
              <span className="text-xs mt-1">채팅</span>
            </div>

            {/* 내 정보 */}
            <div className="flex flex-col items-center text-gray-500">
              <img src="/footer/info.svg" alt="내 정보" className="w-7" />
              <span className="text-xs mt-1">내 정보</span>
            </div>
          </nav>
        </footer>
      ) : (
        <></>
      )}
    </>
  );
};

export default Footer;

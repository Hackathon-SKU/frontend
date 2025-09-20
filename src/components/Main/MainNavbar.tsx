const MainNavbar = () => {
  return (
    <header className="sticky flex top-0 z-10 items-center justify-between w-full h-12 px-4 border-b border-gray-200 bg-white">
      {/* 왼쪽 - 위치 */}
      <div className="flex items-center gap-2">
        <span className="font-semibold text-[24px]">야탑3동</span>
        <button>
          <img src="/main/accordion.svg" alt="아코디언바" />
        </button>
      </div>

      {/* 오른쪽 - 알림 & 메뉴 */}
      <div className="flex items-center gap-4">
        <button>
          <img src="/main/alarm.svg" alt="알림" />
        </button>

        <button>
          <img src="/main/hamburger.svg" alt="메뉴" />
        </button>
      </div>
    </header>
  );
};

export default MainNavbar;

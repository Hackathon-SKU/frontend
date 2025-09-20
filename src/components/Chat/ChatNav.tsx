const ChatNav = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white">
      <div className="flex items-center gap-2">
        <img
          src="/main/sampleImg/sample6.svg"
          alt="프로필"
          className="w-8 h-8 rounded-sm"
        />
        <span className="font-semibold">한*연</span>
      </div>
      <button className="bg-[#6BB1E4] text-white px-4 py-1 rounded-full text-[11px] font-semibold">
        두리 확정
      </button>
    </header>
  );
};

export default ChatNav;

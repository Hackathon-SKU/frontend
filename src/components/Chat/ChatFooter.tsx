const ChatFooter = () => {
  return (
    <footer className="fixed bottom-0 flex items-center w-full gap-2 p-3 bg-white h-[78px]">
      {/* + 버튼 */}
      <button className="flex items-center justify-center w-9 h-9">
        <img src="/main/plus.svg" alt="plus" className="w-9 h-9" />
      </button>

      {/* 입력창 */}
      <input
        type="text"
        placeholder="메세지를 입력하세요."
        className="flex-1 bg-[#F5F5F5] border border-[#59A1D7] rounded-full px-4 text-[10px] py-2.5 outline-none"
      />

      {/* 전송 버튼 */}
      <button className="w-[57px] h-[33px] flex items-center justify-center bg-[#6BB1E4] border border-[#59A1D7] text-white rounded-full">
        <img src="/main/send.svg" alt="전송" className="w-[24px]" />
      </button>
    </footer>
  );
};

export default ChatFooter;

const ChatLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F2F2F2]">
      {/* 채팅 영역 */}
      <main className="flex-1 p-4 space-y-4 overflow-y-auto">
        <div className="text-sm text-center text-gray-400">2025년 9월 20일</div>

        <div className="flex items-start gap-2">
          <img
            src="/main/sampleImg/sample6.svg"
            alt="작성자"
            className="w-8 h-8 rounded-sm"
          />
          <div className="w-full text-[13px]">
            <div className="text-sm">한*연</div>
            <div className="flex items-end gap-[5px]">
              <div className="bg-white border border-[#59A1D7] rounded-2xl px-3 py-2 max-w-xs">
                한*연 님과 김*희 복지사님이 매칭되었습니다.
                <br />
                한*연 님의 선택을 기다려주세요.
              </div>
              <div className="mt-1 text-start text-gray-400 text-[10px]">
                오후 2:26
              </div>
            </div>

            {/* 프로필 카드 */}
            <div className="flex items-end gap-[5px]">
              <div className="mt-1 text-start text-gray-400 text-[10px]">
                오후 2:26
              </div>
              <div className="bg-white border border-[#59A1D7] rounded-2xl p-3 mt-2 flex items-center gap-3 max-w-xs">
                <img
                  src="/main/sampleImg/sample1.svg"
                  alt="상대방"
                  className="w-[65px] rounded-sm"
                />
                <div className="flex flex-col items-center flex-1">
                  <p className="font-semibold text-[15px]">
                    김*희 복지사 프로필
                  </p>
                  <button className="mt-1 w-[151px] h-[27px] text-[10px] bg-[#6BB1E4] border border-[#59A1D7] text-white rounded-full">
                    열람하기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 입력창 */}
      <footer className="flex items-center gap-2 p-3 bg-white border-t">
        <button className="w-8 h-8 flex items-center justify-center bg-[#6BB1E4] text-white rounded-full">
          +
        </button>
        <input
          type="text"
          placeholder="메세지를 입력하세요."
          className="flex-1 border border-[#59A1D7] rounded-full px-4 py-2 text-sm"
        />
        <button className="w-8 h-8 flex items-center justify-center bg-[#6BB1E4] text-white rounded-full">
          <img src="/send-icon.svg" alt="전송" className="w-4 h-4" />
        </button>
      </footer>
    </div>
  );
};

export default ChatLayout;

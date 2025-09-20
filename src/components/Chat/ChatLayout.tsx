import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

type Sender = "me" | "other";
interface ChatMessage {
  id: number;
  sender: Sender;
  text: string;
  time: string; // "오후 2:26" 같은 형식
}

const formatKoreanTime = (date = new Date()) => {
  let h = date.getHours();
  const m = String(date.getMinutes()).padStart(2, "0");
  const ampm = h >= 12 ? "오후" : "오전";
  if (h === 0) h = 12;
  else if (h > 12) h -= 12;
  return `${ampm} ${h}:${m}`;
};

const ChatLayout = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isComposing, setIsComposing] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleSend = () => {
    const text = inputValue.trim();
    if (!text) return;
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        sender: "me",
        text,
        time: formatKoreanTime(),
      },
    ]);
    setInputValue("");
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    // 한글 조합 중에는 전송하지 않음
    if (isComposing) return;
    handleSend();
  };

  // Enter 키로 전송(조합 중이면 무시)
  const onKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if ((e.nativeEvent as any).isComposing) return; // 일부 브라우저 호환
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  // 새 메시지 오면 스크롤 맨 아래로
  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages.length]);

  return (
    <div className="flex flex-col min-h-screen bg-[#F2F2F2]">
      {/* 채팅 영역 */}
      <main ref={scrollRef} className="flex-1 p-4 space-y-4 overflow-y-auto">
        <div className="text-sm text-center text-gray-400">2025년 9월 20일</div>

        {/* 기존 시스템 메시지 */}
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
                  <button
                    onClick={() => navigate("/main/chat")}
                    className="mt-1 w-[151px] h-[27px] text-[10px] bg-[#6BB1E4] border border-[#59A1D7] text-white rounded-full"
                  >
                    열람하기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 내가 보낸 메시지 */}
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-end gap-2 ${
              msg.sender === "me" ? "justify-end" : "justify-start"
            }`}
          >
            {msg.sender === "other" && (
              <img
                src="/main/sampleImg/sample6.svg"
                alt="상대방"
                className="w-8 h-8 rounded-sm"
              />
            )}
            <div className="flex items-end gap-[5px]">
              <div
                className={`px-3 py-2 rounded-2xl max-w-xs ${
                  msg.sender === "me"
                    ? "bg-[#6BB1E4] text-white"
                    : "bg-white border border-[#59A1D7]"
                }`}
              >
                {msg.text}
              </div>
              <div className="mt-1 text-start text-gray-400 text-[10px]">
                {msg.time}
              </div>
            </div>
          </div>
        ))}
      </main>

      {/* 입력창 */}
      <footer className="flex items-center gap-2 p-3 bg-white border-t">
        <button className="w-8 h-8 flex items-center justify-center bg-[#6BB1E4] text-white rounded-full">
          +
        </button>

        <form onSubmit={onSubmit} className="flex items-center flex-1 gap-2">
          <input
            type="text"
            placeholder="메세지를 입력하세요."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={onKeyDown}
            onCompositionStart={() => setIsComposing(true)}
            onCompositionEnd={() => setIsComposing(false)}
            className="flex-1 border border-[#59A1D7] rounded-full px-4 py-2 text-sm"
          />
          <button
            type="submit"
            className="w-8 h-8 flex items-center justify-center bg-[#6BB1E4] text-white rounded-full disabled:opacity-50"
            disabled={!inputValue.trim()}
            aria-label="전송"
            title="전송"
          >
            <img src="/send-icon.svg" alt="전송" className="w-4 h-4" />
          </button>
        </form>
      </footer>
    </div>
  );
};

export default ChatLayout;

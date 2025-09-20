interface Props {
  onClose: () => void;
}

const ChatGuideModal = ({ onClose }: Props) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg w-[320px] p-6 text-center">
        {/* 제목 */}
        <h2 className="text-lg font-semibold mb-2">※ 채팅 이용 안내 ※</h2>

        {/* 본문 */}
        <p className="text-[12px] text-gray-700 leading-relaxed">
          두리는 서로를 존중하는 건강한 소통을 지향합니다.
          <br />
          비속어, 욕설, 차별적 표현은 금지됩니다.
          <br />
          상대방에게 불쾌감을 주는 발언은 제재 대상이 됩니다.
        </p>
        <p className="text-[12px] font-[700] leading-relaxed">
          규정을 어길 시 채팅 이용이 제한될 수 있습니다.
        </p>
        <p className="text-[12px] text-gray-700 leading-relaxed mb-6">
          따뜻하고 존중하는 대화를 함께 만들어주세요.
        </p>

        {/* 버튼 */}
        <button
          onClick={onClose}
          className="w-full bg-[#6BB1E4] border border-[#59A1D7] 
                    text-white text-base font-semibold 
                    py-3 rounded-full"
        >
          네, 알겠어요
        </button>
      </div>
    </div>
  );
};

export default ChatGuideModal;

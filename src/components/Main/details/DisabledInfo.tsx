const Badge = ({ text }: { text: string }) => (
  <span className="px-2 py-1 border border-[#59A1D7] rounded-full text-[11px]">
    {text}
  </span>
);

const DisabledInfo = () => {
  return (
    <div className="bg-white p-4 space-y-3">
      <div className="flex items-center mb-4 gap-15">
        <h3 className="font-semibold">희망기간</h3>
        <p className="">2025.09.20 ~ 2025.12.31</p>
      </div>

      <div>
        {/* 첫번째 줄 */}
        <div className="flex items-center gap-4 mb-4">
          <h3 className="font-semibold mb-1">희망 요일/시간</h3>
          <div className="flex gap-2 flex-wrap text-sm">
            <Badge text="월" />
            <Badge text="수" />
            <Badge text="금" />
          </div>
          <p className="text-black text-sm">14:00~18:00</p>
        </div>

        {/* 두번째 줄 */}
        <div className="flex ml-13 justify-center items-center gap-4">
          <div className="flex gap-2 flex-wrap text-sm">
            <Badge text="화" />
            <Badge text="목" />
          </div>
          <p className="ml-9 text-black text-sm">15:30~18:30</p>
        </div>
      </div>

      {/* 상세정보 */}
      <div className="mt-4 space-y-4 text-sm">
        <div className="flex gap-8">
          <span className="w-20 font-semibold">성별</span>
          <span className="text-black">여성</span>
        </div>
        <div className="flex gap-8">
          <span className="w-20 font-semibold">나이</span>
          <span className="text-black">13세</span>
        </div>
        <div className="flex gap-8">
          <span className="w-20 font-semibold">장애 등급</span>
          <span className="text-black">4급</span>
        </div>
        <div className="flex gap-8">
          <span className="w-20 font-semibold">장애 분류</span>
          <div className="flex gap-2">
            <Badge text="지적 장애" />
            <Badge text="자폐성 장애" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default DisabledInfo;

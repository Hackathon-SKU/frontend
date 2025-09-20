const DisabledHeader = () => {
  return (
    <div className="bg-white p-4">
      <h2 className="font-semibold text-lg mb-2">
        발달장애 초등생 돌봄 복지사님 모십니다
      </h2>

      <div className="flex items-center text-[15px] justify-start">
        <div className="flex items-center gap-2">
          <img
            src="/main/sampleImg/sample6.svg"
            alt="작성자"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="text-sm">한*연</span>
        </div>
        <div className="flex pl-[10px] gap-4">
          <div className="flex gap-2">
            <img src="/main/detail/heartFill.svg" alt="" />
            <span> 찜 1</span>
          </div>
          <div className="flex gap-2">
            <img src="/main/detail/paper.svg" alt="" />
            <span>지원 0</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-2 text-sm">
        <img src="/main/detail/location.svg" alt="" />
        <span>야탑3동 | 340m</span>
      </div>
    </div>
  );
};
export default DisabledHeader;

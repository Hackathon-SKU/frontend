const MainHomeEmpty = () => {
  return (
    <div className="flex flex-col min-h-[730px] bg-[#F2F2F2] pb-[12px]">
      {/* 본문 */}
      <main className="flex flex-col flex-1 items-center justify-center text-center px-6">
        {/* 중앙 아이콘 자리 */}
        <div className="mb-[24px]">
          <img
            src="/main/emotionSad.svg"
            alt="슬픈아이콘"
            className="w-[90px]"
          />
        </div>

        {/* 텍스트 */}
        <h2 className="text-[#8A8A8A] text-[20px] font-[600] mb-2">
          앗! 아직 작성된 글이 없어요
        </h2>
        <p className="text-[#8A8A8A] font-[400] text-sm">
          지금 바로 글을 남기고 원하는 복지사를 찾아보세요!
        </p>
      </main>

      {/* 하단 버튼 */}
      <div className="px-[28px]">
        <button className="w-[353px] h-[50px] bg-[#6BB1E4] text-[16px] text-white border border-[#59A1D7] font-semibold rounded-full">
          모집 공고를 작성해보세요
        </button>
      </div>
    </div>
  );
};

export default MainHomeEmpty;

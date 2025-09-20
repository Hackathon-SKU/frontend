// import MainHomeEmpty from "../../components/Main/MainHomeEmpty";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainList from "../../components/Main/MainList";
import MainNavbar from "../../components/Main/MainNavbar";
import WriteModal from "../../components/Main/WriteModal";
import { mainMockItems } from "../../mocks/MainMockItem";

const Main = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <>
      <MainNavbar />
      {/* 리스트 데이터 없을때 화면 */}
      {/* <MainHomeEmpty /> */}

      <div className="relative bg-[#EEEEEE] flex flex-col">
        {/* 지도 영역 */}
        <div className="relative w-[393px] h-[120px]">
          <img
            src="/welcome/mainBg.svg"
            alt="지도 배경"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* 사람 아이콘 자리 */}
          <div className="absolute top-2 left-4">
            <img
              src="/main/sampleImg/sample4.svg"
              alt="사람4"
              className="w-[64px] bg-gray-300 rounded-full"
            />
          </div>
          <div className="absolute top-12 left-28">
            <img
              src="/main/sampleImg/sample5.svg"
              alt="사람5"
              className="w-[52px] bg-gray-300 rounded-full"
            />
          </div>

          {/* 버튼 */}
          <div className="absolute bottom-2 right-1/10">
            <button className="px-[31px] py-[8px] bg-[#6BB1E4] border border-[#59A1D7] text-white text-sm font-semibold rounded-full shadow">
              내 근처 복지사 찾기
            </button>
          </div>
        </div>

        {/* 리스트 영역 */}
        <div className="py-2 space-y-[2px] pb-[73px]">
          {mainMockItems.map((item) => (
            <MainList item={item} />
          ))}
        </div>
        {/* 모달 */}
        <button
          onClick={() => navigate("/main/upload")}
          className="fixed bottom-[90px] right-6 bg-[#6BB1E4] border border-[#59A1D7] text-white text-[14px] font-semibold rounded-full w-[84px] h-[38px] z-40"
        >
          + 글쓰기
        </button>
        {/* 
        {isModalOpen && (
          <WriteModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        )}
        */}
      </div>
    </>
  );
};

export default Main;

import MainHomeEmpty from "../../components/Main/MainHomeEmpty";
import MainNavbar from "../../components/Main/MainNavbar";

const Main = () => {
  return (
    <>
      <MainNavbar />
      {/* 리스트 데이터 없을때 화면 */}
      <MainHomeEmpty />

      <div className="h-[703px] bg-gray-50 flex flex-col">
        {/* 지도 영역 */}
        <div className="relative w-full h-40">
          <img
            src="/welcome/mainBg.svg"
            alt="지도 배경"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* 사람 아이콘 자리 */}
          <div className="absolute top-6 left-10">
            <img
              src="/main/sampleImg/sample4.svg"
              alt="사람4"
              className="w-14 h-14 bg-gray-300 rounded-full"
            />
          </div>
          <div className="absolute top-12 right-16">
            <img
              src="/main/sampleImg/sample5.svg"
              alt="사람5"
              className="w-14 h-14 bg-gray-300 rounded-full"
            />
          </div>

          {/* 버튼 */}
          <div className="absolute bottom-2 right-1/8 ">
            <button className="px-6 py-2 bg-sky-400 text-white text-sm font-semibold rounded-full shadow">
              내 근처 복지사 찾기
            </button>
          </div>
        </div>

        {/* 리스트 영역 (스크롤 가능) */}
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-4">
          {/* 카드 1 */}
          <div className="flex items-start bg-white rounded-lg shadow-sm p-4">
            {/* 프로필 */}
            <div className="w-16 h-16 rounded-full bg-gray-300 mr-4" />

            {/* 내용 */}
            <div className="flex-1">
              <h3 className="font-semibold mb-1">
                “친절한 케어가 자신있는 복지사입니다”
              </h3>
              <p className="text-sm text-gray-600 mb-1">
                김*희 복지사 · 40대 후반 / 여성 / 경력 8년
              </p>
              <p className="text-sm text-gray-500">자격증: 사회복지사 2급</p>
              <p className="text-sm text-gray-500 mb-2">
                돌봄 분야: 지적, 발달 장애
              </p>
            </div>

            {/* 버튼 */}
            <button className="px-3 py-1 bg-sky-400 text-white text-xs rounded-md">
              바로 연락
            </button>
          </div>

          {/* 카드 2 */}
          <div className="flex items-start bg-white rounded-lg shadow-sm p-4">
            <div className="w-16 h-16 rounded-full bg-gray-300 mr-4" />
            <div className="flex-1">
              <h3 className="font-semibold mb-1">
                “전문적 지식을 바탕으로 케어합니다”
              </h3>
              <p className="text-sm text-gray-600 mb-1">
                박*근 복지사 · 40대 초반 / 남성 / 경력 7년
              </p>
              <p className="text-sm text-gray-500">자격증: 사회복지사 1급</p>
              <p className="text-sm text-gray-500 mb-2">
                돌봄 분야: 지적, 발달 장애
              </p>
            </div>
            <button className="px-3 py-1 bg-sky-400 text-white text-xs rounded-md">
              바로 연락
            </button>
          </div>

          {/* 카드 3 */}
          <div className="flex items-start bg-white rounded-lg shadow-sm p-4">
            <div className="w-16 h-16 rounded-full bg-gray-300 mr-4" />
            <div className="flex-1">
              <h3 className="font-semibold mb-1">
                “내 가족이라는 마음으로 임하겠습니다”
              </h3>
              <p className="text-sm text-gray-600 mb-1">
                최*은 복지사 · 40대 중반 / 여성 / 경력 3년
              </p>
              <p className="text-sm text-gray-500">자격증: 사회복지사 2급</p>
              <p className="text-sm text-gray-500 mb-2">
                돌봄 분야: 지적, 발달 장애
              </p>
            </div>
            <button className="px-3 py-1 bg-sky-400 text-white text-xs rounded-md">
              바로 연락
            </button>
          </div>

          {/* 카드 4 */}
          <div className="flex items-start bg-white rounded-lg shadow-sm p-4">
            <div className="w-16 h-16 rounded-full bg-gray-300 mr-4" />
            <div className="flex-1">
              <h3 className="font-semibold mb-1">
                “젊은 패기로 성실히 돕겠습니다”
              </h3>
              <p className="text-sm text-gray-600 mb-1">
                정*진 복지사 · 30대 초반 / 남성 / 경력 3년
              </p>
              <p className="text-sm text-gray-500">자격증: 사회복지사 2급</p>
              <p className="text-sm text-gray-500 mb-2">
                돌봄 분야: 지적, 발달 장애
              </p>
            </div>
            <button className="px-3 py-1 bg-sky-400 text-white text-xs rounded-md">
              + 글쓰기
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;

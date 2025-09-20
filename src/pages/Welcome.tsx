const Welcome = () => {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-white relative">
      {/* 상단 로고 */}
      <div className="flex flex-col justify-center items-center mt-8">
        <img
          src="/welcome/mainLogo.svg"
          alt="로고"
          className="w-[67px] h-[50px]"
        />
        <img
          src="/welcome/mainLogoName.svg"
          alt="이름"
          className="w-[56px] h-[32px]"
        />
      </div>

      {/* 지도 배경 + 프로필 이미지들 */}
      <div className="relative flex-1 w-full flex items-center justify-center">
        {/* 지도 배경 */}
        <img
          src="/welcome/mainBg.svg"
          alt="배경 지도"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* 프로필 이미지 1 */}
        <div className="absolute top-8 left-1/8">
          <img
            src="/welcome/mainHuman1.svg"
            alt="프로필1"
            className="w-[155px]"
          />
        </div>

        {/* 프로필 이미지 2 */}
        <div className="absolute top-45 right-1/8">
          <img
            src="/welcome/mainHuman2.svg"
            alt="프로필2"
            className="w-[120px]"
          />
        </div>

        {/* 프로필 이미지 3 */}
        <div className="absolute bottom-20 left-1/5">
          <img
            src="/welcome/mainHuman3.svg"
            alt="프로필3"
            className="w-[98px]"
          />
        </div>
      </div>

      {/* 안내 문구 */}
      <div className="text-center px-6">
        <h1 className="text-[38px] font-[600] mb-2">둥글게 함께, 둘이 함께</h1>
        <p className="text-gray-600 text-sm mb-6">
          내가 사는 동네 근처에 있는 회원을 찾아 함께하세요!
        </p>
      </div>

      {/* 버튼 */}
      <div className="w-full flex flex-col items-center gap-4 mb-12 px-8">
        <button className="w-full py-3 bg-[#9DD6FF] text-white font-semibold rounded-lg shadow">
          프로필 만들기
        </button>
        <button className="text-[#22222280] font-[600]">로그인</button>
      </div>
    </div>
  );
};

export default Welcome;

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div className="relative flex flex-col items-center justify-between min-h-screen bg-white">
      {/* 상단 로고 */}
      <div className="flex flex-col items-center justify-center mt-8">
        <img
          src="/welcome/mainLogo.svg"
          alt="로고"
          className="w-[67px] h-[50px]"
        />
      </div>

      {/* 지도 배경 + 프로필 이미지들 */}
      <div className="relative flex items-center justify-center flex-1 w-full">
        {/* 지도 배경 */}
        <img
          src="/welcome/mainBg.svg"
          alt="배경 지도"
          className="absolute inset-0 object-cover w-full h-full"
        />

        {/* 프로필 이미지 1 */}

        <motion.div
          className="absolute top-8 left-1/8"
          animate={{ y: [0, -6, 0] }} // 위로 8px만 이동 → 살짝 튐
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            src="/welcome/mainHuman1.svg"
            alt="프로필1"
            className="w-[155px]"
          />
        </motion.div>

        {/* 프로필 이미지 2 */}
        <motion.div
          className="absolute top-45 right-1/8"
          animate={{ y: [0, -3, 0] }} // 위로 8px만 이동 → 살짝 튐
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            src="/welcome/mainHuman2.svg"
            alt="프로필2"
            className="w-[120px]"
          />
        </motion.div>

        {/* 프로필 이미지 3 */}
        <motion.div
          className="absolute bottom-20 left-1/5"
          animate={{ y: [0, -2, 0] }} // 위로 8px만 이동 → 살짝 튐
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            src="/welcome/mainHuman3.svg"
            alt="프로필3"
            className="w-[98px]"
          />
        </motion.div>
      </div>

      {/* 안내 문구 */}
      <div className="px-6 text-center">
        <h1 className="text-[38px] font-[600] mb-2">둥글게 함께, 둘이 함께</h1>
        <p className="mb-6 text-sm text-gray-600">
          내가 사는 동네 근처에 있는 회원을 찾아 함께하세요!
        </p>
      </div>

      {/* 버튼 */}
      <div className="w-full flex flex-col items-center gap-[5px] mb-12 px-8">
        {/* 프로필 만들기 버튼 */}
        <motion.button
          onClick={() => navigate("/register-type")}
          className="w-full py-3 bg-[#6BB1E4] text-white font-semibold rounded-full shadow"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          프로필 만들기
        </motion.button>

        {/* 로그인 버튼 */}
        <motion.button
          className="text-[#22222280] font-[600] text-[16px]"
          onClick={() => (window.location.href = "/login")}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
          whileHover={{ scale: 1.02, color: "#6BB1E4" }}
          whileTap={{ scale: 0.98 }}
        >
          로그인
        </motion.button>
      </div>
    </div>
  );
};

export default Welcome;

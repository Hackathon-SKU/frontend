import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const RegisterEnd: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: 393,
        height: 852,
        background: "#FBFBFB",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", // 전체 세트를 세로 정중앙
        alignItems: "center",
      }}
    >
      {/* 중앙 그룹 */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* 체크 애니메이션 */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-2 -2 54 56"
          width="80"
          height="80"
          initial={{ scale: 0.8 }}
          animate={{ scale: [0.8, 1, 1.2, 1] }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <motion.circle
            cx="26"
            cy="26"
            r="25"
            fill="none"
            stroke="#6BB1E4"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="157"
            strokeDashoffset="157"
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
          <motion.path
            fill="none"
            stroke="#6BB1E4"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14 27 l8 8 l16 -16"
            strokeDasharray="40"
            strokeDashoffset="40"
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut", delay: 1 }}
          />
        </motion.svg>

        {/* 안내 텍스트 */}
        <motion.p
          style={{
            marginTop: "24px",
            fontSize: "40px",
            fontWeight: 600,
            color: "#6BB1E4",
            textAlign: "center",
          }}
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 1.2 }}
        >
          환영합니다!
        </motion.p>

        {/* 서브 안내 문구 */}
        <motion.p
          style={{
            marginTop: "12px",
            fontSize: "14px",
            fontWeight: 400,
            color: "#222",
            textAlign: "center",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 1.5 }}
        >
          내가 사는 동네 근처에 있는 회원을 찾아 함께하세요!
        </motion.p>

        {/* 버튼 */}
        <motion.button
          style={{
            marginTop: "48px",
            width: "353px",
            height: "50px",
            borderRadius: "100px",
            border: "1px solid #59A1D7",
            background: "#6BB1E4",
            color: "#fff",
            fontSize: "20px",
            fontWeight: 500,
            cursor: "pointer",
            letterSpacing: 2,
          }}
          onClick={() => navigate("/main")}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 2 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          시작하기
        </motion.button>
      </div>
    </div>
  );
};

export default RegisterEnd;

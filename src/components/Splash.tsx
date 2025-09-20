import { motion } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/welcome"); // 2초 뒤 Welcome 페이지로 이동
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <img
          src="/welcome/mainLogo.svg"
          alt="두리 로고"
          className="w-[120px] h-[120px] mb-4"
        />
        <p className="text-[#6BB1E4] text-2xl font-semibold">두리</p>
      </motion.div>
    </div>
  );
};

export default Splash;

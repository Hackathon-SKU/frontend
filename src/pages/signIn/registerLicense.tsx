import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const LICENSE_OPTIONS = [
  "사회복지사 1급",
  "사회복지사 2급",
  "장애인활동지원사",
  "장애인재활상담사 1급",
  "장애인재활상담사 2급",
  "장애영유아보육교사",
  "보육교사 1급",
  "보육교사 2급",
  "장애인인식개선교육지도사",
  "직업재활사",
];

const RegisterLicense: React.FC = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleSelect = (license: string) => {
    setSelected((prev) =>
      prev.includes(license)
        ? prev.filter((l) => l !== license)
        : [...prev, license]
    );
  };

  const isValid = selected.length > 0;

  const handleNext = () => {
    if (!isValid) return;
    localStorage.setItem("registerCaregiverLicenses", JSON.stringify(selected));
    navigate("/register-photo");
  };

  useEffect(() => {
    const originalHtmlMargin = document.documentElement.style.margin;
    const originalHtmlPadding = document.documentElement.style.padding;
    const originalBodyMargin = document.body.style.margin;
    const originalBodyPadding = document.body.style.padding;
    document.documentElement.style.margin = "0";
    document.documentElement.style.padding = "0";
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    return () => {
      document.documentElement.style.margin = originalHtmlMargin;
      document.documentElement.style.padding = originalHtmlPadding;
      document.body.style.margin = originalBodyMargin;
      document.body.style.padding = originalBodyPadding;
    };
  }, []);

  return (
    <div
      style={{
        width: 393,
        height: 852,
        background: "#FBFBFB",
        fontFamily: "inherit",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "fixed",
        top: 0,
        left: 0,
        overflow: "hidden",
        zIndex: 10,
        right: 0,
        bottom: 0,
        margin: "auto",
        maxWidth: "100vw",
        maxHeight: "100vh",
      }}
    >
      <div style={{ height: 60 }} />

      {/* 로고 */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 4,
            overflow: "hidden",
          }}
        >
          <img
            src="/welcome/mainLogo.svg"
            alt="logo"
            style={{ width: 40, height: 40, objectFit: "contain" }}
          />
        </div>
      </motion.div>

      {/* Progress */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
        style={{ width: 325, margin: "35px auto 0 auto", position: "relative" }}
      >
        <div
          style={{
            width: "100%",
            height: 10,
            background: "#F2F2F2",
            borderRadius: 10,
            marginBottom: "3px",
          }}
        />
        <div
          style={{
            width: "20%",
            height: 10,
            background: "#6BB1E4",
            borderRadius: 10,
            position: "absolute",
            top: 0,
            left: "80%",
          }}
        />
        {/* 강조 모션 */}
        <motion.span
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 0.2,
            type: "spring",
            stiffness: 200,
          }}
          style={{
            position: "absolute",
            textAlign: "left",
            color: "#8A8A8A",
            fontSize: "16px",
            left: "230px",
            fontWeight: 600,
            lineHeight: "30px",
            whiteSpace: "nowrap",
          }}
        >
          거의 다 왔어요!
        </motion.span>
      </motion.div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
        style={{
          marginTop: 64,
          width: "100%",
          marginLeft: "50px",
          textAlign: "left",
        }}
      >
        <span
          style={{
            color: "#000",
            fontSize: "24px",
            fontWeight: 600,
            lineHeight: "28px",
          }}
        >
          소지하고 있는 복지 자격증을 <br />
          선택해주세요
        </span>
      </motion.div>

      {/* 자격증 버튼들 */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: 0.4 },
          },
        }}
        style={{
          width: 353,
          marginTop: 69,
          marginBottom: 32,
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
        }}
      >
        {LICENSE_OPTIONS.map((license) => (
          <motion.button
            key={license}
            type="button"
            onClick={() => handleSelect(license)}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            style={{
              borderRadius: "100px",
              border: "1px solid #59A1D7",
              background: selected.includes(license) ? "#6BB1E4" : "#fff",
              color: selected.includes(license) ? "#fff" : "#59A1D7",
              fontSize: 13,
              fontWeight: 400,
              cursor: "pointer",
              transition: "background 0.2s, color 0.2s",
              height: "36px",
              padding: "0 14px",
              whiteSpace: "nowrap",
            }}
          >
            {license}
          </motion.button>
        ))}
      </motion.div>

      {/* 다음 버튼 */}
      <motion.button
        style={{
          position: "absolute",
          bottom: 32,
          left: 20,
          width: "353px",
          height: "50px",
          borderRadius: "100px",
          border: "1px solid #59A1D7",
          background: isValid ? "#6BB1E4" : "#A8D4EF",
          color: "#fff",
          fontSize: "20px",
          fontWeight: 600,
          cursor: isValid ? "pointer" : "not-allowed",
          letterSpacing: 2,
        }}
        disabled={!isValid}
        onClick={handleNext}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.5 }}
        whileHover={isValid ? { scale: 1.02 } : {}}
        whileTap={isValid ? { scale: 0.98 } : {}}
      >
        다음
      </motion.button>
    </div>
  );
};

export default RegisterLicense;

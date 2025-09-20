import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const RegisterPW: React.FC = () => {
  const [pw, setPw] = useState("");
  const [pw2, setPw2] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [showPw2, setShowPw2] = useState(false);
  const [pwTouched, setPwTouched] = useState(false);
  const [pw2Touched, setPw2Touched] = useState(false);
  const navigate = useNavigate();

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

  const pwValid = pw.length >= 8 && /[A-Za-z]/.test(pw) && /\d/.test(pw);
  const pw2Valid = pw2.length > 0 && pw === pw2;
  const isValid = pwValid && pw2Valid;

  const handleNext = () => {
    if (!isValid) return;
    localStorage.setItem("registerPassword", pw);
    navigate("/register-info");
  };

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
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
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

      {/* Progress Bar */}
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
            left: "40%",
          }}
        />
        <span
          style={{
            position: "absolute",
            textAlign: "left",
            color: "#8A8A8A",
            fontSize: "16px",
            left: "301px",
            fontWeight: 600,
            lineHeight: "30px",
          }}
        >
          3/5
        </span>
      </motion.div>

      {/* 타이틀 */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
        style={{
          marginTop: 64,
          width: "100%",
          marginLeft: "50px",
          textAlign: "left",
        }}
      >
        <span style={{ color: "#000", fontSize: "24px", fontWeight: 600 }}>
          비밀번호를 입력해주세요
        </span>
      </motion.div>

      {/* 입력 필드 */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
        style={{ width: 353, marginTop: 48 }}
      >
        {/* 비밀번호 입력 */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ position: "relative", width: "100%" }}>
            <input
              type={showPw ? "text" : "password"}
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              placeholder="비밀번호"
              style={{
                border: "none",
                borderBottom: "2px solid #6BB1E4",
                outline: "none",
                fontSize: 15,
                background: "transparent",
                padding: "4px 0 4px 8px",
                width: "100%",
                marginTop: 4,
                color: "#222",
              }}
              onBlur={() => setPwTouched(true)}
            />
            <img
              src={showPw ? "/signIn/eye-on.png" : "/signIn/eye-off.png"}
              alt={showPw ? "보임" : "숨김"}
              style={{
                position: "absolute",
                right: 4,
                top: "50%",
                transform: "translateY(-50%)",
                width: 13,
                height: 12,
                cursor: "pointer",
              }}
              onClick={() => setShowPw((v) => !v)}
            />
          </div>
          <span
            style={{
              color: "#D0D0D0",
              textAlign: "left",
              fontSize: "10px",
              fontWeight: 500,
              lineHeight: "20px",
              padding: "4px 0 4px 8px",
              display: "block",
            }}
          >
            영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.
          </span>
        </div>

        {/* 비밀번호 재확인 */}
        <div>
          <div style={{ position: "relative", width: "100%" }}>
            <input
              type={showPw2 ? "text" : "password"}
              value={pw2}
              onChange={(e) => setPw2(e.target.value)}
              placeholder="비밀번호 재확인"
              style={{
                border: "none",
                borderBottom: "2px solid #6BB1E4",
                outline: "none",
                fontSize: 15,
                background: "transparent",
                padding: "4px 0 4px 8px",
                width: "100%",
                marginTop: 4,
                color: "#222",
              }}
              onBlur={() => setPw2Touched(true)}
            />
            <img
              src={showPw2 ? "/signIn/eye-on.png" : "/signIn/eye-off.png"}
              alt={showPw2 ? "보임" : "숨김"}
              style={{
                position: "absolute",
                right: 4,
                top: "50%",
                transform: "translateY(-50%)",
                width: 13,
                height: 12,
                cursor: "pointer",
              }}
              onClick={() => setShowPw2((v) => !v)}
            />
          </div>
          {pw2Touched && pw2.length > 0 && pw !== pw2 ? (
            <span
              style={{ color: "#FF4D4F", fontSize: "10px", paddingLeft: 8 }}
            >
              비밀번호가 일치하지 않습니다.
            </span>
          ) : pwTouched && pw.length > 0 && !pwValid ? (
            <span
              style={{ color: "#FF4D4F", fontSize: "10px", paddingLeft: 8 }}
            >
              영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.
            </span>
          ) : null}
        </div>
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
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 }}
        whileHover={isValid ? { scale: 1.02 } : {}}
        whileTap={isValid ? { scale: 0.98 } : {}}
      >
        다음
      </motion.button>
    </div>
  );
};

export default RegisterPW;

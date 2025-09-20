import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

const RegisterPhoto: React.FC = () => {
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBoxClick = () => {
    fileInputRef.current?.click();
  };

  const handleNext = async () => {
    if (!preview || loading) return;
    setLoading(true);

    const email = localStorage.getItem("registerEmail") || "";
    const password = localStorage.getItem("registerPassword") || "";
    const name = localStorage.getItem("registerName") || "";
    let gender = localStorage.getItem("registerGender") || "";
    const birth = localStorage.getItem("registerBirth") || "";
    const role = "CAREGIVER";

    if (gender === "남" || gender === "MALE" || gender === "MEN")
      gender = "MEN";
    else if (gender === "여" || gender === "FEMALE" || gender === "WOMEN")
      gender = "WOMEN";

    const birthDate =
      birth.length === 8
        ? `${birth.slice(0, 4)}-${birth.slice(4, 6)}-${birth.slice(6, 8)}`
        : "";

    try {
      await axios.post(
        `${import.meta.env.VITE_BASE_URL}/auth/join`,
        {
          email,
          password,
          name,
          gender,
          birthDate,
          role,
        },
        {
          headers: {
            accept: "*/*",
            "Content-Type": "application/json",
          },
        }
      );
      navigate("/register-end");
    } finally {
      console.log(setLoading(false));
    }
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
      <div
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
      </div>

      {/* 진행바 */}
      <div
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
        <motion.span
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: [0.8, 1.1, 0.95, 1.05, 1], opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
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
      </div>

      {/* 안내 문구 */}
      <div
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
          복지 자격증 인증 사진을 <br />
          첨부해주세요
        </span>
      </div>

      {/* 업로드 박스 */}
      <div style={{ width: 353, marginTop: 62, marginBottom: 32 }}>
        <div
          style={{
            width: 100,
            height: 100,
            border: "1px solid #59A1D7",
            borderRadius: 16,
            background: "#fff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            cursor: "pointer",
            margin: "0 12px",
            position: "relative",
          }}
          onClick={handleBoxClick}
        >
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          {preview ? (
            <img
              src={preview}
              alt="미리보기"
              style={{
                width: 100,
                height: 100,
                objectFit: "cover",
                borderRadius: 12,
              }}
            />
          ) : (
            <>
              <img
                src="/signIn/camera.png"
                alt="카메라"
                style={{
                  width: 51,
                  height: 51,
                  marginBottom: 3,
                  marginTop: 16,
                }}
              />
              <span style={{ color: "#6BB1E4", fontSize: 10, fontWeight: 500 }}>
                사진 첨부
              </span>
            </>
          )}
        </div>
      </div>

      {/* 버튼 */}
      <motion.button
        style={{
          position: "absolute",
          bottom: 32,
          left: 20,
          width: "353px",
          height: "50px",
          borderRadius: "100px",
          border: "1px solid #59A1D7",
          background: preview && !loading ? "#6BB1E4" : "#A8D4EF",
          color: "#fff",
          fontSize: "20px",
          fontWeight: 600,
          cursor: preview && !loading ? "pointer" : "not-allowed",
          letterSpacing: 2,
        }}
        disabled={!preview || loading}
        onClick={handleNext}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        whileHover={preview && !loading ? { scale: 1.02 } : {}}
        whileTap={preview && !loading ? { scale: 0.98 } : {}}
      >
        {loading ? "회원가입 중..." : "다음"}
      </motion.button>
    </div>
  );
};

export default RegisterPhoto;

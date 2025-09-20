import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const fadeInStyle: React.CSSProperties = {
  opacity: 1,
  transition: "opacity 0.5s",
};

const fadeOutStyle: React.CSSProperties = {
  opacity: 0,
  transition: "opacity 0.5s",
  pointerEvents: "none",
  height: 0,
  overflow: "hidden",
};

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
            src="/signIn/logo.png"
            alt="logo"
            style={{ width: 40, height: 40, objectFit: "contain" }}
          />
        </div>
      </div>

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
        <span
          style={{
            position: "absolute",
            textAlign: "left",
            color: "#8A8A8A",
            fontSize: "16px",
            left: "230px",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "30px",
            whiteSpace: "nowrap",
            width: "auto",
            maxWidth: "100%",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          거의 다 왔어요!
        </span>
      </div>

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
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "28px",
          }}
        >
          소지하고 있는 복지 자격증을 <br/>선택해주세요
        </span>
      </div>
      <div
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
          <button
            key={license}
            type="button"
            onClick={() => handleSelect(license)}
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
              boxSizing: "border-box",
              textAlign: "center",
              padding: "0 14px",
              width: "auto",
              flex: "none",
              whiteSpace: "nowrap",
            }}
          >
            {license}
          </button>
        ))}
      </div>
      <button
        style={{
          position: "absolute",
          bottom: 32,
          left: 20,
          width: "353px",
          height: "50px",
          borderRadius: "100px",
          border: "1px solid #59A1D7",
          background: "#6BB1E4",
          color: "#fff",
          fontSize: "20px",
          fontWeight: 600,
          cursor: isValid ? "pointer" : "not-allowed",
          letterSpacing: 2,
        }}
        disabled={!isValid}
        onClick={handleNext}
      >
        다음
      </button>
    </div>
  );
};

export default RegisterLicense;
       
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

const RegisterInfo: React.FC = () => {
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [gender, setGender] = useState<"MALE" | "FEMALE" | "">("");
  const [showBirth, setShowBirth] = useState(false);
  const [showGender, setShowGender] = useState(false);
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

  useEffect(() => {
    if (name.trim().length > 0) {
      setTimeout(() => setShowBirth(true), 100);
    } else {
      setShowBirth(false);
      setShowGender(false);
    }
  }, [name]);

  useEffect(() => {
    if (birth.length === 8 && /^\d{8}$/.test(birth)) {
      setTimeout(() => setShowGender(true), 100);
    } else {
      setShowGender(false);
    }
  }, [birth]);

  const isValid =
    name.trim().length > 0 &&
    birth.length === 8 &&
    /^\d{8}$/.test(birth) &&
    gender !== "";

  const handleNext = () => {
    if (!isValid) return;
    localStorage.setItem("registerName", name.trim());
    localStorage.setItem("registerBirth", birth);
    localStorage.setItem("registerGender", gender);
    const role = localStorage.getItem("registerRole");
    if (role === "DISABLED") {
      navigate("/disabledRegist");
    } else if (role === "CAREGIVER") {
      navigate("/registerLicense");
    } else {
      navigate("/");
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
            left: "60%",
          }}
        />
        <span
          style={{
            position: "absolute",
            textAlign: "left",
            color: "#8A8A8A",
            fontSize: "16px",
            left: "301px",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "30px",
          }}
        >
          4/5
        </span>
      </div>

      {/* 이름 */}
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
            fontWeight: 600,
            lineHeight: "28px",
          }}
        >
          이름이 무엇인가요?
        </span>
      </div>
      <div style={{ width: 353, marginTop: 46 }}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="이름을 입력해주세요"
          style={{
            border: "none",
            borderBottom: "2px solid #6BB1E4",
            outline: "none",
            fontSize: 15,
            background: "transparent",
            padding: "4px 0 4px 8px",
            width: "100%",
            marginTop: 4,
          }}
        />
      </div>

      <div
        style={{
          ...(!showBirth ? fadeOutStyle : fadeInStyle),
          marginTop: 48,
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
            fontWeight: 600,
            lineHeight: "28px",
          }}
        >
          생년월일을 입력해주세요{" "}
          <span style={{ fontSize: 13, fontWeight: 600, color: "#8A8A8A" }}>
            (8자리)
          </span>
        </span>
      </div>
      <div
        style={{
          ...(!showBirth ? fadeOutStyle : fadeInStyle),
          width: 353,
          marginTop: 47,
        }}
      >
        <input
          type="text"
          value={birth}
          onChange={(e) => {
            const v = e.target.value.replace(/\D/g, "").slice(0, 8);
            setBirth(v);
          }}
          placeholder="생년월일 8자리"
          style={{
            border: "none",
            borderBottom: "2px solid #6BB1E4",
            outline: "none",
            fontSize: 15,
            background: "transparent",
            padding: "4px 0 4px 8px",
            width: "100%",
            marginTop: 4,
          }}
        />
      </div>

      <div
        style={{
          ...(!showGender ? fadeOutStyle : fadeInStyle),
          marginTop: 40,
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
            fontWeight: 600,
            lineHeight: "28px",
          }}
        >
          성별
        </span>
      </div>
      <div
        style={{ 
          ...(!showGender ? fadeOutStyle : fadeInStyle),
          display: "flex",
          flexDirection: "row",
          width: 354,
          height: 50,
          marginTop: 24,
          background: "#F5F5F5",
          borderRadius: 24,
          border: "1px solid #E0E0E0",
          overflow: "hidden",
        }}
      >
        <button
          type="button"
          onClick={() => setGender("MALE")}
          style={{
            flex: 1,
            background: gender === "MALE" ? "#6BB1E4" : "transparent",
            color: gender === "MALE" ? "#fff" : "#8A8A8A",
            border: "none",
            fontSize: 20,
            fontWeight: 500,
            borderRadius: "100px 0 0 100px",
            height: "100%",
            cursor: "pointer",
            transition: "background 0.2s",
          }}
        >
          남성
        </button>
        <button
          type="button"
          onClick={() => setGender("FEMALE")}
          style={{
            flex: 1,
            background: gender === "FEMALE" ? "#6BB1E4" : "transparent",
            color: gender === "FEMALE" ? "#fff" : "#8A8A8A",
            border: "none",
            fontSize: 20,
            fontWeight: 500,
            borderRadius: "0 100px 100px 0",
            height: "100%",
            cursor: "pointer",
            transition: "background 0.2s",
          }}
        >
          여성
        </button>
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

export default RegisterInfo;

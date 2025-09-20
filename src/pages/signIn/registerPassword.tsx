import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPW: React.FC = () => {
  const [pw, setPw] = useState("");
  const [pw2, setPw2] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [showPw2, setShowPw2] = useState(false);
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

  const isValid =
    pw.length >= 8 &&
    /[A-Za-z]/.test(pw) &&
    /\d/.test(pw) &&
    pw === pw2;

  const handleNext = () => {
    if (!isValid) return;
    localStorage.setItem("registerPassword", pw);
    navigate("/register-name");
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
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
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

      <div style={{ width: 325, margin: "35px auto 0 auto", position: "relative" }}>
        <div
          style={{
            width: "100%",
            height: 10,
            background: "#F2F2F2",
            borderRadius: 10,
            marginBottom: "3px"
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
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "30px",
          }}
        >
          3/5
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
            fontWeight: 600,
            lineHeight: "28px",
          }}
        >
          비밀번호를 입력해주세요
        </span>
      </div>

      <div style={{ width: 330, marginTop: 48 }}>
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ color: "#8A8A8A", fontSize: 15, flex: 1 }}>비밀번호</span>
            <button
              type="button"
              onClick={() => setShowPw((v) => !v)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                marginLeft: 4,
                outline: "none",
                display: "flex",
                alignItems: "center",
              }}
              tabIndex={-1}
            >
              <img
                src="/signIn/eye-off.png"
                alt={showPw ? "숨김" : "보임"}
                style={{
                  width: 20,
                  height: 20,
                  opacity: 0.5,
                }}
              />
            </button>
          </div>
          <input
            type={showPw ? "text" : "password"}
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            placeholder="영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요."
            style={{
              border: "none",
              borderBottom: "2px solid #6BB1E4",
              outline: "none",
              fontSize: 16,
              background: "transparent",
              padding: "8px 0 4px 0",
              width: "100%",
              marginTop: 4,
              color: "#222",
            }}
          />
        </div>
        {/* 비밀번호 재확인 */}
        <div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ color: "#8A8A8A", fontSize: 15, flex: 1 }}>비밀번호 재확인</span>
            <button
              type="button"
              onClick={() => setShowPw2((v) => !v)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                marginLeft: 4,
                outline: "none",
                display: "flex",
                alignItems: "center",
              }}
              tabIndex={-1}
            >
              <img
                src="/signIn/eye-off.png"
                alt={showPw2 ? "숨김" : "보임"}
                style={{
                  width: 20,
                  height: 20,
                  opacity: 0.5,
                }}
              />
            </button>
          </div>
          <input
            type={showPw2 ? "text" : "password"}
            value={pw2}
            onChange={(e) => setPw2(e.target.value)}
            placeholder=""
            style={{
              border: "none",
              borderBottom: "2px solid #6BB1E4",
              outline: "none",
              fontSize: 16,
              background: "transparent",
              padding: "8px 0 4px 0",
              width: "100%",
              marginTop: 4,
              color: "#222",
            }}
          />
        </div>
      </div>

      {/* 하단 버튼 */}
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

export default RegisterPW;

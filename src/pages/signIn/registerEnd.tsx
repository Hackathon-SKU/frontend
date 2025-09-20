import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RegisterEnd: React.FC = () => {
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

  const navigate = useNavigate();

  return (
    <div
      style={{
        width: 393,
        height: 852,
        background: "#fff",
        fontFamily: "inherit",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
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
      <img
        src="/signIn/check.png"
        alt="check"
        style={{
          marginTop: -40,
          width: 78,
          height: 78,
          marginBottom: 38,
        }}
      />
      <div
        style={{
          color: "#6BB1E4",
          fontSize: 36,
          fontWeight: 600,
          marginBottom: 10,
          textAlign: "center",
        }}
      >
        환영합니다!
      </div>
      <div
        style={{
          color: "#222",
          fontSize: 14,
          fontWeight: 400,
          textAlign: "center",
        }}
      >
        내가 사는 동네 근처에 있는 회원을 찾아 함께하세요!
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
          letterSpacing: 2,
        }}
        onClick={() => navigate("/main")}
      >
        시작하기
      </button>
    </div>
  );
};

export default RegisterEnd;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterType: React.FC = () => {
  const [selected, setSelected] = useState<"user" | "worker" | null>("user");
  const navigate = useNavigate();

  const getRole = (type: "user" | "worker") =>
    type === "user" ? "DISABLED" : "CAREGIVER";

  const handleNext = () => {
    if (!selected) return;
    localStorage.setItem("registerRole", getRole(selected));
    navigate("/register-email");
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
            left: 0,
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
            lineHeight: "30px" 
          }}
        >
          1/5
        </span>
      </div>

      <div
        style={{
          marginTop: 84,
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
            lineHeight: "28px"
          }}
        >
          가입 유형을 선택해주세요
        </span>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: 340,
          height: 177,
          marginTop:"50px",
          background: "none",
          borderRadius: "8px",
          overflow: "hidden",
          boxShadow: "none",
          border: "1px solid #59A1D7"
        }}
      >
        <div
          onClick={() => setSelected("user")}
          style={{
            flex: 1,
            background: selected === "user" ? "#6BB1E4" : "#FFFFFF",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // justifyContent: "center",
            cursor: "pointer",
            transition: "background 0.2s",
            borderRight: "1px solid #6BB1E4",
          }}
        >
          <img
            src="/signIn/wheelchair.png"
            alt="장애인/보호자"
            style={{
              width: "98px",
              height: "110px",
              marginTop: "17px",
              marginBottom: "11px",
              filter: selected === "user" ? "brightness(0) invert(1)" : "none",
            }}
          />
          <span
            style={{
              fontSize: "20px",
              fontWeight: "600px",
              color: selected === "user" ? "#fff" : "#6BB1E4",
              letterSpacing: 1,
            }}
          >
            장애인 · 보호자
          </span>
        </div>
        <div
          onClick={() => setSelected("worker")}
          style={{
            flex: 1,
            background: selected === "worker" ? "#6BB1E4" : "#FAFAFA",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            cursor: "pointer",
            transition: "background 0.2s",
          }}
        >
          <img
            src="/signIn/worker.png"
            alt="복지사"
            style={{
              width: "95px",
              height: "105px",
              filter:
                selected === "worker" ? "brightness(0) invert(1)" : "none",
              marginTop: "17px",
              marginBottom: "16px",
            }}
          />
          <span
            style={{
              fontSize: "20px",
              fontWeight: 600,
              color: selected === "worker" ? "#fff" : "#6BB1E4",
              letterSpacing: 1,
            }}
          >
            복지사
          </span>
        </div>
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
          cursor: "pointer",
          letterSpacing: 2,
        }}
        disabled={!selected}
        onClick={handleNext}
      >
        다음
      </button>
    </div>
  );
};

export default RegisterType;

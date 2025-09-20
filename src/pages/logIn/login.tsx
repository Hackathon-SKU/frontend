import React, { useState } from "react";
import axios from "axios";
import { setUserId } from "../../utils/user";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [autoLogin, setAutoLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !pw) {
      alert("이메일과 비밀번호를 모두 입력해주세요.");
      return;
    }
    if (loading) return;
    setLoading(true);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}auth/login`,
        { email, password: pw },
        { headers: { "Content-Type": "application/json" } }
      );
      console.log("로그인 응답:", res.data);

      const result = res.data?.result;
      const user = result?.user;
      console.log("result:", result);
      console.log("user:", user);

      let accessToken = null;
      let refreshToken = null;

      if (res.headers && res.headers.authorization) {
        const authHeader = res.headers.authorization;
        if (authHeader.startsWith("Bearer ")) {
          accessToken = authHeader.replace("Bearer ", "");
          sessionStorage.setItem("accessToken", accessToken);
          console.log("accessToken 저장(sessionStorage):", accessToken);
        }
      }

      if (user?.userId) {
        sessionStorage.setItem("userId", String(user.userId));
        setUserId(user.userId);
        console.log("userId 저장(sessionStorage):", user.userId);
      }

      console.log("sessionStorage accessToken:", sessionStorage.getItem("accessToken"));

      alert("로그인 성공");
      navigate("/main");
      setTimeout(() => {
        console.log("navigate 후 sessionStorage accessToken:", sessionStorage.getItem("accessToken"));
      }, 100);
    } catch (e) {
      console.error("로그인 에러:", e);
      alert("로그인에 실패했습니다.");
    } finally {
      setLoading(false);
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
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 4,
          }}
        >
          <img
            src="/signIn/logo.png"
            alt="logo"
            style={{ width: 40, height: 40, objectFit: "contain" }}
          />
        </div>
        <span
        style={
            {color: "#9DD6FF", fontSize: 16, fontWeight: 200}
        }>
            둥글게 함께, 둘이 함께
        </span>
      </div>
      <div
        style={{
          marginTop: 31,
          width: "100%",
          marginLeft: "57px",
          textAlign: "left",
        }}
      >
        <span
          style={{
            color: "#000",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "28px", /* 116.667% */
          }}
        >
          로그인 하세요
        </span>
      </div>
      <div style={{ width: 353, marginTop: 85 }}>
        <input
          style={{
            width: "100%",
            height: 59,
            borderRadius: 8,
            border: "1px solid #D0D0D0",
            background: "#FFF",
            outline: "none",
            fontSize: 15,
            padding: "4px 0 4px 8px",
            color: "#222",
            marginBottom: 10,
          }}
          placeholder="이메일을 입력해주세요."
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          style={{
            width: "100%",
            height: 59,
            borderRadius: 8,
            border: "1px solid #D0D0D0",
            background: "#FFF",
            outline: "none",
            fontSize: 15,
            padding: "4px 0 4px 8px",
            color: "#222",
            marginBottom: 9,
          }}
          placeholder="비밀번호를 입력해주세요."
          value={pw}
          onChange={e => setPw(e.target.value)}
        />
        <div style={{ display: "flex", alignItems: "center", marginBottom: 225 }}>
        <label
            style={{
                display: "flex",
                alignItems: "center",
                fontSize: 13,
                color: "#000",
                textAlign: "center",
                fontStyle: "normal",
                fontWeight: 300,
                lineHeight: "normal",
                letterSpacing: "-0.325px",
            }}
        >
            <input
                type="checkbox"
                checked={autoLogin}
                onChange={e => setAutoLogin(e.target.checked)}
                style={{ marginRight: 6 }}
            />
            자동로그인
        </label>
          <div style={{ flex: 1 }} />
          <span style={{ fontSize: 13, color: "#000" }}>아이디 / 비밀번호를 잊으셨나요?</span>
        </div>
        <div
          style={{
            textAlign: "center",
            color: "#A0A0A0",
            fontSize: 15,
            marginBottom: 28,
            cursor: "pointer",
          }}
          onClick={() => navigate("/register-type")}
        >
          아직 회원이 아니신가요?
        </div>
        <button
          style={{
            width: "353px",
            height: "50px",
            borderRadius: "100px",
            border: "1.5px solid #59A1D7",
            background: "#6BB1E4",
            color: "#fff",
            fontWeight: 600,
            fontSize: 20,
            marginBottom: 32,
            cursor: !loading ? "pointer" : "not-allowed",
            letterSpacing: 2,
            transition: "background 0.2s, color 0.2s",
          }}
          disabled={loading}
          onClick={handleLogin}
        >
          {loading ? "로그인 중..." : "로그인"}
        </button>
      </div>
    </div>
  );
};

export default Login;

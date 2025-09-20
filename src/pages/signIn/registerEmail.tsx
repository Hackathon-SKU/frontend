import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const EMAIL_DOMAINS = [
  "naver.com",
  "hanmail.net",
  "daum.net",
  "gmail.com",
  "nate.com",
  "hotmail.com",
  "outlook.com",
  "icloud.com",
  "직접입력",
];

const RegisterEmail: React.FC = () => {
  const [emailId, setEmailId] = useState("");
  const [domain, setDomain] = useState("");
  const [domainSelect, setDomainSelect] = useState("");
  const [customDomain, setCustomDomain] = useState("");
  const [showDomainInput, setShowDomainInput] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (domainSelect === "직접입력") {
      setShowDomainInput(true);
      setDomain("");
    } else if (domainSelect) {
      setShowDomainInput(false);
      setDomain(domainSelect);
      setCustomDomain("");
    }
  }, [domainSelect]);

  const isValid =
    emailId.length > 0 &&
    (showDomainInput
      ? customDomain.trim().length > 0
      : domainSelect.trim().length > 0);

  const handleNext = () => {
    if (!isValid) return;
    const email =
      emailId +
      "@" +
      (showDomainInput ? customDomain.trim() : domainSelect.trim());
    localStorage.setItem("registerEmail", email);
    navigate("/register-password");
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

      {/* Progress bar */}
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
            position: "relative",
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
            left: "20%",
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
          2/5
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
        <span
          style={{
            color: "#000",
            fontSize: "24px",
            fontWeight: 600,
            lineHeight: "28px",
          }}
        >
          이메일을 입력해주세요
        </span>
      </motion.div>

      {/* 입력창 */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: 330,
          marginTop: "32px",
          gap: 8,
        }}
      >
        <div style={{ flex: 1 }}>
          <input
            type="text"
            value={emailId}
            required
            onChange={(e) => setEmailId(e.target.value)}
            placeholder="이메일"
            style={{
              border: "none",
              borderBottom: "2px solid #6BB1E4",
              outline: "none",
              fontSize: 15,
              background: "transparent",
              padding: "4px 0 4px 8px",
              width: "100%",
            }}
          />
        </div>
        <span style={{ color: "#8A8A8A", fontSize: 24 }}>@</span>
        <div style={{ flex: 1, position: "relative" }}>
          {!showDomainInput ? (
            <select
              value={domainSelect}
              onChange={(e) => setDomainSelect(e.target.value)}
              style={{
                border: "none",
                borderBottom: "2px solid #6BB1E4",
                outline: "none",
                fontSize: 15,
                background: "transparent",
                padding: "4px 0 4px 8px",
                width: "100%",
                appearance: "none",
                color: domainSelect === "" ? "#8A8A8A" : "#111",
              }}
            >
              <option value="" disabled hidden>
                선택해주세요
              </option>
              {EMAIL_DOMAINS.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          ) : (
            <input
              type="text"
              value={customDomain}
              onChange={(e) => setCustomDomain(e.target.value)}
              placeholder="직접입력"
              style={{
                border: "none",
                borderBottom: "2px solid #6BB1E4",
                outline: "none",
                fontSize: 15,
                background: "transparent",
                padding: "4px 0 4px 8px",
                width: "100%",
              }}
            />
          )}
          {!showDomainInput && (
            <img
              src="/signIn/dropdown.png"
              alt="dropdown"
              style={{
                position: "absolute",
                right: 8,
                top: 12,
                width: 8,
                pointerEvents: "none",
              }}
            />
          )}
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

export default RegisterEmail;

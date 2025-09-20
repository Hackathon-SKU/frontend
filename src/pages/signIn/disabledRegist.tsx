import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DISABLED_TYPES = [
  "지체 장애",
  "뇌병변 장애",
  "시각 장애",
  "청각 장애",
  "언어 장애",
  "안면 장애",
  "신장 장애",
  "심장 장애",
  "간 장애",
  "호흡기 장애",
  "장루·요루 장애",
  "뇌전증 장애",
  "지적 장애",
  "자폐성 장애",
  "정신 장애",
];

const GRADE_OPTIONS = ["1급", "2급", "3급", "4급", "5급", "6급"];

function GradeDropdown({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <div ref={ref} style={{ position: "relative", width: "100%" }}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        style={{
          width: "100%",
          border: "none",
          borderBottom: "2px solid #6BB1E4",
          outline: "none",
          fontSize: 15,
          background: "transparent",
          padding: "4px 0 4px 8px",
          appearance: "none",
          WebkitAppearance: "none",
          MozAppearance: "none",
          color: value ? "#222" : "#8A8A8A",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {value || "급수를 선택해주세요"}
        <img
          src="/signIn/dropdown.png"
          alt="드롭다운"
          style={{
            position: "absolute",
            right: 8,
            top: 12,
            pointerEvents: "none",
            width: 8,
            height: "auto",
            objectFit: "contain",
          }}
        />
      </button>
      <div
        style={{
          position: "absolute",
          top: 31,
          left: 0,
          width: "100%",
          background: "#fff",
          border: "1px solid #F2F4F7",
          borderRadius: 8,
          boxShadow: "0 12px 16px -4px rgba(0,0,0,0.06)",
          zIndex: 100,
          padding: open ? "8px 0" : "0 0",
          maxHeight: open ? 270 : 0,
          opacity: open ? 1 : 0,
          overflow: "hidden",
          transition: "max-height 0.25s cubic-bezier(.4,0,.2,1), opacity 0.2s",
          pointerEvents: open ? "auto" : "none",
        }}
      >
        {GRADE_OPTIONS.map((g) => (
          <div
            key={g}
            onClick={() => {
              onChange(g);
              setOpen(false);
            }}
            style={{
              padding: "10px 14px",
              fontSize: 15,
              background: value === g ? "#EAF4FB" : "#fff",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              transition: "background 0.2s",
            }}
          >
            {g}
          </div>
        ))}
      </div>
    </div>
  );
}

const DisabledRegist: React.FC = () => {
  const [regNum, setRegNum] = useState("");
  const [regNumTouched, setRegNumTouched] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [grade, setGrade] = useState("");
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

  const handleTypeClick = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const regNumError =
    regNumTouched && (regNum.length !== 16 || !/^\d{16}$/.test(regNum));

  const isValid =
    regNum.length === 16 &&
    /^\d{16}$/.test(regNum) &&
    grade &&
    selectedTypes.length > 0;

  const handleNext = async () => {
    if (!isValid) return;
    localStorage.setItem("registerDisabledRegNum", regNum);
    localStorage.setItem("registerDisabledGrade", grade);
    localStorage.setItem("registerDisabledTypes", JSON.stringify(selectedTypes));

    // 데이터 조립
    const email = localStorage.getItem("registerEmail") || "";
    const password = localStorage.getItem("registerPassword") || "";
    const name = localStorage.getItem("registerName") || "";
    const gender = localStorage.getItem("registerGender") || "";
    const birth = localStorage.getItem("registerBirth") || "";
    const role = "DISABLED";
    // region 등 추가 정보 필요시 localStorage에서 꺼내기
    const registrationNumber = regNum;
    const classification = {
      grade,
      types: selectedTypes,
    };

    // yyyyMMdd -> yyyy-MM-dd 변환
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
          registrationNumber,
          classification,
        },
        { headers: { "Content-Type": "application/json" } }
      );
      navigate("/register-end");
    } catch (e) {
      alert("회원가입에 실패했습니다.");
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
            fontWeight: 600,
            lineHeight: "28px",
          }}
        >
          장애등록번호를 입력해주세요
        </span>
      </div>
      <div style={{ width: 353, marginTop: 53 }}>
        <input
          type="text"
          value={regNum}
          onChange={(e) => setRegNum(e.target.value)}
          onBlur={() => setRegNumTouched(true)}
          placeholder="장애등록번호 16자리"
          style={{
            border: "none",
            borderBottom: regNumError
              ? "2px solid #FF4D4F"
              : "2px solid #6BB1E4",
            outline: "none",
            fontSize: 15,
            background: "transparent",
            padding: "4px 0 4px 8px",
            width: "100%",
            color: "#222",
            marginBottom: 8,
          }}
        />
        <span
          style={{
            color: "#FF4D4F",
            textAlign: "left",
            fontSize: "10px",
            fontStyle: "normal",
            fontWeight: 500,
            padding: "4px 0 4px 8px",
            marginTop: "-6px",
            display: "block",
            visibility: regNumError ? "visible" : "hidden",
            minHeight: 16,
          }}
        >
          장애등록번호 16자리를 입력해주세요
        </span>
      </div>

      <div
        style={{
          width: "100%",
          marginTop: 25,
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
          장애분류
        </span>
      </div>
      <div style={{ width: 353, marginTop: 48, marginBottom: 21 }}>
        <GradeDropdown value={grade} onChange={setGrade} />
      </div>
      {grade && (
        <div
          style={{
            width: 341,
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            marginTop: 8,
            marginBottom: 32,
          }}
        >
          {DISABLED_TYPES.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => handleTypeClick(type)}
              style={{
                // padding: "6px 20px",
                borderRadius: "100px",
                border:"1px solid #59A1D7",
                background: selectedTypes.includes(type) ? "#6BB1E4" : "#fff",
                color: selectedTypes.includes(type) ? "#fff" : "#59A1D7",
                fontSize: 15,
                fontWeight: 600,
                cursor: "pointer",
                transition: "background 0.2s, color 0.2s",
                minWidth: "100px",
                height: "36px",
                boxSizing: "border-box",  
                flex: "1 0 90px",
                textAlign: "center",
              }}
            >
              {type}
            </button>
          ))}
        </div>
      )}

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

export default DisabledRegist;

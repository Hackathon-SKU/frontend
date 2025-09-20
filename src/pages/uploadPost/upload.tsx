import React, { useEffect, useState } from "react";
import axios from "axios";
import { getUserId } from "../../utils/user";
import { useNavigate } from "react-router-dom";

type UserInfo = {
  name: string;
  gender: string;
  age: number;
  region: string;
  grade: string;
  classification: string;
};

function maskName(name: string) {
  if (!name) return "";
  return name[0] + "*".repeat(name.length - 1);
}

function genderKor(gender: string) {
  if (gender === "MALE" || gender === "MEN") return "남성";
  if (gender === "FEMALE" || gender === "WOMEN") return "여성";
  return gender;
}

const PERIOD_OPTIONS = ["1개월 이하", "3개월 이상", "6개월 이상", "1년 이상+"];
const DAY_OPTIONS = ["월", "화", "수", "목", "금", "토", "일"];
const TIME_OPTIONS = ["오전", "오후", "심야"];

const UploadPost: React.FC = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [title, setTitle] = useState("");
  const [period, setPeriod] = useState<string>("");
  const [days, setDays] = useState<string[]>([]);
  const [times, setTimes] = useState<string[]>([]);
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);
  const [titleFocus, setTitleFocus] = useState(false);
  const [noteFocus, setNoteFocus] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = sessionStorage.getItem("accessToken");
    if (!accessToken) {
      alert("로그인 후 이용 가능합니다.");
      navigate("/login"); 
      return;
    }
    const userId = getUserId();
    if (!userId) return;
    axios.get(`${import.meta.env.VITE_BASE_URL}user/${userId}`).then((res) => {
      const data = res.data.result;
      setUserInfo({
        name: data.name,
        gender: data.gender,
        age: data.age,
        region: data.region,
        grade: data.grade,
        classification: Array.isArray(data.classification?.types)
          ? data.classification.types.join(", ")
          : data.classification?.types || "",
      });
    });
  }, [navigate]);

  const handleDayClick = (d: string) => {
    setDays((prev) =>
      prev.includes(d) ? prev.filter((v) => v !== d) : [...prev, d]
    );
  };
  const handleTimeClick = (t: string) => {
    setTimes((prev) => (prev.includes(t) ? [] : [t]));
  };

  const isValid =
    !!title.trim() && !!period && days.length > 0 && times.length > 0;

  const handleSubmit = async () => {
    if (!isValid || loading) return;
    const accessToken = sessionStorage.getItem("accessToken");
    if (!accessToken) {
      alert("로그인 후 이용 가능합니다. accessToken이 없습니다.");
      return;
    }
    setLoading(true);
    try {
      const refreshToken = sessionStorage.getItem("refreshToken");
      const userId = getUserId();
      console.log("userId:", userId);
      console.log("accessToken:", accessToken);
      console.log("refreshToken:", refreshToken);
      const payload = {
        title,
        periodStart: period,
        preferredDays: days,
        timeBands: times,
        description: note,
      };
      console.log("POST /postings payload:", payload);

      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}api/postings`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
            ...(refreshToken ? { "X-Refresh-Token": refreshToken } : {}),
          },
        }
      );
      console.log("POST /postings response:", res.data);
      alert("공고가 등록되었습니다.");
      navigate("/main"); // 등록 성공 시 메인으로 이동
    } catch (e) {
      if (axios.isAxiosError(e)) {
        console.error("API Error:", e.response?.data || e.message, e);
        if (e.response) {
          console.error("Status:", e.response.status);
          console.error("Headers:", e.response.headers);
          console.error("Response Data:", e.response.data);
        }
        alert(
          `공고 등록에 실패했습니다.\n${e.response?.data?.message || e.message}`
        );
      } else {
        console.error("Unknown Error:", e);
        alert("공고 등록에 실패했습니다.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: 430,
        margin: "0 auto",
        background: "#fff",
        minHeight: "100vh",
        fontFamily: "inherit",
      }}
    >
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: 93,
        borderBottom: "1px solid #eee",
        padding: "0 16px",
      }}
    >
      <img
        src="/uploadPost/arrow.png"
        alt="뒤로가기"
        style={{ width: 24, height: 24, marginRight: 10, cursor: "pointer", marginTop: "61px" }}
        onClick={() => window.history.back()}
      />
      <span
        style={{ fontWeight: 600, fontSize: 20, flex: 1, marginTop: "61px" }}
      >
        복지사 모집 공고 작성
      </span>
      <span style={{ color: "#aaa", fontSize: 15, marginTop: "61px" }}>임시저장</span>
    </div>

      <div style={{ padding: "22px 16px 0 19px" }}>
        <div style={{ fontWeight: 600, fontSize: 20, marginBottom: 8 }}>
          장애인 정보
        </div>
        <div
          style={{
            border: "1px solid #6BB1E4",
            borderRadius: 12,
            padding: "8px 16px",
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: "#FFFFFF",
            fontSize: 15,
            marginBottom: 24,
          }}
        >
          <img src="/uploadPost/icon.png" alt="아이콘" style={{ width: 12, height: 15 }} />
          <span style={{ fontWeight: 600 }}>
            {userInfo ? maskName(userInfo.name) : ""}
          </span>
          <span style={{ color: "#888" }}>|</span>
          <span>{userInfo ? genderKor(userInfo.gender) : ""}</span>
          <span style={{ color: "#888" }}>|</span>
          <span>{userInfo ? `${userInfo.age}세` : ""}</span>
          <span style={{ color: "#888" }}>|</span>
          <span>{userInfo ? userInfo.region : ""}</span>
          <span style={{ color: "#888" }}>|</span>
          <span>{userInfo ? `${userInfo.grade}` : ""}</span>
          <span style={{ color: "#888" }}>|</span>
          <span>{userInfo ? userInfo.classification : ""}</span>
        </div>

        <div style={{ fontWeight: 600, fontSize: 20, marginBottom: 8 }}>
          제목
        </div>
        <input
          style={{
            width: "100%",
            border: `1px solid ${titleFocus ? "#59A1D7" : "#D0D0D0"}`,
            borderRadius: 8,
            padding: "8px 16px",
            fontSize: 15,
            marginBottom: 25,
            background: "#FFFFFF",
            outline: "none",
            color: titleFocus ? "#59A1D7" : "#222",
            transition: "border 0.2s, color 0.2s",
          }}
          placeholder="글 제목을 입력하세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onFocus={() => setTitleFocus(true)}
          onBlur={() => setTitleFocus(false)}
        />

        <div style={{ fontWeight: 600, fontSize: 20, marginBottom: 8 }}>
          희망 기간/요일/시간
        </div>
        <div style={{ marginBottom: 12 }}>
          <div style={{ marginLeft: 3, marginBottom: 10, fontSize: 11, color: "#000", fontWeight:" 600"}}>
            희망 기간
          </div>
          <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
            {PERIOD_OPTIONS.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setPeriod(opt)}
                style={{
                  border: "1px solid #59A1D7",
                  borderRadius: 100,
                  background: period === opt ? "#6BB1E4" : "#fff",
                  color: period === opt ? "#fff" : "#000",
                  padding: "7px 12px",
                  fontWeight: 500,
                  fontSize: 12,
                  cursor: "pointer",
                  transition: "all 0.15s",
                }}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
        <div style={{ marginBottom: 12 }}>
          <div style={{ marginLeft: 3, marginBottom: 10, fontSize: 11, color: "#000", fontWeight:" 600"}}>
            희망 요일
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            {DAY_OPTIONS.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => handleDayClick(opt)}
                style={{
                  border: "1px solid #59A1D7",
                  background: days.includes(opt) ? "#6BB1E4" : "#fff",
                  color: days.includes(opt) ? "#fff" : "#222",
                  borderRadius: "50%",
                  width: 38,
                  height: 38,
                  fontWeight: 500,
                  fontSize: 15,
                  cursor: "pointer",
                  transition: "all 0.15s",
                }}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
        <div style={{ marginBottom: 24 }}>
          <div style={{ marginLeft: 3, marginBottom: 10, fontSize: 11, color: "#000", fontWeight:" 600"}}>
            희망 시간대
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            {TIME_OPTIONS.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => handleTimeClick(opt)}
                style={{
                  border: "1px solid #59A1D7",
                  background: times.includes(opt) ? "#6BB1E4" : "#fff",
                  color: times.includes(opt) ? "#fff" : "#222",
                  borderRadius: 24,
                  padding: "7px 18px",
                  fontWeight: 500,
                  fontSize: 14,
                  cursor: "pointer",
                  transition: "all 0.15s",
                }}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 8, marginTop: 25 }}>
          특이사항
        </div>
        <textarea
          style={{
            width: "100%",
            minHeight: 231,
            border: `1px solid ${noteFocus ? "#59A1D7" : "#D0D0D0"}`,
            borderRadius: 12,
            padding: "12px 14px",
            fontSize: 15,
            background: "#FFF",
            outline: "none",
            marginBottom: 56,
            resize: "vertical",
            color: noteFocus ? "#59A1D7" : "#222",
            transition: "border 0.2s, color 0.2s",
          }}
          value={note}
          onChange={(e) => setNote(e.target.value)}
          onFocus={() => setNoteFocus(true)}
          onBlur={() => setNoteFocus(false)}
        />

        <button
          style={{
            width: 353,
            height: 50,
            borderRadius: 100,
            background: isValid ? "#6BB1E4" : "#D3D3D3",
            border: isValid ? "1px solid #59A1D7" : "1px solid #8A8A8A",
            color: isValid ? "#fff" : "#8A8A8A",
            fontWeight: 600,
            fontSize: 16,
            marginBottom: 100, 
            cursor: isValid && !loading ? "pointer" : "not-allowed",
            letterSpacing: 1,
            transition: "background 0.2s",
            opacity: loading ? 0.7 : 1,
            pointerEvents: isValid && !loading ? "auto" : "none", 
          }}
          disabled={!isValid || loading}
          onClick={handleSubmit}
        >
          {loading ? "등록 중..." : "작성 완료"}
        </button>
      </div>
    </div>
  );
};

export default UploadPost;

// userId를 sessionStorage에 저장/조회하는 함수

export function setUserId(userId: number) {
  sessionStorage.setItem("userId", String(userId));
}

export function getUserId(): number | null {
  const value = sessionStorage.getItem("userId");
  return value ? Number(value) : null;
}

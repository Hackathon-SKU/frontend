// userId를 localStorage에 저장/조회하는 함수

export function setUserId(userId: number) {
  localStorage.setItem("userId", String(userId));
}

export function getUserId(): number | null {
  const value = localStorage.getItem("userId");
  return value ? Number(value) : null;
}

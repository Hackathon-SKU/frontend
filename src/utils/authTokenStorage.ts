import { LOCAL_STORAGE_KEY } from "../constants/LocalStorage";

// accessToken 가져오기
export const getAccessToken = (): string | null => {
  return localStorage.getItem(LOCAL_STORAGE_KEY.accessToken);
};

// accessToken 저장
export const setAccessToken = (token: string): void => {
  localStorage.setItem(LOCAL_STORAGE_KEY.accessToken, token);
};

// accessToken 삭제
export const removeAccessToken = (): void => {
  localStorage.removeItem(LOCAL_STORAGE_KEY.accessToken);
};

// 모든 인증 관련 데이터 삭제
export const clearAuthTokens = (): void => {
  removeAccessToken();
};

// 로그인 성공 시 accessToken 저장
export const saveAuthTokens = (accessToken: string): void => {
  setAccessToken(accessToken);
};

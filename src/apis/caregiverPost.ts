import type { ResponseUserProfileDto } from "../types/caregivers";
import axiosInstance from "./axiosInstance";

// 사회복지사 정보 조회
export const getCaregiverPost = async (): Promise<ResponseUserProfileDto> => {
  const { data } = await axiosInstance.get("/profiles/caregiver/info");
  return data;
};

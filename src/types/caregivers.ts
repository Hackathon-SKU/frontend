import type { CommonResponse } from "./common";

export interface MainMockItem {
  id: number;
  name: string;
  title: string;
  info: string;
  license: string;
  field: string;
  image: string; // 프로필 이미지 경로
}

// user profile
export interface CaregiverProfile {
  userId: number;
  name: string;
  gender: "MEN" | "WOMEN"; // 성별 ENUM
  birthDate: string;
  role: "CAREGIVER" | "USER" | "ADMIN"; // 역할 ENUM (필요에 따라 확장)
  profileImgUrl: string;
  career_years: number;
  service_categories: {
    categories: string[];
  };
  regions: {
    address: string[];
  };
  intro: string;
}

export type ResponseUserProfileDto = CommonResponse<CaregiverProfile>;

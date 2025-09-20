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
  gender: "MEN" | "WOMEN";
  birthDate: string;
  role: "CAREGIVER" | "USER" | "ADMIN";
  profileImgUrl?: string;
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

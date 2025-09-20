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

// Request DTO
export interface WeeklyRule {
  days: number[]; // 월,수,금
  startTime: string; // "HH:mm"
  endTime: string; // "HH:mm"
}

export interface PostingRequestDto {
  title: string;
  periodStart: string; // "YYYY-MM-DD"
  periodEnd: string; // "YYYY-MM-DD"
  weeklyRules: WeeklyRule[];
  description: string; // 특이사항
}

// Response DTO
export interface WeeklySlot {
  dayOfWeek: number; // 단일 요일 (1=월 ...)
  startTime: string;
  endTime: string;
}

export interface PostingResponseResult {
  id: number;
  serviceUserId: number;
  title: string;
  description: string;
  periodStart: string;
  periodEnd: string;
  weeklySlots: WeeklySlot[];
  createdAt: string;
  updatedAt: string;
}

// 실제 API 응답 타입
export type PostingResponseDto = CommonResponse<PostingResponseResult>;

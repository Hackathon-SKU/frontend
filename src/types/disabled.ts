import type { CommonResponse } from "./common";
import type { Posting } from "./postings";

// mockdata type
export interface DisabledItems {
  id: number;
  title: string;
  name: string;
  gender: "남성" | "여성";
  age: number;
  region: string;
  disability: {
    grade: number;
    types: string[];
  };
  profileImgUrl: string;
}

export interface PostingRequestDto {
  title: string;
  periodStart: string;
  preferredDays: string[];
  timeBands: string[];
  description: string;
}

// Response DTO
export interface WeeklySlot {
  dayOfWeek: number; // 단일 요일 (1=월 ...)
  startTime: string;
  endTime: string;
}

// 실제 API 응답 타입
export type PostingResponseDto = CommonResponse<Posting>;

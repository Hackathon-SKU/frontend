import type { CommonResponse } from "./common";
// 게시글 공통 타입
export interface Posting {
  postingId: number;
  userId: number;
  title: string;
  periodStart: string;
  description: string;
  preferredDays: number[];
  timeBands: number[];
  createdAt: string;
  updatedAt: string;
  region: string;
  classification: {
    additionalProp1: string;
    additionalProp2: string;
    additionalProp3: string;
  };
}

// 목록 조회 응답 타입
export type ResponseGetPostings = CommonResponse<{
  page: number;
  size: number;
  totalPages: number;
  totalElements: number;
  hasNext: boolean;
  postings: Posting[];
}>;

// 상세 조회 응답 타입
export type ResponseGetPostingDetail = CommonResponse<Posting>;

// 목록 조회 params 타입
export interface GetPostingsParams {
  page?: number;
  size?: number;
}

// /api/posting/view
export interface PostingSummary {
  postingId: number;
  title: string;
  userId: number;
  region: string;
  classification: {
    additionalProp1: string;
    additionalProp2: string;
    additionalProp3: string;
  };
}

// 여러 개 내려올 경우
export type PostingSummaryList = PostingSummary[];

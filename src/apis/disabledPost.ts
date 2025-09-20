import type { ResponseUserProfileDto } from "../types/caregivers";
import type { PostingRequestDto, PostingResponseDto } from "../types/disabled";
import axiosInstance from "./axiosInstance";

export const getDisabledPost = async (
  id: number
): Promise<ResponseUserProfileDto> => {
  const { data } = await axiosInstance.get(`postings/disabled/:${id}`);
  return data;
};

export const createDisabledPost = async (
  body: PostingRequestDto
): Promise<PostingResponseDto> => {
  const { data } = await axiosInstance.post("/postings/create", body);
  return data;
};

import type { PostingRequestDto, PostingResponseDto } from "../types/disabled";
import axiosInstance from "./axiosInstance";

export const createDisabledPost = async (
  body: PostingRequestDto
): Promise<PostingResponseDto> => {
  const { data } = await axiosInstance.post("/posting/create", body);
  return data;
};

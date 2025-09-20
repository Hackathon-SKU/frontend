import type { PostingResponseDto } from "../types/workers";
import axiosInstance from "./axiosInstance";

export const createWorkersPost = async (): Promise<PostingResponseDto> => {
  const { data } = await axiosInstance.post("/posting/create");
  return data;
};

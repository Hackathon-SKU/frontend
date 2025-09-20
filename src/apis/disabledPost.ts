import type { PostingRequestDto, PostingResponseDto } from "../types/disabled";
import type {
  GetPostingsParams,
  ResponseGetPostingDetail,
  ResponseGetPostings,
} from "../types/postings";
import axiosInstance from "./axiosInstance";

export const getDisabledPostDetail = async (
  id: number
): Promise<ResponseGetPostingDetail> => {
  const { data } = await axiosInstance.get(`/api/postings/view/:${id}`);
  return data;
};

export const getDisabledPostList = async (
  params: GetPostingsParams
): Promise<ResponseGetPostings> => {
  const { data } = await axiosInstance.get<ResponseGetPostings>(
    `/api/postings/view`,
    {
      params,
    }
  );
  return data;
};

export const createDisabledPost = async (
  body: PostingRequestDto
): Promise<PostingResponseDto> => {
  const { data } = await axiosInstance.post("/api/postings", body);
  return data;
};

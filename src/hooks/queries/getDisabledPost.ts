import {
  getDisabledPostDetail,
  getDisabledPostList,
} from "./../../apis/disabledPost";
import { useQuery } from "@tanstack/react-query";
import type { GetPostingsParams } from "../../types/postings";
import { QEURY_KEY } from "../../constants/LocalStorage";

// 게시글 목록 조회 훅
export const useGetPostings = (params: GetPostingsParams) => {
  return useQuery({
    queryKey: [QEURY_KEY.postings, params],
    queryFn: () => getDisabledPostList(params),
  });
};

// 게시글 상세 조회 훅
export const useGetPostingDetail = (id: number) => {
  return useQuery({
    queryKey: [QEURY_KEY.postingDetail, id],
    queryFn: () => getDisabledPostDetail(id),
    enabled: !!id,
  });
};

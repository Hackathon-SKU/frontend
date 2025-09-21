import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createDisabledPost } from "../../apis/disabledPost";
import { QEURY_KEY } from "../../constants/LocalStorage";
import type {
  PostingRequestDto,
  PostingResponseDto,
} from "../../types/disabled";

export function useCreatePost() {
  const queryClient = useQueryClient();

  return useMutation<PostingResponseDto, Error, PostingRequestDto>({
    mutationFn: createDisabledPost,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QEURY_KEY.post],
      });
    },
    onError: (error) => {
      console.error("작성실패", error);
    },
  });
}

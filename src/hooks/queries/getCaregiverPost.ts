import { useQuery } from "@tanstack/react-query";
import type { ResponseUserProfileDto } from "../../types/caregivers";
import { QEURY_KEY } from "../../constants/LocalStorage";
import { getCaregiverPost } from "../../apis/caregiverPost";

//
export function useGetCaregiverPost(caregiver: string) {
  return useQuery<ResponseUserProfileDto>({
    queryKey: [QEURY_KEY.caregiver, caregiver],
    queryFn: getCaregiverPost,
    enabled: !!caregiver,
    staleTime: 1000 * 60,
  });
}

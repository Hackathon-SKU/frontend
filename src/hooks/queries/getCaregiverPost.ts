import { useQuery } from "@tanstack/react-query";
import type { ResponseUserProfileDto } from "../../types/caregivers";
import { QEURY_KEY } from "../../constants/LocalStorage";
import { getCaregiverPost } from "../../apis/caregiverPost";

//
export function useGetCaregiverPost(caregiverId: string) {
  return useQuery<ResponseUserProfileDto>({
    queryKey: [QEURY_KEY.caregiver, caregiverId],
    queryFn: () => getCaregiverPost(caregiverId),
    enabled: !!caregiverId,
    staleTime: 1000 * 60,
  });
}

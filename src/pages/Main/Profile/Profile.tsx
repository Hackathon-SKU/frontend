// ProfilePage.tsx
import { useParams, Link } from "react-router-dom";
import ProfileHeader from "../../../components/Main/details/ProfileHeader";
import ProfileInfo from "../../../components/Main/details/ProfileInfo";
import ProfileReviews from "../../../components/Main/details/ProfileReviews";
import { useGetCaregiverPost } from "../../../hooks/queries/getCaregiverPost";
import type { CaregiverProfile } from "../../../types/caregivers";

const ProfilePage = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = useGetCaregiverPost(id!);

  return (
    <>
      <header className="flex items-center justify-between p-4 bg-white shadow-sm border-b-2 border-[#EEEEEE]">
        <Link to="/main">
          <img
            src="/main/detail/arrowLeft.svg"
            alt="뒤로"
            className="w-6 h-6"
          />
        </Link>

        <div className="flex items-center gap-4">
          <img src="/main/alarm.svg" alt="알람" className="w-6 h-6" />
          <img src="/main/detail/kebab.svg" alt="케밥" className="w-6 h-6" />
        </div>
      </header>

      <div className="bg-[#EEEEEE] flex flex-col space-y-1">
        <ProfileHeader profile={data!.result as CaregiverProfile} />
        <ProfileInfo profile={data!.result as CaregiverProfile} />
        <ProfileReviews profile={data!.result as CaregiverProfile} />
      </div>
    </>
  );
};

export default ProfilePage;

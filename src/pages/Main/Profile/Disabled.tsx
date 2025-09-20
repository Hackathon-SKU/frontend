// ProfilePage.tsx
import { useParams, Link, useNavigate } from "react-router-dom";
import DisabledHeader from "../../../components/Main/details/DisabledHeader";
import DisabledInfo from "../../../components/Main/details/DisabledInfo";
import DisabledNote from "../../../components/Main/details/DisabledNotes";
import type { DisabledItems } from "../../../types/disabled";
import { mainDisabledMocks } from "../../../mocks/MainMockItem";
// import type { CaregiverProfile } from "../../../types/caregivers";

const DisabledPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const profile: DisabledItems | undefined = mainDisabledMocks.find(
    (item) => item.id === Number(id)
  );

  if (!profile) {
    return <p className="p-4 text-center">해당 프로필을 찾을 수 없습니다.</p>;
  }

  return (
    <>
      <header className="flex items-center justify-between p-4 bg-white shadow-sm border-b-2 border-[#EEEEEE]">
        <Link to="/main">
          <img
            src="/main/detail/arrowLeft.svg"
            alt="뒤로"
            className="w-[12px]"
          />
        </Link>

        <div className="flex items-center gap-4">
          <img src="/main/alarm.svg" alt="알람" className="w-6 h-6" />
          <img src="/main/detail/kebab.svg" alt="케밥" className="w-6 h-6" />
        </div>
      </header>

      <div className="bg-[#EEEEEE] flex flex-col space-y-1">
        <DisabledHeader profile={profile} />
        <DisabledInfo />
        <DisabledNote />
        {/* <ProfileHeader profile={data!.result as CaregiverProfile} />
        <ProfileInfo profile={data!.result as CaregiverProfile} />
        <ProfileReviews profile={data!.result as CaregiverProfile} /> */}
      </div>

      <button
        onClick={() => navigate("/main/chat")}
        className="fixed bottom-16 left-1/2 -translate-x-1/2 
            bg-[#6BB1E4] border border-[#59A1D7] 
            text-[20px] font-[400] text-white 
            rounded-full w-[354px] h-[50px]"
      >
        채팅하기
      </button>
    </>
  );
};

export default DisabledPage;

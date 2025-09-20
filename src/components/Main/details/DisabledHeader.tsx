import type { DisabledItems } from "../../../types/disabled";

interface Props {
  profile: DisabledItems;
}

const DisabledHeader = ({ profile }: Props) => {
  return (
    <div className="p-4 bg-white">
      <h2 className="mb-2 text-lg font-semibold">{profile.title}</h2>

      <div className="flex items-center text-[15px] justify-start">
        <div className="flex items-center gap-2">
          <img
            src={profile.profileImgUrl}
            alt="작성자"
            className="object-cover w-10 h-10 rounded-full"
          />
          <span className="text-sm">{profile.name}</span>
        </div>
        <div className="flex pl-[10px] gap-4">
          <div className="flex gap-2">
            <img src="/main/detail/heartFill.svg" alt="" />
            <span> 찜 1</span>
          </div>
          <div className="flex gap-2">
            <img src="/main/detail/paper.svg" alt="" />
            <span>지원 0</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-2 text-sm">
        <img src="/main/detail/location.svg" alt="" />
        <span>{profile.region} | 340m</span>
      </div>
    </div>
  );
};
export default DisabledHeader;

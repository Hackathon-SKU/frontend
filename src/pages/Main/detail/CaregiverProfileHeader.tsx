import { useParams } from "react-router-dom";
import { mainMockItems } from "../../../mocks/MainMockItem";

const ProfileHeader = () => {
  const { id } = useParams<{ id: string }>();

  const item = mainMockItems.find((it) => it.id.toString() === id);
  if (!item) return <div className="p-4">존재하지 않는 프로필입니다!</div>;

  return (
    <div className="flex items-center justify-between p-4 text-[11px] bg-white">
      <div className="flex items-center gap-4">
        <img
          src={item.image}
          alt="프로필"
          className="w-[103px] h-[103px] rounded-sm object-cover"
        />
        {}
        <div>
          <h2 className="font-semibold text-[15px]">{item.title}</h2>
          <p className="text-[#8A8A8A]">
            {item.name} · {item.info}
          </p>
          {/* 주소 API 들어오면 넣기 */}
          <div className="flex items-center mt-[30px] gap-[8px]">
            <img src="/main/detail/location.svg" alt="" />
            <p className="text-[11px] ">야탑3동 / 10km 이동 가능</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;

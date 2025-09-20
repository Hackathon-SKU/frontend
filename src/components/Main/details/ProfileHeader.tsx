import { useParams } from "react-router-dom";
import { mainMockItems } from "../../../mocks/MainMockItem";

const ProfileHeader = () => {
  const { id } = useParams<{ id: string }>();

  const item = mainMockItems.find((it) => it.id.toString() === id);
  if (!item) return <div className="p-4">존재하지 않는 프로필입니다!</div>;

  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center gap-4">
        <img
          src="/profile.png"
          alt="프로필"
          className="w-16 h-16 rounded-full object-cover"
        />
        {}
        <div>
          <h2 className="font-semibold text-lg">{item.title}</h2>
          <p className="text-sm text-gray-500">
            {item.name} · {item.info}
          </p>
          {/* 주소 API 들어오면 넣기 */}
          <p className="text-sm text-gray-400">야탑3동 / 10km 이동 가능</p>
        </div>
      </div>
      <button>
        <div className="w-6 h-6" />
      </button>
    </div>
  );
};

export default ProfileHeader;

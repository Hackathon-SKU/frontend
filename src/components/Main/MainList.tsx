import { useNavigate } from "react-router-dom";
import type { MainMockItem } from "../../types/workers";

interface Props {
  item: MainMockItem;
}

const MainList = ({ item }: Props) => {
  const navigate = useNavigate();

  const clickProfileId = () => {
    navigate(`/profile/${item.id}`);
  };

  return (
    <button
      onClick={clickProfileId}
      className="flex items-start bg-white p-4 w-full"
    >
      {/* 프로필 이미지 */}
      <img
        src={item.image}
        alt={item.name}
        className="w-[103px] h-[103px] rounded-sm mr-4 object-cover"
      />

      {/* 내용 */}
      <div className="flex-1 text-[11px]">
        <h3 className="font-semibold text-start text-[15px]">“{item.title}”</h3>
        <div className="flex gap-[5px] items-center py-2">
          <img src="/main/item/user.svg" alt="user" className="w-[8px]" />
          <p className=" text-[#494949]">
            {item.name} · {item.info}
          </p>
        </div>
        <div>
          <div className="flex gap-[5px] items-center">
            <img src="/main/item/check.svg" alt="protect" className="w-[8px]" />
            <p className="text-[#494949]">자격증 · {item.license}</p>
          </div>
          <div className="flex gap-[5px] items-center mb-2">
            <img
              src="/main/item/protect.svg"
              alt="protect"
              className="w-[8px]"
            />
            <p className="text-[#494949] text-center">
              돌봄 분야 · {item.field}
            </p>
          </div>
        </div>
      </div>
    </button>
  );
};

export default MainList;

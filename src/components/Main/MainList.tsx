import { useNavigate } from "react-router-dom";
import type { DisabledItems } from "../../types/disabled";

interface Props {
  item: DisabledItems;
}

const MainList = ({ item }: Props) => {
  const navigate = useNavigate();
  const clickProfileId = () => {
    navigate(`/main/disabled/${item.id}`);
  };

  return (
    <button
      onClick={clickProfileId}
      className="flex items-start bg-white p-4 w-full"
    >
      {/* 프로필 이미지 */}
      <img
        src={item.profileImgUrl}
        alt={item.name}
        className="w-[77px] h-[77px] rounded-sm mr-4 object-cover"
      />

      {/* 내용 */}
      <div className="flex-1 text-[11px] mt-2">
        <h3 className="font-semibold text-start text-[15px]">{item.title}</h3>
        <div className="flex items-center py-2 text-[13px]">
          <p className=" text-[#8A8A8A]">
            {item.name} | {item.gender} | {item.age}세 | {item.region}
          </p>
        </div>
        <div>
          <div className="flex gap-[5px] items-center mb-2 text-[11px]">
            <img src="/main/item/check.svg" alt="protect" className="w-[9px]" />
            <p className="text-center text-[11px]">
              장애 · {item.disability.grade}급 /{" "}
              {item.disability.types.join(" / ")}
            </p>
          </div>
        </div>
      </div>
    </button>
  );
};

export default MainList;

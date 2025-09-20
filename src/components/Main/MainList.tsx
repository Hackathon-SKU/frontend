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
      className="flex items-start w-full p-4 bg-white"
    >
      {/* 프로필 이미지 */}
      <img
        src={item.profileImgUrl}
        alt={item.name}
        className="w-[77px] rounded-sm mr-4 object-cover"
      />

      {/* 내용 */}
      <div className="flex-1 text-[11px]">
        <h3 className="font-semibold text-start text-[15px]">{item.title}</h3>
        <div className="flex gap-[5px] items-center py-2">
          <p className=" text-[#494949]">
            {item.name} | {item.gender} | {item.age} | {item.region}
          </p>
        </div>
        <div>
          <div className="flex gap-[5px] items-center mb-2">
            <img
              src="/main/item/protect.svg"
              alt="protect"
              className="w-[8px]"
            />
            <p className="text-center">
              장애 · {item.disability.grade}급 /{" "}
              {item.disability.types.map((item) => item).join(" / ")} /
              자폐성장애
            </p>
          </div>
        </div>
      </div>
    </button>
  );
};

export default MainList;

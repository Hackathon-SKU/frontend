import type { DisabledItems } from "../../../types/disabled";

interface Props {
  profile: DisabledItems;
}

const DisabledNote = ({ profile }: Props) => {
  return (
    <div className="p-4 bg-white">
      <h3 className="font-[400] mb-2">특이사항</h3>
      <div className="border border-[#D0D0D0] bg-[#F2F2F2] min-h-[174px] rounded-lg p-3 text-sm leading-relaxed">
        견과류 알레르기가 있어서 음식 섭취 시 주의가 필요해요. <br />
        학교 수업을 마친 후 혼자가 되면 불안감을 느껴 충동적 행동을 할 수 있어
        제 시간에 픽업이 필요해요.
      </div>
    </div>
  );
};
export default DisabledNote;

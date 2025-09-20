interface Props {
  profile: number;
}

const ProfileInfo = ({ number }: Props) => {
  return (
    <div className="space-y-1 text-[15px] bg-[#EEEEEE]">
      {/* 자격증 */}
      <div className="bg-white p-4">
        <div className="flex items-center mb-2 gap-[7px]">
          <img src="/main/item/check.svg" alt="" className="w-[11px]" />
          <h3 className="font-semibold">자격증</h3>
        </div>
        <div className="flex gap-2 flex-wrap text-[11px]">
          <Badge text="사회복지사 1급" />
          <Badge text="장애인재활상담사" />
        </div>
      </div>

      {/* 돌봄분야 */}
      <div className="bg-white p-4">
        <div className="flex items-center mb-2 gap-[7px]">
          <img src="/main/item/protect.svg" alt="" className="w-[11px]" />
          <h3 className="font-semibold">돌봄분야</h3>
        </div>
        <div className="flex gap-2 flex-wrap">
          <Badge text="지체 장애" />
          <Badge text="자폐성 장애" />
        </div>
      </div>

      {/* 경력 */}
      <div className="bg-white p-4">
        <div className="flex items-center mb-2 gap-[7px]">
          <img src="/main/item/clock.svg" alt="" className="w-[11px]" />
          <h3 className="font-semibold">총 경력 8년</h3>
        </div>
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          <ExperienceCard
            place="한마음복지관"
            role="발달 장애 아동 수업"
            category="(레크리에이션)"
            period="2018.03 - 2021.06"
          />
          <ExperienceCard
            place="성은학교"
            role="지적장애 아동 놀이 체육"
            category="(방과후 교사)"
            period="2021.07 - 2025.02"
          />
          <ExperienceCard
            place="숭덕초등학교"
            role="지적장애 아동 놀이 체육"
            category="(방과후 교사)"
            period="2021.07 - 2025.02"
          />
        </div>
      </div>
    </div>
  );
};

// 내부 보조 컴포넌트
const Badge = ({ text }: { text: string }) => (
  <span
    className={`px-[22px] py-2 rounded-full border border-[#59A1D7] text-[12px]`}
  >
    {text}
  </span>
);

const ExperienceCard = ({
  place,
  role,
  period,
  category,
}: {
  place: string;
  role: string;
  period: string;
  category: string;
}) => (
  <div className="w-[147px] h-[115px] rounded-xl overflow-hidden border border-[#59A1D7] shrink-0">
    {/* 상단 파란색 영역 */}
    <div className="bg-[#6BB1E4] text-white text-center py-2 font-semibold text-sm">
      {place}
    </div>

    {/* 내용 영역 */}
    <div className="bg-white p-3 text-center text-[12px]">
      <p className="font-[600px] text-[#494949]">{role}</p>
      <p className="font-[500px] text-[#494949] text-[10px]">{category}</p>
      <p className="text-[#8A8A8A] mt-1">{period}</p>
    </div>
  </div>
);

export default ProfileInfo;

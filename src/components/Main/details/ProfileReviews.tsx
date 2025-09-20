interface Props {
  profile: number;
}

const ProfileReviews = ({ profile }: Props) => {
  return (
    <div className="p-4 bg-white">
      <div className="flex items-center mb-3 gap-[7px]">
        <img src="/main/detail/pencil.svg" alt="" />
        <h3 className="font-semibold">받은 돌봄 평가</h3>
      </div>
      <div className="flex gap-2 flex-wrap text-sm">
        <ReviewTag text="❤️ 친절해요" number={3} />
        <ReviewTag text="⏰ 시간약속 잘 지켜요" number={12} />
        <ReviewTag text="🔥 성실해요" number={5} />
      </div>
    </div>
  );
};

const ReviewTag = ({ text, number }: { text: string; number: number }) => (
  <div className="flex justify-between items-center px-3 py-1 rounded-full border border-[#59A1D7] ">
    <span className={`font-[600] mr-2`}>{text}</span>
    <p className="text-[#59A1D7] font-[500]">{number}</p>
  </div>
);

export default ProfileReviews;

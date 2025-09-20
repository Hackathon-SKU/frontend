interface WriteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WriteModal = ({ isOpen, onClose }: WriteModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-[320px] p-6 shadow-lg">
        <h2 className="text-lg font-semibold mb-4">글쓰기</h2>
        <textarea
          placeholder="내용을 입력하세요..."
          className="w-full h-32 border border-gray-300 rounded-md p-2 text-sm resize-none"
        />
        <div className="mt-4 flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm rounded-md border border-gray-300"
          >
            취소
          </button>
          <button className="px-4 py-2 text-sm rounded-md bg-sky-400 text-white">
            등록
          </button>
        </div>
      </div>
    </div>
  );
};

export default WriteModal;

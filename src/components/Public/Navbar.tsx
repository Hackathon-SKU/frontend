const Navbar = () => {
  return (
    <nav className="flex justify-center w-full h-[176px] fixed z-10">
      <div className="flex flex-row items-center justify-between bg-white mt-[43px] my-[140px] w-[1640px] h-[94px]">
        <img src="/Home/Hamburger.svg" alt="" className="flex " />
        <div className="flex justify-center items-center gap-[192px]">
          <div className="flex flex-col items-center justify-center">
            <img src="/Home/Logo.svg" alt="" className="w-[83px] h-[55px]" />
            <img src="/Home/LogoName.svg" alt="" />
          </div>
          <div className="flex p-10px w-[554px] h-[80px]">
            <div className="flex p-[10px] gap-2">
              <div className="flex justify-center items-center border rounded-full py-[15px] px-[31px] border-[#D0D0D0] bg-[#F2F2F2]">
                <input
                  type="text"
                  placeholder="어떤 공간을 찾으세요?"
                  className="text-black  items-center placeholder:text-[#C5C5C5]"
                />
                <button>
                  <img
                    src="/Home/Question.svg"
                    alt=""
                    className="text-[20px] cursor-pointer"
                  />
                </button>
              </div>
              <button className="text-[24px] cursor-pointer border rounded-full border-[#D0D0D0] px-[25px] ">
                로그인
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

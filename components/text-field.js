import { useMemo } from "react";

const TextField = ({ propWidth, propPadding, propHeight, propFlex }) => {
  const textFieldStyle = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
    };
  }, [propWidth, propPadding]);

  const searchFieldStyle = useMemo(() => {
    return {
      height: propHeight,
      flex: propFlex,
    };
  }, [propHeight, propFlex]);

  return (
    <div
      className="h-[229px] w-[184px] flex flex-col items-start justify-start py-0 pr-6 pl-0 box-border text-center text-smi text-slategray-200 font-inter"
      style={textFieldStyle}
    >
      <div
        className="self-stretch h-[218px] flex flex-col items-center justify-start pt-[55px] px-0 pb-[30px] box-border relative gap-[10px_0px]"
        style={searchFieldStyle}
      >
        <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] z-[15]" />
        <img
          className="w-[141px] flex-1 relative max-h-full object-cover z-[18]"
          loading="eager"
          alt=""
          src="/download 1.png"
        />
        <div className="self-stretch flex flex-row items-center justify-center relative">
          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] z-[16]" />
          <div className="w-[68px] flex flex-row items-center justify-center relative">
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] z-[17]" />
            <div className="flex-1 relative leading-[20px] z-[18]">
              Builder 1
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextField;

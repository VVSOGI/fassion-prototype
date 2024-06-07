import React from "react";
import { MoveBackHeader } from "@/app/components";

export default function page() {
  return (
    <div>
      <MoveBackHeader path="/" />
      <div>
        <div className="w-[150px] h-[47.14px] ml-[12px] mt-[24px] text-[24px] text-center border-black border-[3px] rounded-[30px]">
          상의
        </div>
        <div className="w-full h-[307.2px] mt-[10px] border"></div>
      </div>
      <div>
        <div className="w-[150px] h-[47.14px] ml-[12px] text-[24px] text-center border-black border-[3px] rounded-[30px]">
          하의
        </div>
        <div></div>
      </div>
      <div>
        <div className="w-[150px] h-[47.14px] ml-[12px] text-[24px] text-center border-black border-[3px] rounded-[30px]">
          아우터
        </div>
        <div></div>
      </div>
    </div>
  );
}

import React from "react";
import { container, MoveButtonMobile } from "@/app/common";

export function Mobile() {
  return (
    <div className={`${container.size.mobile}`}>
      <div className="h-screen flex flex-col justify-center">
        <div className="px-[24px]">
          <div className="w-full h-[80px] flex justify-center items-center mb-[48px] border border-black rounded-[50px] text-[32px]">
            Task 2
          </div>
        </div>
        <div className="h-[152px] text-[24px] text-center">
          한강 데이트 할 때 입고 싶은 옷을 <br /> 코디해 주세요
        </div>
        <div className="px-[24px]">
          <MoveButtonMobile path="/task2/choice">시작</MoveButtonMobile>
        </div>
      </div>
    </div>
  );
}

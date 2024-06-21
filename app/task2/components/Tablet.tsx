import React from "react";
import { container, MoveButtonTablet } from "@/app/common";

export function Tablet() {
  return (
    <div className={`${container.size.tablet} mt-[349px] mb-[291px]`}>
      <div className="w-[600px] h-[120px] flex justify-center items-center mx-auto mb-[107px] border border-black rounded-[50px] text-[64px]">
        Task 2
      </div>
      <div className="h-[152px] text-[64px] mb-[227px] text-center leading-[4.5rem]">
        한강 데이트 할 때 입고 싶은 옷을 <br /> 코디해 주세요
      </div>
      <MoveButtonTablet path="/task2/choice">시작</MoveButtonTablet>
    </div>
  );
}

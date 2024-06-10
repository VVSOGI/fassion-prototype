import React from "react";
import { container, MoveButtonTablet } from "@/app/common";

export function Mobile() {
  return (
    <div className={`${container.size.mobile}`}>
      <div className="h-screen flex flex-col justify-center">
        <div className="w-[400px] h-[120px] flex justify-center items-center mx-auto mb-[48px] border border-black rounded-[50px] text-[48px]">
          Task 1
        </div>
        <div className="h-[152px] text-[48px] mb-[80px] text-center leading-[4.5rem]">
          출근할 때 입고 싶은 옷의 조합을 <br /> 코디해 주세요
        </div>
        <MoveButtonTablet path="/task1/choice">시작</MoveButtonTablet>
      </div>
    </div>
  );
}

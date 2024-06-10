import React from "react";
import { container, MoveButton } from "@/app/common";

export function Desktop() {
  return (
    <div className={`${container.size.desktop}`}>
      <div className="h-screen flex flex-col justify-center">
        <div className="w-[800px] h-[120px] flex justify-center items-center mx-auto mb-[107px] border border-black rounded-[50px] text-[64px]">
          Task 1
        </div>
        <div className="h-[152px] text-[84px] mb-[80px] text-center leading-[4.5rem]">
          출근할 때 입고 싶은 옷의 조합을 코디해 주세요
        </div>
        <MoveButton path="/task1/choice">시작</MoveButton>
      </div>
    </div>
  );
}

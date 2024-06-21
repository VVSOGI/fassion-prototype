import React from "react";
import { container, MoveButtonDesktop } from "@/app/common";

export function Desktop() {
  return (
    <div className={`${container.size.desktop}`}>
      <div className="h-screen flex flex-col justify-center gap-[24px]">
        <div className="w-[500px] h-[70px] flex justify-center items-center mx-auto border border-black rounded-[50px] text-[24px]">
          Task 2
        </div>
        <div className="mb-[18px] text-[32px] text-center leading-[4.5rem]">
          한강 데이트 할 때 입고 싶은 옷을 코디해 주세요
        </div>
        <MoveButtonDesktop path="/task2/choice">시작</MoveButtonDesktop>
      </div>
    </div>
  );
}

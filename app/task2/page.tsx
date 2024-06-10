import React from "react";
import { MoveButton } from "@/app/common";

export default function page() {
  return (
    <div className="mt-[349px] mb-[291px]">
      <div className="w-[600px] h-[120px] flex justify-center items-center mx-auto mb-[107px] border border-black rounded-[50px] text-[64px]">
        Task 2
      </div>
      <div className="h-[152px] text-[64px] mb-[227px] text-center leading-[4.5rem]">
        한강 데이트 할 때 입고 싶은 옷을 <br /> 코디해 주세요
      </div>
      <MoveButton path="/task2/choice">시작</MoveButton>
    </div>
  );
}

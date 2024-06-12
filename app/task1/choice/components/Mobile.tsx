import React from "react";
import {
  MoveBackHeaderMobile,
  MoveButtonMobile,
  container,
} from "@/app/common";

export function Mobile() {
  return (
    <div className={`${container.size.mobile} h-screen`}>
      <MoveBackHeaderMobile path="/" />
      <div className="h-[calc(100%-74px)] flex flex-col justify-center gap-[72px]">
        <div className="flex flex-col gap-[24px] px-[24px]">
          <MoveButtonMobile path="/task1/choice/top">상의</MoveButtonMobile>
          <MoveButtonMobile path="/task1/choice/bottom">하의</MoveButtonMobile>
          <MoveButtonMobile path="/task1/choice/outer">아우터</MoveButtonMobile>
        </div>
        <div className="px-[24px]">
          <MoveButtonMobile path="/task1/choice/result">
            코디맵
          </MoveButtonMobile>
        </div>
      </div>
    </div>
  );
}

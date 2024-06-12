import React from "react";
import {
  MoveBackHeaderTablet,
  MoveButtonMobile,
  container,
} from "@/app/common";

export function Mobile() {
  return (
    <div className={`${container.size.mobile}`}>
      <MoveBackHeaderTablet path="/" />
      <div className="flex flex-col gap-[50px] mt-[305px] mb-[175px]">
        <MoveButtonMobile path="/task1/choice/top">상의</MoveButtonMobile>
        <MoveButtonMobile path="/task1/choice/bottom">하의</MoveButtonMobile>
        <MoveButtonMobile path="/task1/choice/outer">아우터</MoveButtonMobile>
      </div>
      <div className="flex mx-auto">
        <MoveButtonMobile path="/task1/choice/result">코디맵</MoveButtonMobile>
      </div>
    </div>
  );
}

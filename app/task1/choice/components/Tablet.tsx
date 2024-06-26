import React from "react";
import {
  MoveBackHeaderTablet,
  MoveButtonTablet,
  container,
} from "@/app/common";

export function Tablet() {
  return (
    <div className={`${container.size.tablet}`}>
      <MoveBackHeaderTablet path="/" />
      <div className="flex flex-col gap-[50px] mt-[305px] mb-[175px]">
        <MoveButtonTablet path="/task1/choice/top">상의</MoveButtonTablet>
        <MoveButtonTablet path="/task1/choice/bottom">하의</MoveButtonTablet>
        <MoveButtonTablet path="/task1/choice/outer">아우터</MoveButtonTablet>
      </div>
      <div className="flex mx-auto">
        <MoveButtonTablet path="/task1/choice/result">코디맵</MoveButtonTablet>
      </div>
    </div>
  );
}

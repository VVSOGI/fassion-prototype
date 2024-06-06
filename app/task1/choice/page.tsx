import React from "react";
import { MoveBackHeader, MoveButton } from "@/app/components";

export default function page() {
  return (
    <div>
      <MoveBackHeader path="/" />
      <div className="flex flex-col gap-[50px] mt-[305px] mb-[175px]">
        <MoveButton path="/task1/choice/top">상의</MoveButton>
        <MoveButton path="/task1/choice/bottom">하의</MoveButton>
        <MoveButton path="/task1/choice/outer">아우터</MoveButton>
      </div>
      <div className="flex mx-auto">
        <MoveButton path="/task1/choice/result">코디맵</MoveButton>
      </div>
    </div>
  );
}

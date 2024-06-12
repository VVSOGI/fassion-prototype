import React from "react";
import {
  MoveBackHeaderDesktop,
  MoveButtonDesktop,
  container,
} from "@/app/common";

export function Desktop() {
  return (
    <div className={`${container.size.desktop} h-screen`}>
      <MoveBackHeaderDesktop path="/" />
      <div className="h-[calc(100%-120px)] flex flex-col justify-center gap-[140px]">
        <div className="flex flex-col gap-[50px]">
          <MoveButtonDesktop path="/task1/choice/top">상의</MoveButtonDesktop>
          <MoveButtonDesktop path="/task1/choice/bottom">
            하의
          </MoveButtonDesktop>
          <MoveButtonDesktop path="/task1/choice/outer">
            아우터
          </MoveButtonDesktop>
        </div>
        <div className="flex mx-auto">
          <MoveButtonDesktop path="/task1/choice/result">
            코디맵
          </MoveButtonDesktop>
        </div>
      </div>
    </div>
  );
}

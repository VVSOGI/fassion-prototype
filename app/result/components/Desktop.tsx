import React from "react";
import { MoveBackHeaderDesktop, container } from "@/app/common";
import { TaskButtonDesktop } from "@/app/home";

export function Desktop() {
  return (
    <main className={container.size.desktop}>
      <MoveBackHeaderDesktop path="/" />
      <div className="h-full flex flex-col justify-between pt-[223px]">
        <div className="flex flex-col gap-[50px] mx-auto">
          <TaskButtonDesktop path="/result/task1" isComplete={false}>
            Task 1
          </TaskButtonDesktop>
          <TaskButtonDesktop path="/result/task2" isComplete={false}>
            Task 2
          </TaskButtonDesktop>
          <TaskButtonDesktop path="/result/task3" isComplete={false}>
            Task 3
          </TaskButtonDesktop>
        </div>
      </div>
    </main>
  );
}

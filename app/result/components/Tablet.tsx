import React from "react";
import { MoveBackHeaderTablet, container } from "@/app/common";
import { TaskButtonTablet } from "@/app/home";

export function Tablet() {
  return (
    <main className={container.size.tablet}>
      <MoveBackHeaderTablet path="/" />
      <div className="h-full flex flex-col justify-between pt-[223px]">
        <div className="flex flex-col gap-[50px] mx-auto">
          <TaskButtonTablet path="/result/task1" isComplete={false}>
            Task 1
          </TaskButtonTablet>
          <TaskButtonTablet path="/result/task2" isComplete={false}>
            Task 2
          </TaskButtonTablet>
          <TaskButtonTablet path="/result/task3" isComplete={false}>
            Task 3
          </TaskButtonTablet>
        </div>
      </div>
    </main>
  );
}

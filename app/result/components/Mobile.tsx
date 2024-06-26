import React from "react";
import { MoveBackHeaderMobile, container } from "@/app/common";
import { TaskButtonMobile } from "@/app/home";

export function Mobile() {
  return (
    <main className={container.size.mobile}>
      <MoveBackHeaderMobile path="/" />
      <div className="h-[calc(100vh-74px)] flex flex-col justify-center">
        <div className="w-full flex flex-col gap-[24px] mx-auto px-[24px]">
          <TaskButtonMobile path="/result/task1" isComplete={false}>
            Task 1
          </TaskButtonMobile>
          <TaskButtonMobile path="/result/task2" isComplete={false}>
            Task 2
          </TaskButtonMobile>
          <TaskButtonMobile path="/result/task3" isComplete={false}>
            Task 3
          </TaskButtonMobile>
        </div>
      </div>
    </main>
  );
}

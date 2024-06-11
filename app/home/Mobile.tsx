import React from "react";
import { container } from "@/app/common";
import { Modal, TaskButtonMobile } from ".";
import Link from "next/link";

interface Props {
  modalOpen: boolean;
  isCompleteTask1: boolean;
  isCompleteTask2: boolean;
  isCompleteTask3: boolean;
  setModalOpen: (open: boolean) => void;
  reset: () => void;
}

export function Mobile({
  modalOpen,
  isCompleteTask1,
  isCompleteTask2,
  isCompleteTask3,
  setModalOpen,
  reset,
}: Props) {
  return (
    <div className={`${container.size.mobile}`}>
      <main className="relative w-full h-screen">
        <Modal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          reset={reset}
        />
        <div className="h-full flex flex-col justify-center gap-[48px]">
          <div className="flex flex-col gap-[24px] px-[48px]">
            <TaskButtonMobile path="/task1" isComplete={isCompleteTask1}>
              Task 1
            </TaskButtonMobile>
            <TaskButtonMobile path="/task2" isComplete={isCompleteTask2}>
              Task 2
            </TaskButtonMobile>
            <TaskButtonMobile path="/task3" isComplete={isCompleteTask3}>
              Task 3
            </TaskButtonMobile>
            <div
              className={`
          w-full h-[80px] flex justify-center items-center bg-red-700 text-white text-[32px] rounded-[50px]
        `}
              onClick={() => setModalOpen(true)}
            >
              RESET
            </div>
          </div>
          <div className="px-[48px]">
            <Link
              className="w-full h-[80px] flex justify-center items-center bg-[#808287] text-white text-[32px] rounded-[50px]"
              href={"/result"}
            >
              전체 결과 보기
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

import React from "react";
import { container } from "@/app/common";
import { Modal, TaskButtonDesktop } from ".";
import Link from "next/link";

interface Props {
  modalOpen: boolean;
  isCompleteTask1: boolean;
  isCompleteTask2: boolean;
  isCompleteTask3: boolean;
  setModalOpen: (open: boolean) => void;
  reset: () => void;
}
export function Desktop({
  modalOpen,
  isCompleteTask1,
  isCompleteTask2,
  isCompleteTask3,
  setModalOpen,
  reset,
}: Props) {
  return (
    <div className={`${container.size.desktop}`}>
      <main className="relative w-full h-screen">
        <Modal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          reset={reset}
        />
        <div className="h-full flex justify-center flex-col gap-[120px] py-[223px]">
          <div className="flex flex-col gap-[50px] mx-auto">
            <TaskButtonDesktop path="/task1" isComplete={isCompleteTask1}>
              Task 1
            </TaskButtonDesktop>
            <TaskButtonDesktop path="/task2" isComplete={isCompleteTask2}>
              Task 2
            </TaskButtonDesktop>
            <TaskButtonDesktop path="/task3" isComplete={isCompleteTask3}>
              Task 3
            </TaskButtonDesktop>
            <div
              className="w-[500px] h-[70px] flex justify-center items-center bg-red-700 text-white text-[24px] rounded-[50px]"
              onClick={() => setModalOpen(true)}
            >
              RESET
            </div>
          </div>
          <div className="mx-auto">
            <Link
              className="w-[500px] h-[70px] flex justify-center items-center bg-[#808287] text-white text-[24px] rounded-[50px]"
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

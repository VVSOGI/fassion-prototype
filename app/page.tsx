"use client";

import { useEffect, useState } from "react";
import { TaskButton } from "./home";
import Link from "next/link";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [isCompleteTask1, setIsCompleteTask1] = useState(false);
  const [isCompleteTask2, setIsCompleteTask2] = useState(false);
  const [isCompleteTask3, setIsCompleteTask3] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setLoading(false);
    const task1 = (localStorage.getItem("task1") as string) || "{}";
    const task2 = (localStorage.getItem("task2") as string) || "{}";
    const task3 = (localStorage.getItem("task3") as string) || "{}";

    const result1 = JSON.parse(task1);
    const result2 = JSON.parse(task2);
    const result3 = JSON.parse(task3);

    if (result1.top || result1.bottom || result1.outer) {
      setIsCompleteTask1(true);
    }
    if (result2.top || result2.bottom || result2.outer) {
      setIsCompleteTask2(true);
    }
    if (result3.top || result3.bottom || result3.outer) {
      setIsCompleteTask3(true);
    }
  }, []);

  if (loading) return null;

  return (
    <main className="relative w-full h-screen">
      {modalOpen && (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-20">
          <div
            className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.3)]"
            onClick={() => setModalOpen(false)}
          ></div>
          <div className="w-[700px] h-[500px] flex flex-col bg-white rounded-[30px] z-[10]">
            <div className="h-full flex justify-center items-center text-[48px]">
              리셋 하시겠습니까?
            </div>
            <div className="h-[200px] flex border-t-2">
              <div
                className="flex-1 flex justify-center items-center bg-red-700 text-white text-[32px] rounded-bl-[30px] border-r"
                onClick={() => {
                  localStorage.removeItem("task1");
                  localStorage.removeItem("task2");
                  localStorage.removeItem("task3");
                  setIsCompleteTask1(false);
                  setIsCompleteTask2(false);
                  setIsCompleteTask3(false);
                  setModalOpen(false);
                }}
              >
                예
              </div>
              <div
                className="flex-1 flex justify-center items-center text-[32px]"
                onClick={() => setModalOpen(false)}
              >
                아니오
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="h-full flex flex-col justify-between py-[223px]">
        <div className="flex flex-col gap-[50px] mx-auto">
          <TaskButton path="/task1" isComplete={isCompleteTask1}>
            Task 1
          </TaskButton>
          <TaskButton path="/task2" isComplete={isCompleteTask2}>
            Task 2
          </TaskButton>
          <TaskButton path="/task3" isComplete={isCompleteTask3}>
            Task 3
          </TaskButton>
          <div
            className={`
              w-[600px] h-[120px] flex justify-center items-center bg-red-700 text-white text-[64px] rounded-[50px]
            `}
            onClick={() => setModalOpen(true)}
          >
            RESET
          </div>
        </div>
        <div className="mx-auto">
          <Link
            className="w-[600px] h-[120px] flex justify-center items-center bg-[#808287] text-white text-[64px] rounded-[50px]"
            href={"/result"}
          >
            전체 결과 보기
          </Link>
        </div>
      </div>
    </main>
  );
}

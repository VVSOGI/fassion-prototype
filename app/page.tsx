"use client";

import { useEffect, useState } from "react";
import { Desktop, Mobile, Tablet } from "./home";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [isCompleteTask1, setIsCompleteTask1] = useState(false);
  const [isCompleteTask2, setIsCompleteTask2] = useState(false);
  const [isCompleteTask3, setIsCompleteTask3] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  function resetTasks() {
    localStorage.removeItem("task1");
    localStorage.removeItem("task2");
    localStorage.removeItem("task3");
    setIsCompleteTask1(false);
    setIsCompleteTask2(false);
    setIsCompleteTask3(false);
    setModalOpen(false);
  }

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
    <div>
      <Desktop
        modalOpen={modalOpen}
        isCompleteTask1={isCompleteTask1}
        isCompleteTask2={isCompleteTask2}
        isCompleteTask3={isCompleteTask3}
        setModalOpen={setModalOpen}
        reset={resetTasks}
      />
      <Tablet
        modalOpen={modalOpen}
        isCompleteTask1={isCompleteTask1}
        isCompleteTask2={isCompleteTask2}
        isCompleteTask3={isCompleteTask3}
        setModalOpen={setModalOpen}
        reset={resetTasks}
      />
      <Mobile
        modalOpen={modalOpen}
        isCompleteTask1={isCompleteTask1}
        isCompleteTask2={isCompleteTask2}
        isCompleteTask3={isCompleteTask3}
        setModalOpen={setModalOpen}
        reset={resetTasks}
      />
    </div>
  );
}

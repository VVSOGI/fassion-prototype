"use client";

import React, { useEffect, useState } from "react";
import { MoveBackHeader } from "@/app/components";

export default function Page() {
  const [data, setData] = useState<{ id: number; url: string }[]>([]);
  const [choice, setChoice] = useState<number>();

  useEffect(() => {
    fetch("http://localhost:3000/bottom.json").then(async (res) => {
      const clothes = await res.json();
      setData(clothes);
    });

    const choice = localStorage.getItem("task1") as string;
    if (choice) {
      setChoice(JSON.parse(choice).bottom);
    }
  }, []);

  return (
    <div className="h-screen">
      <MoveBackHeader path="/task1/choice" />
      <div className="mt-[79px] ml-[43px] mb-[76px]">
        <div className="w-[280px] h-[88px] flex justify-center items-center bg-[#2C2F37] rounded-[30px] text-[40px] text-white">
          하의
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className={`
                ${choice === item.id ? "border-8 border-red-500" : ""}
                w-full h-[300px]
              `}
              onClick={() => {
                setChoice(item.id);
                const data =
                  JSON.parse(localStorage.getItem("task1") as string) || {};
                data.bottom = item.id;
                localStorage.setItem("task1", JSON.stringify(data));
              }}
            >
              <img className="w-full h-full" src={item.url} alt={item.url} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

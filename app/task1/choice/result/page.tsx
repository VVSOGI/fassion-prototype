"use client";

import React, { useEffect, useState } from "react";
import { MoveBackHeader } from "@/app/components";
import Link from "next/link";

export default function Page() {
  const [top, setTop] = useState<{ id: number; url: string }>();
  const [bottom, setBottom] = useState<{ id: number; url: string }>();
  const [outer, setOuter] = useState<{ id: number; url: string }>();

  useEffect(() => {
    const choice = (localStorage.getItem("task1") as string) || "{}";
    const data = JSON.parse(choice);

    if (data.top) {
      fetch("http://localhost:3000/top.json").then(async (res) => {
        const clothes = (await res.json()) as { id: number; url: string }[];
        setTop(clothes.find((item) => item.id === data.top));
      });
    }

    if (data.bottom) {
      fetch("http://localhost:3000/bottom.json").then(async (res) => {
        const clothes = (await res.json()) as { id: number; url: string }[];
        setBottom(clothes.find((item) => item.id === data.bottom));
      });
    }

    if (data.outer) {
      fetch("http://localhost:3000/outer.json").then(async (res) => {
        const clothes = (await res.json()) as { id: number; url: string }[];
        setOuter(clothes.find((item) => item.id === data.outer));
      });
    }
  }, []);

  return (
    <div className="h-screen">
      <div className="flex justify-between items-center">
        <MoveBackHeader path="/task1/choice" />
        <Link
          className="w-[186px] h-[58.46px] mt-[48px] mr-[44px] text-[40px] text-center rounded-[30px] bg-[#2C2F37] text-white"
          href="/task2"
        >
          Next
        </Link>
      </div>
      <div className="absolute top-[227px] left-[43px] w-[280px] h-[88px] flex justify-center items-center bg-[#2C2F37] rounded-[30px] text-[40px] text-white">
        코디맵
      </div>
      <div className="flex justify-center gap-[38px]">
        <div className="w-[350px] h-[450px] mt-[340px] bg-[#d9d9d9] border border-black">
          {outer && (
            <img className="w-full h-full" src={outer.url} alt={outer.url} />
          )}
        </div>
        <div className="flex flex-col gap-[38px] mt-[68px]">
          <div className="w-[350px] h-[450px] bg-[#d9d9d9] border border-black">
            {top && (
              <img className="w-full h-full" src={top.url} alt={top.url} />
            )}
          </div>
          <div className="w-[350px] h-[450px] bg-[#d9d9d9] border border-black">
            {bottom && (
              <img
                className="w-full h-full"
                src={bottom.url}
                alt={bottom.url}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

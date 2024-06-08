"use client";

import React, { useEffect, useState } from "react";
import { MoveBackHeader } from "@/app/components";
import Slide from "./Slide";
import Link from "next/link";

export default function Page() {
  const [top, setTop] = useState<{ id: number; url: string }[]>();
  const [bottom, setBottom] = useState<{ id: number; url: string }[]>();
  const [outer, setOuter] = useState<{ id: number; url: string }[]>();

  const [choiceTop, setChoiceTop] = useState<number>(0);
  const [choiceBottom, setChoiceBottom] = useState<number>(0);
  const [choiceOuter, setChoiceOuter] = useState<number>(0);

  const [complete, setComplete] = useState<boolean>(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("task2") as string) || {};
    setChoiceTop(data.top || 0);
    setChoiceBottom(data.bottom || 0);
    setChoiceOuter(data.outer || 0);

    fetch(`${window.location.origin}/top.json`).then(async (res) => {
      const clothes = (await res.json()) as { id: number; url: string }[];
      setTop(clothes);
    });

    fetch(`${window.location.origin}/bottom.json`).then(async (res) => {
      const clothes = (await res.json()) as { id: number; url: string }[];
      setBottom(clothes);
    });

    fetch(`${window.location.origin}/outer.json`).then(async (res) => {
      const clothes = (await res.json()) as { id: number; url: string }[];
      setOuter(clothes);
    });
  }, []);

  useEffect(() => {
    if (choiceTop && choiceBottom && choiceOuter) {
      setComplete(true);
    }
  }, [choiceTop, choiceBottom, choiceOuter]);

  function choiceTopClothes(id: number) {
    setChoiceTop(id);
    const data = JSON.parse(localStorage.getItem("task2") as string) || {};
    data.top = id;
    localStorage.setItem("task2", JSON.stringify(data));
  }

  function choiceBottomClothes(id: number) {
    setChoiceBottom(id);
    const data = JSON.parse(localStorage.getItem("task2") as string) || {};
    data.bottom = id;
    localStorage.setItem("task2", JSON.stringify(data));
  }

  function choiceOuterClothes(id: number) {
    setChoiceOuter(id);
    const data = JSON.parse(localStorage.getItem("task2") as string) || {};
    data.outer = id;
    localStorage.setItem("task2", JSON.stringify(data));
  }

  return (
    <div>
      <div className="flex justify-between items-center">
        <MoveBackHeader path="/" />
        {complete && (
          <Link
            className="w-[186px] h-[58.46px] mt-[48px] mr-[44px] text-[40px] text-center rounded-[30px] bg-[#2C2F37] text-white"
            href="/task2/choice/result"
          >
            완료
          </Link>
        )}
      </div>
      <div>
        <div className="mb-[24px]">
          <div className="w-[150px] h-[47.14px] ml-[12px] mt-[24px] mb-[10px] text-[24px] text-center border-black border-[3px] rounded-[30px]">
            상의
          </div>
          <Slide
            choiceItem={choiceTop}
            slideItems={top}
            setChoiceItem={choiceTopClothes}
          />
        </div>
      </div>
      <div>
        <div className="mb-[24px]">
          <div className="w-[150px] h-[47.14px] ml-[12px] mb-[10px] text-[24px] text-center border-black border-[3px] rounded-[30px]">
            하의
          </div>
          <Slide
            choiceItem={choiceBottom}
            slideItems={bottom}
            setChoiceItem={choiceBottomClothes}
          />
        </div>
      </div>
      <div>
        <div className="mb-[24px]">
          <div className="w-[150px] h-[47.14px] ml-[12px] mb-[10px] text-[24px] text-center border-black border-[3px] rounded-[30px]">
            아우터
          </div>
          <Slide
            choiceItem={choiceOuter}
            slideItems={outer}
            setChoiceItem={choiceOuterClothes}
          />
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useEffect, useState } from "react";
import { MoveBackHeader } from "@/app/components";
import Slide from "./Slide";

export default function Page() {
  const [top, setTop] = useState<{ id: number; url: string }[]>();
  const [bottom, setBottom] = useState<{ id: number; url: string }[]>();
  const [outer, setOuter] = useState<{ id: number; url: string }[]>();

  const [choiceTop, setChoiceTop] = useState<number>(0);
  const [choiceBottom, setChoiceBottom] = useState<number>(0);
  const [choiceOuter, setChoiceOuter] = useState<number>(0);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("task2") as string) || {};
    setChoiceTop(data.top || 0);
    setChoiceBottom(data.bottom || 0);
    setChoiceOuter(data.outer || 0);

    fetch("http://localhost:3000/top.json").then(async (res) => {
      const clothes = (await res.json()) as { id: number; url: string }[];
      setTop(clothes);
    });

    fetch("http://localhost:3000/bottom.json").then(async (res) => {
      const clothes = (await res.json()) as { id: number; url: string }[];
      setBottom(clothes);
    });

    fetch("http://localhost:3000/outer.json").then(async (res) => {
      const clothes = (await res.json()) as { id: number; url: string }[];
      setOuter(clothes);
    });
  }, []);

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
      <MoveBackHeader path="/" />
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

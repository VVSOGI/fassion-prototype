"use client";

import React, { useEffect, useState } from "react";
import { MoveBackHeader } from "@/app/common";
import Category from "./Category";
import List from "./List";
import Link from "next/link";

export default function Page() {
  const [category, setCategory] = useState<string>("top");

  const [top, setTop] = useState<{ id: number; url: string }[]>();
  const [bottom, setBottom] = useState<{ id: number; url: string }[]>();
  const [outer, setOuter] = useState<{ id: number; url: string }[]>();

  const [choiceTop, setChoiceTop] = useState<{ id: number; url: string }>();
  const [choiceBottom, setChoiceBottom] = useState<{
    id: number;
    url: string;
  }>();
  const [choiceOuter, setChoiceOuter] = useState<{ id: number; url: string }>();
  const [complete, setComplete] = useState<boolean>(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("task3") as string) || {};

    fetch(`${window.location.origin}/top.json`).then(async (res) => {
      const clothes = (await res.json()) as { id: number; url: string }[];
      setChoiceTop(
        data.top ? clothes.find((item) => item.id === data.top) : undefined
      );
      setTop(clothes);
    });

    fetch(`${window.location.origin}/bottom.json`).then(async (res) => {
      const clothes = (await res.json()) as { id: number; url: string }[];
      setChoiceBottom(
        data.bottom
          ? clothes.find((item) => item.id === data.bottom)
          : undefined
      );
      setBottom(clothes);
    });

    fetch(`${window.location.origin}/outer.json`).then(async (res) => {
      const clothes = (await res.json()) as { id: number; url: string }[];
      setChoiceOuter(
        data.outer ? clothes.find((item) => item.id === data.outer) : undefined
      );
      setOuter(clothes);
    });
  }, []);

  useEffect(() => {
    if (choiceTop && choiceBottom && choiceOuter) {
      setComplete(true);
    }
  }, [choiceTop, choiceBottom, choiceOuter]);

  function choiceTopClothes(id: number) {
    const findTop = top?.find((item) => item.id === id);
    setChoiceTop(findTop);
    const data = JSON.parse(localStorage.getItem("task3") as string) || {};
    data.top = id;
    localStorage.setItem("task3", JSON.stringify(data));
  }

  function choiceBottomClothes(id: number) {
    const findBottom = bottom?.find((item) => item.id === id);
    setChoiceBottom(findBottom);
    const data = JSON.parse(localStorage.getItem("task3") as string) || {};
    data.bottom = id;
    localStorage.setItem("task3", JSON.stringify(data));
  }

  function choiceOuterClothes(id: number) {
    const findOuter = outer?.find((item) => item.id === id);
    setChoiceOuter(findOuter);
    const data = JSON.parse(localStorage.getItem("task3") as string) || {};
    data.outer = id;
    localStorage.setItem("task3", JSON.stringify(data));
  }

  return (
    <div>
      <div className="flex justify-between items-center">
        <MoveBackHeader path="/" />
        {complete && (
          <Link
            className="w-[186px] h-[58.46px] mt-[48px] mr-[44px] text-[40px] text-center rounded-[30px] bg-[#2C2F37] text-white"
            href="/task3/choice/result"
          >
            완료
          </Link>
        )}
      </div>
      <div className="flex gap-[25px] ml-[12px] mt-[24px]">
        <Category
          currentCategory={category}
          targetCategory="top"
          setCategory={setCategory}
        >
          상의
        </Category>
        <Category
          currentCategory={category}
          targetCategory="bottom"
          setCategory={setCategory}
        >
          하의
        </Category>
        <Category
          currentCategory={category}
          targetCategory="outer"
          setCategory={setCategory}
        >
          아우터
        </Category>
      </div>
      <div className="w-full h-[600px] px-[12px] mt-[14.86px] grid grid-cols-4 overflow-scroll">
        <List
          currentCategory={category}
          targetCategory="top"
          list={top}
          choice={choiceTop}
          onClick={choiceTopClothes}
        />
        <List
          currentCategory={category}
          targetCategory="bottom"
          list={bottom}
          choice={choiceBottom}
          onClick={choiceBottomClothes}
        />
        <List
          currentCategory={category}
          targetCategory="outer"
          list={outer}
          choice={choiceOuter}
          onClick={choiceOuterClothes}
        />
      </div>
      <div className="flex justify-center gap-[24px] mt-[91px]">
        <img
          className="w-[250px] h-[350px] object-cover border-black border-2"
          src={choiceTop?.url}
        />
        <img
          className="w-[250px] h-[350px] object-cover border-black border-2"
          src={choiceBottom?.url}
        />
        <img
          className="w-[250px] h-[350px] object-cover border-black border-2"
          src={choiceOuter?.url}
        />
      </div>
    </div>
  );
}

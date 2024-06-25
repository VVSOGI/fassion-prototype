import React from "react";
import { MoveBackHeaderDesktop, container } from "@/app/common";
import { Category, List } from ".";
import Link from "next/link";

interface Props {
  complete: boolean;
  top: { id: number; url: string }[];
  bottom: { id: number; url: string }[];
  outer: { id: number; url: string }[];
  category: string;
  choiceTop: { id: number; url: string } | undefined;
  choiceBottom: { id: number; url: string } | undefined;
  choiceOuter: { id: number; url: string } | undefined;
  setCategory: (category: string) => void;
  choiceTopClothes: (id: number) => void;
  choiceBottomClothes: (id: number) => void;
  choiceOuterClothes: (id: number) => void;
}

export function Mobile({
  complete,
  top,
  bottom,
  outer,
  category,
  choiceTop,
  choiceBottom,
  choiceOuter,
  setCategory,
  choiceTopClothes,
  choiceBottomClothes,
  choiceOuterClothes,
}: Props) {
  return (
    <div className={container.size.mobile}>
      <div className="flex justify-between items-center">
        <MoveBackHeaderDesktop path="/" />
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
      <div className="w-full h-[600px] px-[12px] mt-[14.86px] grid grid-cols-2 overflow-scroll">
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

import React from "react";
import { CompleteHeaderDesktop, container } from "@/app/common";
import { CategoryDesktop, List } from ".";

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

export function Desktop({
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
    <div className={container.size.desktop}>
      <CompleteHeaderDesktop
        complete={complete}
        backHref="/"
        completeHref="/task3/choice/result"
      />
      <div className="flex gap-[25px] ml-[48px] mt-[24px]">
        <CategoryDesktop
          currentCategory={category}
          targetCategory="top"
          setCategory={setCategory}
        >
          상의
        </CategoryDesktop>
        <CategoryDesktop
          currentCategory={category}
          targetCategory="bottom"
          setCategory={setCategory}
        >
          하의
        </CategoryDesktop>
        <CategoryDesktop
          currentCategory={category}
          targetCategory="outer"
          setCategory={setCategory}
        >
          아우터
        </CategoryDesktop>
      </div>
      <div className="w-full h-[600px] mt-[14.86px] grid grid-cols-8 gap-2 overflow-scroll scrollbar-hide">
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
      <div className="h-[500px] flex justify-center gap-[24px] mt-[91px]">
        <img
          className="w-[250px] h-[350px] object-cover border"
          src={choiceTop?.url}
        />
        <img
          className="w-[250px] h-[350px] object-cover border"
          src={choiceBottom?.url}
        />
        <img
          className="w-[250px] h-[350px] object-cover border"
          src={choiceOuter?.url}
        />
      </div>
    </div>
  );
}

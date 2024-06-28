import React from "react";
import { CompleteHeaderMobile, container } from "@/app/common";
import { CategoryMobile, List } from ".";

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
      <CompleteHeaderMobile
        complete={complete}
        backHref="/"
        completeHref="/task3/choice/result"
      />
      <div className="flex gap-[12px] ml-[12px] my-[24px]">
        <CategoryMobile
          currentCategory={category}
          targetCategory="top"
          setCategory={setCategory}
        >
          상의
        </CategoryMobile>
        <CategoryMobile
          currentCategory={category}
          targetCategory="bottom"
          setCategory={setCategory}
        >
          하의
        </CategoryMobile>
        <CategoryMobile
          currentCategory={category}
          targetCategory="outer"
          setCategory={setCategory}
        >
          아우터
        </CategoryMobile>
      </div>
      <div className="w-full h-[600px] px-[12px] mt-[14.86px] grid grid-cols-2 gap-[4px] overflow-scroll scrollbar-hide">
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
      <div className="h-full flex flex-col justify-center items-center gap-[24px] my-[91px]">
        <img
          className="w-full h-full object-cover border"
          src={choiceTop?.url}
        />
        <img
          className="w-full h-full object-cover border"
          src={choiceBottom?.url}
        />
        <img
          className="w-full h-full object-cover border"
          src={choiceOuter?.url}
        />
      </div>
    </div>
  );
}

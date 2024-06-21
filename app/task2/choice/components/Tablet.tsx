import React from "react";
import { CompleteHeaderTablet, container } from "@/app/common";
import { SlideTablet } from ".";

interface Props {
  complete: boolean;
  top: { id: number; url: string }[] | undefined;
  bottom: { id: number; url: string }[] | undefined;
  outer: { id: number; url: string }[] | undefined;
  choiceTop: number;
  choiceBottom: number;
  choiceOuter: number;
  choiceTopClothes: (id: number) => void;
  choiceBottomClothes: (id: number) => void;
  choiceOuterClothes: (id: number) => void;
}

export function Tablet({
  complete,
  top,
  bottom,
  outer,
  choiceTop,
  choiceBottom,
  choiceOuter,
  choiceTopClothes,
  choiceBottomClothes,
  choiceOuterClothes,
}: Props) {
  return (
    <div className={container.size.tablet}>
      <CompleteHeaderTablet
        backHref="/"
        complete={complete}
        completeHref="/task2/choice/result"
      />
      <div>
        <div className="mb-[24px]">
          <div className="w-[150px] h-[47.14px] ml-[12px] mt-[24px] mb-[10px] text-[24px] text-center border-black border-[3px] rounded-[30px]">
            상의
          </div>
          <SlideTablet
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
          <SlideTablet
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
          <SlideTablet
            choiceItem={choiceOuter}
            slideItems={outer}
            setChoiceItem={choiceOuterClothes}
          />
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { CompleteHeaderMobile, container } from "@/app/common";
import { SlideMobile } from ".";

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

export function Mobile({
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
    <div className={container.size.mobile}>
      <CompleteHeaderMobile
        backHref="/"
        complete={complete}
        completeHref="/task2/choice/result"
      />
      <div>
        <div className="mb-[24px]">
          <div className="w-fit px-[24px] ml-[12px] mt-[24px] mb-[10px] text-[18px] text-center border-black border-2 rounded-[30px]">
            상의
          </div>
          <SlideMobile
            choiceItem={choiceTop}
            slideItems={top}
            setChoiceItem={choiceTopClothes}
          />
        </div>
      </div>
      <div>
        <div className="mb-[24px]">
          <div className="w-fit px-[24px] ml-[12px] mb-[10px] text-[18px] text-center border-black border-2 rounded-[30px]">
            하의
          </div>
          <SlideMobile
            choiceItem={choiceBottom}
            slideItems={bottom}
            setChoiceItem={choiceBottomClothes}
          />
        </div>
      </div>
      <div>
        <div className="mb-[24px]">
          <div className="w-fit px-[24px] ml-[12px] mb-[10px] text-[18px] text-center border-black border-2 rounded-[30px]">
            아우터
          </div>
          <SlideMobile
            choiceItem={choiceOuter}
            slideItems={outer}
            setChoiceItem={choiceOuterClothes}
          />
        </div>
      </div>
    </div>
  );
}

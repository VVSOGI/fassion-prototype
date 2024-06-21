import React from "react";
import { MoveBackHeaderDesktop, container } from "@/app/common";
import { SlideDesktop } from ".";
import Link from "next/link";

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

export function Desktop({
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
    <div className={container.size.desktop}>
      <div className="flex justify-between items-center">
        <MoveBackHeaderDesktop path="/" />
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
          <div className="w-fit px-[24px] ml-[12px] mt-[24px] mb-[24px] text-[24px] text-center border-black border-[3px] rounded-[30px]">
            상의
          </div>
          <SlideDesktop
            choiceItem={choiceTop}
            slideItems={top}
            setChoiceItem={choiceTopClothes}
          />
        </div>
      </div>
      <div>
        <div className="mb-[24px]">
          <div className="w-fit px-[24px] ml-[12px] mb-[24px] text-[24px] text-center border-black border-[3px] rounded-[30px]">
            하의
          </div>
          <SlideDesktop
            choiceItem={choiceBottom}
            slideItems={bottom}
            setChoiceItem={choiceBottomClothes}
          />
        </div>
      </div>
      <div>
        <div className="mb-[24px]">
          <div className="w-fit px-[24px] ml-[12px] mb-[24px] text-[24px] text-center border-black border-[3px] rounded-[30px]">
            아우터
          </div>
          <SlideDesktop
            choiceItem={choiceOuter}
            slideItems={outer}
            setChoiceItem={choiceOuterClothes}
          />
        </div>
      </div>
    </div>
  );
}

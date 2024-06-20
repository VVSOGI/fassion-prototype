import React from "react";
import { MoveBackHeaderDesktop, container } from "@/app/common";

interface Props {
  data: { id: number; url: string }[];
  choice: number;
  handleClickItem: (id: number) => void;
}

export function Desktop({ data, choice, handleClickItem }: Props) {
  return (
    <div className={container.size.desktop}>
      <MoveBackHeaderDesktop path="/task1/choice" />
      <div className="mt-[79px] ml-[43px] mb-[76px]">
        <div className="w-fit px-[48px] py-[12px] bg-[#2C2F37] rounded-[30px] text-[24px] text-white">
          상의
        </div>
      </div>
      <div className="grid grid-cols-10 gap-2 px-[43px]">
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className={`
                ${choice === item.id ? "border-8 border-red-500" : ""}
                w-full h-full
              `}
              onClick={() => handleClickItem(item.id)}
            >
              <img
                className="w-full h-full object-cover"
                src={item.url}
                alt={item.url}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

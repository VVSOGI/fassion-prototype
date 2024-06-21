import React from "react";
import { CompleteHeaderTablet, container } from "@/app/common";

interface Props {
  data: { id: number; url: string }[];
  choice: number;
  handleClickItem: (id: number) => void;
}

export function Tablet({ data, choice, handleClickItem }: Props) {
  return (
    <div className={container.size.tablet}>
      <CompleteHeaderTablet
        complete={true}
        backHref="/task1/choice"
        completeHref="/task1/choice/result"
      />
      <div className="mt-[79px] ml-[43px] mb-[76px]">
        <div className="w-[280px] h-[88px] flex justify-center items-center bg-[#2C2F37] rounded-[30px] text-[40px] text-white">
          상의
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className={`
                ${choice === item.id ? "border-8 border-red-500" : ""}
                w-full h-fit
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

import React from "react";
import { CompleteHeaderMobile, container } from "@/app/common";

interface Props {
  data: { id: number; url: string }[];
  choice: number;
  handleClickItem: (id: number) => void;
}

export function Mobile({ data, choice, handleClickItem }: Props) {
  return (
    <div className={container.size.mobile}>
      <CompleteHeaderMobile
        complete={true}
        backHref="/task1/choice"
        completeHref="/task1/choice/result"
      />
      <div className="mt-[24px] ml-[24px] mb-[24px]">
        <div className="w-fit px-[24px] py-[4px] bg-[#2C2F37] rounded-[30px] text-[18px] text-white">
          아우터
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1 px-[12px]">
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className={`
                ${choice === item.id ? "border-4 border-red-500" : ""}
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

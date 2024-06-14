import React from "react";
import { MoveBackHeaderMobile, container } from "@/app/common";
import Link from "next/link";

interface Props {
  data: { id: number; url: string }[];
  choice: number;
  handleClickItem: (id: number) => void;
}

export function Mobile({ data, choice, handleClickItem }: Props) {
  return (
    <div className={container.size.mobile}>
      <div className="flex justify-between">
        <MoveBackHeaderMobile path="/task1/choice" />
        <Link
          className="w-fit px-[48px] py-[12px] mr-[24px] mt-[24px] bg-[#2C2F37] rounded-[30px] text-[24px] text-white"
          href="/task1/choice/result"
        >
          완료
        </Link>
      </div>
      <div className="mt-[79px] ml-[24px] mb-[76px]">
        <div className="w-fit px-[32px] py-[12px] bg-[#2C2F37] rounded-[30px] text-[18px] text-white">
          상의
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 px-[24px]">
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

import React from "react";
import { container } from "@/app/common";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";

interface Props {
  data: { id: number; url: string }[];
  choice: number;
  handleClickItem: (id: number) => void;
}

export function Desktop({ data, choice, handleClickItem }: Props) {
  const router = useRouter();

  return (
    <div className={container.size.desktop}>
      <div className="flex justify-between items-center pt-[48px] px-[43px]">
        <IoIosArrowBack
          className="cursor-pointer"
          fontSize={48}
          onClick={() => router.push("/task1/choice")}
        />
        <Link
          className="w-fit px-[48px] py-[4px] bg-[#2C2F37] rounded-[30px] text-[24px] text-white"
          href="/task1/choice/result"
        >
          완료
        </Link>
      </div>
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

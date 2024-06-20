import React from "react";
import { container } from "@/app/common";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";

interface Props {
  data: { id: number; url: string }[];
  choice: number;
  handleClickItem: (id: number) => void;
}

export function Tablet({ data, choice, handleClickItem }: Props) {
  const router = useRouter();

  return (
    <div className={container.size.tablet}>
      <div className="flex justify-between items-center pt-[48px] px-[43px]">
        <IoIosArrowBack
          className="cursor-pointer"
          fontSize={100}
          onClick={() => router.push("/task1/choice")}
        />
        <Link
          className="w-fit px-[72px] py-[12px] bg-[#2C2F37] rounded-[30px] text-[32px] text-white"
          href="/task1/choice/result"
        >
          완료
        </Link>
      </div>
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

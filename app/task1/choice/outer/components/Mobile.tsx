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

export function Mobile({ data, choice, handleClickItem }: Props) {
  const router = useRouter();

  return (
    <div className={container.size.mobile}>
      <div className="flex justify-between items-center pt-[24px] px-[24px]">
        <IoIosArrowBack
          className="cursor-pointer"
          fontSize={50}
          onClick={() => router.push("/task1/choice")}
        />
        <Link
          className="w-fit px-[24px] py-[4px] bg-[#2C2F37] rounded-[30px] text-[18px] text-white"
          href="/task1/choice/result"
        >
          완료
        </Link>
      </div>
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

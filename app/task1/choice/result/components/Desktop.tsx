import React from "react";
import { container } from "@/app/common";
import Link from "next/link";
import useResult from "@/app/hooks/useResult";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";

export function Desktop() {
  const { top, bottom, outer } = useResult("task1");
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
          className="w-[186px] h-[58.46px] text-[40px] text-center rounded-[30px] bg-[#2C2F37] text-white"
          href="/task2"
        >
          Next
        </Link>
      </div>
      <div className="absolute top-[140px] left-[43px] w-[144px] h-[40px] flex justify-center items-center bg-[#2C2F37] rounded-[30px] text-[20px] text-white">
        코디맵
      </div>
      <div className="h-[calc(100vh-106.5px)] flex justify-center items-center gap-[38px]">
        <div>
          <div className="w-[250px] h-full bg-[#d9d9d9] border border-black">
            {outer && (
              <img className="w-full h-full" src={outer.url} alt={outer.url} />
            )}
          </div>
        </div>
        <div className="flex flex-col gap-[38px]">
          <div className="w-[250px] h-full bg-[#d9d9d9] border border-black">
            {top && (
              <img className="w-full h-full" src={top.url} alt={top.url} />
            )}
          </div>
          <div className="w-[250px] h-full bg-[#d9d9d9] border border-black">
            {bottom && (
              <img
                className="w-full h-full"
                src={bottom.url}
                alt={bottom.url}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

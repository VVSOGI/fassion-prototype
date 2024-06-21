"use client";

import React from "react";
import { container } from "@/app/common";
import Link from "next/link";
import useResult from "@/app/hooks/useResult";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";

interface Props {
  task: string;
  backHref: string;
  nextHref: string;
}

export function ResultMobile({ task, backHref, nextHref }: Props) {
  const { top, bottom, outer } = useResult(task);
  const router = useRouter();

  return (
    <div className={container.size.mobile}>
      <div className="flex justify-between items-center pt-[24px] px-[24px]">
        <IoIosArrowBack
          className="cursor-pointer"
          fontSize={50}
          onClick={() => router.push(backHref)}
        />
        <Link
          className="w-fit px-[24px] py-[4px] bg-[#2C2F37] rounded-[30px] text-[18px] text-white"
          href={nextHref}
        >
          Next
        </Link>
      </div>
      <div className="absolute top-[100px] left-[24px] w-fit h-[40px] px-[24px] flex justify-center items-center bg-[#2C2F37] rounded-[30px] text-[18px] text-white">
        코디맵
      </div>
      <div className="h-[calc(100vh-74px)] flex justify-center items-center gap-[12px] px-[24px]">
        <div>
          <div className="w-full h-full bg-[#d9d9d9] border border-black">
            {outer && (
              <img className="w-full h-full" src={outer.url} alt={outer.url} />
            )}
          </div>
        </div>
        <div className="flex flex-col gap-[12px]">
          <div className="w-full h-full bg-[#d9d9d9] border border-black">
            {top && (
              <img className="w-full h-full" src={top.url} alt={top.url} />
            )}
          </div>
          <div className="w-full h-full bg-[#d9d9d9] border border-black">
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

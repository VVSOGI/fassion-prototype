"use client";

import React from "react";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";

interface props {
  backHref: string;
  complete: boolean;
  completeHref: string;
}

export function CompleteHeaderTablet({
  backHref,
  complete,
  completeHref,
}: props) {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center pt-[48px] px-[43px]">
      <IoIosArrowBack
        className="cursor-pointer"
        fontSize={100}
        onClick={() => router.push(backHref)}
      />
      {complete && (
        <Link
          className="w-fit px-[72px] py-[12px] bg-[#2C2F37] rounded-[30px] text-[32px] text-white"
          href={completeHref}
        >
          완료
        </Link>
      )}
    </div>
  );
}

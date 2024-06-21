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

export function CompleteHeaderMobile({
  backHref,
  complete,
  completeHref,
}: props) {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center pt-[24px] px-[24px]">
      <IoIosArrowBack
        className="cursor-pointer"
        fontSize={50}
        onClick={() => router.push(backHref)}
      />
      {complete && (
        <Link
          className="w-fit px-[24px] py-[4px] bg-[#2C2F37] rounded-[30px] text-[18px] text-white"
          href={completeHref}
        >
          완료
        </Link>
      )}
    </div>
  );
}

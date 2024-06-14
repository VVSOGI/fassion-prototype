"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";

interface Props {
  path: string;
}

export function MoveBackHeaderMobile({ path }: Props) {
  const router = useRouter();

  return (
    <div className="w-full pt-[24px] px-[24px]">
      <IoIosArrowBack fontSize={50} onClick={() => router.push(path)} />
    </div>
  );
}

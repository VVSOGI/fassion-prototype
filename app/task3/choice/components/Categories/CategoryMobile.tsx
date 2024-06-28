import React from "react";

interface Props {
  children: React.ReactNode;
  currentCategory: string;
  targetCategory: string;
  setCategory: (category: string) => void;
}

export function CategoryMobile({
  children,
  currentCategory,
  targetCategory,
  setCategory,
}: Props) {
  return (
    <div
      className={`
            ${
              currentCategory === targetCategory
                ? "bg-[#2C2F37] text-white"
                : "bg-white border-[#2C2F37] border-[3px]"
            }
            w-fit px-[24px] py-[2px] flex justify-center items-center rounded-[30px] text-[14px] cursor-pointer
        `}
      onClick={() => setCategory(targetCategory)}
    >
      {children}
    </div>
  );
}

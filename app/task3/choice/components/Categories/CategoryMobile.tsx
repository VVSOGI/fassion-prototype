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
                : "bg-white border-black border-[3px]"
            }
            w-[120px] py-[2px] flex justify-center items-center rounded-[30px] text-[18px] cursor-pointer
        `}
      onClick={() => setCategory(targetCategory)}
    >
      {children}
    </div>
  );
}

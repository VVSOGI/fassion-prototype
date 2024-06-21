"use client";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Grid } from "swiper/modules";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

interface Props {
  choiceItem: number;
  slideItems: { id: number; url: string }[] | undefined;
  setChoiceItem: (id: number) => void;
}

export function SlideTablet({ choiceItem, slideItems, setChoiceItem }: Props) {
  return (
    <div className="w-full h-[307.2px] grid border">
      <Swiper
        slidesPerView={4}
        grid={{
          rows: 1,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Grid]}
      >
        {slideItems?.map((item) => {
          return (
            <SwiperSlide
              key={item.id}
              onClick={() => {
                setChoiceItem(item.id);
              }}
              className={`
                ${choiceItem === item.id ? "border-8 border-red-500" : ""}
            `}
            >
              <img className="w-full h-full" src={item.url} alt={item.url} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

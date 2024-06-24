"use client";

import React, { useEffect, useState } from "react";
import { Desktop, Mobile, Tablet } from "./components";

export default function Page() {
  const [category, setCategory] = useState<string>("top");

  const [top, setTop] = useState<{ id: number; url: string }[]>([]);
  const [bottom, setBottom] = useState<{ id: number; url: string }[]>([]);
  const [outer, setOuter] = useState<{ id: number; url: string }[]>([]);

  const [choiceTop, setChoiceTop] = useState<{ id: number; url: string }>();
  const [choiceBottom, setChoiceBottom] = useState<{
    id: number;
    url: string;
  }>();
  const [choiceOuter, setChoiceOuter] = useState<{ id: number; url: string }>();
  const [complete, setComplete] = useState<boolean>(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("task3") as string) || {};

    fetch(`${window.location.origin}/top.json`).then(async (res) => {
      const clothes = (await res.json()) as { id: number; url: string }[];
      setChoiceTop(
        data.top ? clothes.find((item) => item.id === data.top) : undefined
      );
      setTop(clothes);
    });

    fetch(`${window.location.origin}/bottom.json`).then(async (res) => {
      const clothes = (await res.json()) as { id: number; url: string }[];
      setChoiceBottom(
        data.bottom
          ? clothes.find((item) => item.id === data.bottom)
          : undefined
      );
      setBottom(clothes);
    });

    fetch(`${window.location.origin}/outer.json`).then(async (res) => {
      const clothes = (await res.json()) as { id: number; url: string }[];
      setChoiceOuter(
        data.outer ? clothes.find((item) => item.id === data.outer) : undefined
      );
      setOuter(clothes);
    });
  }, []);

  useEffect(() => {
    if (choiceTop && choiceBottom && choiceOuter) {
      setComplete(true);
    }
  }, [choiceTop, choiceBottom, choiceOuter]);

  function choiceTopClothes(id: number) {
    const findTop = top?.find((item) => item.id === id);
    setChoiceTop(findTop);
    const data = JSON.parse(localStorage.getItem("task3") as string) || {};
    data.top = id;
    localStorage.setItem("task3", JSON.stringify(data));
  }

  function choiceBottomClothes(id: number) {
    const findBottom = bottom?.find((item) => item.id === id);
    setChoiceBottom(findBottom);
    const data = JSON.parse(localStorage.getItem("task3") as string) || {};
    data.bottom = id;
    localStorage.setItem("task3", JSON.stringify(data));
  }

  function choiceOuterClothes(id: number) {
    const findOuter = outer?.find((item) => item.id === id);
    setChoiceOuter(findOuter);
    const data = JSON.parse(localStorage.getItem("task3") as string) || {};
    data.outer = id;
    localStorage.setItem("task3", JSON.stringify(data));
  }

  return (
    <div>
      <Desktop
        complete={complete}
        top={top}
        bottom={bottom}
        outer={outer}
        category={category}
        choiceTop={choiceTop}
        choiceBottom={choiceBottom}
        choiceOuter={choiceOuter}
        setCategory={setCategory}
        choiceTopClothes={choiceTopClothes}
        choiceBottomClothes={choiceBottomClothes}
        choiceOuterClothes={choiceOuterClothes}
      />
      <Tablet
        complete={complete}
        top={top}
        bottom={bottom}
        outer={outer}
        category={category}
        choiceTop={choiceTop}
        choiceBottom={choiceBottom}
        choiceOuter={choiceOuter}
        setCategory={setCategory}
        choiceTopClothes={choiceTopClothes}
        choiceBottomClothes={choiceBottomClothes}
        choiceOuterClothes={choiceOuterClothes}
      />
      <Mobile
        complete={complete}
        top={top}
        bottom={bottom}
        outer={outer}
        category={category}
        choiceTop={choiceTop}
        choiceBottom={choiceBottom}
        choiceOuter={choiceOuter}
        setCategory={setCategory}
        choiceTopClothes={choiceTopClothes}
        choiceBottomClothes={choiceBottomClothes}
        choiceOuterClothes={choiceOuterClothes}
      />
    </div>
  );
}

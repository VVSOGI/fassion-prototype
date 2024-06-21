"use client";

import React, { useEffect, useState } from "react";
import { Desktop, Mobile, Tablet } from "./components";

export default function Page() {
  const [top, setTop] = useState<{ id: number; url: string }[]>();
  const [bottom, setBottom] = useState<{ id: number; url: string }[]>();
  const [outer, setOuter] = useState<{ id: number; url: string }[]>();

  const [choiceTop, setChoiceTop] = useState<number>(0);
  const [choiceBottom, setChoiceBottom] = useState<number>(0);
  const [choiceOuter, setChoiceOuter] = useState<number>(0);

  const [complete, setComplete] = useState<boolean>(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("task2") as string) || {};
    setChoiceTop(data.top || 0);
    setChoiceBottom(data.bottom || 0);
    setChoiceOuter(data.outer || 0);

    fetch(`${window.location.origin}/top.json`).then(async (res) => {
      const clothes = (await res.json()) as { id: number; url: string }[];
      setTop(clothes);
    });

    fetch(`${window.location.origin}/bottom.json`).then(async (res) => {
      const clothes = (await res.json()) as { id: number; url: string }[];
      setBottom(clothes);
    });

    fetch(`${window.location.origin}/outer.json`).then(async (res) => {
      const clothes = (await res.json()) as { id: number; url: string }[];
      setOuter(clothes);
    });
  }, []);

  useEffect(() => {
    if (choiceTop && choiceBottom && choiceOuter) {
      setComplete(true);
    }
  }, [choiceTop, choiceBottom, choiceOuter]);

  function choiceTopClothes(id: number) {
    setChoiceTop(id);
    const data = JSON.parse(localStorage.getItem("task2") as string) || {};
    data.top = id;
    localStorage.setItem("task2", JSON.stringify(data));
  }

  function choiceBottomClothes(id: number) {
    setChoiceBottom(id);
    const data = JSON.parse(localStorage.getItem("task2") as string) || {};
    data.bottom = id;
    localStorage.setItem("task2", JSON.stringify(data));
  }

  function choiceOuterClothes(id: number) {
    setChoiceOuter(id);
    const data = JSON.parse(localStorage.getItem("task2") as string) || {};
    data.outer = id;
    localStorage.setItem("task2", JSON.stringify(data));
  }

  return (
    <div>
      {[Desktop, Tablet, Mobile].map((Component, index) => {
        return (
          <Component
            key={index}
            complete={complete}
            top={top}
            bottom={bottom}
            outer={outer}
            choiceTop={choiceTop}
            choiceBottom={choiceBottom}
            choiceOuter={choiceOuter}
            choiceTopClothes={choiceTopClothes}
            choiceBottomClothes={choiceBottomClothes}
            choiceOuterClothes={choiceOuterClothes}
          />
        );
      })}
    </div>
  );
}

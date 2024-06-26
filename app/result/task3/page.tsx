"use client";

import React from "react";
import { ResultDesktop, ResultMobile, ResultTablet } from "@/app/common";

export default function Page() {
  const task = "task3";
  const backHref = "/result";
  const nextHref = "/";

  return (
    <div>
      <ResultDesktop task={task} backHref={backHref} nextHref={nextHref} />
      <ResultTablet task={task} backHref={backHref} nextHref={nextHref} />
      <ResultMobile task={task} backHref={backHref} nextHref={nextHref} />
    </div>
  );
}

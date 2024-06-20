"use client";

import React from "react";
import { Desktop, Mobile, Tablet } from "./components";

export default function Page() {
  return (
    <div>
      <Desktop />
      <Tablet />
      <Mobile />
    </div>
  );
}

"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("432c714d-663d-4ef3-b705-3682902c1b69");
  }, []);
  return null;
};

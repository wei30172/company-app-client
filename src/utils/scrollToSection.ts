import { RefObject } from "react";
export const scrollToSection = (elementRef: RefObject<HTMLDivElement>) => {
  elementRef.current?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
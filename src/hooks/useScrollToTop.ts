import { useRef } from "react";

export const useScrollToTop = (blank: number) => {
  const inputRef = useRef<HTMLInputElement>(null!);
  const handleScrollTop = () =>
    window.scrollTo(0, inputRef.current.offsetTop - blank);

  return { inputRef, handleScrollTop };
};

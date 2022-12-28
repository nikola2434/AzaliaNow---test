import { useRouter } from "next/router";
import { useState } from "react";
import { getUrlCarts } from "../../../../config/getUrl";

export const useAddingToCarts = (id: number) => {
  const [count, setCount] = useState(1);
  const [isCarts, setIsCarts] = useState(false);
  const { push } = useRouter();

  const decrement = () => {
    if (count === 1) return;
    setCount((prev) => prev - 1);
  };

  const increment = () => {
    if (count === 99) return;
    setCount((prev) => prev + 1);
  };

  const addingToCarts = () => {
    if (!isCarts) {
      setIsCarts(true);
    } else push(getUrlCarts(id));
  };

  return { count, isCarts, decrement, increment, addingToCarts };
};

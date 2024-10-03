"use client";

import { useEffect, useRef } from "react";

type UsePrevious<T> = T | null;

export const usePrevious = <T>(value: T): UsePrevious<T> => {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};

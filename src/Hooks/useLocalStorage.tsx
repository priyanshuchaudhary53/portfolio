"use client";

import { useEffect, useState } from "react";

const useLocalStorage = (key: string, fallback: string) => {
  const [storage, setStorage] = useState(fallback);
  useEffect(() => {
    const storageItem = localStorage.getItem(key);
    if (storageItem === null) {
      localStorage.setItem(key, fallback);
    } else {
      setStorage(storageItem);
    }
  }, [key, fallback]);
  return [storage, setStorage] as const;
};

export default useLocalStorage;

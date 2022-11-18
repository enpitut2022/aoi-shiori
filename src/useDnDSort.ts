import { useRef, useState } from "react";

interface DnDSortResult<T> {
  key: string;
  value: T;
  events: {
    ref: (element: HTMLElement | null) => void;
    onMouseDown: (event: React.MouseEvent<HTMLElement>) => void;
  };
}

export const useDnDSort = <T>(defaultItems: T[]): DnDSortResult<T>[] => {
  // 描画内容と紐づいているのでuseStateで管理する
  const [items, setItems] = useState(defaultItems);

  return items.map((value: T): DnDSortResult<T> => {
    return {
      value,

      key: Math.random().toString(16),

      events: {
        ref: () => void 0,

        onMouseDown: () => void 0,
      },
    };
  });
};

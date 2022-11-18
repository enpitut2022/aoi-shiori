import { useRef, useState } from "react";

interface DnDSortResult<T> {
  key: string;
  value: T;
  events: {
    ref: (element: HTMLElement | null) => void;
    onMouseDown: (event: React.MouseEvent<HTMLElement>) => void;
  };
}

// 座標の型
interface Position {
  x: number;
  y: number;
}

// ドラッグ＆ドロップ要素の情報をまとめた型
interface DnDItem<T> {
  value: T; // useDnDSort()の引数に渡された配列の要素の値
  key: string; // 要素と紐づいた一意な文字列
  position: Position; // 要素の座標
  element: HTMLElement; // DOM情報
}

// useRef()で保持するデータの型
interface DnDRef<T> {
  keys: Map<T, string>; // 要素に紐づいたkey文字列を管理するMap
  dndItems: DnDItem<T>[]; // 並び替える全ての要素を保持するための配列
  canCheckHovered: boolean; // 重なり判定ができるかのフラグ
  pointerPosition: Position; // マウスポインターの座標
  dragElement: DnDItem<T> | null; // ドラッグしてる要素
}

export const useDnDSort = <T>(defaultItems: T[]): DnDSortResult<T>[] => {
  // 描画内容と紐づいているのでuseStateで管理する
  const [items, setItems] = useState(defaultItems);

  // 状態をrefで管理する
  const state = useRef<DnDRef<T>>({
    dndItems: [],
    keys: new Map(),
    dragElement: null,
    canCheckHovered: true,
    pointerPosition: { x: 0, y: 0 },
  }).current;

  return items.map((value: T): DnDSortResult<T> => {
    // keyが無ければ新しく作り、あれば既存のkey文字列を返す
    const key = state.keys.get(value) || Math.random().toString(16);
    // 生成したkey文字列を保存
    state.keys.set(value, key);

    return {
      value,
      key,
      events: {
        ref: () => void 0,
        onMouseDown: () => void 0,
      },
    };
  });
};

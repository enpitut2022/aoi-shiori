import { useState } from "react";
import { Container, Draggable, DropResult } from "react-smooth-dnd";
import { data, Spot } from "./data";
import SpotCard from "./spot";

const newCard = () => {
  const [spots, setSpots] = useState<Spot[]>(data);

  // ドロップされたときにspotの順番を更新する
  const onDropHandler = (e: DropResult) => {
    setSpots((old): Spot[] => {
      if (e.removedIndex === null || e.addedIndex === null) return old;

      const updated = old.concat([])  // 古いspotsを複製する
      updated.splice(e.removedIndex, 1);
      updated.splice(e.addedIndex, 0, old[e.removedIndex]); // 追加された位置に挿入する
      return updated;
    });
  }

  return (
    <>
      <div>
        <Container onDrop={onDropHandler}>
          {spots.map(spot => (
            <Draggable key={spot.id}>
              <SpotCard {...spot} />
            </Draggable>
          ))}
        </Container>
      </div>
    </>
  )
}

export default newCard
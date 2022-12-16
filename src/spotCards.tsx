import { useState } from "react";
import { Container, Draggable, DropResult } from "react-smooth-dnd";
import { data, Spot } from "./data";

type Props = Spot;

const SpotCard = (props: Props) => {
  return (
    <>
      <div>
        <p>{props.name}</p>
        <img src={props.imgUrl} alt="" />
      </div>
    </>
  );
};

// const getCardPayload = (columnId: number, index: number) {
//   return this.state.scene.children.filter((p) => p.id === columnId)[0]
//     .children[index];
// }

type Data = {
  spots: Spot[];
  candidate: Spot[];
};

const SpotCards = () => {
  const [datas, setDatas] = useState<Data>({ spots: data, candidate: [] });

  // ドロップされたときにspotの順番を更新する
  const onDropHandler = (e: DropResult) => {
    setDatas((old): Data => {
      if (e.removedIndex === null || e.addedIndex === null) return old;

      const updated = [...old.spots]  // 古いspotsを複製する
      updated.splice(e.removedIndex, 1);
      updated.splice(e.addedIndex, 0, old.spots[e.removedIndex]); // 追加された位置に挿入する
      return { spots: updated, candidate: [] };
    });
  }

  return (
    <>
      <div>
        <Container
          orientation="horizontal"
          onDrop={onDropHandler}
        >
          {datas.spots.map(spot => (
            <Draggable key={spot.id}>
              <SpotCard {...spot} />
            </Draggable>
          ))}
        </Container>
      </div>
    </>
  )
}

export default SpotCards;
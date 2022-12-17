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

type Data = {
  spots: Spot[];
  candidate: Spot[];
};

const SpotCards = () => {
  const [datas, setDatas] = useState<Data>({ spots: data, candidate: data });

  // ドロップされたときにspotの順番を更新する
  const onDropHandler = (columnName: string, e: DropResult) => {
    console.log(e)

    if (columnName === 'spots') {
      setDatas((old): Data => {
        if (e.removedIndex === null || e.addedIndex === null) return old;

        const updated = [...old.spots]  // 古いspotsを複製する
        updated.splice(e.removedIndex, 1);
        updated.splice(e.addedIndex, 0, old.spots[e.removedIndex]); // 追加された位置に挿入する
        return { spots: updated, candidate: old.candidate };
      });

      return;
    }

    setDatas((old): Data => {
      if (e.removedIndex === null || e.addedIndex === null) return old;

      const updated = [...old.candidate]  // 古いspotsを複製する
      updated.splice(e.removedIndex, 1);
      updated.splice(e.addedIndex, 0, old.candidate[e.removedIndex]); // 追加された位置に挿入する
      return { spots: old.spots, candidate: updated };
    });
  }

  const getCardPayload = (columnName: string, index: number): Spot => {
    if (columnName === 'spots') {
      return datas.spots[index]
    }
    return datas.candidate[index]
  }

  return (
    <>
      <div>
        {/* 旅程を格納するボックス */}
        <div>
          <Container
            groupName="shiori"
            orientation="horizontal"
            getChildPayload={(index) =>
              getCardPayload('spots', index)
            }
            onDrop={e => onDropHandler('spots', e)}
          >
            {datas.spots.map(spot => (
              <Draggable key={`spots:${spot.id}`}>
                <SpotCard {...spot} />
              </Draggable>
            ))}
          </Container>
        </div>

        {/* 候補を格納するボックス */}
        <div className="candidate">
          <Container
            groupName="shiori"
            orientation="horizontal"
            getChildPayload={(index) =>
              getCardPayload('candidate', index)
            }
            onDrop={e => onDropHandler('candidate', e)}
          >
            {datas.candidate.map(spot => (
              <Draggable key={`candidate:${spot.id}`}>
                <SpotCard {...spot} />
              </Draggable>
            ))}
          </Container>
        </div>
      </div>
    </>
  )
}

export default SpotCards;
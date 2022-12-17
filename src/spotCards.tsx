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

  const applyDrag = <T,>(arr: T[], dragResult: DropResult): T[] => {
    const { removedIndex, addedIndex, payload } = dragResult;
    if (removedIndex === null && addedIndex === null) return arr;

    const result = [...arr];
    let itemToAdd = payload;

    if (removedIndex !== null) {
      itemToAdd = result.splice(removedIndex, 1)[0];
    }

    if (addedIndex !== null) {
      result.splice(addedIndex, 0, itemToAdd);
    }

    return result;
  };

  // ドロップされたときにspotの順番を更新する
  const onDropHandler = (columnName: string, e: DropResult) => {
    if (columnName === 'spots') {
      setDatas((old): Data => {
        return { spots: applyDrag(old.spots, e), candidate: old.candidate };
      });
    }

    if (columnName === 'candidate') {
      setDatas((old): Data => {
        return { spots: old.spots, candidate: applyDrag(old.candidate, e) };
      });
    }
  }

  const getCardPayload = (columnName: string, index: number): Spot => {
    return columnName === 'spots' ? datas.spots[index] : datas.candidate[index];
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
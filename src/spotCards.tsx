import { useState } from "react";
import { Container, Draggable, DropResult } from "react-smooth-dnd";
import { data, Spot } from "./data";
import DistanceBlock from "./distanceBlock";
import { updateDistance } from './utils'

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
  const [datas, setDatas] = useState<Data>({ spots: data.slice(0, 3), candidate: data.slice(3) });
  const [distance, setDistance] = useState<string[]>(['徒歩5分', '徒歩5分', '徒歩5分',]);

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

  // XXX: 応急処置用 後々取りたい
  const notUndefined = <T,>(arr: T[]): T[] => {
    return arr.filter(v => !!v);
  }

  // ドロップされたときにspotの順番を更新する
  const onDropHandler = (columnName: string, e: DropResult) => {
    if (columnName === 'spots') {
      setDatas((old): Data => {
        return { spots: applyDrag(notUndefined(old.spots), e), candidate: notUndefined(old.candidate) };
      });
    }

    if (columnName === 'candidate') {
      setDatas((old): Data => {
        return { spots: notUndefined(old.spots), candidate: applyDrag(notUndefined(old.candidate), e) };
      });
    }

    setDistance(() => {
      return updateDistance(notUndefined(datas.spots));
    });
  }

  const getCardPayload = (columnName: string, index: number): Spot => {
    return columnName === 'spots' ? datas.spots[index] : datas.candidate[index];
  }

  const genSpotAndDistance = (data: Spot | string) => {
    if (typeof data === 'string') {
      return (
        <div key={Math.floor(Math.random() * 99999)}>
          <DistanceBlock distance={data} />
        </div>
      )
    }
    return (
      <Draggable key={Math.floor(Math.random() * 99999)}>
        <SpotCard {...data} />
      </Draggable>
    )
  }

  const cncatSpotAndDistance = (spots: Spot[], distance: string[]): (Spot | string)[] => {
    let res: (Spot | string)[] = [];
    for (let i = 0; i < distance.length; i++) {
      res.push(spots[i]);
      res.push(distance[i]);
    }
    res.push(spots[spots.length - 1]);
    return res
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
            {cncatSpotAndDistance(datas.spots, distance).map((data) => genSpotAndDistance(data))}
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
            {notUndefined(datas.candidate).map(spot => (
              <Draggable key={Math.floor(Math.random() * 99999)}>
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
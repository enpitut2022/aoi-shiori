import { useState } from "react";
import { Container, Draggable, DropResult } from "react-smooth-dnd";
import { data, Spot, isSpot } from "./data";
import DistanceBlock from "./distanceBlock";
import { updateDistance } from "./utils";
import DisplayMap from "./map";

type Props = Spot;

const SpotCard = (props: Props) => {
  return (
    <>
      <div className="card">
        <p>{props.name}</p>
        <p>{props.spendTime}分滞在</p>
        <img src={props.imgUrl} alt="" />
      </div>
    </>
  );
};

type SpotAndDistance = Spot | string;

type Data = {
  spots: SpotAndDistance[];
  candidate: Spot[];
};

const SpotCards = () => {
  const [datas, setDatas] = useState<Data>({
    spots: data.slice(0, 3),
    candidate: data.slice(3),
  });

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
    return arr.filter((v) => !!v);
  };

  // ドロップされたときにspotの順番を更新する
  const onDropHandler = (columnName: string, e: DropResult) => {
    if (columnName === "candidate") {
      setDatas((old): Data => {
        return {
          spots: notUndefined(old.spots),
          candidate: applyDrag(notUndefined(old.candidate), e),
        };
      });
    }

    if (columnName === "spots") {
      setDatas((old): Data => {
        const newSpots = applyDrag(notUndefined(old.spots), e).filter(isSpot);
        const newDistance = updateDistance(newSpots);
        const newSpotAndDistances = concatSpotAndDistance(
          newSpots,
          newDistance
        );

        return {
          spots: newSpotAndDistances,
          candidate: notUndefined(old.candidate),
        };
      });
    }
  };

  const getCardPayload = (columnName: string, index: number): Spot => {
    if (columnName === "candidate") return datas.candidate[index];

    const res = datas.spots[index];
    if (isSpot(res)) return res;

    console.error({ res });
    throw `invalid payload ${res}`;
  };

  const genSpotAndDistance = (data: Spot | string) => {
    if (typeof data === "string") {
      return (
        <div key={Math.floor(Math.random() * 99999)}>
          <DistanceBlock distance={data} />
        </div>
      );
    }
    return (
      <Draggable key={Math.floor(Math.random() * 99999)}>
        <SpotCard {...data} />
      </Draggable>
    );
  };

  const concatSpotAndDistance = (
    spots: Spot[],
    distance: string[]
  ): SpotAndDistance[] => {
    const res: SpotAndDistance[] = [];
    for (let i = 0; i < distance.length; i++) {
      res.push(spots[i]);
      res.push(distance[i]);
    }
    res.push(spots[spots.length - 1]);
    return res;
  };

  return (
    <>
      <div className="spot_n_map">
        {/* 地図 */}
        <DisplayMap
          spots={notUndefined(datas.spots).filter(isSpot)}
          candidate={notUndefined(datas.candidate)}
        />

        <div>
          {/* 旅程を格納するボックス */}
          <div className="spots">
            <div>
              <p>プラン</p>
            </div>
            <Container
              groupName="shiori"
              orientation="horizontal"
              getChildPayload={(index) => getCardPayload("spots", index)}
              onDrop={(e) => onDropHandler("spots", e)}
            >
              {datas.spots.map((data) => genSpotAndDistance(data))}
            </Container>
          </div>

          {/* 候補を格納するボックス */}
          <div className="candidate">
            <div>
              <p>追加候補</p>
            </div>
            <Container
              groupName="shiori"
              orientation="horizontal"
              getChildPayload={(index) => getCardPayload("candidate", index)}
              onDrop={(e) => onDropHandler("candidate", e)}
            >
              {notUndefined(datas.candidate).map((spot) => (
                <Draggable key={Math.floor(Math.random() * 99999)}>
                  <SpotCard {...spot} />
                </Draggable>
              ))}
            </Container>
          </div>
        </div>

      </div>
      <div></div>
    </>
  );
};

export default SpotCards;

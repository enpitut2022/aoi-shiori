import { Container, Draggable } from "react-smooth-dnd";
import { data } from "./data";
import { Spot } from "./data";

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

const SpotCards = () => {
  return (
    <>
      <div>
        <Container onDrop={console.log}>
          {data.map(spot => (
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
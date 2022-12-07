import { Container, Draggable } from "react-smooth-dnd";
import { data } from "./data";
import SpotCard from "./spot";

const newCard = () => {
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

export default newCard
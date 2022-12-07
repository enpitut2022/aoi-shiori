import { Spot } from "./data";

const SpotCard = (props: Spot) => {
  return (
    <div>
      <p>{props.name}</p>
      <img src={props.imgUrl} alt="" />
    </div>
  )
}

export default SpotCard
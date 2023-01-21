import { Spot } from "./data";

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

export default SpotCard;

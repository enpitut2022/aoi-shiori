import { Spot } from "./data";

type Props = {
  props: {
    className: string;
    style: Object;
  };
  data: Spot;
};

const SpotCard = (props: Props) => {
  return (
    <>
      <div className={props.props.className} style={props.props.style}>
        <p>{props.data.name}</p>
        <img src={props.data.imgUrl} alt="" />
      </div>
    </>
  );
};

export default SpotCard;

// ひつようかどうかわからないけど、スポット間の距離を表示するコンポーネント
type Props = {
  distance: number;
};

const DistanceBlock = (props: Props) => {
  return (
    <>
      <div style={{ color: 'black' }}>
        <p>{props.distance}</p>
      </div>
    </>
  )
};

export default DistanceBlock;

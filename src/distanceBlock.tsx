// ひつようかどうかわからないけど、スポット間の距離を表示するコンポーネント
type Props = {
  distance: string;
};

const DistanceBlock = (props: Props) => {
  return (
    <>
      <div style={{ color: 'black' }}>
        <p>➡️</p>
        <p>{props.distance}</p>
      </div>
    </>
  )
};

export default DistanceBlock;

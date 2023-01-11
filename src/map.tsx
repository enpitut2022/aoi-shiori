import { Spot, isSpot } from './data'
import { LatLngExpression } from "leaflet";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

const convertToLatLng = (spot: Spot): LatLngExpression => [
  spot.lat,
  spot.lng,
];

type Props = {
  spots: Spot[];
  candidate: Spot[];
};

// マップを表示
const DisplayMap = (props: Props) => {
  // プランに観光地があれば, 地図にピンを立てる
  if (props.spots.length > 0) {
    return (
      <MapContainer
        id="map"
        center={convertToLatLng(props.spots[0] as Spot)}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {props.spots.filter(isSpot).map((spot) => {
          return <Marker position={convertToLatLng(spot as Spot)}></Marker>;
        })}
      </MapContainer>
    );
  }

  // プランに観光地がない場合, 候補の先頭の観光地を中心とした地図を表示
  if (props.candidate.length > 0) {
    return (
      <MapContainer
        id="map"
        center={convertToLatLng(props.candidate[0] as Spot)}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={convertToLatLng(props.candidate[0] as Spot)}
        ></Marker>
      </MapContainer>
    );
  }

  // プランにも候補にも観光地がない場合, たどり着いたらおかしい
  return <p>地図が表示されるよ</p>;
};

export default DisplayMap;
import "./App.css";
import SpotCards from "./spotCards";
// @ts-ignore
import Cards from "./cards";
import logo_noname from "./assets/logo_noname.png";
import logo_onlyname from "./assets/logo_onlyname.png";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function App() {
  return (
    <>
      <div className="logo">
        <img src={logo_noname} />
        <img src={logo_onlyname} />
      </div>

      <MapContainer id="map" center={[34.9948282, 135.7848819]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[34.9948282, 135.7848819]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>

      <div>
        <SpotCards />
      </div>
    </>
  );
}

export default App;

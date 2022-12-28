import "./App.css";
import SpotCards from "./spotCards";
// @ts-ignore
import Cards from "./cards";
import logo_noname from "./assets/logo_noname.png";
import logo_onlyname from "./assets/logo_onlyname.png";

function App() {
  return (
    <>
    <div className="logo">
      <img src={logo_noname} />
      <img src={logo_onlyname} />
    </div>
      <div>
        <SpotCards />
      </div>
    </>
  );
}

export default App;

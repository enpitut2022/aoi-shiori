import "./App.css";
import SpotCards from "./spotCards";
// @ts-ignore
import Cards from "./cards";

function App() {
  return (
    <>
    <div className="logo">
      <img src="/src/assets/logo_noname.png" />
      <img src="/src/assets/logo_onlyname.png" />
    </div>
      <div>
        <SpotCards />
      </div>
    </>
  );
}

export default App;

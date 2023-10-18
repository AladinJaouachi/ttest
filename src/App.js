import "bootstrap/dist/css/bootstrap.min.css";
import { DataFile } from "./components/Data";
import "./components/Style.css";
import Part1 from "./components/Part1";
import CompCard from "./components/CompCard";
import MyFoot from "./components/MyFoot";
function App() {
  return (
    <>
      <Part1 />
      <div className="ttt">
        <CompCard DataFile={DataFile} />
      </div>
      <MyFoot />
    </>
  );
}

export default App;

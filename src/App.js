import "./App.css";
import Bloks from "./components/Blocks";

const blocks = [
  {
    id: "b2",
    block: "green",
  },
  {
    id: "b3",
    block: "color",
  },
  {
    id: "b4",
    block: `${Math.random()}`,
  },
  {
    id: "b5",
    block: "green",
  },
  {
    id: "b7",
    block: `${Math.random()}`,
  },
  {
    id: "b8",
    block: "yellow",
  },
];

function App() {
  return (
    <div className="App">
      <Bloks block={blocks} />
    </div>
  );
}

export default App;

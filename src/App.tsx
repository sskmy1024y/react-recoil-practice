import { Selector } from "components/Selector";
import "./App.css";
import { ExampleAtom } from "./components/Atom";
import { SelectorFamily } from "./components/SelectorFamily";

function App() {
  return (
    <div className="App">
      <ExampleAtom />
      <Selector />
      <SelectorFamily />
    </div>
  );
}

export default App;

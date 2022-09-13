import "./App.css";
import { ExampleAtom } from "./components/Atom";
import { ExampleAtomFamily } from "./components/AtomFamily";
import { SelectorFamily } from "./components/SelectorFamily";

function App() {
  return (
    <div className="App">
      <ExampleAtom />
      <ExampleAtomFamily />
      <SelectorFamily />
    </div>
  );
}

export default App;

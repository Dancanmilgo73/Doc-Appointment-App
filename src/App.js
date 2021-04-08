import "./App.css";
import About from "./components/About.js";
import DocLists from "./components/DocLists";
function App() {
  return (
    <div className="App">
      <h1>Doctor appointment</h1>
      <About />
      <DocLists />
    </div>
  );
}

export default App;

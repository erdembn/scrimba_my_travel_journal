import data from "./data.js";

import "./App.css";
import Card from "./components/card/Card";

function App() {
  return (
    <div className="App">
      <nav>
        <h1>🌎 my travel journal.</h1>
      </nav>
      {data.map((item) => {
        return <Card item={item} />;
      })}
    </div>
  );
}

export default App;

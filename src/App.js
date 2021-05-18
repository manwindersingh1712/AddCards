import { useState } from "react";
import "./App.css";
import AddLink from "./Components/AddLink";
import Card from "./Components/cards";
import uuid from "react-uuid";

function App() {
  const [data, setData] = useState([]);

  return (
    <div className="App">
      <AddLink data={data} setData={setData} />
      {data.length > 0 && (
        <div className="cards_container">
          {data.map((link) => {
            return <Card link={link} key={uuid()} />;
          })}
        </div>
      )}
    </div>
  );
}

export default App;

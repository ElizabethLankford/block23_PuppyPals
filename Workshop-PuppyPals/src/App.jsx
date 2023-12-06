import "./App.css";
import { useState } from "react";
import { puppyList } from "./data.js";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  console.log(puppies);
  return (
    <>
      {puppies.map((pup) => {
        return <p key={pup.id}>{pup.name}</p>;
      })}
    </>
  );
}

export default App;

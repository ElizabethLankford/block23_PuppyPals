import "./App.css";
import { useState } from "react";
import { puppyList } from "./data.js";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log(featuredPup);
  return (
    <>
      <h1>Puppy List</h1>
      {puppies.map((pup) => {
        return (
          <p
            key={pup.id}
            onClick={() => {
              setFeatPupId(pup.id);
            }}
          >
            {pup.name}
          </p>
        );
      })}

      {featPupId && (
        <div className="featuredPup">
          <h2>Featured Pup</h2>
          <h3>{featuredPup.name}</h3>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </>
  );
}

export default App;

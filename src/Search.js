import React from "react";
import { useState } from "react";
import JSONDATA from "./MOCK_DATA.json";
import './search.css'

function Search() {
  let [name, setName] = useState("");

  return (
    <div className="app-container">
      <input
        type="text"
        placeholder="Search..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {JSONDATA.filter((data) => {
        return data.first_name.toLowerCase().includes(name.toLowerCase());
      }).map((data) => {
        return <p key={data.id}>{data.first_name}</p>;
      })}
    </div>
  );
}

export default Search;

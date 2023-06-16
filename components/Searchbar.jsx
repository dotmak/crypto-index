"use client";

import React, { useState } from "react";

function Searchbar({}) {
  const [input, setInput] = useState("");

  return (
    <div className="searchbar p-3">
      <h3>Search for coin</h3>
      <input
        className=" bg-[#372F46] rounded-[8px]"
        value={input}
        placeholder=""
        type="text"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
    </div>
  );
}

export default Searchbar;

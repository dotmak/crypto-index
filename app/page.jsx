"use client";

import { useEffect, useState } from "react";
import Cryptotable from "@components/Cryptotable";

function Home() {
  const [query, setQuery] = useState("");

  return (
    <section>
      <div className="my-[2rem] text-[5rem] font-bold text-center">
        Crypto Index
      </div>
      <div className="crypto-list">
        <div className="searchbar p-3">
          <h3>Search for coin</h3>
          <input
            className=" bg-[#372F46] rounded-[8px]"
            value={query}
            placeholder=""
            type="text"
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
          />
        </div>
        <Cryptotable />
      </div>
    </section>
  );
}

export default Home;

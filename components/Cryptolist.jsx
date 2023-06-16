"use client";

import { useState, useEffect } from "react";

function Cryptolist() {
  const [cryptos, setCrypto] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.coincap.io/v2/assets?bearer=3b51de28-9748-4366-ad23-1ced7213ec89"
    )
      .then((res) => res.json())
      .then((data) => {
        setCrypto(data.data);
      });
  }, []);

  return cryptos.map((crypto) => (
    <tbody>
      <tr key={crypto.rank}>
        <td>{crypto.rank}</td>
        <td className="p-3">{crypto.symbol}</td>
        <td className="p-3">{crypto.name}</td>
        <td className="p-3">
          {(Math.round(crypto.priceUsd * 100) / 100).toFixed(2)}$
        </td>
        <td className="p-3">
          {(Math.round(crypto.changePercent24Hr * 100) / 100).toFixed(2)}%
        </td>
        <td className="p-3">
          {(Math.round(crypto.marketCapUsd * 100) / 100).toFixed(2)}
        </td>
        <td className="p-3">
          {(Math.round(crypto.supply * 100) / 100).toFixed(2)}
        </td>
        <td className="p-3">{crypto.maxSupply}</td>
      </tr>
    </tbody>
  ));
}

export default Cryptolist;

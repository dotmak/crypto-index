'use client';
import { useState, useEffect } from 'react';

const Cryptotable = ({ query }) => {
  const [cryptos, setCrypto] = useState([]);
  const [filteredCryptos, setFilteredCryptos] = useState([]);

  useEffect(() => {
    fetch(
      'https://api.coincap.io/v2/assets?bearer=3b51de28-9748-4366-ad23-1ced7213ec89'
    )
      .then((res) => res.json())
      .then((data) => {
        setCrypto(data.data);
      });
  }, []);

  useEffect(() => {
    const filtered = cryptos.filter((crypto) => {
      const name = crypto.name.toLowerCase();
      const symbol = crypto.symbol.toLowerCase();
      return name.includes(query) || symbol.includes(query);
    });
    setFilteredCryptos(filtered);
  }, [cryptos, query]);

  return (
    <div className="crypto-table bg-[#372F46] rounded-[20px] p-4">
      <table className="table-auto text-center w-full">
        <thead className="border-t-[1px] border-b-[1px] border-black">
          <tr>
            <th className="p-3">#</th>
            <th className="p-3">Symbol</th>
            <th className="p-3">Name</th>
            <th className="p-3">Price</th>
            <th className="p-3">24hr %</th>
            <th className="p-3">Market Cap</th>
            <th className="p-3">Max Supply</th>
            <th className="p-3">Circulating Supply</th>
          </tr>
        </thead>
        <tbody>
          {filteredCryptos.map((crypto) => (
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
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cryptotable;

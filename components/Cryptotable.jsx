import Cryptolist from "./Cryptolist";

function Cryptotable() {
  return (
    <div className="crypto-table p-4">
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
        <Cryptolist />
      </table>
    </div>
  );
}

export default Cryptotable;

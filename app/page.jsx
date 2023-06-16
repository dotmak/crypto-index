import Cryptotable from "@components/Cryptotable";
import Searchbar from "@components/Searchbar";

function Home() {
  return (
    <section>
      <div className="my-[2rem] text-[5rem] font-bold text-center">
        Crypto Index
      </div>
      <div className="crypto-list">
        <Searchbar />
        <Cryptotable />
      </div>
    </section>
  );
}

export default Home;

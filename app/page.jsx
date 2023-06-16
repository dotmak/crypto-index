import Cryptotable from "@components/Cryptotable";

function Home() {
  return (
    <section>
      <div className="my-[2rem] text-[5rem] font-bold text-center">
        Crypto Index
      </div>

      <div className="crypto-list bg-[#27262C] rounded-[25px]">
        <Cryptotable />
      </div>
    </section>
  );
}

export default Home;

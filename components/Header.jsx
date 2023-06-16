import Image from "next/image";

function Header() {
  return (
    <div className="header w-full mt-4">
      <div className="flex flex-row justify-between items-center mx-auto">
        <div className="site-logo">
          <Image
            src="/assets/images/crypto.png"
            width="70"
            height="70"
            alt="logo"
            className="invert"
          ></Image>
        </div>
        <div className="menu">HOME</div>
      </div>
    </div>
  );
}

export default Header;

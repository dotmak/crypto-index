import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="header w-full mt-4">
      <div className="flex flex-row justify-between items-center mx-auto">
        <div className="site-logo">
          <Link href="/">
            <Image
              src="/assets/images/crypto.png"
              width="70"
              height="70"
              alt="logo"
              className="invert"
            ></Image>
          </Link>
        </div>

        <div className="menu">
          <ul>HOME</ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

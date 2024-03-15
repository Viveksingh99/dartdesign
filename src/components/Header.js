import React from "react";
import Image from "next/image";
import Link from 'next/link';


const Header = () => {
  return (
    <div id="navi" className="topnav navlit">
      <div className="container align-items-center">
        <div className="logo icon-img-120">
          <Link href="/">
            <Image
              src="https://www.dartdesign.in/images/media/dart-white1.png"
              width={200}
              height={30}
              alt="D'Art Design"
              title="D'Art Design"
            />
          </Link>
        </div>
        <div className="menu-icon cursor-pointer">
          <span className="icon">
            <i></i>
            <i></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;

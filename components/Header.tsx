import Link from "next/link";
import React from "react";

type HeaderProps = {
  lang: string;
};

const Header = ({ lang }: HeaderProps) => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div>
        <p>LOGO</p>
      </div>
      <div>
        <nav>
          <ul className="flex space-x-4">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
      <div>
        <Link href={`/${lang === "ar" ? "en" : "ar"}`}>
          {lang === "ar" ? "en" : "ar"}
        </Link>
      </div>
    </div>
  );
};

export default Header;

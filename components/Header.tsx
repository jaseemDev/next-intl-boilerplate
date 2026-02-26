"use client";
import React from "react";
import { Switch } from "./ui/switch";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";

type HeaderProps = {
  lang: string;
};

const Header = ({ lang }: HeaderProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (locale: string) => {
    const segments = pathname.split("/");
    segments[1] = locale; // replace locale segment
    router.push(segments.join("/"));
  };
  return (
    <div className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div>
        <p>LOGO</p>
      </div>

      <div>
        <Button
          variant="default"
          className="hover: cursor-pointer"
          onClick={() => switchLanguage(lang === "en" ? "ar" : "en")}
        >
          {lang === "en" ? "العربية" : "English"}
        </Button>
      </div>
    </div>
  );
};

export default Header;

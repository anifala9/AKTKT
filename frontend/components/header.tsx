import React from "react";

import Link from 'next/link';

export default function Header() {

  return (
    <header className="fixed top-0 w-full clearNav z-50">
      <div className="mx-auto flex flex-wrap p-5 flex-col md:flex-row">
        <div className="flex flex-row items-center justify-between p-3 md:p-1">
          <Link
            href="/"
            className="flex text-3xl text-black font-medium mb-4 md:mb-0">
            #安芸高田を動かそう
          </Link>
        </div>
      </div>
    </header>
  );
}

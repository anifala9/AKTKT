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
            AKTKT
          </Link>
          <div className="md:ml-auto md:mr-auto font-4 pt-1 md:pl-14 pl-1 flex flex-wrap items-center md:text-base text-1xl md:justify-center justify-items-start">
            <div className="relative">
              <Link
                href="/politician"
              >
                <div className="ml-4">
                  <p className="text-base font-medium text-black">
                    政治家
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="md:ml-auto md:mr-auto font-4 pt-1 md:pl-14 pl-1 flex flex-wrap items-center md:text-base text-1xl md:justify-center justify-items-start">
            <div className="relative">
              <Link
                href="/supporter"
              >
                <div className="ml-4">
                  <p className="text-base font-medium text-black">
                    後援会
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="md:ml-auto md:mr-auto font-4 pt-1 md:pl-14 pl-1 flex flex-wrap items-center md:text-base text-1xl md:justify-center justify-items-start">
            <div className="relative">
              <Link
                href="/future-politician"
              >
                <div className="ml-4">
                  <p className="text-base font-medium text-black">
                    未来の政治家
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

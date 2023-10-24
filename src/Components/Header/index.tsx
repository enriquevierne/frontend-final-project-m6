import { useState } from "react";
import { Logo } from "../Logo";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <header id="header" className="w-full h-20 bg-gray-50 m-auto flex justify-center items-center border-b shadow-md p-4 scroll-smooth">
      <div className="w-full max-w-7xl flex justify-between items-center">
        <Logo position="header"/>
        <div className="hidden lg:flex items-center border-l p-2 gap-4">
          <a className="p-2 font-semibold text-gray-600" href="/login">
            Fazer login
          </a>
          <a
            className="py-2 px-4 font-semibold text-gray-950 border rounded-md hover:bg-gray-200 duration-300 ease-in-out"
            href="/register"
          >
            Cadastrar
          </a>
        </div>
        {!showMenu ? (
          <Bars3Icon
            onClick={() => {
              setShowMenu(!showMenu);
            }}
            className="w-6 cursor-pointer lg:hidden"
          />
        ) : (
          <XMarkIcon
            onClick={() => {
              setShowMenu(!showMenu);
            }}
            className="w-6 cursor-pointer lg:hidden"
          />
        )}
        {showMenu ? (
          <div className="w-full top-20 left-0 bg-white flex flex-col lg:hidden border-b p-2 gap-4 absolute">
            <a className="p-2 font-semibold text-gray-600" href="/login">
              Fazer login
            </a>
            <a
              className="py-2 px-4 font-semibold text-center text-gray-950 border rounded-md hover:bg-gray-200 duration-300 ease-in-out"
              href="/register"
            >
              Cadastrar
            </a>
          </div>
        ) : null}
      </div>
    </header>
  );
};

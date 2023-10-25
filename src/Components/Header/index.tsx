import { useContext, useState } from "react";
import { Logo } from "../Logo";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { UserContext } from "../../Providers/userContext";

interface UserLocalStorage {
  name: string | null;
  type: string | null;
}

export const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const { userLogout } = useContext(UserContext);
  const user: UserLocalStorage = {
    name: localStorage.getItem("@USER"),
    type: localStorage.getItem("@TYPE"),
  };

  return (
    <header
      id="header"
      className="w-full h-20 bg-gray-50 m-auto flex justify-center items-center border-b shadow-md p-4 scroll-smooth"
    >
      <div className="w-full max-w-7xl flex justify-between items-center">
        <Logo position="header" />
        {user ? (
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="hidden lg:flex items-center gap-2"
          >
            <span className="p-2 w-10 text-center rounded-full bg-brand1 text-gray-100 font-semibold">
              {user.name?.[0]}
            </span>
            <span>{user.name}</span>
          </button>
        ) : (
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
        )}
        {!showMenu ? (
          <Bars3Icon
            onClick={() => {
              setShowMenu(true);
            }}
            className="w-6 cursor-pointer lg:hidden"
          />
        ) : (
          <XMarkIcon
            onClick={() => {
              setShowMenu(false);
            }}
            className="w-6 cursor-pointer lg:hidden"
          />
        )}
        {user.name ? (
          <>
            {showMenu ? (
              <div className="w-52 rounded-md bg-white flex flex-col items-start border-b p-4 gap-4 absolute top-16 right-2 shadow-sm border text-left">
                <button className=" text-gray-600 hover:font-semibold ease-in-out duration-300">
                  Editar perfil
                </button>
                <button className=" text-gray-600 hover:font-semibold ease-in-out duration-300">
                  Editar endereço
                </button>
                {user.type == "true" ? (
                  <>
                    <button className=" text-gray-600 hover:font-semibold ease-in-out duration-300">
                      Meus anúncios
                    </button>
                  </>
                ) : null}
                <button
                  onClick={userLogout}
                  className=" text-gray-600 hover:font-semibold ease-in-out duration-300"
                >
                  Sair
                </button>
              </div>
            ) : null}
          </>
        ) : (
          <>
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
          </>
        )}
      </div>
    </header>
  );
};

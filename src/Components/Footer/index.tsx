import { ChevronUpIcon } from "@heroicons/react/24/solid";
import { Logo } from "../Logo";

export const Footer = () => {
  return (
    <footer className="w-full h-40 bg-gray-950 m-auto flex  justify-between items-center border-b shadow-md p-4">
      <div className="w-full m-auto max-w-7xl flex flex-col lg:flex-row justify-between items-center gap-4">
        <Logo position="footer" />
        <span className="text-sm tracking-wide text-gray-100">
          © 2022 - Todos os direitos reservados.
        </span>
        <a href="#header" className="p-4 rounded bg-gray-800 text-white" >
          <ChevronUpIcon className="w-4 stroke-white" />
        </a>
      </div>
    </footer>
  );
};

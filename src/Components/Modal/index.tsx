import { XMarkIcon } from "@heroicons/react/24/solid";
import { ButtonDefault } from "../Form/Buttons";

export const Modal = ({setModal}) => {
  return (
    <div className="w-full h-full absolute top-0 left-0 backdrop-opacity-20 backdrop-invert bg-black/60">
      <div className="w-11/12 p-6 max-w-lg m-auto rounded-md bg-grey1 flex flex-col gap-4 mt-32 opacity-100 absolute left-0 right-0 ">
        <div className="w-full flex justify-between">
          <span className="font-bold">Sucesso!</span>
          <span onClick={()=>setModal(false)} className="text-lg text-gray-400">
            <XMarkIcon className="w-6 fill-grey7" />
          </span>
        </div>
        <div className="w-full flex flex-col pt-8 gap-4">
          <p className="font-bold">Sua conta foi criada com sucesso!</p>
          <p className="text-gray-700 leading-6">
            Agora você poderá ver seus negócios crescendo em grande escala
          </p>
          <ButtonDefault
            label="Ir para o login"
            style="w-fit rounded-md bg-brand1 p-2 text-grey2"
          />
        </div>
      </div>
    </div>
  );
};

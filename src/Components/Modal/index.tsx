import { ButtonDefault } from "../Form/Buttons";

export const Modal = () => {
  return (
    <div className="w-11/12 m-auto rounded-md">
      <div className="w-full p-4 flex justify-between">
        <span className="font-bold">Sucesso!</span>
        <span className="text-lg text-gray-400">X</span>
      </div>
      <div className="w-full p-4 flex flex-col gap-4">
        <p className="font-bold">Sua conta foi criada com sucesso!</p>
        <p className="text-gray-700">Agora você poderá ver seus negócios crescendo em grande escala</p>
        <ButtonDefault />
      </div>
    </div>
  );
};

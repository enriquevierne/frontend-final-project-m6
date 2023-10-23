export const CardProduct = () => {
  return (
    <div className="w-full max-w-[312px]">
      <div className="w-full h-[150px]">
        <img src="" alt="" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-bold">Maserati - Ghibli</p>
        <p className="text-gray-700">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem...
        </p>
        <div className="flex gap-2 items-center">
          <span className="p-1 rounded-full bg-brand">SL</span>
          <span className="font-bold text-gray-700">Samuel Leão</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="p-1 rounded-md bg-brand3 text-brand1">0 KM</span>
            <span className="p-1 rounded-md bg-brand3 text-brand1">2019</span>
          </div>
          <span className="text-lg">R$00.000,00</span>
        </div>
      </div>
    </div>
  );
};

export const CardProduct = () => {
  return (
    <div className="min-w-[295px] lg:w-full lg:max-w-[312px] lg:col-span-4 flex flex-col gap-2">
      <div className="w-full h-[150px] bg-[url('./assets/main-banner.png')] bg-cover bg-no-repeat">
        
      </div>
      <div className="flex flex-col gap-4">
        <p className="font-bold">Maserati - Ghibli</p>
        <p className="text-gray-700">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem...
        </p>
        <div className="flex gap-2 items-center">
          <span className="p-2 w-10 text-center rounded-full bg-brand1 text-gray-100 font-semibold">SL</span>
          <span className="font-bold text-gray-700">Samuel Leão</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="p-1 rounded-md bg-brand4 text-brand1 font-semibold">0 KM</span>
            <span className="p-1 rounded-md bg-brand4 text-brand1 font-semibold">2019</span>
          </div>
          <span className="text-lg font-bold tracking-wide">R$00.000,00</span>
        </div>
      </div>
    </div>
  );
};

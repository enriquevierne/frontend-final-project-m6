import { IAnouncement } from "../../../Providers/anouncementContext";

interface IAnouncementProps {
  anouncement: IAnouncement;
  username: string | undefined;
}

export const CardProduct = ({ anouncement, username }: IAnouncementProps) => {
  const { brand, car, year, kilometers, price, description, images } =
    anouncement;

    console.log(images);
    
  return (
    <div className="min-w-[295px] max-w-[312px] flex flex-col gap-2">
      <div className="w-full h-[150px] bg-[url('./assets/main-banner.png')] bg-cover bg-no-repeat"></div>
      <div className="flex flex-col gap-4">
        <p className="font-bold">{`${brand} - ${car}`}</p>
        <p className="text-gray-700">{description}</p>
        <div className="flex gap-2 items-center">
          <span className="p-2 w-10 text-center rounded-full bg-brand1 text-gray-100 font-semibold">
            {username?.[0]}{username?.[1]}
          </span>
          <span className="font-bold text-gray-700">{username}</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="p-1 rounded-md bg-brand4 text-brand1 font-semibold">
              {kilometers} KM
            </span>
            <span className="p-1 rounded-md bg-brand4 text-brand1 font-semibold">
              {year}
            </span>
          </div>
          <span className="text-lg font-bold tracking-wide">{price}</span>
        </div>
      </div>
    </div>
  );
};

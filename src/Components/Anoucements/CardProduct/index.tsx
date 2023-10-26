import { Link } from "react-router-dom";
import { IAnouncement } from "../../../Providers/anouncementContext";

interface IAnouncementProps {
  anouncement: IAnouncement;
}

export const CardProduct = ({ anouncement }: IAnouncementProps) => {
  const newPrice = Number(anouncement?.price);

  return (
    <Link to={`/anouncements/${anouncement.id}`} className="min-w-[295px] max-w-[312px] flex flex-col gap-2 cursor-pointer">
      <div className="w-full h-[150px] bg-[url('./assets/main-banner.png')] bg-cover bg-no-repeat"></div>
      <div className="flex flex-col gap-4">
        <p className="font-bold">{`${anouncement.brand} - ${anouncement.car}`}</p>
        <p className="text-gray-700">{anouncement.description}</p>
        <div className="flex gap-2 items-center">
          <span className="p-2 w-10 text-center rounded-full bg-brand1 text-gray-100 font-semibold">
            {anouncement.user.name[0]}
            {anouncement.user.name[1]}
          </span>
          <span className="font-bold text-gray-700">
            {anouncement.user.name}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="p-1 rounded-md bg-brand4 text-brand1 font-semibold">
              {anouncement?.kilometers}
              KM
            </span>
            <span className="p-1 rounded-md bg-brand4 text-brand1 font-semibold">
              {anouncement.year}
            </span>
          </div>
          <span className="text-lg font-bold tracking-wide">{newPrice}</span>
        </div>
      </div>
    </Link>
  );
};

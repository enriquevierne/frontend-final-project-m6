import { useContext } from "react";
import { GuestTemplate } from "../../Components/Template/Guest";
import { AnouncementContext } from "../../Providers/anouncementContext";
import { CardProduct } from "../../Components/Anoucements/CardProduct";

export const HomePage = () => {
  const { anouncementList } = useContext(AnouncementContext);
  return (
    <GuestTemplate>
      <div className="m-auto h-[544px] text-center flex flex-col justify-center text-gray-100 bg-[url('./assets/main-banner.png')] bg-no-repeat bg-center">
        <h1 className="text-5xl p-2 font-bold">Motors Shop</h1>
        <h2 className="text-2xl p-2 font-semibold">
          A melhor plataforma de anúncios de carros do país
        </h2>
      </div>
      <div className="w-11/12 lg:w-full max-w-[1392px] m-auto flex flex-col">
        <ul className="m-auto flex gap-6 overflow-x-auto lg:flex-wrap lg:justify-center py-20">
          {anouncementList?.map((anouncement) => (
            <CardProduct key={anouncement.id} anouncement={anouncement} />
          ))}
        </ul>
      </div>
    </GuestTemplate>
  );
};

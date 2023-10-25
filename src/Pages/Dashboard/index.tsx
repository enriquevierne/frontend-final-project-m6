import { CardProduct } from "../../Components/Anoucements/CardProduct";
import { ProfileCard } from "../../Components/ProfileCard";
import { AuthenticatedTemplate } from "../../Components/Template/Authenticated";

export const DashboardPage = () => {
  return (
    <AuthenticatedTemplate>
      <div className="m-auto flex flex-col justify-center bg-gradient-to-b from-brand1 from-25%  to-grey2 to-25% p-20">
        <div className="w-11/12 lg:w-full max-w-[1392px] m-auto flex flex-col gap-20">
          <ProfileCard />
          <p className="text-2xl font-semibold text-grey8 w-11/12 lg:w-full m-auto">Anúncios</p>
          <ul className="m-auto flex gap-6 overflow-x-auto lg:flex-wrap lg:justify-center">
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
          </ul>
        </div>
      </div>
    </AuthenticatedTemplate>
  );
};

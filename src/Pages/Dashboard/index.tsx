import { useContext } from "react";
import { CardProduct } from "../../Components/Anoucements/CardProduct";
import { ProfileCard } from "../../Components/ProfileCard";
import { AuthenticatedTemplate } from "../../Components/Template/Authenticated";
import { AnouncementContext } from "../../Providers/anouncementContext";

export const DashboardPage = () => {
  const { anouncementUserList } = useContext(AnouncementContext);
  const username = anouncementUserList?.name;
  const user = {
    name: anouncementUserList?.name,
    bio: anouncementUserList?.bio,
    type: anouncementUserList?.type,
  };
  return (
    <AuthenticatedTemplate>
      <div className="m-auto flex flex-col justify-center bg-gradient-to-b from-brand1 from-25%  to-grey2 to-25% pt-20 pb-80">
        <div className="w-11/12 lg:w-full max-w-[1392px] m-auto flex flex-col gap-20">
          <ProfileCard user={user} />
          <p className="text-2xl font-semibold text-grey8 w-11/12 lg:w-full m-auto">
            Anúncios
          </p>
          <ul className="m-auto flex gap-6 overflow-x-auto lg:flex-wrap lg:justify-center">
            {anouncementUserList?.anouncements.map((anouncement) => (
              <CardProduct
                key={anouncement.id}
                anouncement={anouncement}
                username={username}
              />
            ))}
          </ul>
        </div>
      </div>
    </AuthenticatedTemplate>
  );
};

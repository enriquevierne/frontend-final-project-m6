import { useEffect, useState } from "react";
import { CardProduct } from "../../Components/Anoucements/CardProduct";
import { AuthenticatedTemplate } from "../../Components/Template/Authenticated";
import { IUserAnoucement } from "../../Providers/anouncementContext";
import { toast } from "react-toastify";
import { api } from "../../Service/api";
import { AxiosError } from "axios";
import { ProfileCard } from "../../Components/ProfileCard";


export const DashboardPage = () => {
  const [anouncementUserList, setAnouncementUserList] = useState<IUserAnoucement>();
  
    useEffect(() => {
    const loadAnouncementUserList = async () => {
      const id = localStorage.getItem("@ID");
      try {
        const { data } = await api.get<IUserAnoucement>(
          `/anouncements/users/${id}`
        );
        setAnouncementUserList(data);
      } catch (error) {
        const Ierror = error as AxiosError;
        toast.error(Ierror.message);
      }
    };
    loadAnouncementUserList()
  },[])

  
  return (
    <AuthenticatedTemplate>
      <div className="m-auto flex flex-col justify-center bg-gradient-to-b from-brand1 from-25%  to-grey2 to-25% pt-20 pb-80">
        <div className="w-11/12 lg:w-full max-w-[1392px] m-auto flex flex-col gap-20">
          <ProfileCard user={anouncementUserList} />
          <p className="text-2xl font-semibold text-grey8 w-11/12 m-auto">
            Anúncios
          </p>
          <ul className="w-full m-auto flex overflow-auto gap-6 lg:flex-wrap lg:justify-center">
            {anouncementUserList?.anouncements.map((anouncement) => (
              <CardProduct
                key={anouncement.id}
                anouncement={anouncement}
              />
            ))}
          </ul>
        </div>
      </div>
    </AuthenticatedTemplate>
  );
};

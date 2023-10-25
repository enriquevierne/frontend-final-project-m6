import { IUserAnoucement } from "../../Providers/anouncementContext";

interface ProfileCardProps {
  user: {
    name: string | undefined,
    bio: string | undefined,
    type: boolean | undefined,
  };
}

export const ProfileCard = ({user}: ProfileCardProps) => {
  
  
  return (
    <div className="max-w-[1240px] flex flex-col gap-6 m-auto bg-grey0 p-10 rounded-md">
      <span className="w-28 h-28 rounded-full bg-brand1 text-gray-100 text-[52px] font-semibold flex items-center justify-center">
        {user.name?.[0]}{user.name?.[1]}
      </span>
      <div className="flex items-center gap-2">
        <span className="text-gray-900 font-semibold text-lg">{user.name}</span>
        <span className="p-1 rounded-md bg-brand4 text-brand1 font-semibold">
          {user.type ? "Anunciante" : "Comprador"}
        </span>
      </div>
      <div className="w-full">
        <p className="text-gray-700 tracking-wide">
          {user.bio}
        </p>
      </div>
    </div>
  );
};

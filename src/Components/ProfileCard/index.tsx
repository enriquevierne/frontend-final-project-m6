export const ProfileCard = () => {
  const type = localStorage.getItem("@TYPE");
  const user: string | null = localStorage.getItem("@USER");
  const name: string | null = user ? user[0] + user[1] : null;
  return (
    <div className="max-w-[1240px] flex flex-col gap-6 m-auto bg-grey0 p-10 rounded-md">
      <span className="w-28 h-28 rounded-full bg-brand1 text-gray-100 text-[52px] font-semibold flex items-center justify-center">
        {name}
      </span>
      <div className="flex items-center gap-2">
        <span className="text-gray-900 font-semibold text-lg">{user}</span>
        <span className="p-1 rounded-md bg-brand4 text-brand1 font-semibold">
          {type == "true" ? "Anunciante" : "Comprador"}
        </span>
      </div>
      <div className="w-full">
        <p className="text-gray-700 tracking-wide">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
          sequi culpa quaerat excepturi magnam consectetur esse facere eaque cum
          deleniti, impedit dignissimos aperiam tenetur illum inventore itaque
          in, repudiandae neque.
        </p>
      </div>
    </div>
  );
};

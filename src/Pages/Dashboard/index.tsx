import { CardProduct } from "../../Components/Anoucements/CardProduct";
import { AuthenticatedTemplate } from "../../Components/Template/Authenticated";

export const DashboardPage = () => {
  return (
    <AuthenticatedTemplate>
      <div className="m-auto h-[544px] text-center flex flex-col justify-center text-gray-100 bg-[url('./assets/main-banner.png')] bg-no-repeat bg-center">
        <h1 className="text-5xl p-2 font-bold">Motors Shop</h1>
        <h2 className="text-2xl p-2 font-semibold">
          A melhor plataforma de anúncios de carros do país
        </h2>
      </div>
      <div className="w-full max-w-5xl m-auto">
        <ul className="w-11/12 m-auto flex lg:grid lg:grid-cols-12 py-16 gap-6 overflow-x-auto">
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </ul>
      </div>
    </AuthenticatedTemplate>
  );
};

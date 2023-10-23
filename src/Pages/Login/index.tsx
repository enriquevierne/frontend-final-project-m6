import { FormLogin } from "../../Components/Form/LoginForm";
import { GuestTemplate } from "../../Components/Template/Guest";

export const LoginPage = () => {
  return (
    <GuestTemplate>
      <div className="w-full max-w-5xl m-auto bg-red-500">
        <FormLogin />
      </div>
    </GuestTemplate>
  );
};

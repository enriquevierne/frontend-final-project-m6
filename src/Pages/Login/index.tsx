import { FormLogin } from "../../Components/Form/LoginForm";
import { GuestTemplate } from "../../Components/Template/Guest";

export const LoginPage = () => {
  return (
    <GuestTemplate>
      <div className="w-full max-w-5xl m-auto py-32">
        <FormLogin />
      </div>
    </GuestTemplate>
  );
};

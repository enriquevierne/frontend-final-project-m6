import { FormRegister } from "../../Components/Form/RegisterForm";
import { GuestTemplate } from "../../Components/Template/Guest";

export const RegisterPage = () => {
  return (
    <GuestTemplate>
      <div className="w-full max-w-5xl m-auto py-11">
        <FormRegister />
      </div>
    </GuestTemplate>
  );
};

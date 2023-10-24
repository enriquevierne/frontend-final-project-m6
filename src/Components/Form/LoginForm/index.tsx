import { useContext, useState } from "react";
import { ButtonDefault } from "../Buttons";
import { InputError } from "../Errors";
import { InputLabel } from "../Labels";
import { UserContext } from "../../../Providers/userContext";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TLoginFormValues, loginFormSchema } from "./loginFormSchema";

export const FormLogin = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { userLogin } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginFormValues>({
    resolver: zodResolver(loginFormSchema),
  });

  const submit: SubmitHandler<TLoginFormValues> = (formData) => {
    userLogin(formData, setLoading);
  };

  console.log(errors);
  
  return (
    <div className="w-11/12 max-w-[412px] m-auto py-12 px-11 bg-grey0 flex flex-col gap-8 rounded-md">
      <h2 className="text-2xl font-bold">Login</h2>
      <form onSubmit={handleSubmit(submit)} className="grid grid-cols-12 gap-2">
        <div className="flex flex-col gap-1 col-span-12">
          <InputLabel text="Nome" />
          <input
            {...register("email")}
            disabled={loading}
            type="text"
            placeholder="Ex: Samuel Leão"
          />
          {errors && <InputError error={errors.email} />}
        </div>
        <div className="flex flex-col gap-1 col-span-12">
          <InputLabel text="Email" />
          <input
            {...register("password")}
            disabled={loading}
            type="password"
            placeholder="Ex: samuel@kenzie.com.br"
          />
          {errors && <InputError error={errors.password} />}
        </div>
        <div className="col-span-12 text-right font-semibold">
          <span>Esqueci minha senha</span>
        </div>
        <div className="col-span-12 flex flex-col gap-6 text-center">
          <ButtonDefault
            label="Entrar"
            style="bg-brand1 h-12 p-2 rounded-md text-grey1 font-semibold tracking-wider hover:bg-brand2 duration-300 ease-in-out"
          />
          <span>Ainda não possui conta?</span>
          <a
            className="w-full flex items-center justify-center bg-grey1 h-12 p-2 rounded-md border text-grey10 font-semibold tracking-wider hover:bg-grey3 duration-300 ease-in-out"
            href="/register"
          >
            Cadastrar
          </a>
        </div>
      </form>
    </div>
  );
};

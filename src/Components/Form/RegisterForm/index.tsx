import { FormEvent, useContext, useState } from "react";
import { ButtonDefault } from "../Buttons";
import { InputError } from "../Errors";
import { Input } from "../Inputs";
import { InputLabel } from "../Labels";
import { TRegisterFormValues, registerFormSchema } from "./registerFormSchema";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserContext } from "../../../Providers/userContext";

export const FormRegister = () => {
  const [loading, setLoading] = useState(false);
  const { userRegister } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterFormValues>({
    resolver: zodResolver(registerFormSchema),
  });
  const [type, setType] = useState<string>("Comprador");

  const setTypeSeller = (e: FormEvent) => {
    e.preventDefault();
    setType("Anunciante");
  };
  const setTypeBuyer = (e: FormEvent) => {
    e.preventDefault();
    setType("Comprador");
  };

  const submit: SubmitHandler<TRegisterFormValues> = (formData) => {
    userRegister(formData, setLoading);
    console.log(formData);
  };

  return (
    <div className="w-11/12 max-w-[411px] m-auto py-12 px-11 bg-grey0 flex flex-col gap-8 rounded-md">
      <h2 className="text-2xl font-bold">Cadastro</h2>
      <span className="font-semibold">Informações pessoais</span>
      <form onSubmit={handleSubmit(submit)} className="grid grid-cols-12 gap-2">
        <div className="flex flex-col gap-1 col-span-12">
          <InputLabel text="Nome" />
          <Input
            type="text"
            placeholder="Ex: Samuel Leão"
            {...register("name")}
            disabled={loading}
          />
          {errors && <InputError error={errors.name} />}
        </div>
        <div className="flex flex-col gap-1 col-span-12">
          <InputLabel text="Email" />
          <Input
            type="text"
            placeholder="Ex: samuel@kenzie.com.br"
            {...register("email")}
            disabled={loading}
          />
          {errors && <InputError error={errors.name} />}
        </div>
        <div className="flex flex-col gap-1 col-span-12">
          <InputLabel text="CPF" />
          <Input
            type="text"
            placeholder="000.000.000-00"
            {...register("document")}
            disabled={loading}
          />
          {errors && <InputError error={errors.name} />}
        </div>
        <div className="flex flex-col gap-1 col-span-12">
          <InputLabel text="Celular" />
          <Input
            type="text"
            placeholder="(00) 90000-0000"
            {...register("mobile")}
            disabled={loading}
          />
          {errors && <InputError error={errors.name} />}
        </div>
        <div className="flex flex-col gap-1 col-span-12">
          <InputLabel text="Data de nascimento" />
          <Input
            type="date"
            placeholder="00/00/00"
            {...register("birthdate")}
            disabled={loading}
          />
          {errors && <InputError error={errors.name} />}
        </div>
        <div className="flex flex-col gap-1 col-span-12">
          <InputLabel text="Descrição" />
          <Input
            type="text"
            placeholder="Digitar descrição"
            {...register("bio")}
            disabled={loading}
          />
          {errors && <InputError error={errors.name} />}
        </div>
        <div className="col-span-12">
          <p>Informações de endereço</p>
        </div>
        <div className="flex flex-col gap-1 col-span-12">
          <InputLabel text="CEP" />
          <Input
            type="text"
            placeholder="00000.000"
            {...register("address.zip")}
            disabled={loading}
          />
          {errors && <InputError error={errors.name} />}
        </div>
        <div className="flex flex-col gap-1 col-span-6">
          <InputLabel text="Estado" />
          <Input
            type="text"
            placeholder="Digitar estado"
            {...register("address.state")}
            disabled={loading}
          />
          {errors && <InputError error={errors.name} />}
        </div>
        <div className="flex flex-col gap-1 col-span-6">
          <InputLabel text="Cidade" />
          <Input
            type="text"
            placeholder="Digitar cidade"
            {...register("address.city")}
            disabled={loading}
          />
          {errors && <InputError error={errors.name} />}
        </div>
        <div className="flex flex-col gap-1 col-span-12">
          <InputLabel text="Rua" />
          <Input
            type="text"
            placeholder="Digitar rua"
            {...register("address.city")}
            disabled={loading}
          />
          {errors && <InputError error={errors.name} />}
        </div>
        <div className="flex flex-col gap-1 col-span-12">
          <InputLabel text="Número" />
          <Input
            type="text"
            placeholder="Digitar número"
            {...register("address.number")}
            disabled={loading}
          />
          {errors && <InputError error={errors.name} />}
        </div>
        <div className="flex flex-col gap-1 col-span-12">
          <InputLabel text="Complemento" />
          <Input
            type="text"
            placeholder="Ex: apart 307"
            {...register("address.complement")}
            disabled={loading}
          />
          {errors && <InputError error={errors.name} />}
        </div>
        <div className="col-span-12 flex flex-col gap-4 text-left pb-4">
          <span className="font-semibold">Tipo de conta</span>
          <div className="w-full flex gap-2">
            <input type="hidden" {...register("type")} disabled={loading} />
            <button
              onClick={(e) => setTypeBuyer(e)}
              className={
                type == "Comprador"
                  ? "w-1/2 h-12 p-2 rounded-md  font-semibold tracking-wider duration-300 ease-in-out bg-brand2 text-grey1"
                  : "w-1/2 h-12 p-2 rounded-md  font-semibold tracking-wider duration-300 ease-in-out text-grey9 border"
              }
            >
              Comprador
            </button>
            <button
              onClick={(e) => setTypeSeller(e)}
              className={
                type == "Anunciante"
                  ? "w-1/2 h-12 p-2 rounded-md  font-semibold tracking-wider duration-300 ease-in-out bg-brand2 text-grey1"
                  : "w-1/2 h-12 p-2 rounded-md  font-semibold tracking-wider duration-300 ease-in-out text-grey9 border"
              }
            >
              Anunciante
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-1 col-span-12">
          <InputLabel text="Senha" />
          <Input
            type="text"
            placeholder="Digitar senha"
            {...register("password")}
            disabled={loading}
          />
          {errors && <InputError error={errors.name} />}
        </div>
        <div className="flex flex-col gap-1 col-span-12">
          <InputLabel text="Confirmar Senha" />
          <Input
            type="text"
            placeholder="Digitar senha"
            {...register("confirm")}
            disabled={loading}
          />
          {errors && <InputError error={errors.name} />}
        </div>
        <div className="col-span-12 flex flex-col gap-6 pt-4 text-center">
          <ButtonDefault
            label="Finalizar cadastro"
            style="bg-brand1 h-12 p-2 rounded-md text-grey1 font-semibold tracking-wider hover:bg-brand2 duration-300 ease-in-out"
          />
        </div>
      </form>
    </div>
  );
};

import { FormEvent, useContext, useState } from "react";
import { ButtonDefault } from "../Buttons";
import { InputError } from "../Errors";
import { InputLabel } from "../Labels";
import { TRegisterFormValues, registerFormSchema } from "./registerFormSchema";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserContext } from "../../../Providers/userContext";
import { Modal } from "../../Modal";

export const FormRegister = () => {
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const { userRegister } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterFormValues>({
    resolver: zodResolver(registerFormSchema),
  });
  const [typeAccount, setTypeAccount] = useState<string>("Comprador");

  const setTypeSeller = (e: FormEvent) => {
    e.preventDefault();
    setTypeAccount("Anunciante");
  };
  const setTypeBuyer = (e: FormEvent) => {
    e.preventDefault();
    setTypeAccount("Comprador");
  };

  const submit: SubmitHandler<TRegisterFormValues> = (formData) => {
    userRegister(formData, setLoading, setModal);
  };

  return (
    <>
      <div className="w-11/12 max-w-[411px] m-auto py-12 px-11 bg-grey0 flex flex-col gap-8 rounded-md">
        <h2 className="text-2xl font-bold">Cadastro</h2>
        <span className="font-semibold">Informações pessoais</span>
        <form
          onSubmit={handleSubmit(submit)}
          className="grid grid-cols-12 gap-2"
        >
          <div className="flex flex-col gap-1 col-span-12">
            <InputLabel text="Nome" />
            <input
              className="p-2 h-12 rounded-md bg-transparent outline-none border-2 border-grey4 text-gray-900  focus:border-brand1"
              type="text"
              placeholder="Ex: Samuel Leão"
              {...register("name")}
              disabled={loading}
            />
            {errors && <InputError error={errors.name} />}
          </div>
          <div className="flex flex-col gap-1 col-span-12">
            <InputLabel text="Email" />
            <input
              className="p-2 h-12 rounded-md bg-transparent outline-none border-2 border-grey4 text-gray-900  focus:border-brand1"
              type="text"
              placeholder="Ex: samuel@kenzie.com.br"
              {...register("email")}
              disabled={loading}
            />
            {errors && <InputError error={errors.email} />}
          </div>
          <div className="flex flex-col gap-1 col-span-12">
            <InputLabel text="CPF" />
            <input
              className="p-2 h-12 rounded-md bg-transparent outline-none border-2 border-grey4 text-gray-900  focus:border-brand1"
              type="text"
              placeholder="000.000.000-00"
              {...register("document")}
              disabled={loading}
            />
            {errors && <InputError error={errors.document} />}
          </div>
          <div className="flex flex-col gap-1 col-span-12">
            <InputLabel text="Celular" />
            <input
              className="p-2 h-12 rounded-md bg-transparent outline-none border-2 border-grey4 text-gray-900  focus:border-brand1"
              type="text"
              placeholder="(00) 90000-0000"
              {...register("mobile")}
              disabled={loading}
            />
            {errors && <InputError error={errors.mobile} />}
          </div>
          <div className="flex flex-col gap-1 col-span-12">
            <InputLabel text="Data de nascimento" />
            <input
              className="p-2 h-12 rounded-md bg-transparent outline-none border-2 border-grey4 text-gray-900  focus:border-brand1"
              type="date"
              placeholder="00/00/00"
              {...register("birthdate")}
              disabled={loading}
            />
            {errors && <InputError error={errors.birthdate} />}
          </div>
          <div className="flex flex-col gap-1 col-span-12">
            <InputLabel text="Descrição" />
            <input
              className="p-2 h-12 rounded-md bg-transparent outline-none border-2 border-grey4 text-gray-900  focus:border-brand1"
              type="text"
              placeholder="Digitar descrição"
              {...register("bio")}
              disabled={loading}
            />
            {errors && <InputError error={errors.bio} />}
          </div>
          <div className="col-span-12">
            <p>Informações de endereço</p>
          </div>
          <div className="flex flex-col gap-1 col-span-12">
            <InputLabel text="CEP" />
            <input
              className="p-2 h-12 rounded-md bg-transparent outline-none border-2 border-grey4 text-gray-900  focus:border-brand1"
              type="text"
              placeholder="00000.000"
              {...register("address.zip")}
              disabled={loading}
            />
            {errors && <InputError error={errors.address?.zip} />}
          </div>
          <div className="flex flex-col gap-1 col-span-6">
            <InputLabel text="Estado" />
            <input
              className="p-2 h-12 rounded-md bg-transparent outline-none border-2 border-grey4 text-gray-900  focus:border-brand1"
              type="text"
              placeholder="Digitar estado"
              {...register("address.state")}
              disabled={loading}
            />
            {errors && <InputError error={errors.address?.state} />}
          </div>
          <div className="flex flex-col gap-1 col-span-6">
            <InputLabel text="Cidade" />
            <input
              className="p-2 h-12 rounded-md bg-transparent outline-none border-2 border-grey4 text-gray-900  focus:border-brand1"
              type="text"
              placeholder="Digitar cidade"
              {...register("address.city")}
              disabled={loading}
            />
            {errors && <InputError error={errors.address?.city} />}
          </div>
          <div className="flex flex-col gap-1 col-span-12">
            <InputLabel text="Rua" />
            <input
              className="p-2 h-12 rounded-md bg-transparent outline-none border-2 border-grey4 text-gray-900  focus:border-brand1"
              type="text"
              placeholder="Digitar rua"
              {...register("address.street")}
              disabled={loading}
            />
            {errors && <InputError error={errors.address?.street} />}
          </div>
          <div className="flex flex-col gap-1 col-span-12">
            <InputLabel text="Número" />
            <input
              className="p-2 h-12 rounded-md bg-transparent outline-none border-2 border-grey4 text-gray-900  focus:border-brand1"
              type="text"
              placeholder="Digitar número"
              {...register("address.number")}
              disabled={loading}
            />
            {errors && <InputError error={errors.address?.number} />}
          </div>
          <div className="flex flex-col gap-1 col-span-12">
            <InputLabel text="Complemento" />
            <input
              className="p-2 h-12 rounded-md bg-transparent outline-none border-2 border-grey4 text-gray-900  focus:border-brand1"
              type="text"
              placeholder="Ex: apart 307"
              {...register("address.complement")}
              disabled={loading}
            />
            {errors && <InputError error={errors.address?.complement} />}
          </div>
          <div className="col-span-12 flex flex-col gap-4 text-left pb-4">
            <span className="font-semibold">Tipo de conta</span>
            <div className="w-full flex gap-2">
              <input type="hidden" disabled={loading} />
              <button
                onClick={(e) => setTypeBuyer(e)}
                className={
                  typeAccount == "Comprador"
                    ? "w-1/2 h-12 p-2 rounded-md  font-semibold tracking-wider duration-300 ease-in-out bg-brand2 text-grey1"
                    : "w-1/2 h-12 p-2 rounded-md  font-semibold tracking-wider duration-300 ease-in-out text-grey9 border"
                }
              >
                Comprador
              </button>
              <button
                onClick={(e) => setTypeSeller(e)}
                className={
                  typeAccount == "Anunciante"
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
            <input
              className="p-2 h-12 rounded-md bg-transparent outline-none border-2 border-grey4 text-gray-900  focus:border-brand1"
              type="password"
              placeholder="Digitar senha"
              {...register("password")}
              disabled={loading}
            />
            {errors && <InputError error={errors.password} />}
          </div>
          <div className="flex flex-col gap-1 col-span-12">
            <InputLabel text="Confirmar Senha" />
            <input
              className="p-2 h-12 rounded-md bg-transparent outline-none border-2 border-grey4 text-gray-900  focus:border-brand1"
              type="password"
              placeholder="Digitar senha"
              {...register("confirm")}
              disabled={loading}
            />
            {errors && <InputError error={errors.confirm} />}
          </div>
          <div className="col-span-12 flex flex-col gap-6 pt-4 text-center">
            <ButtonDefault
              label="Finalizar cadastro"
              style="bg-brand1 h-12 p-2 rounded-md text-grey1 font-semibold tracking-wider hover:bg-brand2 duration-300 ease-in-out"
            />
          </div>
        </form>
      </div>
      {modal && <Modal setModal={setModal} />}
    </>
  );
};

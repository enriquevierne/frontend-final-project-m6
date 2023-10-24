import { ButtonDefault } from "../Buttons";
import { InputError } from "../Errors";
import { Input } from "../Inputs";
import { InputLabel } from "../Labels";

export const FormLogin = () => {
  return (
    <div className="w-11/12 max-w-[412px] m-auto py-12 px-11 bg-grey0 flex flex-col gap-8 rounded-md">
      <h2 className="text-2xl font-bold">Login</h2>
      <form className="grid grid-cols-12 gap-2">
        <div className="flex flex-col gap-1 col-span-12">
          <InputLabel text="Nome" />
          <Input type="text" placeholder="Ex: Samuel Leão" />
          <InputError error="é obrigatório" />
        </div>
        <div className="flex flex-col gap-1 col-span-12">
          <InputLabel text="Email" />
          <Input type="text" placeholder="Ex: samuel@kenzie.com.br" />
          <InputError error="é obrigatório" />
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

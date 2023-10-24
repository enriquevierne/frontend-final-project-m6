import { InputError } from "../Errors"
import { Input } from "../Inputs"
import { InputLabel } from "../Labels"

export const FormRegister = () => {
    return(
        <form className="w-11/12 max-w-[411px] m-auto py-12 px-11 grid grid-cols-12 gap-2" action="">
            <div className="flex flex-col gap-1 col-span-12">
                <InputLabel text='Nome' />
                <Input type='text' placeholder='Ex: Samuel Leão'/>
                <InputError error='é obrigatório'/>
            </div>
            <div className="flex flex-col gap-1 col-span-12">
                <InputLabel text='Email' />
                <Input type='text' placeholder='Ex: samuel@kenzie.com.br' />
                <InputError error='é obrigatório'/>
            </div>
            <div className="flex flex-col gap-1 col-span-12">
                <InputLabel text='CPF' />
                <Input type='text' placeholder='000.000.000-00' />
                <InputError error='é obrigatório'/>
            </div>
            <div className="flex flex-col gap-1 col-span-12">
                <InputLabel text='Celular' />
                <Input type='text' placeholder='(00) 90000-0000' />
                <InputError error='é obrigatório'/>
            </div>
            <div className="flex flex-col gap-1 col-span-12">
                <InputLabel text='Data de nascimento' />
                <Input type='date' placeholder='00/00/00' />
                <InputError error='é obrigatório'/>
            </div>
            <div className="flex flex-col gap-1 col-span-12">
                <InputLabel text='Descrição' />
                <Input type='text' placeholder='Digitar descrição' />
                <InputError error='é obrigatório'/>
            </div>
            <div className="col-span-12">
                <p>Informações de endereço</p>
            </div>
            <div className="flex flex-col gap-1 col-span-12">
                <InputLabel text='CEP' />
                <Input type='text' placeholder='Digitar descrição' />
                <InputError error='é obrigatório'/>
            </div>
            <div className="flex flex-col gap-1 col-span-6">
                <InputLabel text='Estado' />
                <Input type='text' placeholder='Digitar descrição' />
                <InputError error='é obrigatório'/>
            </div>
            <div className="flex flex-col gap-1 col-span-6">
                <InputLabel text='Cidade' />
                <Input type='text' placeholder='Digitar descrição' />
                <InputError error='é obrigatório'/>
            </div>
            <div className="flex flex-col gap-1 col-span-12">
                <InputLabel text='Rua' />
                <Input type='text' placeholder='Digitar descrição' />
                <InputError error='é obrigatório'/>
            </div>
            <div className="flex flex-col gap-1 col-span-12">
                <InputLabel text='Número' />
                <Input type='text' placeholder='Digitar descrição' />
                <InputError error='é obrigatório'/>
            </div>
            <div className="flex flex-col gap-1 col-span-12">
                <InputLabel text='Complemento' />
                <Input type='text' placeholder='Digitar descrição' />
                <InputError error='é obrigatório'/>
            </div>
        </form>
    )
}
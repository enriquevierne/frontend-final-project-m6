import { FieldError } from "react-hook-form";

interface InputLabelProps {
    error?: FieldError;
}

export const InputError = ({error}:InputLabelProps) => {
    return <span className="text-right text-sm text-alert1 font-medium pr-2">{error?.message}</span>
}
interface InputLabelProps {
    error: string;
}

export const InputError = ({error}:InputLabelProps) => {
    return <span className="text-right text-sm text-alert1 font-medium">{error}</span>
}
interface InputLabelProps {
    error: string;
}

export const InputError = ({error}:InputLabelProps) => {
    return <span>{error}</span>
}
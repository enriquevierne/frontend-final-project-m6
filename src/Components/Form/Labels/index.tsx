interface InputLabelProps {
    text: string;
}

export const InputLabel = ({text}:InputLabelProps) => {
    return <label htmlFor="">{text}</label>
}
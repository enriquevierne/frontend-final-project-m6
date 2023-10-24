interface InputLabelProps {
    text: string;
}

export const InputLabel = ({text}:InputLabelProps) => {
    return <label className="font-semibold tracking-wide" htmlFor="">{text}</label>
}
import { ForwardedRef, InputHTMLAttributes } from "react";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
}

export const Input = (
  { type, placeholder, ...rest }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  return (
    <input
      ref={ref}
      {...rest}
      className="p-2 h-12 rounded-md bg-transparent outline-none border-2 border-grey4 text-gray-900  focus:border-brand1"
      type={type}
      placeholder={placeholder}
    />
  );
};

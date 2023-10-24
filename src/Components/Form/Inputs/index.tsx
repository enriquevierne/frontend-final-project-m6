interface InputProps {
  type: string;
  placeholder: string;
}

export const Input = ({ type, placeholder }: InputProps) => {
  return (
    <input
      className="p-2 h-12 rounded-md bg-transparent outline-none border-2 border-grey4 text-gray-900  focus:border-brand1"
      type={type}
      placeholder={placeholder}
    />
  );
};

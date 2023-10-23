interface InputProps {
  type: string;
  placeholder: string;
}

export const Input = ({ type, placeholder }: InputProps) => {
  return (
    <input
      className="p-2 h-8 rounded-md bg-transparent outline-none border text-gray-800"
      type={type}
      placeholder={placeholder}
    />
  );
};

interface ButtonDefaultProps {
  label: string;
  style: string;
}

export const ButtonDefault = ({ label, style }: ButtonDefaultProps) => {
  return (
    <button
      className={style}
    >
      {label}
    </button>
  );
};

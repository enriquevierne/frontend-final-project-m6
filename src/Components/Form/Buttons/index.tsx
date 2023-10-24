interface ButtonDefaultProps {
  label: string;
  style: string;
}

export const ButtonDefault = ({ label, style }: ButtonDefaultProps) => {
  return (
    <button
      type="submit"
      className={style}
    >
      {label}
    </button>
  );
};

type ButtonProps = {
  children: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
export default function Button({ children, className, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className={`box-border border-2 bg-blue-800 px-4 py-2 text-white transition
    hover:border-blue-800 hover:bg-white  hover:text-blue-800
    ${className}`}>
      {children}
    </button>
  );
}

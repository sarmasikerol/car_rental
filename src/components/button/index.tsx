interface Props {
  title: string;
  type?: "submit" | "button";
  desings?: string;
  disabled?: boolean;
  icon?: string;
  handleClick?: () => void;
}

const Button = ({
  title,
  type,
  desings,
  disabled,
  icon,
  handleClick,
}: Props) => {
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`custom-btn bg-primary-blue rounded-full hover:bg-blue-800 transition ${desings} `}
      type={type}
    >
      <span className="flex-1"> {title}</span>

      {icon && <img src={icon} className="size-6" />}
    </button>
  );
};

export default Button;

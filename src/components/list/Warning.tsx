type Props = {
  children: String;
};

const Warning = ({ children }: Props) => {
  return <p className="home__error-container">{children}</p>;
};

export default Warning;

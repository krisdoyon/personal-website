import styles from "./Button.module.scss";
import { Link } from "react-router-dom";

const Button = ({
  Tag = "button",
  color,
  children,
  className,
  to,
  ...props
}) => {
  if (to) Tag = Link;
  return (
    <Tag
      {...props}
      to={to}
      className={`${styles.btn} ${color ? styles[`btn-${color}`] : ""} ${
        className ? className : ""
      }`}
    >
      {children}
    </Tag>
  );
};

export default Button;

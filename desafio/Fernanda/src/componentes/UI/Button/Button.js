import "./button.css";
const Button = ({
  children,
  className,
  component: Component,
  theme,
  ...resProps
}) => {
  return (
    <Component
      className={`ui-button ui-button--${theme} ${className}`}
      {...resProps}
    >
      {children}
    </Component>
  );
};

Button.defaultProps = {
  component: "button",
  className: "",
  theme: "bordered-orange",
};

export default Button;

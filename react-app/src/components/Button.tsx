import { ReactNode } from "react";

// the color prop is optional, and limited to only these options
interface Props {
  children: string;
  color?: "primary" | "secondary" | "warning";
  onClick: () => void;
}

// A button that has a default color
const Button = ({ children, color = "primary", onClick }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

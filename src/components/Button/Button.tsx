import React from "react";
import { ButtonComponent } from "./ButtonStyled";

interface buttonTypes {
  title: string;
  bgColor: string;
  action: () => void;
}

const Button: React.FC<buttonTypes> = ({ title, bgColor, action }) => {
  return (
    <ButtonComponent onClick={action} $bgColor={bgColor}>
      {title}
    </ButtonComponent>
  );
};

export default Button;

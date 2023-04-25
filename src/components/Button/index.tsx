import { isDisabled } from "@testing-library/user-event/dist/utils";
import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick, isValid }: IButtonProps) => {
  return <ButtonContainer {...isValid?isDisabled:null } onClick={onClick}>{title}</ButtonContainer>;
};

export default Button;

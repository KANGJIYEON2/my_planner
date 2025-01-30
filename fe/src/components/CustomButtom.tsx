import { ReactNode } from "react";
import styled from "styled-components";
import { theme } from "../assets/styles/theme";

export type ButtonProps = {
  children: ReactNode;
  className?: string;
  width?: string;
  height?: string;
  buttonColor?: string;
  borderColor?: string;
  fontColor?: string;
  fontSize?: string;
};

const CustomButtom = ({ className, children, ...rest }: ButtonProps) => {
  return (
    <ButtonStyled className={className} {...rest}>
      {children}
    </ButtonStyled>
  );
};
const ButtonStyled = styled.button<ButtonProps>`
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  padding: 10px;
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
  background-color: ${(props) =>
    props.buttonColor === "active" ? theme.color.main : theme.color.second};
  border: 1px solid ${(props) => props.borderColor};
  color: ${(props) => (props.fontColor ? props.fontColor : "black")};
  font-size: ${(props) => props.fontSize};
  &:hover {
    background-color: white;
    transition: 0.5s ease-in;
    border: 1px solid gray;
    color: black;
  }
`;
export default CustomButtom;

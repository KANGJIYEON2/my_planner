import { styled } from "styled-components";

export type CustomIputType = {
  className?: string;
  width?: string;
  InPutPadding?: string;
  name?: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CustomInput = ({ className, name, type, ...rest }: CustomIputType) => {
  return (
    <InputWrapper className={className} {...rest}>
      <input type={type} id="input" required />
      <label htmlFor="input" className="placeholder">
        {name}
      </label>
    </InputWrapper>
  );
};
const InputWrapper = styled.div<CustomIputType>`
  color: ${(props) => props.theme.color.second};
  position: relative;
  display: flex;
  align-items: center;
  input {
    padding: ${(props) => (props.InPutPadding ? props.InPutPadding : "auto")};
    border: 1px solid ${(props) => props.theme.color.second};
    outline: none;
    border-radius: 10px;
    width: ${(props) => (props.width ? props.width : "auto")};
  }
  .placeholder {
    position: absolute;
    background-color: white;
    color: gray;
    left: 20px;
    padding: 0 4px;
    transition: all 0.2s ease-in;
  }
  input:is(:focus, :valid) {
    border: 1px solid ${(props) => props.theme.color.main};
  }
  input:is(:focus, :valid) + .placeholder {
    transform: translatey(calc(-20px));
    font-size: 10px;
    color: ${(props) => props.theme.color.main};
  }
`;

export default CustomInput;

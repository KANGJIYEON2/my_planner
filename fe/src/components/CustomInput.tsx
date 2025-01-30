import { styled } from 'styled-components';

export type CustomIputType = {
    name: string;
    type: string;
};

const CustomInput = ({ name, type }: CustomIputType) => {
    return (
        <InputWrapper>
            <input type={type} id="input" required />
            <label htmlFor="input" className="placeholder">
                {name}
            </label>
        </InputWrapper>
    );
};
const InputWrapper = styled.div`
    padding: 12px;
    color: ${(props) => props.theme.color.second};
    position: relative;
    display: flex;
    align-items: center;
    input {
        padding: 10px;
        border: 2px solid ${(props) => props.theme.color.second};
        outline: none;
        border-radius: 10px;
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
        border: 2px solid ${(props) => props.theme.color.main};
    }
    input:is(:focus, :valid) + .placeholder {
        transform: translatey(calc(-20px));
        font-size: 10px;
        color: ${(props) => props.theme.color.main};
    }
`;

export default CustomInput;

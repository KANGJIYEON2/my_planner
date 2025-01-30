import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../assets/styles/theme';

export type CustomBtnType = {
    width?: string;
    height?: string;
    buttonColor?: string;
    hasBorder?: boolean;
    borderColor?: string;
    borderRadius?: string;
    fontColor?: string;
    fontSize?: string;
};

export type ButtonProps = {
    children: ReactNode;
    className?: string;
};

const CustomButtom: React.FC<ButtonProps> = ({
    className,
    children,
    ...rest
}) => {
    return (
        <ButtonStyled className={className} {...rest}>
            {children}
        </ButtonStyled>
    );
};
const ButtonStyled = styled.button<CustomBtnType>`
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    ${({
        width = 'auto',
        height = 'auto',
        buttonColor = 'white',
        hasBorder = false,
        borderColor = 'white',
        borderRadius = '4px',
        fontColor = 'black',
        fontSize = '14px',
    }) => css`
        width: ${width};
        height: ${height};
        background-color: ${theme[buttonColor]};
        border: ${hasBorder ? `1px solid ${theme[borderColor]}` : 'none'};
        border-radius: ${borderRadius};
        color: ${theme[fontColor]};
        font-size: ${fontSize};
    `}
`;
export default CustomButtom;

import React from 'react';
import { ButtonProps } from './button.props';
import styled from 'styled-components';

export const Button = (props: ButtonProps) => {
    const {
        text,
        onClick
    } = props;

    return (
        <StyledButton onClick={() => onClick()}>
            {text}
        </StyledButton>
    )
}

const StyledButton = styled.button`
    width: 20rem;
`;
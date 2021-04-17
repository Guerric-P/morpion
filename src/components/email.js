import { useState } from 'react';
import styled from 'styled-components';

const Div = styled.div`
    font-weight: bold;
    color: ${({ divColor }) => divColor};
    text-decoration: ${({ textDecoration }) => textDecoration};
`;

export default function Email() {
    const [color, changeColor] = useState();

    return (
        <>
            <Div divColor={color} textDecoration="underline">Email</Div>
            {['red', 'palevioletred', 'blue', 'yellow'].map(x => <button onClick={() => changeColor(x)}>{x}</button>)}
        </>
    )
}
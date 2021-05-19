import { useState } from 'react';
import styled from 'styled-components';

const Div = styled.div<{ divColor: string, textDecoration: string }>`
    font-weight: bold;
    color: ${({ divColor }: any) => divColor};
    text-decoration: ${({ textDecoration }: any) => textDecoration};
`;

export default function Email() {
    const [color, changeColor] = useState<string>('');

    return (
        <>
            <Div divColor={color} textDecoration="underline">Email</Div>
            {['red', 'palevioletred', 'blue', 'yellow'].map(x => <button onClick={() => changeColor(x)}>{x}</button>)}
        </>
    )
}
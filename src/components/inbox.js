import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import styled from 'styled-components';

const Div = styled.div`
    color: palevioletred;
`;

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export function Inbox() {
    const [data, setData] = useState([]);
    const [accesRestreint, setAccesRestreint] = useState(false);
    const query = useQuery();

    useEffect(() => fetch('https://www.data.gouv.fr/fr/datasets/r/f76f80da-ebd0-4c9a-95aa-18ff622f2450').then(setData), []);

    return <>
        <Link to="?acces-restreint=true">Accès restreint</Link>
        <Link to="?acces-restreint=false">Accès non restreint</Link>
        {data.map(x => <Div key={x.id}>{x.adresse}</Div>)}
    </>
}
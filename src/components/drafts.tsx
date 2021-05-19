import { useState, useEffect } from 'react';
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

export default function () {
    const [data, setData] = useState<any[]>([]);
    const query = useQuery();
    const accesRestreint = query.get('acces-restreint') === 'true' ? true : query.get('acces-restreint') === 'false' ? false : undefined;

    useEffect(() => {
        const fetchData = () => fetch('https://www.data.gouv.fr/fr/datasets/r/f76f80da-ebd0-4c9a-95aa-18ff622f2450').then(x => x.json()).then(setData);
        fetchData();
    }, []);

    const filterLink = (query: URLSearchParams) => (param: string) => (value: string) => {
        const clone = new URLSearchParams(query.toString());
        clone.set(param, value);
        return `?${clone.toString()}`;
    }

    return <>
        <Link to={filterLink(query)('acces-restreint')('false')}>Accès restreint</Link>
        <Link to={filterLink(query)('acces-restreint')('true')}>Accès non restreint</Link>
        {data?.filter(x => x.acces_restreint === accesRestreint).map(x => <Div key={x.id}>{x.adresse}</Div>)}
    </>
}
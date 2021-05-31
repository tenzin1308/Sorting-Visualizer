import React from 'react';
import styled from 'styled-components';

export default function Main({data}) {
    return (
        <Container>
            {data.map(size => (
                <Bar height={`${size}px`} />
            ))}
        </Container>
    );
}

const Bar = styled.div`
    width: 5px;
    height: ${(props) => props.height};
    background-color: ${(props) => props.color || '#04A9E0'};
    margin-right: 2px;
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    padding-left: 25px;
    padding-right: 25px;

`;
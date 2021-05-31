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
    width: 3%;
    height: ${(props) => props.height};
    background-color: ${(props) => props.color || '#000'};
    margin-right: 2px;
`;

const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    border: 1px solid red;
    padding-left: 25px;
    padding-right: 25px;

`;
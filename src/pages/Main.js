import React from 'react';
import styled from 'styled-components';

import { Button } from '../components/header.style';

export default function Main({ currentIndex, nextIndex, data }) {
    const width = 300 / data.length;
    return (
        <Container>
            <BlocksContainer>
                {data.map((size, i) => (
                    <Bar
                        height={`${size}px`}
                        width={`${width}px`}
                        key={i}
                        active={currentIndex === i}
                        style={nextIndex >= i ? {backgroundColor: 'green'} : null}
                    >
                        {data.length < 10 && <Button disable>{size}</Button>}
                    </Bar>
                ))}
                
            </BlocksContainer>
            <Step>
                <Button disable>Made by Tenzin Tashi</Button>
            </Step>
        </Container>
    );  
}

const Bar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background-color: ${(props) => props.active ? "#B50002" : '#04A9E0'};
    margin-right: 2px;
    ${ props => props.style };
`;

const BlocksContainer = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
`;

const Container = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
`;

const Step = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color: #5C736C;
    border: 1px solid white;

`;
import React from 'react'
import { Button,  Container, SortWrapper } from './header.style';

export default function Header() {
    return (
        <Container>
            <Button onClick={() => console.log("Clicked")}>
                Generate New Array
            </Button>
            <Button onClick={() => console.log("Clicked")}>
                Select your range
            </Button>
            <SortWrapper>
                <Button onClick={() => console.log("Clicked")}>
                    Merge
                </Button>
                <Button onClick={() => console.log("Clicked")}>
                    Quick
                </Button>
                <Button onClick={() => console.log("Clicked")}>
                    Heap
                </Button>
                <Button onClick={() => console.log("Clicked")}>
                    Bubble
                </Button>
            </SortWrapper>
        </Container>
    )
}
 
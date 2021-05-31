import React, { useEffect, useState }  from 'react'

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Slider from '@material-ui/core/Slider';

import { Button, Wrapper, SortWrapper, RangeWrapper } from './header.style';




export default function Header() {

    const [size, setSize] = useState(5);
    const [arr, setArr] = useState([]);

    useEffect(() => {
        updateList();
    }, [size])

    const updateList = () => {
        console.log("updating list");
        const randomArr = Array.from({ length: size }, () => Math.floor(Math.random() * 100));
        console.log("App -> size", size);
        console.log("updaateList -> randomArr", randomArr);
        setArr(randomArr);
    }
  
    const rangeChange = (event, range) => {
        setSize(range);
    };

    const muiTheme = createMuiTheme({
        overrides:{
            MuiSlider: {
            thumb:{
                color: "yellow",
            },
            track: {
                color: 'red',
                height: 4,
            },
            rail: {
                color: 'white',
                height: 4,
            }
            }
        }
    });

    return (
        <Wrapper>
            <Button onClick={() => console.log("Clicked")}>
                Generate New Array
            </Button>
            
            <RangeWrapper>
                <Button style={{
                    paddingRight: '50px',
                    whiteSpace: 'nowrap',
                    margin: '0px',
                }}>Change Array Size</Button>
                <ThemeProvider theme={muiTheme}>
                    <Slider
                        size={typeof size === "number" ? setSize : 0}
                        onChange={rangeChange}
                        min={5}
                        max={1000}
                        aria-labelledby="discrete-slider-always" />
                </ThemeProvider>
            </RangeWrapper>
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
        </Wrapper>
    )
}

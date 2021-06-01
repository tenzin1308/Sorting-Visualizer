import React, { useEffect, useState }  from 'react'

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Slider from '@material-ui/core/Slider';

import { Button, Wrapper, SortWrapper, RangeWrapper } from './header.style';




export default function Header({rangeChange, updateList}) {

    

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
            <Button onClick={updateList}>
                Generate New Array
            </Button>
            
            <RangeWrapper>
                <Button disable style={{
                    paddingRight: '50px',
                    whiteSpace: 'nowrap',
                    margin: '0px',
                }}>Change Array Size</Button>
                <ThemeProvider theme={muiTheme}>
                    <Slider
                        onChange={rangeChange}
                        min={5}
                        max={100}
                        aria-labelledby="discrete-slider-always" />
                </ThemeProvider>
            </RangeWrapper>
            <SortWrapper>
                <Button disable>
                    Sorting:
                </Button>
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

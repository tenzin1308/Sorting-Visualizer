import React, { useState }  from 'react'

import { useModal } from 'react-modal-hook';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';

import { Button, Wrapper, SortWrapper, RangeWrapper } from './header.style';
import RangeModel from './RangeModel';



export default function Header() {

    const [value, setValue] = useState(5);

    const [showModal, hideModal] = useModal(() => (
        <RangeModel hideModal={hideModal} />
    ));

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
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
            {/* <Button onClick={showModal}>
                Select your range
            </Button> */}

            <RangeWrapper>
                
                <ThemeProvider theme={muiTheme}>
                    <Slider
                        value={typeof value === "number" ? value : 0}
                        onChange={handleSliderChange}
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
 
import styled from 'styled-components';

export const Button = styled.p`
    color: #F2DB66;
    cursor: pointer;
    font-size: 15px;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    line-height: 30px;
    &:hover{
        color: #F2CA80;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-contain: center;
    justify-content: space-evenly;
    height:50px;
    width:100%;
    background-color: #5C736C;
    padding-left: 25px;
    padding-right: 25px; 
`;

export const SortWrapper = styled.div`
    display: flex;
    width: 300px;
    flex-direction: row;
    align-contain: center;
    justify-content: space-evenly;
    
`;

export const RangeWrapper = styled.div`
    display: flex;
    width: 350px;
    align-contain: center;
    justify-content: space-evenly;
    padding-top: 15px;
`;
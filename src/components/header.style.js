import styled from 'styled-components';

export const Button = styled.p`
    color: #F2DB66;
    cursor: ${(props) => (props.disable ? "default" : "pointer")};
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 30px;
    margin-bottom: 10px; 

    &:hover{
        color: ${(props) => (props.disable ? "" : "#F2CA80")};
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-contain: center;
    justify-content: space-evenly;
    width:100%;
    min-height: 77px;
    background-color: #5C736C;
    padding-left: 25px;
    padding-right: 25px; 
`;

export const SortWrapper = styled.div`
    display: flex;
    width: 500px;
    flex-direction: row;
    align-contain: center;
    justify-content: space-evenly;
    
`;

export const RangeWrapper = styled.div`
    display: flex;
    width: 400px;
    align-contain: center;
    justify-content: space-evenly;
    padding-top: 15px;
`;
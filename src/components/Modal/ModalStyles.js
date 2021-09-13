import styled from 'styled-components/macro';

export const Container = styled.div`
    z-index: 99;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    padding-bottom: 200px;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    width: 500px;
    height: 300px;
    background-color: #f7feff;
    border-radius: 5px;
    display: flex;
    flex-direction: column;

`;
export const Header = styled.div`
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.h3`
    margin-left: 10px;
    font-size: 24px;
    font-weight: 500;
`;

export const Close = styled.img`
    width: 24px;
    height: 24px;
`;

export const Body = styled.div`
    padding: 10px;
    border-top: 10px solid #eee;
    border-bottom: 10px solid #eee;
`;


export const Button = styled.button`
    padding: 10px 20px;
    cursor: pointer;
`;

export const Footer = styled.div`
    display: flex;
    align-items: center;
    jusitfy-content: center;
    padding: 10px;
    margin-top: auto;
`;

export const Pane = styled.div`
    display: flex;
    margin: 20px 0px;
`;

export const Label = styled.label`

`;

export const Input = styled.input`
    padding: 5px;
    border: solid 1px;
    border-radius: 5px;
    margin-left: 15px;
`;

export const Select = styled.select`
    width: 400px;
    margin-left: 25px;
    padding: 5px;
    cursor: pointer;
`;

export const Option = styled.option`
padding: 5px;
`;

export const ErrorText = styled.p`
    color: #bf1650;
    &::before{
        display: inline;
        content: "⚠ ";
    }
`;

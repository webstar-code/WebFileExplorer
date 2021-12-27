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
    height: 280px;
    background-color: #EEF2E2;
    border-radius: 5px;
    display: flex;
    flex-direction: column;


    form {
        height: 100%;
        display: flex;
        flex-direction: column;
    }
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    background: #247291;
    height: 40px;
    padding-left: 10px;
`;

export const Title = styled.h3`
    margin-left: 5px;
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    color: #FFFFFF;
`;


export const Close = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FF3434;
    margin-left: auto;
    width: 40px;
    height: 100%;
    &: hover {
        background: #FF0000;
    }
`;

export const Icon = styled.img`
    width: 16px;
    height: 16px;
`;

export const Body = styled.div`
    padding: 0px 25px;
    padding-top: 30px;
`;

export const Pane = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 0px;
`;

export const Label = styled.label`
    font-size: 16px;
    line-height: 16px;
    color: #000000;
    width: 80px;
`;

export const Input = styled.input`
    width: 250px;
    height: 25px;
    background: #F5F9EE;
    border: 1px solid #000000;
    box-sizing: border-box;
    padding: 5px;
    margin-left: 15px;
`;

export const Select = styled.select`
    width: 250px;
    height: 25px;
    background: #F5F9EE;
    border: 1px solid #000000;
    box-sizing: border-box;
    margin-left: 15px;
    padding: 5px;
    cursor: pointer;
`;

export const Option = styled.option`
    padding: 5px;
`;

export const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    padding: 20px 25px;
    margin-top: auto;
`;


export const Button = styled.button`
    width: 100px;
    height: 30px;
    background: #247291;
    border-radius: 2px;
    margin-left: 20px;
    cursor: pointer;

    p {
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #FFFFFF;
    }
`;

export const CancelButton = styled(Button)`
    background: #E2ECF0;
    border: 1px solid #000000;

    p {
        color: #000000;
    }
`;

export const ErrorText = styled.p`
    color: #bf1650;
    &::before{
        display: inline;
        content: "⚠ ";
    }
`;
